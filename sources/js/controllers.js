var footApp = angular.module('footApp', [])

/* Team Controller */
function TeamListCtrl($scope, $http) {
    $http.get('data/teams.json').success(function(data) {
        $scope.teams = data;
    });
    $scope.orderProp = 'name';
}
footApp.controller('TeamListCtrl', ['$scope', '$http', TeamListCtrl]);

/* Http Test Controller  */
function HttpTest($scope, $http) {
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
footApp.controller('HttpTest', ['$scope', '$http', HttpTest]);