<!DOCTYPE html>
<html ng-app="Postits">
    <head>
        <title>Postits</title>
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" href="./view/css/style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    </head>
    <body>

        <a class="btn btn-primary" data-toggle="modal" href='#modal-id'><i class="fa fa-file-text-o"></i> Novo Postit</a>
        <div class="modal fade" id="modal-id">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title"><i class="fa fa-file-text-o"></i> Novo Postit</h4>
                    </div>

                    <div class="modal-body">
                        
                        <label>Titulo*</label> <br>
                        <input type="text" placeholder=""> <br> <br>
                        <label>Texto*</label> <br>
                        <textarea  rows="5" cols="75" placeholder=""></textarea>
                        
                    </div>

                    <div class="modal-footer clearfix" ng-controller="PostitCtrl">
                        <button type="button" class="btn btn-primary pull-right" ng-click="save()"><i class="fa fa-file-text-o"></i>Adicionar</button>
                    </div>
                </div>
            </div>
        </div>

        <script src="bower_components/jquery/dist/jquery.js"></script>
        <script src="bower_components/angular/angular.js"></script>
        <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
        <script src="app.js"></script>
    </body>
  </html>