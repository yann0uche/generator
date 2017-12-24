/**
 * Created by Yannouche on 16/12/2017.
 */
app.controller('InterfaceToolsController', function($scope){
	$scope.init = function(interface){

		$scope.edit = interface instanceof Interface;

		$scope.namespacesList = $scope.$parent.$parent.application.namespaces;
		$scope.selectedNamespace = $scope.namespacesList[0];
		$scope.interface = interface || new Interface('');

	};

	$scope.addInterface = function(){
		$scope.selectedNamespace.addInterface($scope.interface);
		$scope.$emit('modal-close');
	};

	$scope.editInterface = function(){
		$scope.$emit('modal-close');
	};

	$scope.addConstante = function(){
		$scope.interface.addConstante(new Constante('', ''));
	};

	$scope.addMethode = function(){
		$scope.interface.addMethode(new Methode(''))
	};
});