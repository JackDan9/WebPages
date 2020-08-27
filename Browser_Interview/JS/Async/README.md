# Async
``` javascript
const fn1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 3000);
    })
}

const fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456);
        }, 2000);
    })
}

const fn3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(789);
        }, 1000);
    })
}

const testAsync = async () => {
    const testTime = await fn1();
    console.log(testTime);
    const testTime1 = await fn2();
    console.log(testTime1);
    const testTime2 = await fn3();
    console.log(testTime2);
}

testAsync();
```