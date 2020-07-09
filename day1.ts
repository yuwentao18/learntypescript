// 原始数据类型 JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。

// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
let myName: string = 'ywt'; //字符串
let myAge: number = 25;
let isDone: boolean = false;
let sentence: string = `Hello, my name is ${myName}.I'll be ${myAge + 1} years old next month.`;
// 空值
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
  alert('My name is Tom');
}
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let u: undefined = undefined;
let n: null = null;