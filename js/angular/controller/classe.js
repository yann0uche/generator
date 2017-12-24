/**
 * Created by Yannouche on 19/11/2017.
 */
app.controller('ClasseController', function($scope){
	$scope.init = function(editionMode){
		$scope.editionMode = editionMode || false;
	};

	$scope.edit = function(){
		$scope.editionMode = !$scope.editionMode;
	};
});