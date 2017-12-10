/**
 * Created by Yannouche on 19/11/2017.
 */
app.directive('constante', function (){
	return {
		restrict: 'E',
		templateUrl: './js/angular/template/constante.html',
		replace: true,
		priority: 1001,
		scope: {
			constante: '='
		}
	};
});