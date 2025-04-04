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

def split_video_into_halves(input_file, output_prefix="output"):
    """
    Splits a video file into two equal halves.
    
    Args:
        input_file: Path to the input video file
        output_prefix: Prefix for output files (will append _part1 and _part2)
    """
    
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found.")
        return False
    
    total_duration = get_video_duration(input_file)
    if total_duration is None:
        return False
    
    # Calculate split point
    split_point = total_duration / 2
    base_name, ext = os.path.splitext(input_file)
    
    # Output filenames
    output_part1 = f"{output_prefix}_part1{ext}"
    output_part2 = f"{output_prefix}_part2{ext}"
    
    print(f"Splitting video at {split_point/60:.2f} minutes (total duration: {total_duration/60:.2f} minutes)")
    
    try:
        # First half
        subprocess.run([
            "ffmpeg", "-y",
            "-i", input_file,
            "-t", str(split_point),
            "-c", "copy",  # Stream copy for no re-encoding
            "-avoid_negative_ts", "make_zero",
            output_part1
        ], check=True)
        
        # Second half
        subprocess.run([
            "ffmpeg", "-y",
            "-i", input_file,
            "-ss", str(split_point),
            "-c", "copy",
            "-avoid_negative_ts", "make_zero",
            output_part2
        ], check=True)
        
        print(f"Successfully created:\n- {output_part1}\n- {output_part2}")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"Error splitting video: {e}")
        return False

# Example usage
if __name__ == "__main__":
    input_video = "9 Saint Girl HD.mpg"  # Change to your video file
    output_prefix = "saint_girl"    # Output files will be split_video_part1.mp4 and split_video_part2.mp4
    
    print(f"Processing: {input_video}")
    success = split_video_into_halves(input_video, output_prefix)
    
    if not success:
        print("Failed to split video")
        exit(1)