/**
 * Created by Yannouche on 19/11/2017.
 */

app.controller('ApplicationController',['$scope', '$timeout',function($scope, $timeout){
    $scope.application = null;
    $scope.editionMode = false;

    $scope.init = function(){
        //todo gestion ouverture diagramme depuis serveur (mode collaboratif?)
        //todo gestion ouverture depuis fichier (sauvegarde locale)
        //todo gestion ouverture diagramme depuis cookie (possible en JS?)

        var app = new Application('My super app');
        $scope.application = app;

        //events listeners
        $scope.$on('namespace-add', function(event, data){
            $scope.application.addNamespace(data);
        });

        $scope.$on('classe-add', function(event, data){
            var ns = $scope.application.findNamespace(data.namespaceName);
            ns.addClasse(data.classe);
        });

    };

    $scope.edit = function(){
		$scope.editionMode = !$scope.editionMode;
	};

}]);