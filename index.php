<!DOCTYPE html>

<html ng-app="Postits">

    <head>
        <title>Postits</title>
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" href="view/css/style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="view/css/stylePostits.css">

    </head>

    <body>
        <!-- container for view all pages -->
        <div id="container" ng-controller="PostitCtrl2">
            <!-- button new postit-->    
            <a class="btn btn-primary" ng-click="setMaxMinDateTime()" data-toggle="modal" href='#modal-id'><i class="fa fa-file-text-o"></i> New Task</a>

            <div id="quadro">
                <br>
                <h2> My tasks</h2>
                
                <postit ng-repeat="p in postits" postit-color="p.color" postit-text="p.text" postit-title="p.title"></postit>

            </div>
            
        </div>

        <!-- additional elements ex:Modals-->
        <?php 
        include "view/modals/modal_add_postits.html"
        ?>

        <!-- scripts -->
        <script src="bower_components/jquery/dist/jquery.js"></script>
        <script src="bower_components/angular/angular.js"></script>
        <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
        <script src="app.js"></script>
    </body>
</html>