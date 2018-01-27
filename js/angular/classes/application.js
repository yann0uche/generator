/**
 * Created by Yannouche on 19/11/2017.
 */

'use strict';

function Application(name){
    //attributs
    this.name = name;
    this.namespaces = [];

    //accesseurs
    this.getName = function(){
        return this.name;
    };

    this.getNamespaces = function(){
        return this.namespaces;
    };

    this.setName = function(name){
        if(typeof name !== 'string'){
            //déclencher une exception
        }
        else{
            this.name = name;
        }
    };

    //méthodes
    this.addNamespace = function(namespace){
        if(!(namespace instanceof Namespace)){
            //déclencher une exception
        }
        else{
            this.namespaces.push(namespace);
        }
    };

    this.removeNamespace = function(namespace){
        if(typeof namespace !== 'string'){
            //déclencher une exception
        }
        else{
            var nbNamespaces = this.namespaces.length;
            var found = false;
            var i = 0;

            while(i < nbNamespaces && found === false){
                if(this.namespaces[i].getName() === namespace){
                    found = i;
                }
                i++;
            }

            if(found === false){
                //déclencher une exception
            }
            else{
                this.namespaces.splice(found, 1);
            }
        }
    };

    this.clearNamespaces = function(){
        this.namespaces = [];
    };

    this.findNamespace = function(namespace){
		var nbNamespaces = this.namespaces.length;
		var found = false;
		var i = 0;

		while(i < nbNamespaces && found === false){
			if(this.namespaces[i].getName() === namespace){
				found = i;
			}
			i++;
		}

		if(found === false){
			//déclencher une exception
		}
		else{
			return this.namespaces[found];
		}
    };

    this.load = function(data){
    	var namespaces = [];

    	data.namespaces.forEach(function(ns){
    		var namespace = new Namespace(ns.name);
			namespace.load(ns);
			namespaces.push(namespace);
		});

    	this.namespaces = namespaces;
	};
}