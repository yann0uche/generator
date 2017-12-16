/**
 * Created by Yannouche on 12/12/2017.
 */

app.controller('ToolboxController', function($scope){
	$scope.toolCases = {};

	$scope.init = function(){
		$scope.toolCases = {
			general: [],
			generation: [],
			diagramme: [],
			plugins: []
		}
	};
});