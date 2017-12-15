/**
 * Created by Yannouche on 19/11/2017.
 */

'use strict';

function Namespace(name){
    this.name = name;
    this.classes = [];
    this.interfaces = [];

    this.getName = function(){
        return this.name;
    };

    this.getClasses = function(){
        return this.classes;
    };

    this.setName = function(name){
        if(typeof name !== 'string'){
            //déclencher une exception
        }
        else{
            this.name = name;
        }
    };

    this.addClasse = function(classe){
        if(!(classe instanceof Classe)){
            //déclencher une exception
        }
        else{
            this.classes.push(classe);
        }
    };

    this.removeClasse = function(className){
        if(typeof className !== 'string'){
            //déclencher une exception
        }
        else{
            var i = 0;
            var found = false;
            var nbItems = this.classes.length;

            while(i < nbItems && found === false){
                if(this.classes[i].getName() === className){
                    found = i;
                }

                i++;
            }

            if(found === false){
                //déclencher une exception
            }
            else{
                this.classes.splice(found, 1);
            }
        }
    };

    this.clearClasses = function(){
        this.classes = [];
    };

    this.createInterface = function(interfasseName){
        if(typeof interfasseName !== 'string'){

        }
        else{
            var interfasse = new Interface(name);
            this.addInterface(interfasse);
        }
    };

	this.addInterface = function(interfasse){
		if(!(interfasse instanceof Interface)){
			//déclencher une exception
		}
		else{
			this.interfaces.push(interfasse);
		}
	};

	this.removeInterface = function(interfasse){
		if(typeof interfasse !== 'string'){
			//déclencher une exception
		}
		else{
			var i = 0;
			var found = false;
			var nbItems = this.interfaces.length;

			while(i < nbItems && found === false){
				if(this.interfaces[i].getName() === interfasse){
					found = i;
				}

				i++;
			}

			if(found === false){
				//déclencher une exception
			}
			else{
				this.interfaces.splice(found, 1);
			}
		}
	};

	this.clearInterfaces = function(){
		this.interfaces = [];
	};

	this.createInterface = function(interfasse){
		if(typeof interfasse !== 'string'){

		}
		else{
			var interfasse = new Interface(name);
			this.addInterface(interfasse);
		}
	};

	this.findClasse = function(name){
		var i = 0;
		var found = false;
		var nbItems = this.classes.length;

		while(i < nbItems && found === false){
			if(this.classes[i].getName() === className){
				found = i;
			}

			i++;
		}

		if(found === false){
			//déclencher une exception
		}
		else{
			return this.classes[found];
		}
	}
}