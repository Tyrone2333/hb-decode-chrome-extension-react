import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

// 内容脚本是在网页上下文中运行的文件。 能够读取 DOM 对其进行更改，并将信息传递给其父扩展。
// document.querySelector('body').style.background = '#ffd7d7'
// console.log()
