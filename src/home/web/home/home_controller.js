(function () {
    'use strict';
    function HomeController($mdSidenav, $scope, WsClient, MethodsService) {
        var self = this;
        self.error = '';
        self.selectedMethod = {method: null};
        self.executionResults = MethodsService.executionList;
        self.showClassName = {visible: true, txt: 'Show Class'};
        //self.activeCavitiesList = MethodsService.cavities;
        self.executing = false;
        self.collapseMethods = true;


        self.toggleClassName = function () {
            self.showClassName.visible = !self.showClassName.visible;
            if (self.showClassName.visible) {
                self.showClassName.txt = 'Hide Class';
            } else {
                self.showClassName.txt = 'Show Class';
            }
        };

        self.loadMethods = function () {
            //MethodsService.loadMethods();
            //self.methods = MethodsService.methods;
            return;

        };

        self.selectMethod = function (method) {
            console.log('HomeConroller select method:' + method.name);
            self.selectedMethod.method = method;
        };

        self.checkParam = function (param) {
            return null;
        };

        self.driverData = {};

        self.callback = function (data) {
            self.driverData = data;
            $scope.$apply();
        };

        WsClient.addCallback(self.callback);

        self.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        };

        self.cleanHistory = function () {
            MethodsService.delExecutionList();
        };

        self.getCavitiesList = function () {
            var method = {
                params: [],
                name: "tf_list_cavities"
            };
            var req = MethodsService.exec(method);
            console.log('Try to fetch cavities list...');
            req.success(function (data) {
                console.log(data);
                self.activeCavitiesList = data.result.sort();
            }).error(function (err) {
                self.warning = {
                    error: err
                }
            })
        };

        self.execute = function (executionInfo) {
            console.log('Executing From Home');
            MethodsService.execute(executionInfo);
        };
        self.isExecuting = function () {
            return MethodsService.executing;
        };

        self.collapseToggle = function () {
            if(self.collapseMethods == true){
                self.collapseMethods = false;
            } else {
                self.collapseMethods = true;
            }
        };

        self.init = function () {
            console.log('init');
        };
        self.init();
    }

    angular.module('ate.tfe')
        .controller('HomeController',
        ['$mdSidenav', '$scope', 'WsClient', 'MethodsService', HomeController]);

}());