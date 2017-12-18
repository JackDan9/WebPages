const DEVELOPMENT = 0;
const DEV_API = 'http://192.168.112.23:8003/api/';
const SER_API = 'http://zhxy.dianguanbao.com/api/';
module.exports = {
    target: DEVELOPMENT ? DEV_API : SER_API,
    baseUrl: 'http://img9.leejiaju.com/',
    defaultPic: DEVELOPMENT ? '/dist/logo.png' : 'app/home/dist/logo.png'
}