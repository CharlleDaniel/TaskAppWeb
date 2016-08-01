angular
    .module ("Postits", [])
    .controller ("PostitCtrl", PostitCtrl);

    function PostitCtrl($scope) {
        $scope.save = function add() {
            console.log ("Cadastro salvo com sucesso!");
        }
    }