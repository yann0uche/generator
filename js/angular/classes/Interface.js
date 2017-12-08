/**
 * Created by Yannouche on 08/12/2017.
 */
var Interface = function(name, methodes){
	this.name = name;
	this.methodes = methodes || [];

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
			};
		}
	};

	this.addMethod = function(method){
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
};