/**
 * Created by Yannouche on 19/11/2017.
 */
'use strict';

function Methode(nom, typeRetour, visibilite, args, isAbstraite, isFinale){
    this.nom = nom;
	this.typeRetour = typeRetour || null;
	this.visibilite = visibilite || null;
    this.args = args || [];
    this.isAbstraite = isAbstraite || false;
    this.isFinale = isFinale || false;

    this.getNom = function(){
        return this.nom;
    };

    this.getTypeRetour = function(){
        return this.typeRetour;
    };

    this.getVisibilite = function(){
        return this.visibilite;
    };

    this.getArgs = function(){
        return this.args;
    };

    this.getIsAbstraite = function(){
        return this.isAbstraite;
    };

    this.getIsFinale = function(){
        return this.isFinale;
    };

	this.setIsAbstraite = function(isAbstraite){
		if(typeof isAbstraite !== 'boolean'){
			//todo gestion erreur
		}
		else{
			this.isAbstraite = isAbstraite;
		}
	};

	this.setIsFinale = function(isFinale){
		if(typeof isFinale !== 'boolean'){
			//todo gestion erreur
		}
		else{
			this.isFinale = isFinale;
		}
	};

    this.setNom = function(nom){
        if(typeof nom !== 'string'){

        }
        else{
            this.nom = nom;
        }
    };

    this.setTypeRetour = function(typeRetour){
        if(typeof typeRetour !== 'string'){

        }
        else{
            this.typeRetour = typeRetour;
        }
    };

    this.setNom = function(visibilite){
        if(!['private', 'protected', 'public'].includes(visibilite)){

        }
        else{
            this.visibilite = visibilite;
        }
    };

    this.setArgs = function(args){
        var i = 0;
        var allAreGood = true;
        var nbItems = args.length;

        while(i < nbItems && allAreGood){
            allAreGood = args[i] instanceof Argument;
            i++;
        }

        if(!allAreGood){

        }
        else{
            this.args = args;
        }
    };

    this.addArg = function(arg){
        if(!(arg instanceof Argument)){

        }
        else{
            this.args.push(arg);
        }
    };

    this.removeArg = function(arg){
        if(!(arg instanceof Argument)){

        }
        else{
            var i = 0;
            var found = false;
            var nbItems = this.args.length;

            while(i < nbItems && found === false){
                if(args[i].getNom() === arg.getNom()){
                    found = i;
                }
            }

            if(found === false){

            }
            else{
                this.args.splice(found, 1);
            }
        }
    };

    this.clearArgs = function(){
        this.args = [];
    };
}