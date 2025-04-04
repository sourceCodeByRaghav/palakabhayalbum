import os
import subprocess

def get_video_duration(input_file):
    """Get video duration in seconds"""
    result = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", input_file
    ], capture_output=True, text=True)
    
    try:
        return float(result.stdout.strip())
    except (ValueError, AttributeError):
        print("Error: Could not determine video duration")
        return None

def remove_last_segment(input_file, output_file, remove_minutes=37):
    """
    Creates a new video file with the last segment removed.
    
    Args:
        input_file: Path to the input video file
        output_file: Path for the output video file
        remove_minutes: Duration to remove from the end (in minutes)
    """
    
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found.")
        return False
    
    total_duration = get_video_duration(input_file)
    if total_duration is None:
        return False
    
    remove_seconds = remove_minutes * 60
    
    if total_duration <= remove_seconds:
        print("Warning: Video is shorter than specified removal duration. Output will be empty.")
        end_time = 0
    else:
        end_time = total_duration - remove_seconds
    
    print(f"Creating new file without last {remove_minutes} minutes (keeping first {end_time/60:.2f} minutes)")
    
    try:
        # Using stream copy for efficiency
        subprocess.run([
            "ffmpeg", "-y",
            "-i", input_file,
            "-t", str(end_time),  # Duration to keep
            "-c", "copy",  # Stream copy for no re-encoding
            "-avoid_negative_ts", "make_zero",
            output_file
        ], check=True, stderr=subprocess.PIPE, stdout=subprocess.PIPE)
        
        print(f"Successfully created: {output_file}")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"Error creating trimmed file: {e.stderr.decode('utf-8')}")
        return False

# Example usage
if __name__ == "__main__":
    input_video = "4 Kirtan & Bangle HD.mpg"
    output_video = "Kirtan.mpg"  # New file without last 37 minutes
    
    print(f"Processing: {input_video}")
    success = remove_last_segment(input_video, output_video, 37)
    
    if not success:
        print("Failed to remove the last segment")
        exit(1)