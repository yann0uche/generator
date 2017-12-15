/**
 * Created by Yannouche on 13/12/2017.
 * source: https://gist.github.com/codef0rmer/3975207
 */
app.directive('draggable', function(){
	return {
		restrict: 'A',
		priority: 1,
		link: function(event, element, attr){
			element.draggable({
				grid: [25, 25],
				containment: 'parent',
				stack: '.draggable'
			});
		}
	};
});