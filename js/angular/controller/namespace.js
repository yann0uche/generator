/**
 * Created by Yannouche on 19/11/2017.
 */
app.controller('NamespaceController', function($scope){
	$scope.editionMode = false;

	$scope.init = function(){
	};

	$scope.edit = function(){
		$scope.editionMode = !$scope.editionMode;
	};
});