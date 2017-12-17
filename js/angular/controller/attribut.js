/**
 * Created by Yannouche on 19/11/2017.
 */
app.controller('AttributController', function($scope){
	$scope.editionMode = false;

	$scope.init = function(attribut, editionMode){
		$scope.editionMode = attribut || new Attribut();
		$scope.editionMode = editionMode || false;
	};

	$scope.edit = function($event){
		$scope.editionMode = !$scope.editionMode;

		var classe = $(event.target.parentNode.parentNode);
		classe.height('auto');
		classe.width('auto');
	};
});