'use strict';
/**
 * Created by davidl on 07/09/14.
 */
function getCookie(name) {
  var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
  return r ? r[1] : undefined;
}
angular.module('sllp.app')
  .controller('LoginController', ['$cookieStore', '$scope', '$rootScope', '$http', '$location',
    function ($cookieStore, $scope, $rootScope, $http, $location) {
      $scope.username = '';
      $scope.password = '';
      $scope.error = '';


      $scope.login = function () {
        var data = {username: $scope.username, password: $scope.password};
        $http.post('/api/login', data).success(function (data, status, headers, config) {
          // this callback will be called asynchronously
          console.log(data);
          if (data.status == 0) {
            /*
             $rootScope.userProfile = angular.copy(data.user);
             $cookieStore.put('sllp_user', data.user);
             console.log($cookieStore.get('sllp_user'));
             $scope.error = '';
             console.log('login success');
             //console.log(document.cookie);
             */
            $location.path('/');
          } else {
            $scope.error = data.error;
            $scope.username = '';
            $scope.password = '';
            console.log('login fail');
          }

        }).error(function (data, status, headers, config) {
          $scope.error = data;
        });
      };
      $scope.logout = function () {
        var data = {};
        console.log($cookieStore.get('sllp_user'));
        $http.put('/api/login', data).success(function (data, status, headers, config) {
          // this callback will be called asynchronously
          console.log(data);
          if (data.status == 0) {
            //delete $rootScope.userProfile;
            $cookieStore.remove('sllp_user');
            console.log($cookieStore.get('sllp_user'));
            $location.path('/login');
            //console.log(document.cookie);
          }

        }).error(function (data, status, headers, config) {
          $scope.error = data;
        });
      };

      $scope.isAdmin = function () {
        var user = $cookieStore.get('sllp_user');
        //console.log(user);
        if (!user) {
          return false;
        } else if (!user.admin) {
          return false;
        } else {
          return true;
        }

      };
      $scope.isTechSupport = function () {
        var user = $cookieStore.get('sllp_user');
        //console.log(user);
        if (!user) {
          return false;
        } else if (!user.tech_support) {
          return false;
        } else {
          return true;
        }

      };
      $scope.isLoggedIn = function () {
        var user = $cookieStore.get('sllp_user');
        //console.log(user);
        if (!user) {
          return false;
        } else {
          return true;
        }
      };

    }
  ]
)