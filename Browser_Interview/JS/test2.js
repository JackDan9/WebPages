
/**
 * 假设是一个API请求，做超时处理
 * 超时的Promise
 * 
 * 前提是超时的Promise已经存在, getUser()
 */

// const timeoutPromise = new Promise((resolve, reject) => {

// })
// getUser().then(() => {
//     console.log('success');
// }).catch(() => {
//     let _err = new Error();

// })

const getUser = (account) => { 
    new Promise((resolve) => {
        resolve(account);
    })
}



// const handleTimeout = (getUser, timer) => {
//     let flagTimer = setTimeout(getUser('李四'), timer);

//     if(!flagTimer) {
//         console.log(new Error('Timeout'));
//     }
// }
