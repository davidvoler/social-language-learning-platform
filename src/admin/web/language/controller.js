
(function () {

    function AdminController(AdminService) {
        //write you controller code here
        var self = this;
        self.items = [];
        self.error = '';
        //getting information from REST
        var req = AdminService.get();
        //handling results
        req.success(function (data, status) {
            self.items = data;
        });
        req.error(function (data) {
            self.error = data;
        });

    }
    angular.module('sllp.admin')
        .controller('AdminController', ['AdminService', AdminController]);

}());
