import d from './first.js';
d();

import {createRequire} from 'module';
const require = createRequire(import.meta.url);

const a = require("path");
console.log(a.basename("D:/NODE JS"));
