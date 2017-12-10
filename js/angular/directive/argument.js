/**
 * Created by Yannouche on 19/11/2017.
 */
app.directive('argument', function (){
	return {
		restrict: 'E',
		templateUrl: './js/angular/template/argument.html',
		replace: true,
		priority: 1001,
		scope: {
			argument: '='
		}
	};
});