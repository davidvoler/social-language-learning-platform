(function () {
    /**
     * AuthService handles user permissions
     *
     * @param $http
     * @returns {AuthService}
     * @constructor
     * @param $location
     */
    function AuthService($http, $location, $cookies) {

        /**
         * logout a user and
         */
        var service = {
            userType: ''
        };
        service.tstPerms = ['home', 'monitor'];
        service.oprPerms = ['home', 'monitor', 'profile', 'group'];

        service.hasPermission = function (action) {
            if ($cookies.tfe_user == 'dev') {
                return true;
            }
            else if ($cookies.tfe_user == 'tst') {
                if (service.tstPerms.indexOf(action) >= 0) {
                    return true;
                } else {
                    return false
                }
            }
            else if ($cookies.tfe_user == 'opr') {
                if (service.oprPerms.indexOf(action) >= 0) {
                    return true;
                } else {
                    return false
                }
            }
            else {
                return false
            }
        };

        service.setUserType = function (userType) {
            service.userType = userType;

        };
        service.login = function (username, password) {
            var data = {username: username, password: password};
            return $http.post('/api/accounts', data);
        };

        service.getUsername = function () {
            return $cookies.tfe_user;
        };

        service.logout = function () {
            var data = {};
            $http.put('/api/accounts', data).success(function (data, status, headers, config) {
                console.log(data);
                if (data.status == 0) {
                    service.permissions = [];
                    $location.path('/login');
                } else {
                    console.log(data)
                }

            }).error(function (data, status, headers, config) {
                console.log(data)
            });
        };
        return service;
    }

    angular.module('ate.tfe')
        .service('AuthService', ['$http', '$location', '$cookies', AuthService])
}());