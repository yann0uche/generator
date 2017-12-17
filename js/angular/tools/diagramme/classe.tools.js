/**
 * Created by Yannouche on 16/12/2017.
 */
app.controller('ClasseToolsController', function($scope){
	$scope.init = function(classe){
		$scope.namespacesList = $scope.$parent.$parent.application.namespaces;
		$scope.selectedNamespace = $scope.namespacesList[0];
		$scope.classe = classe || new Classe('');
		console.log($scope.namespacesList);
	};

	$scope.addClasse = function(){
		$scope.selectedNamespace.addClasse($scope.classe);
		$scope.$emit('modal-close');
	};

	$scope.addAttribut = function(){
		$scope.classe.addAttribut(new Attribut('', '', ''));
	};

	$scope.addConstante = function(){
		$scope.classe.addConstante(new Constante('', ''));
	};

	$scope.addMethode = function(){
		$scope.classe.addMethode(new Methode(''))
	}
});