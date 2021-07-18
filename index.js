var { parse } = require('@babel/parser');
var { default: generate } = require('@babel/generator');
var code = `const name = "jyy";`; // 原始代码
var ast = parse(code);  // 源代码生成的ast
var targetCode = generate(ast); // 将ast转成目标代码
console.log(targetCode);    //{ code: 'const name = "jyy";', map: null, rawMappings: undefined }