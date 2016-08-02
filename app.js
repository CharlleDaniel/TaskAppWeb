var myApp = angular.module ("Postits", []);
	
    var pos= [{title:"Send email", text:"my text example", color:"red"}];

    myApp.controller ("PostitCtrl", function($scope, $http){
    	 
        $scope.save = function () {
            
            var d = new Date($scope.postit.date);
            var d2= new Date($scope.postit.time);

                var mes = parseInt(d.getMonth());
                 mes=mes+1;
                
                alert ("Dia: "+ d.getDate() + " Mes: "+ mes+" Ano: "+ d.getFullYear());

                alert ("Horas: "+ d2.getHours() + " Minutos: "+ d2.getMinutes());
            
           
        }
       
    });

    myApp.controller ("PostitCtrl2", function($scope, $http){
         
        $scope.get = function () {

            $scope.postits=angular.fromJson(pos);

        }
        $scope.get();
        

        $scope.setMaxMinDateTime= function(){
            var date = document.getElementById("dateTask");
            
            var d = new Date();
            var mes = parseInt(d.getMonth());
            mes=mes+1;
            var dia= parseInt(d.getDate());
            var ano= parseInt(d.getFullYear());
            
            if(dia<10){
                dia= "0"+dia;
            }
            if(mes<10){
                mes="0"+mes;
            }

           date.min=(""+ano+"-"+mes+"-"+dia);
           date.max=(""+ano+"-12"+"-31");

        }    
        
       
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