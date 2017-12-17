/**
 * Created by Yannouche on 19/11/2017.
 */
app.directive('methode', function (){
	return {
		restrict: 'E',
		templateUrl: './js/angular/template/methode.html',
		replace: true,
		priority: 1001
	};
});