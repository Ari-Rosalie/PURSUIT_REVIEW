
# Introductory Command Line

. GUI vs. CLI
GUI (Graphical User Interface): Uses graphics, keyboard, and mouse for interaction.
CLI (Command Line Interface): Uses text-based commands; more efficient once learned.
2. Terminal Basics
Working Directory: Current folder in terminal (pwd shows location).
Command Syntax: commandName -flags parameters
Example: $ ls -l Documents (lists contents in long format).
3. Filesystem Structure (Mac)
Root Directory (/) → Contains system folders like Applications, Users, and Library.
Home Directory (~) → User-specific folder inside /Users/your_username.
4. Absolute vs. Relative Paths
Absolute Path: Full path from the root (/). Always the same, like a GPS address.
Example: /Users/your_username/Documents
Relative Path: Path relative to the current location. Like step-by-step directions.
Example: cd Documents (moves inside Documents if you're in /Users/your_username).
Special Symbols:
. → Current directory (cd . is the same as cd).
.. → Parent directory (cd .. moves up one level).
5. Navigation Commands
pwd → Prints current directory.
ls → Lists files in a directory.
cd <directory> → Changes directory.
cd /absolute/path → Moves to an exact location.
cd ~/folder → Uses ~ as shorthand for the home directory.
6. File & Directory Management
touch <filename> → Creates a new file.
mkdir <foldername> → Creates a new folder.
mkdir -p <nested/folders> → Creates multiple nested directories.
7. Flags & Modifiers
ls -l → Detailed list format.
ls -a → Shows hidden files.
ls -lap → Combines multiple flags (-p shows directories with /).
8. Opening Files & Folders
code <filename> → Opens file in VSCode.
code . → Opens current directory in VSCode.
open . → Opens current directory in Finder.
open <file> → Opens file in its default application.

Commands

mkdir: Make directory.
mkdir new_folder creates a new directory named "new_folder".
rmdir: Remove directory.
rmdir new_folder removes the directory named "new_folder". Note: the directory must be empty for this command to work.
cp: Copy files and directories.
cp file1.txt file2.txt creates a copy of "file1.txt" and names it "file2.txt".
mv: Move or rename files and directories.
mv oldname.txt newname.txt renames the file "oldname.txt" to "newname.txt".
find: Find files and directories.
find . -name file.txt searches the current directory (.) and all its sub-directories for a file named "file.txt".
grep: Search within files.
grep 'word' file.txt searches for the word 'word' within the file "file.txt".
echo: Output.
echo Hello, world! displays the text 'Hello, world!' on the terminal.
history: Command history.
history displays a list of all the commands that you've entered into the terminal.
chmod: Change mode.
chmod 755 file.txt changes the permissions of "file.txt" to 755, which means the owner can read, write, and execute the file, and others can read and execute it.
chown: Change owner.
chown username file.txt changes the owner of "file.txt" to the user 'username



Open Terminal on your Mac.
Type compgen -c and press Enter.



Lesson link
Intro Command Line
[https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/intro-to-command-line/readme.md]