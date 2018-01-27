/**
 * Created by Yannouche on 19/11/2017.
 */

app.controller('ApplicationController', function($scope){
    $scope.application = null;

    $scope.init = function(editionMode){
        //todo gestion ouverture diagramme depuis serveur (mode collaboratif?)
        //todo gestion ouverture depuis fichier (sauvegarde locale)

		$scope.editionMode = editionMode || false;

        $scope.application = new Application('My super app');

        //events listeners
        $scope.$on('namespace-add', function(event, data){
            $scope.application.addNamespace(data);
        });

        $scope.$on('classe-add', function(event, data){
            var ns = $scope.application.findNamespace(data.namespaceName);
            ns.addClasse(data.classe);
        });

        $scope.$on('need-app', function(){
			$scope.$broadcast('send-app', $scope.application);
		});

        $scope.$on('load-app', function(event, data){
        	$scope.application = data;
		});
	};

	$scope.edit = function(){
		$scope.editionMode = !$scope.editionMode;
	};

});