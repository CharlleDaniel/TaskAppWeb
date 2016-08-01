angular
    .module ("Postits", [])
    .controller ("PostitCtrl", PostitCtrl);

    function PostitCtrl() {
        this.save = function add() {
            console.log ("Cadastro salvo com sucesso!");
        }
    }