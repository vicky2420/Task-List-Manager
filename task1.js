var app = angular.module('TaskListApp', []);

app.controller('TaskListController', function ($scope) {
    $scope.tasks = [];
    $scope.newTask = '';

    $scope.addTask = function () {
        if ($scope.newTask.trim() !== '') {
            $scope.tasks.push($scope.newTask);
            $scope.newTask = '';
        }
    };

    $scope.editTask = function (index) {
        var editedTask = prompt('Edit Task:', $scope.tasks[index]);
        if (editedTask !== null) {
            $scope.tasks[index] = editedTask;
        }
    };

    $scope.deleteTask = function (index) {
        var confirmDelete = confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            $scope.tasks.splice(index, 1);
        }
    };
});
