/**
 * Controllers
 * @type {module}
 */

var footControllers = angular.module('footControllers', []);

/* Team List Controller */
footControllers.controller('TeamListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('ajax/getTeams.php').success(function(data) {
            $scope.teams = data;
        });
    }
]);

/* Http Test Controller  */
footControllers.controller('HttpTest', ['$scope', '$http',
    function($scope, $http) {
        /* Init */
        $scope.type = 'hight';

        /* Update Model */
        $scope.updateModel = function() {
            $scope.method = 'GET';
            $scope.url    = 'data/test.php';
            $scope.data   = {type : $scope.type};

            $http({
                method: $scope.method,
                url: $scope.url,
                params: $scope.data
            }).
                then(function(response) {
                    $scope.status = response.status;
                    $scope.output = response.data;
                }, function(response) {
                    $scope.output = response.data || "Request failed";
                    $scope.status = response.status;
                });
        };
    }
]);