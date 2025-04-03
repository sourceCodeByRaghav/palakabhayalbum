import os
from pathlib import Path
from PIL import Image
import argparse

def convert_jpg_to_png_inplace(delete_original=False, quality=85):
    """
    Convert all JPG files in current directory to PNG
    """
    converted = 0
    skipped = 0
    errors = 0

    current_dir = Path.cwd()
    print(f"Processing files in: {current_dir}")

    for jpg_file in current_dir.glob('*.JPG'):
        try:
            png_file = jpg_file.with_suffix('.png')
            
            if png_file.exists():
                print(f"Skipped: {jpg_file.name} → {png_file.name} (exists)")
                skipped += 1
                continue

            with Image.open(jpg_file) as img:
                img.save(png_file, 'PNG', optimize=True, compress_level=quality)
                print(f"Converted: {jpg_file.name} → {png_file.name}")
                converted += 1

            if delete_original:
                jpg_file.unlink()
                print(f"Deleted original: {jpg_file.name}")

        except Exception as e:
            print(f"Error converting {jpg_file.name}: {str(e)}")
            errors += 1

    print("\nConversion Report:")
    print(f"Success: {converted}")
    print(f"Skipped: {skipped}")
    print(f"Errors: {errors}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description='Convert JPG to PNG in current directory',
        formatter_class=argparse.ArgumentDefaultsHelpFormatter
    )
    parser.add_argument('-d', '--delete', action='store_true',
                      help='Delete original JPG files after conversion')
    parser.add_argument('-q', '--quality', type=int, default=85,
                      help='PNG compression level (0-100)', metavar='QUALITY')
    
    args = parser.parse_args()

    # Verify Pillow installation
    try:
        from PIL import Image  # noqa: F401
    except ImportError:
        print("Error: Required Pillow library missing. Install with:")
        print("pip install pillow")
        exit(1)

    convert_jpg_to_png_inplace(
        delete_original=args.delete,
        quality=args.quality
    )