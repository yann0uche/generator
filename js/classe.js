/**
 * Created by Yannouche on 19/11/2017.
 */
'use strict';

function Classe(name){
    this.attributs = [];
    this.methodes = [];
    this.nom = name;
    this.position = {
        'x': 0,
        'y': 0
    };
    this.abstraite = false;
    this.finale = false;
    this.parent = null;
    this.imports = [];
    this.commentaire = '';
    this.namespace = null;

    this.getAttributs = function(){
        return this.attributs;
    };

    this.getMethodes = function(){
        return this.methodes;
    };

    this.getNom = function(){
        return this.nom;
    };

    this.getPosition = function(){
        return this.position;
    };

    this.getAbstraite = function(){
        return this.abstraite;
    };

    this.getFinale = function(){
        return this.finale;
    };

    this.getParent = function(){
        return this.parent;
    };

    this.getImports = function(){
        return this.imports;
    };

    this.getCommentaire = function(){
        return this.commentaire;
    };

    this.getNamespace = function(){
        return this.namespace;
    };

    this.setNom = function(nom){
        if(typeof nom !== 'string'){

        }
        else{
            this.nom = nom;
        }
    };

    this.setCommentaire = function(commentaire){
        if(typeof commentaire !== 'string'){

        }
        else{
            this.commentaire = commentaire;
        }
    };

    this.setParent = function(parent){
        if(!(parent instanceof Classe)){

        }
        else{
            this.parent = parent;
        }
    };

    this.setNamespace = function(parent){
        if(!(parent instanceof Classe)){

        }
        else{
            this.parent = parent;
        }
    };

    this.setAbstraite = function(abstraite){
        if(typeof abstraite !== 'boolean'){

        }
        else{
            this.abstraite = abstraite;
        }
    };

    this.setFinale = function(finale){
        if(typeof finale !== 'boolean'){

        }
        else{
            this.finale = finale;
        }
    };

    //gestion des imports
    this.addImport = function(classe){
        if(!(classe instanceof Classe)){

        }
        else{
            this.imports.push(classe.getNamespace() + '\\' + classe.getNom());
        }
    };

    this.removeImport = function(position){
        if(typeof position !== 'number' || position < 0 || position > this.getImports().length - 1){

        }
        else{
            this.imports.splice(position, 1);
        }
    };

    this.clearImports = function(){
        this.imports = [];
    };

    //gestion des attributs
    this.addAttribut = function(attribut){
        if(!(attribut instanceof Attribut)){

        }
        else{
            this.attributs.push(attribut);
        }
    };

    this.removeAttribut = function(attribut){
        if(typeof attribut !== 'string'){

        }
        else{
            var i = 0;
            var found = false;
            var nbAttributs = this.attributs.length;

            while(i < nbAttributs && found === false){
                if(this.attributs[i].getName() === attribut){
                    found = i;
                }
                i++;
            }

            if(found ===false){
            }
            else{
                this.attributs.splice(found, 1);
            }
        }
    };

    this.clearAttributs = function(){
        this.attributs = [];
    };

    // gestion des méthodes
    this.addMethode = function(methode){
        if(!(methode instanceof Methode)){

        }
        else{
            this.methodes.push(methode);
        }
    };

    this.removeMethode = function(methode){
        if(typeof methode !== 'string'){

        }
        else{
            var i = 0;
            var found = false;
            var nbItems = this.methodezs.length;

            while (i < nbItems && found === false){
                if(this.methodes[i].getName() === methode){
                    found = i;
                }

                i++;
            }

            if( found === false){

            }
            else{
                this.methodes.splice(found, 1);
            }
        }
    };

    this.createDomNode = function(){
        var classeDiv = document.createElement('div');
        classeDiv.setAttribute('class', 'classe');

        //div du nom
        var nameDiv = document.createElement('div');
        nameDiv.setAttribute('class', 'className');
        nameDiv.textContent = this.getNom();

        //div des attributs
        var attributesDiv = document.createElement('div');
        attributesDiv.setAttribute('class', 'attributes');

        this.getAttributs().forEach(function(attr){
            attributesDiv.appendChild(attr.createDomNode());
        });

        //div des méthodes
        var methodsDiv = document.createElement('div');
        methodsDiv.setAttribute('class', 'methods');

        this.getMethodes().forEach(function(m){
            methodsDiv.appendChild(m.createDomNode());
        });

        //ajout des éléments a la classe
        classeDiv.appendChild(nameDiv);
        classeDiv.appendChild(attributesDiv);
        classeDiv.appendChild(methodsDiv);

        return classeDiv;
    }
}
