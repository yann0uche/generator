/**
 * Created by Yannouche on 08/12/2017.
 */
app.controller('InterfaceController', function($scope){
	$scope.editionMode = false;

	$scope.init = function(){

	};

	$scope.edit = function(){
		$scope.editionMode = $scope.editionMode;
	}
});