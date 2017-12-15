/**
 * Created by Yannouche on 13/12/2017.
 * source: https://gist.github.com/codef0rmer/3975207
 */

app.directive('resizable', function(){
	return {
		resttrict: 'A',
		priority: 1,
		link: function(event, element, attr){
			element.resizable({
				containment: 'parent',
				grid: 25
			});
		}
	}
});