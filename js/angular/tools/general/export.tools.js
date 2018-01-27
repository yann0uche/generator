/**
 * Created by Yannouche on 30/12/2017.
 */
app.controller('ExportToolsController', function($scope){
	$scope.mode = 'cookie';

	$scope.init = function(){
		$scope.$on('send-app', function(event, data){
			$scope.app = JSON.stringify(data).replace(/,\"\$\$hashKey\":\"object:\d+\"/g, '');

			var now = new Date();
			$scope.cookieName = data.name + ' - ' + now.toLocaleString();
		});

		$scope.$emit('need-app');
	};

	$scope.export = function () {
		switch($scope.mode){
			case 'cookie':
				$scope.saveToCookie();
				break;
			case 'server':
				$scope.saveToServer();
				break;
			default:
				$scope.saveToCookie();
		}
	};

	$scope.saveToCookie = function(){
		var now = new Date();
		now.setTime(now.getTime() + (10*24*60*60*1000*365));
		var expires = "expires="+ now.toUTCString();

		document.cookie = $scope.cookieName + "=" + $scope.app + ";" + expires + ";path=/";
	};

	$scope.saveToServer = function () {

	};

	$scope.close = function(){
		$scope.$emit('modal-close');
	};
});