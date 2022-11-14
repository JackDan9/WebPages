function testEmail(emailAddress) {
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    console.log(reg.test(emailAddress));
}


testEmail('13027710816@163.com');
testEmail('12121211212');
testEmail('12121@1212121');