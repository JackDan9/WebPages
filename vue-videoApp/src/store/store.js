export default {
    AUTH_UID: 'authuid',
    INDEX_SAVE: 'index',
    USERNAME: 'username',
    COMPANYID: 'companyid',
    POINT: 'point',
    INTOPAGE: 'intopage',
    getAuthUid: function () {
        return localStorage.getItem(this.AUTH_UID) || "" || 'UjAECwFXAlJWB1oGDwwHXVRXBV8EUQFXBAdQWgwDWQsCVQ'
    },
    setAuthUid: function (authuid) {
        localStorage.getItem(this.AUTH_UID, authuid)
    },
    getIndex: function () {
        return JSON.parse(localStorage.getItem(this.INDEX_SAVE))
    },
    setIndex: function ( data ) {
        let str = data;
        if( typeof data === 'object') {
            str = JSON.stringify(data)
        }
        return localStorage.setItem(this.INDEX_SAVE, str)
    },
    getPOINT:function () {
        try {
            return JSON.parse(localStorage.getItem(this.POINT))
        } catch(e) {
            console.log(e.toLocaleString())
        }
    },
    setPOINT: function (point) {
        let str = point;
        if (typeof point === 'object') {
            str = JSON.stringify(point);
        }
        return localStorage.setItem(this.POINT, point)
    },
    getUserName: function () {
        return localStorage.getItem(this.USERNAME) || ""
    },
    setUserName: function (username) {
        localStorage.setItem(this.USERNAME, username)
    },
    getCompanyId: function () {
        return localStorage.getItem(this.COMPANYID) || ""
    },
    setCompanyId: function (companyid) {
        localStorage.setItem(this.COMPANYID, companyid)
    },
    getIntoPage: function () {
        return localStorage.getItem(this.INTOPAGE)
    },
    setInfoPage: function (infopage) {
        localStorage.setItem(this.INTOPAGE, infopage)
    }
}