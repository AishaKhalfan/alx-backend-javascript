/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\nvar student1 = {\n    firstName: 'Aisha',\n    lastName: 'Kay',\n    age: 42,\n    location: 'Kisumu',\n};\nvar student2 = {\n    firstName: 'Atesh',\n    lastName: 'Achar',\n    age: 50,\n    location: 'Istanbul',\n};\nvar studentsList = [student1, student2];\nvar table = document.createElement(\"table\");\n// Create table header row\nvar headerRow = document.createElement(\"tr\");\nvar firstNameHeader = document.createElement(\"th\");\nfirstNameHeader.textContent = \"First Name\";\nheaderRow.appendChild(firstNameHeader);\nvar locationHeader = document.createElement(\"th\");\nlocationHeader.textContent = \"Location\";\nheaderRow.appendChild(locationHeader);\ntable.appendChild(headerRow);\n// Iterate through the students array and create rows\nstudentsList.forEach(function (student) {\n    var row = document.createElement(\"tr\");\n    var firstNameCell = document.createElement(\"td\");\n    firstNameCell.textContent = student.firstName;\n    row.appendChild(firstNameCell);\n    var locationCell = document.createElement(\"td\");\n    locationCell.textContent = student.location;\n    row.appendChild(locationCell);\n    table.appendChild(row);\n});\n// Append the table to the document body or any desired element\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://js/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;