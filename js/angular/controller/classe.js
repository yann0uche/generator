/**
 * Created by Yannouche on 19/11/2017.
 */
app.controller('ClasseController', function($scope){
	$scope.init = function(){
		$scope.$emit('directive-load', 'classe');
		$scope.$emit('directive-loaded', 'classe');
	}
});