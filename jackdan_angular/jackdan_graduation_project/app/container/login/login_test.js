/**
 * login_test
 * */
'use strict';

describe('myApp.login module', function () {

    beforeEach(module('myApp.login'));

    describe('login controller', function () {
        it('login ....', inject(function ($controller) {
            // spec body
            var loginCtrl = $controller();
            expect(loginCtrl).toBeDefined();
        }))
    })
});