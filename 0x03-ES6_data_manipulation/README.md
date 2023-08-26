# ES6 Data Manipulation

This project contains tasks for learning to manipulate data in ECMAScript 2015 (ES6).
![img]()

# Resources
**Read or watch:**

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

# Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions must be exported

# Setup
**Install NodeJS 12.11.x**
(in your home directory):
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
**Install Jest, Babel, and ESLint**
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration files
Add the following files to your project directory

**package.json**
<details>
<summary>Click to show/hide file contents</summary>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

</details>

**babel.config.js**
<details>
<summary>Click to show/hide file contents</summary>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

</details>

**.eslintrc.js**

<details>
<summary>Click to show/hide file contents</summary>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

</details>

**and…**
Don’t forget to run ``$ npm install`` when you have the package.json

## Tasks To Complete

+ [x] 0. **Basic list of objects**<br/>[0-get_list_students.js](0-get_list_students.js) 
- Create a function named `getListStudents` with the following requirements:
  + Returns an array of objects.
  + Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).
  + The array contains the following students in the order they're listed:
    + `Guillaume`, id: `1`, in `San Francisco`.
    + `James`, id: `2`, in `Columbia`.
    + `Serena`, id: `5`, in `San Francisco`.
```bash
khalfan@aisha:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
khalfan@aisha:~$ 
```

+ [x] 1. **More mapping**<br/>[1-get_list_student_ids.js](1-get_list_student_ids.js)
- contains a script that exports a function named `getListStudentIds` with the following requirements:
  + Returns an array of ids from a list of object.
  + This function is taking one argument which is an array of objects - and this array is in the same format as the return value of `getListStudents` from the previous task.
  + If the argument is not an array, the function returns an empty array.
  + You must use the map function on the array.
```bash
khalfan@aisha:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
khalfan@aisha:~$ 
```

+ [x] 2. **Filter**<br/>[2-get_students_by_loc.js](2-get_students_by_loc.js)
- contains a script that exports a function named `getStudentsByLocation` with the following requirements:
  + Returns an array of objects who are located in a specific city.
  + It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.
  + You must use the `filter` function on the array.
```bash
khalfan@aisha:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
khalfan@aisha:~$ 
```

+ [x] 3. **Reduce**<br/>[3-get_ids_sum.js](3-get_ids_sum.js)
- contains a script that exports a function named `getStudentIdsSum` with the following requirements:
  + Returns the sum of all the student ids.
  + It should accept a list of students (from `getListStudents`) as a parameter.
  + You must use the `reduce` function on the array.
```bash
khalfan@aisha:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 3-main.js 
8
khalfan@aisha:~$ 
```

+ [x] 4. **Combine**<br/>[4-update_grade_by_city.js](4-update_grade_by_city.js) contains a script that exports a function named `updateStudentGradeByCity` with the following requirements:
  + Returns an array of students for a specific city with their new grade.
  + It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of “grade” objects) as parameters.
  + `newGrades` is an array of objects with this format:
    ```js
    {
      studentId: Number,
      grade: Number,
    }
    ```
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined.
```bash
khalfan@aisha:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
khalfan@aisha:~$ 
```

+ [x] 5. **Typed Arrays**<br/>[5-typed_arrays.js](5-typed_arrays.js) contains a script that exports a function named `createInt8TypedArray` with the following requirements:
  + Returns a new `ArrayBuffer` with an `Int8` value at a specific position.
  + It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).
  + If adding the value is not possible the error `Position outside range` should be thrown.
```bash
khalfan@aisha:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
khalfan@aisha:~$ 
```

+ [x] 6. **Set data structure**<br/>[6-set.js](6-set.js)
  + Create a function named setFromArray that returns a Set from an array.

  + It accepts an argument (Array, of any kind of element).
```bash
khalfan@aisha:~$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 6-main.js 
Set { 12, 32, 15, 78, 98 }
khalfan@aisha:~$ 
```

+ [x] 7. **More set data structure**<br/>[7-has_array_values.js](7-has_array_values.js) contains a script that exports a function named `hasValuesFromArray` with the following requirements:
  + Returns a boolean if all the elements in the array exist within the set.
  + It accepts two arguments: a `set` (Set) and an `array` (Array).
```bash
khalfan@aisha:~$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 7-main.js 
true
false
false
khalfan@aisha:~$ 
```

+ [x] 8. **Clean set**<br/>[8-clean_set.js](8-clean_set.js) contains a script that exports a function named `cleanSet` with the following requirements:
  + Returns a string of all the set values that start with a specific string (`startString`).
  + It accepts two arguments: a `set` (Set) and a `startString` (String).
  + When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by `-`.
```bash
khalfan@aisha:~$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 8-main.js 
jovi-aparte-appetit

khalfan@aisha:~$ 
```

+ [x] 9. **Map data structure**<br/>[9-groceries_list.js](9-groceries_list.js) contains a script that exports a function named `groceriesList` with the following requirements:
  + Returns a map of groceries with the following items (name, quantity):
    ```cs
    "Apples", 10
    "Tomatoes", 10
    "Pasta", 1
    "Rice", 1
    "Banana", 5
    ```
Result:
```bash
khalfan@aisha:~$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
khalfan@aisha:~$ 
```
+ [x] 10. **More map data structure**<br/>[10-update_uniq_items.js](10-update_uniq_items.js) contains a script that exports a function named `updateUniqueItems` with the following requirements:
  + Returns an updated map for all items with initial quantity at 1.
  + It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.
  + For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.
```bash
khalfan@aisha:~$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 10-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
khalfan@aisha:~$ 
```

+ [x] 11. **Weak link data structure**<br/>[100-weak.js](100-weak.js) contains a script that meets the following requirements:
  + Export a `const` instance of `WeakMap` and name it `weakMap`.
  + Export a new function named `queryAPI`. It should accept an endpoint argument like so:
    ```js
    {
      protocol: 'http',
      name: 'getUsers',
    }
    ```
  + Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.
  + When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.

```bash
khalfan@aisha:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

khalfan@aisha:~$ 
khalfan@aisha:~$ npm run dev 100-main.js 
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
khalfan@aisha:~$ 
```
