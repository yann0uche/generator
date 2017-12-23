/**
 * Created by Yannouche on 19/11/2017.
 */
app.controller('MethodeController', function($scope){
	$scope.init = function(editionMode){
		$scope.editionMode = editionMode || false;
	};

	$scope.edit = function(event){
		$scope.editionMode = !$scope.editionMode;

		var classe = $(event.target.parentNode.parentNode);
		classe.height('auto');
		classe.width('auto');
	};
});