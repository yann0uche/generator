/**
 * Created by Yannouche on 12/12/2017.
 */

app.controller('ToolboxController', ['$scope', 'ModalService', function($scope, ModalService){
	$scope.toolCases = {};

	$scope.init = function(){
		$scope.toolCases = {
			general: [],
			generation: [],
			diagramme: [],
			plugins: []
		}
	};

	$scope.addClasse = function(){
		$scope.$emit('classe-add', 'MyClass');
	};

	$scope.openTool = function(toolName, title, controller){
		ModalService.showModal({
			templateUrl: './js/angular/template/' + toolName + '.modal.html',
			controller: controller,
			appendElement: $('#modal-container')
		}).then(function(modal) {
			// The modal object has the element built, if this is a bootstrap modal
			// you can call 'modal' to show it, if it's a custom modal just show or hide
			// it as you need to.
			modal.element.show();
		});
	};
}]);