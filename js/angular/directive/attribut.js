/**
 * Created by Yannouche on 19/11/2017.
 */
app.directive('attribut', function (){
	return {
		restrict: 'E',
		templateUrl: './js/angular/template/attribut.html',
		replace: true,
		priority: 1001,
		scope: {
			attribut: '='
		}
	};
});