/**
 * Created by Yannouche on 19/11/2017.
 */
'use strict';

function Classe(name){
    this.attributs = [];
    this.methodes = [];
	this.imports = [];
	this.constantes = [];
	this.interfaces = [];

	this.name = name;
	this.position = {
        'x': 0,
        'y': 0
    };
	this.type = '';
	this.parent = null;
    this.commentaire = '';

    this.getAttributs = function(){
        return this.attributs;
    };

    this.getMethodes = function(){
        return this.methodes;
    };

    this.getName = function(){
        return this.name;
    };

    this.getPosition = function(){
        return this.position;
    };

    this.getType = function(){
        return this.type;
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
            this.name = nom;
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

    this.setType = function(type){
        if(typeof type !== 'string' || ['abstract', final, ''].indexOf(type) === -1){

        }
        else{
            this.type = type;
        }
    };

    //gestion des imports
    this.addImport = function(classe){
        if(!(classe instanceof Classe)){

        }
        else{
            this.imports.push(classe.getNamespace() + '\\' + classe.getName());
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

	this.setAttributes = function(attributesList){
		if(!(attributesList instanceof Array)){
			//todo gerer erreur
		}
		else{
			for(var i = 0; i < attributesList.length; i++){
				this.addAttribut(attributesList[i]);
			}
		}
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
            var nbItems = this.methodes.length;

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

    this.setMethodes = function(methodesList){
        if(!(methodesList instanceof Array)){
            //todo gerer erreur
        }
        else{
            for(var i = 0; i < methodesList.length; i++){
                this.addMethode(methodesList[i]);
            }
        }
    };

	// gestion des interfaces
	this.addInterface = function(interfasse){
		if(!(interfasse instanceof Interface)){

		}
		else{
			this.interfaces.push(interfasse);
		}
	};

	this.removeInterface = function(interfasse){
		if(!(interfasse instanceof Interface)){

		}
		else{
			var i = 0;
			var found = false;
			var nbItems = this.interfaces.length;

			while (i < nbItems && found === false){
				if(this.interfaces[i].getName() === interfasse.getName()){
					found = i;
				}

				i++;
			}

			if( found === false){

			}
			else{
				this.interfaces.splice(found, 1);
			}
		}
	};

	this.setInterfaces = function(interfacesList){
		if(!(interfacesList instanceof Array)){
			//todo gerer erreur
		}
		else{
			for(var i = 0; i < interfacesList.length; i++){
				this.addInterface(interfacesList[i]);
			}
		}
	};

	// gestion des interfaces
	this.addConstante = function(constante){
		if(!(constante instanceof Constante)){

		}
		else{
			this.constantes.push(constante);
		}
	};

	this.removeConstante = function(constante){
		if(!(constante instanceof Constante)){

		}
		else{
			var i = 0;
			var found = false;
			var nbItems = this.constantes.length;

			while (i < nbItems && found === false){
				if(this.constantes[i].getName() === constante.getName()){
					found = i;
				}

				i++;
			}

			if( found === false){

			}
			else{
				this.constantes.splice(found, 1);
			}
		}
	};

	this.setConstantes = function(constantesList){
		if(!(constantesList instanceof Array)){
			//todo gerer erreur
		}
		else{
			for(var i = 0; i < constantesList.length; i++){
				this.addConstante(constantesList[i]);
			}
		}
	};

	this.load = function(data){
		var classe = this;

		data.attributs.forEach(function(attr){
			var attribut = new Attribut(attr.name, attr.type, attr.visibilite);
			classe.addAttribut(attribut);
		});

		data.methodes.forEach(function(met){
			var methode = new Methode(met.name);
			methode.load(met);
			classe.addMethode(methode);
		});

		this.constantes.forEach(function(cons){
			var constante = new Constante(cons.name, cons.value);
			classe.addConstante(constante);
		});
	}
}
