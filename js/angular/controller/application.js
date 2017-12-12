/**
 * Created by Yannouche on 19/11/2017.
 */

app.controller('ApplicationController',['$scope', '$timeout',function($scope, $timeout){
    $scope.application = null;
    $scope.nbDirectives = 0;

    $scope.init = function(){
        //todo gestion ouverture diagramme depuis serveur (mode collaboratif?)
        //todo gestion ouverture depuis fichier (sauvegarde locale)
        //todo gestion ouverture diagramme depuis cookie (possible en JS?)

        //code de démo
        var app = new Application('My super app');
        var namespace = new Namespace('My/Namespace');
        var classe = new Classe('ExampleClass');
        // var parentClass = new Classe('ParentClass');
		//
        classe.setAttributes(
            [
                new Attribut('privateAttribute', 'bool', 'private'),
                new Attribut('protectedAttribute', 'string', 'protected'),
                new Attribut('publicAttribute', 'AnotherObject', 'public')
            ]
        );

        classe.setMethodes(
            [
                new Methode('privateMethod', 'void', 'private'),
                new Methode('protectedMethod', 'bool', 'protected'),
                new Methode('publicMethod', 'AnotherObject', 'public', [

                ],
                false, true)
            ]
        );

        namespace.addInterface(new Interface('GeneratorInterface', [
            new Methode('load'),
            new Methode('generate', 'bool'),
            new Methode('send', 'bool'),
            new Methode('beforSend', 'bool'),
            new Methode('afterSend', 'bool'),
            new Methode('display')
        ]));

        classe.addConstante(new Constante('constantValue', 12));
		//
		// parentClass.setAbstraite(true);
        // classe.setParent(parentClass);
        namespace.addClasse(classe);
        app.addNamespace(namespace);

        $scope.application = app;

        //fin code de démo

        $scope.$on('directive-load', function(event, data){
			$scope.nbDirectives++;
		});

        $timeout(function(){
			$('.draggable').draggable({
				grid: [25, 25],
				containment: "parent",
				stack: ".draggable"
			});

			$('.resizable').resizable({
                containment: 'parent',
                grid: 25
            });
        }, 100);
    }
}]);