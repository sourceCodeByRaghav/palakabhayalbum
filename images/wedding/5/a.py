import os
import sys
from PIL import Image
from io import BytesIO

def is_mpo_file(image_path):
    """Detect MPO files by checking for multiple frames"""
    try:
        with Image.open(image_path) as img:
            try:
                img.seek(1)
                return True
            except EOFError:
                return False
    except:
        return False

def convert_mpo_to_jpeg(image_path):
    """Convert MPO file to standard JPEG, overwriting original"""
    try:
        with Image.open(image_path) as img:
            img.seek(0)  # Get first frame
            buffer = BytesIO()
            img.save(buffer, format="JPEG", quality=95)
            
            # Overwrite original file with converted content
            with open(image_path, "wb") as f:
                f.write(buffer.getbuffer())
            
            print(f"Converted MPO to JPEG: {image_path}")
            return True
    except Exception as e:
        print(f"Error converting {image_path}: {e}")
        return False

def reduce_image_size(image_path, max_size=10*1024*1024):
    """Main processing function"""
    # First convert MPO files to JPEG
    if is_mpo_file(image_path):
        if not convert_mpo_to_jpeg(image_path):
            return False

    try:
        with Image.open(image_path) as img:
            # Verify format after conversion
            if img.format not in ['JPEG', 'PNG']:
                print(f"Unsupported format {img.format} for {image_path}")
                return False

            original_size = os.path.getsize(image_path)
            if original_size <= max_size:
                print(f"Skipping {image_path} (already under 10MB)")
                return True

            # Optimization loop for JPEG
            if img.format == 'JPEG':
                quality = 95
                while quality >= 10:
                    buffer = BytesIO()
                    img.save(buffer, format="JPEG", quality=quality, optimize=True)
                    if buffer.tell() <= max_size:
                        with open(image_path, "wb") as f:
                            f.write(buffer.getvalue())
                        print(f"Optimized {image_path} (quality: {quality})")
                        return True
                    quality -= 5

            # Resizing logic for remaining cases
            scale = 0.9
            for _ in range(5):
                new_width = int(img.width * scale)
                new_height = int(img.height * scale)
                resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                
                buffer = BytesIO()
                save_args = {'format': img.format}
                if img.format == 'JPEG':
                    save_args['quality'] = 85
                
                resized_img.save(buffer, **save_args)
                if buffer.tell() <= max_size:
                    with open(image_path, "wb") as f:
                        f.write(buffer.getvalue())
                    print(f"Resized {image_path} to {new_width}x{new_height}")
                    return True
                scale -= 0.1

            print(f"Failed to reduce {image_path} below 10MB")
            return False
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return False

def main():
    if len(sys.argv) < 2:
        files = [f for f in os.listdir() if f.lower().endswith('.jpg')]
    else:
        files = sys.argv[1:]

    for file in files:
        if os.path.exists(file):
            reduce_image_size(file)
        else:
            print(f"File not found: {file}")

if __name__ == "__main__":
    main()