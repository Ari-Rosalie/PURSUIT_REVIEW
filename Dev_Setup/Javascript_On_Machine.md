# Running JavaScript on Your Machine
Most developers write JavaScript in local text editors like VSCode instead of online IDEs. To run JavaScript locally, you need Node.js, which allows execution outside the browser.

What is Node.js?
JavaScript needs an interpreter to execute. Initially, it only worked in browsers, but Node.js, released in 2009, lets it run on your machine for various applications.

Installing Node.js
Check if it's installed with:


node -v
Ensure the version is v16.0.0 or higher. If missing, refer to the installation guide.

Running JavaScript Files
Create a file:

touch example.js
Open in VSCode:

code example.js
Write JavaScript inside:

console.log('🌌 Space. The final frontier.');
Run with Node.js:

node example.js
Only console.log() statements produce visible output.
Command Line Arguments
Node.js provides process.argv to access command-line arguments.
Example:


console.log(process.argv);
Run:


node example.js Hello
Output:


['/path/to/node', '/path/to/example.js', 'Hello']
Note: All arguments are treated as strings, including numbers.

The Node.js REPL (Interactive Shell)
Start the REPL by typing:


node
Example interaction:


> console.log("👀 JavaScript in the terminal!?");
👀 JavaScript in the terminal!?
undefined
Supports multi-line statements:


> if (emoji === "⭐️") {
... console.log("You're a star!");
... }
Exit the REPL:

Ctrl + D
Ctrl + C twice
Type .exit


lesson link 
[https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/javascript-on-your-machine/readme.md]