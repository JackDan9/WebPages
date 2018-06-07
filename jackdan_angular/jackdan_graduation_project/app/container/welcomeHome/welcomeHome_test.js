'use strict';

describe('myApp.welcomeHome module', function () {
   beforeEach(module('myApp.welcomeHome'));

   describe('welcomeHome controller', function () {
       it('should ....', inject(function($controller) {
           //spec body
           var welcomeHomeCtrl = $controller('WelcomeHomeCtrl');
           expect(welcomeHomeCtrl).toBeDefined();
       }));
   });
});

// [$injector:modulerr] Failed to instantiate module myApp due to: