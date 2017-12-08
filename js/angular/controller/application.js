/**
 * Created by Yannouche on 19/11/2017.
 */

app.controller('ApplicationController', function($scope){
    $scope.namespaces = [];
    $scope.application = null;
    $scope.init = function(){
        //todo gestion ouverture diagramme depuis serveur (mode collaboratif?)
        //todo gestion ouverture depuis fichier (sauvegarde locale)
        //todo gestion ouverture diagramme depuis cookie (possible en JS?)

        //code de démo
        var app = new Application('My super app');
        var namespace = new Namespace('My/Namespace');
        var classe = new Classe('ExampleClass');
        var parentClass = new Classe('ParentClass');

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

        classe.addInterface(new Interface('GeneratorInterface', [
            new Methode('load'),
            new Methode('generate', 'bool'),
            new Methode('send', 'bool'),
            new Methode('beforSend', 'bool'),
            new Methode('afterSend', 'bool'),
            new Methode('display')
        ]));

		parentClass.setAbstraite(true);
        classe.setParent(parentClass);
        namespace.addClass(classe);
        app.addNamespace(namespace);

        $scope.application = app;

        //fin code de démo

    }
});