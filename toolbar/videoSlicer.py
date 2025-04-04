import os
import subprocess
import re

def get_video_size(file_path):
    """Returns the size of the video file in bytes."""
    return os.path.getsize(file_path)

def get_video_duration(input_file):
    """Try multiple methods to get video duration."""
    # Method 1: Try getting stream duration first
    result = subprocess.run([
        "ffprobe", "-v", "error", "-select_streams", "v:0",
        "-show_entries", "stream=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", input_file
    ], capture_output=True, text=True)
    
    if result.returncode == 0 and result.stdout.strip():
        try:
            return float(result.stdout.strip())
        except ValueError:
            pass
    
    # Method 2: Try format duration
    result = subprocess.run([
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", input_file
    ], capture_output=True, text=True)
    
    if result.returncode == 0 and result.stdout.strip():
        try:
            return float(result.stdout.strip())
        except ValueError:
            pass
    
    # Method 3: Try getting duration from ffmpeg output
    result = subprocess.run([
        "ffmpeg", "-i", input_file
    ], capture_output=True, text=True, stderr=subprocess.STDOUT)
    
    if result.returncode != 0:
        # Look for duration in stderr (ffmpeg outputs to stderr)
        duration_match = re.search(r"Duration: (\d{2}):(\d{2}):(\d{2})\.\d{2}", result.stderr)
        if duration_match:
            hours = int(duration_match.group(1))
            minutes = int(duration_match.group(2))
            seconds = int(duration_match.group(3))
            return hours * 3600 + minutes * 60 + seconds
    
    print("Could not determine video duration using any method.")
    print("FFprobe output:", result.stdout + result.stderr)
    return None

def split_video(input_file, chunk_size_gb=14):
    """Splits the video into chunks of specified size."""
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found.")
        return
    
    chunk_size_bytes = chunk_size_gb * (1024 ** 3)  # Convert GB to bytes
    total_size = get_video_size(input_file)
    
    if total_size <= chunk_size_bytes:
        print("File is already within the size limit.")
        return
    
    duration = get_video_duration(input_file)
    if duration is None:
        print("Failed to get video duration. Cannot split.")
        return
    
    print(f"Total duration: {duration:.2f} seconds")
    
    output_files = []
    num_chunks = -(-total_size // chunk_size_bytes)  # Ceiling division
    chunk_duration = duration / num_chunks
    
    print(f"Splitting into {num_chunks} chunks, approximately {chunk_duration:.2f} seconds each")
    
    start_time = 0.0
    for i in range(1, num_chunks + 1):
        output_file = f"file-{i}.mpg"  # Keep same format as input
        output_files.append(output_file)
        
        command = [
            "ffmpeg", "-y",
            "-ss", str(start_time),
            "-i", input_file,
            "-t", str(chunk_duration),
            "-c", "copy",
            "-avoid_negative_ts", "make_zero",
            output_file
        ]
        
        print(f"Creating chunk {i}/{num_chunks} (from {start_time:.2f}s to {start_time + chunk_duration:.2f}s)...")
        result = subprocess.run(command, capture_output=True, text=True)
        
        if result.returncode != 0:
            print(f"Error creating {output_file}:")
            print(result.stderr)
            return
        
        # Verify chunk creation
        if not os.path.exists(output_file) or os.path.getsize(output_file) == 0:
            print(f"Failed to create valid chunk: {output_file}")
            return
        
        start_time += chunk_duration
    
    print("Splitting completed successfully.")
    return output_files

# Example usage
input_video = "5 Dj Night Girl HD.mpg"
split_video(input_video)