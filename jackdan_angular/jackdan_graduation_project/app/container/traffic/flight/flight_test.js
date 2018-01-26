'use strict';
describe('myApp.flight module', function () {
    beforeEach(module('myApp.flight'));

    describe('flight controller', function () {

        it('should ...', inject(function ($controller)  {
            var flightCtrl = $controller('FlightCtrl');
            expect(flightCtrl).toBeDefined();
        }));
    });
});