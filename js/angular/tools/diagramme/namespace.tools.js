/**
 * Created by Yannouche on 14/12/2017.
 */


app.controller('NamespaceToolsController', function($scope){
	$scope.namespaceName = '';

	$scope.addNamespace = function(){
		debugger;
		$scope.$emit('namespace-add', $scope.namespaceName);
	};
});