// import { Parser } from '../node_modules/acorn/dist/acorn';
const acorn = require('acorn');
console.log(acorn.parse("1 + 1", {ecmaVersion: 2020}));
