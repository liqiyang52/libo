/**
*  new Array(),创建数组的长度
* .fill,填充数组的方法,将数据填充到其中,分别以不同的数据类型进行填充
**/
// const getArray = (value: any, times: number = 5): any[] => {
//     return new Array(times).fill(value);
//   };
  
// getArray([1], 2).forEach(item => {
//     console.log(item.length);
//   });
  /**
  *每个item都是一个数组
  **/
//   getArray(2, 3).forEach(item => {
//     /**item是一个数字**/
//     console.log(item.length); // Error, item不存在length这个数据
//   });

  const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value);
  };

  getArray<number[]>([1, 2], 3).forEach(item => {
    console.log(item.length);
  });
  getArray<number>(2, 3).forEach(item => {
    console.log(item.length); // 类型“number”上不存在属性“length”
  });

  getArray(2, 3).forEach(item => {
    console.log(item.length); // 类型“number”上不存在属性“length”
  });

//   泛型变量
const getLength = <T>(param: T): number => {
    return param.length; // error 类型“T”上不存在属性“length”
  };

  const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
    return new Array(times).fill([param1, param2]);
  };
  getArray(1, "a", 3).forEach(item => {
    console.log(item[0].length); // error 类型“number”上不存在属性“length”
    console.log(item[1].toFixed(2)); // error 属性“toFixed”在类型“string”上不存在
  });

  // ex1: 简单定义
const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
    return new Array(times).fill(arg);
  };

  // ex2: 使用类型别名
  type GetArray = <T>(arg: T, times: number) => T[];
  const getArray: GetArray = <T>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg);
  };

  interface GetArray<T> {
    (arg: T, times: number): T[];
    tag: T;
  }
  const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
    // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
    // 属性“tag”的类型不兼容。
    return new Array(times).fill(arg);
  };
  getArray.tag = "a"; // 不能将类型“"a"”分配给类型“number”
  getArray("a", 1); // 不能将类型“"a"”分配给类型“number”
  interface ValueWithLength {
    length: number;
  }
  const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'
  const getProps = (object, propName) => {
    return object[propName];
  };
  const obj = { a: "aa", b: "bb" };
  getProps(obj, "c"); // undefined

  const getProp = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName];
  };
  const obj = { a: "aa", b: "bb" };
  getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数