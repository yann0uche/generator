/**
 * Created by Yannouche on 19/11/2017.
 */
var Classe = function(name){
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
};
