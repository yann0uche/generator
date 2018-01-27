/**
 * Created by Yannouche on 30/12/2017.
 */

//todo gerer erreur affichage du contenu des classes (tout s'affiche dans la dernière classe chargée

app.controller('ImportToolsController', function($scope){
	$scope.init = function(){
		$scope.app = null;

		$scope.savesList = {
			locales: [],
			distantes: []
		};

		var distantesList = $scope.getSauvegardesDistantes();
		var localesList = document.cookie.split('; ');

		localesList.forEach(function(c){
			data = c.split('=');
			$scope.savesList.locales.push({
				name: data[0],
				value: data[1]
			});
		});
	};

	$scope.getSauvegardesDistantes = function () {

	};

	$scope.changeAppToLoad = function (value) {
		$scope.app = value;
	};

	$scope.delete = function(index){
		document.cookie = $scope.savesList.locales[index].name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"';
		$scope.savesList.locales.splice(index, 1);
	};

	$scope.close = function(){
		$scope.$emit('modal-close');
	};

	$scope.valid = function(){

		var data = JSON.parse($scope.app);
		app = new Application(data.name);
		app.load(data);
		$scope.$emit('load-app', app);
	};
});