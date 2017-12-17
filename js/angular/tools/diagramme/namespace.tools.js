/**
 * Created by Yannouche on 14/12/2017.
 */

app.controller('NamespaceToolsController', function($scope){
	$scope.namespace = new Namespace('');

	$scope.addNamespace = function(){
		$scope.$emit('namespace-add', $scope.namespace);
		$('#modal-container').data('ui-dialog').close();
	};
});