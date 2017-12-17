/**
 * Created by Yannouche on 16/12/2017.
 */
app.directive('modal', ['$templateRequest', '$compile', function($templateRequest, $compile){
	return {
		restrict: 'A',
		priority: 1,
		scope: {
			modalToolName: '@',
			modalTitle: '@'
		},
		replace: false,
		transclude: false,
		link: function(scope, element, attrs){
			scope.$on('modal-close', function(){
				$('#modal-container').data('ui-dialog').close();
			});

			element.on('click', function(event){
				event.preventDefault();
				$templateRequest('./js/angular/template/' + attrs.modalToolName + '.modal.html').then(function(html){
					$('#modal-container').dialog({
						autoOpen: false,
						modal: true,
						title: attrs.modalTitle,
						closeOnEscape: true,
						height: 'auto',
						width: 'auto',
						close: function(){
							$(this).empty();
						}
					}).dialog('open');

					angular.element('#modal-container').append($compile(html)(scope));
				});
			});
		}
	};
}]);