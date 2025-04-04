import os
import argparse
import send2trash  # Safer alternative to permanent deletion

def remove_jpg_files(dry_run=False, use_trash=True):
    """
    Remove JPG files from current directory
    :param dry_run: Preview files without deleting
    :param use_trash: Send to recycle bin instead of permanent deletion
    """
    deleted_count = 0
    error_count = 0
    target_files = []

    # Find all JPG files (case-insensitive)
    for filename in os.listdir():
        if filename.lower().endswith('.jpg'):
            target_files.append(filename)

    if not target_files:
        print("No JPG files found in current directory")
        return

    print("Files to be removed:")
    for f in target_files:
        print(f" - {f}")

    if dry_run:
        print(f"\nDry run: Would remove {len(target_files)} files")
        return

    confirm = input(f"\nDelete {len(target_files)} files? (y/n): ").lower()
    if confirm != 'y':
        print("Deletion cancelled")
        return

    for filename in target_files:
        try:
            if use_trash:
                send2trash.send2trash(filename)
            else:
                os.remove(filename)
            deleted_count += 1
            print(f"Removed: {filename}")
        except Exception as e:
            error_count += 1
            print(f"Error removing {filename}: {str(e)}")

    print("\nRemoval Summary:")
    print(f"Successfully removed: {deleted_count}")
    print(f"Errors: {error_count}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Remove JPG files safely')
    parser.add_argument('--dry-run', action='store_true',
                      help='Preview files without deleting')
    parser.add_argument('--permanent', action='store_true',
                      help='Permanently delete (bypass recycle bin)')
    
    args = parser.parse_args()

    # Install required package if missing
    try:
        import send2trash
    except ImportError:
        print("Installing required dependency...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "send2trash"])
        import send2trash

    remove_jpg_files(
        dry_run=args.dry_run,
        use_trash=not args.permanent
    )