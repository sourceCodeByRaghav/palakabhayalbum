import os
import subprocess

def extract_last_segment(input_file, output_file, duration_minutes=37):
    """
    Extracts the last segment of a video file.
    
    Args:
        input_file: Path to the input video file
        output_file: Path for the output video file
        duration_minutes: Duration of the segment to extract (in minutes)
    """
    
    # Get video duration in seconds
    result = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", input_file
    ], capture_output=True, text=True)
    
    try:
        total_duration = float(result.stdout.strip())
    except (ValueError, AttributeError):
        print("Error: Could not determine video duration")
        return False
    
    duration_seconds = duration_minutes * 60
    start_time = max(0, total_duration - duration_seconds)
    
    print(f"Extracting last {duration_minutes} minutes (from {start_time/60:.2f} min to end)")
    
    command = [
        "ffmpeg", "-y",
        "-ss", str(start_time),
        "-i", input_file,
        "-t", str(duration_seconds),
        "-c", "copy",  # Stream copy for no re-encoding
        "-avoid_negative_ts", "make_zero",
        output_file
    ]
    
    try:
        subprocess.run(command, check=True, stderr=subprocess.PIPE, stdout=subprocess.PIPE)
        print(f"Successfully created: {output_file}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error extracting segment: {e.stderr.decode('utf-8')}")
        return False

# Example usage
input_video = "4 Kirtan & Bangle HD.mpg"  # Change to your video file
output_video = "Bangal Ceremony.mpg"  # Output file name

success = extract_last_segment(input_video, output_video, 37)
if not success:
    print("Failed to extract the last segment")