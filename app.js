var myApp = angular.module ("Postits", []);
	
    myApp.controller ("PostitCtrl", function($scope, $http){
    	 $scope.save = function () {
            alert ("Cadastro salvo com sucesso!");
            window.location='./';
        }
       
    });
    myApp.controller ("PostitCtrl2", function($scope, $http){
    	
        $scope.get = function () {

        	var pos= [{title:"John", text:"Doe", color:"#00f"},{title:"John", text:"Doe", color:"grey"}];
            $scope.postits=angular.fromJson(pos);

        }
        $scope.get();
       
    });


  	myApp.directive('postit', function postitsDirective(){
 		return{
			restrict: 'E',
				templateUrl: './view/pages/postit.html',
			scope: {
		  		title: '=postitTitle',
		  		text: '=postitText',
		  		color: '=postitColor',
			},
  		};
	});