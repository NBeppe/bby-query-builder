'use strict';

describe('bby-query-mixer.smartLists module', function () {

    beforeEach(module('bby-query-mixer.smartLists', 'appConfig'));

    describe('smartLists controller', function () {
        var ctrl, scope, ga;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('SmartListsCtrl', {
                $scope: scope
            });
            ga = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            }));

        describe('build remix query function', function () {
            it('should add the appropriate endpoint', function (){
                scope.endpoint.selected = 'activeAdventurer';
                expect(scope.buildSmartListsQuery()).toEqual('http://api.bestbuy.com/beta/products/activeAdventurer&callback=JSON_CALLBACK');
                scope.endpoint.selected = 'connectedHome';
                expect(scope.buildSmartListsQuery()).toEqual('http://api.bestbuy.com/beta/products/connectedHome&callback=JSON_CALLBACK');            
            });
        });

    });
});