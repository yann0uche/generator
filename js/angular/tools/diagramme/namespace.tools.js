/**
 * Created by Yannouche on 14/12/2017.
 */

app.controller('NamespaceToolsController', function($scope){
	$scope.namespaceName = '';

	$scope.addNamespace = function(){
		$scope.$emit('namespace-add', new Namespace($scope.namespaceName));
		$('#modal-container').data('ui-dialog').close();
	};
});