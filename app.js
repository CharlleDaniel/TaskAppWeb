angular
    .module ("Postits", [])
    .controller ("PostitCtrl", PostitCtrl);

    function PostitCtrl($scope) {
        $scope.save = function () {
            alert ("Cadastro salvo com sucesso!");
            window.location='./';
        }
    }