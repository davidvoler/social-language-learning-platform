(function () {
    /**
     * Login Controller using the following services:

     * @param $mdSidenav
     * @param AuthService
     */
    function MenuController($mdSidenav, AuthService) {
        var self = this;

        self.username = AuthService.getUsername();

        self.openLeftMenu = function () {
            $mdSidenav('methods')
                .toggle()
                .then(function () {
                });
        };

        self.logout = function () {
            return AuthService.logout();
        };
        self.hasPermission = function (action) {
            return AuthService.hasPermission(action);
        };
    }

    angular.module('sllp')
        .controller('MenuController', ['$mdSidenav', 'AuthService',
            MenuController]);
}());