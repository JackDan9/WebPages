function add(arg1: number, arg2: number): number {
    return arg1 + arg2;
}

// var result = add('1', '2');


function add1(arg1: any, arg2: any): any {
    return arg1 + arg2;
    // '1' + 1
    // return 2 (x)
    // '11'
}

/**
 * any add1这个函数可以接收任何参数(任何类型的参数), 传入的第一个参数是一个string, 传的第二个参数是一个number, 这个时候我们返回的是什么?
 * 
 * 
 * 泛型的作用来了
 * 返回的类型和传入的类型保持一致
 * 
 * 
 * 针对于数据类型来做一下操作的。
 * 
 */


function add2<T>(arg1: T): T {
    return arg1;
}






var test2 = add2<string>("aaa");
var test3 = add2<number>(1);
var test4 = add2<object>({a: 1});

