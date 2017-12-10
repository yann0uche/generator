/**
 * Created by Yannouche on 08/12/2017.
 */
app.directive('interface', function (){
	return {
		restrict: 'E',
		templateUrl: './js/angular/template/interface.html',
		replace: true,
		priority: 1001,
		scope: {
			interface: '='
		}
	};
});