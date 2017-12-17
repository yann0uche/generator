/**
 * Created by Yannouche on 19/11/2017.
 */
app.controller('MethodeController', function($scope){
	$scope.init = function(methode, editionMode){
		$scope.methode = methode || new Methode();
		$scope.editionMode = editionMode || false;
	};

	$scope.edit = function(event){
		$scope.editionMode = !$scope.editionMode;

		var classe = $(event.target.parentNode.parentNode);
		classe.height('auto');
		classe.width('auto');
	};
});