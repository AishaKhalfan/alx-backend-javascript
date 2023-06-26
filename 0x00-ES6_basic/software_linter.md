# Software Linter

## Definition

A software linter also known as a “linter” is a tool used to identify and report potential issues (syntax errors, undeclared variables, etc.) in a program. It can even report convention or style inconsistencies. It does so by highlighting them so that the programmer is aware, so changes can be made. There are a wide variety of linters as well as lint rules for specific programming languages and even for software frameworks.

There are typically two ways to lint code:

	- Actively
	- Passively

## Active
Active checking is typically achieved by running a monitor tool that is constantly checking the file that your working on in order to spot inconsistencies and possible errors (e.g., having a specific linter along with some lint rules installed as a plug-in in your Code Editor).

## Passive
Passive checking is done by taking a piece of code, and manually running it through a tool to identify potential issues. For example, copying and pasting your code into a specific linter tool, or running the linter against a specific file using the command line. This tool can be installed locally or be available as a service (e.g., website on the Internet).

### Examples
Screenshot of an active linter **pycodestyle** (Python) integrated into Visual Studio Code

Screenshot of an active linter ESLint (JavaScript) integrated into Visual Studio Code

Screenshot of a passive online linter service JSON Formatter to validate a JSON data structure

Fun fact: The term “lint” was derived from the name of the tiny bits of fiber and fluff shed by clothing.

References

- [lint (software) - Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
- [ESLint - Pluggable JavaScript linter](https://eslint.org/)
- [pycodestyle - documentation](https://pycodestyle.pycqa.org/en/latest/)
