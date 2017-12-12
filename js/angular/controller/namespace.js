/**
 * Created by Yannouche on 19/11/2017.
 */
app.controller('NamespaceController', function($scope){
	$scope.init = function(){
		$scope.$emit('directive-load', 'namespace');
		$scope.$emit('directive-loaded', 'namespace');
	}
});