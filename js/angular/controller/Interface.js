/**
 * Created by Yannouche on 08/12/2017.
 */
app.controller('InterfaceController', function($scope){
	$scope.init = function(editionMode){
		$scope.editionMode = editionMode || false;
	};

	$scope.edit = function(){
		$scope.editionMode = !$scope.editionMode;
	}
});