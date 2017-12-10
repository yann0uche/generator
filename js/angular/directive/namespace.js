/**
 *
 * Created by Yannouche on 19/11/2017.
 */
app.directive('namespace', function (){
	return {
		restrict: 'E',
		templateUrl: './js/angular/template/namespace.html',
		replace: true,
		priority: 1001,
		scope: {
			namespace: '='
		}
	};
});