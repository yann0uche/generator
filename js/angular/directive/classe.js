/**
 * Created by Yannouche on 19/11/2017.
 */
app.directive('classe', function (){
	return {
		restrict: 'E',
		templateUrl: './js/angular/template/classe.html',
		replace: true,
		priority: 1001,
		scope: {
			classe: '='
		}
	};
});