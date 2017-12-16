/**
 * Created by Yannouche on 16/12/2017.
 */
app.controller('ClasseToolsController', function($scope){
	$scope.classeName = '';
	$scope.namespacesList = [''];

	$scope.init = function(){
		$scope.namespacesList = $scope.$parent.$parent.application.namespaces;
	};

	$scope.addClasse = function(){
		$scope.$emit('classe-add', $scope.namespaceName);
		$('#modal-container').data('ui-dialog').close();
	};
});