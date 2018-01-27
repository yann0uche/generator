/**
 * Created by Yannouche on 08/12/2017.
 */
var Interface = function(name, methodes, constantes){
	this.name = name;
	this.methodes = methodes || [];
	this.constantes = constantes || [];

	this.getName = function(){
		return this.name;
	};

	this.getMethodes = function(){
		return this.methodes;
	};

	this.setName = function(name){
		if(typeof name !== 'string'){
			//todo gerer erreur
		}
		else{
			this.name = name;
		}
	};

	this.setMethodes = function(methodesList){
		if(!methodesList.isArray()){
			//todo gerer erreur
		}
		else{
			for(var i = 0; i < methodesList.length; i++){
				this.addMethod(methodesList[i]);
			}
		}
	};

	this.addMethode = function(method){
		if(!(method instanceof Methode)){
			//toto gerer erreur
		}
		else{
			this.methodes.push(method);
		}
	};

	this.removeMethode =  function(method){
		if(!(method instanceof Methode)){
			//todo gerer erreur
		}
		else{
			var i = 0;
			var found = false;
			var nbItems = this.methodes.length;

			while(i < nbItems && found === false){
				if(this.methodes[i].getName() === method.getName()){
					found = i;
				}

				i++;
			}

			if(found === false){
				//todo gerer erreur
			}
			else{
				this.methodes.splice(found, 1);
			}
		}
	};

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
		var itf = this;

		data.methodes.forEach(function(met){
			var methode = new Methode(met.name);
			methode.load(met);
			itf.methodes.push(methode);
		});

		this.constantes.forEach(function(cons){
			var constante = new Constante(cons.name, cons.value);
			itf.constantes.push(constante);
		});
	}
};