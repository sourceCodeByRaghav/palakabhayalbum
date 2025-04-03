import os
import argparse
import logging

def convert_jpg_case_windows(directory, dry_run=False):
    """
    Windows-specific JPG case converter that forces extension lowercase
    """
    converted = 0
    logger = logging.getLogger('JPG Converter')
    logging.basicConfig(level=logging.INFO, format='%(message)s')

    for filename in os.listdir(directory):
        if filename.upper().endswith(('.JPG', '.JPEG')):
            base, ext = os.path.splitext(filename)
            if ext != ext.lower():
                new_name = f"{base}{ext.lower()}"
                old_path = os.path.join(directory, filename)
                new_path = os.path.join(directory, new_name)
                
                try:
                    if not dry_run:
                        os.rename(old_path, new_path)
                        logger.info(f"Case changed: {filename} → {new_name}")
                        converted += 1
                    else:
                        logger.info(f"[Dry Run] Would change: {filename} → {new_name}")
                except Exception as e:
                    logger.error(f"Error: {str(e)}")

    logger.info(f"\nTotal files converted: {converted}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Force .JPG extensions to lowercase on Windows")
    parser.add_argument("dir", nargs="?", default=os.getcwd(), help="Target directory")
    parser.add_argument("--dry-run", action="store_true", help="Preview changes")
    args = parser.parse_args()
    
    convert_jpg_case_windows(args.dir, args.dry_run)