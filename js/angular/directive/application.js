/**
 * Created by Yannouche on 19/11/2017.
 */

app.directive('application', function (){
    return {
		restrict: 'E',
		templateUrl: './js/angular/template/application.html',
		replace: true
	};
});