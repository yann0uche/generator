/**
 * Created by Yannouche on 11/12/2017.
 */

app.directive('toolbox', function(){
	return {
		restrict: 'E',
		templateUrl: './js/angular/template/toolbox.html',
		replace: true
	};
});