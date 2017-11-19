/**
 * Created by Yannouche on 19/11/2017.
 */

'use strict';

var Namespace = function(name){
    this.name = name;
    this.classes = [];

    this.getName = function(){
        return this.name;
    };

    this.setName = function(name){
        if(typeof name !== 'string'){
            //déclencher une exception
        }
        else{
            this.name = name;
        }
    };

    this.addClass = function(classe){
        if(!(classe instanceof Classe)){
            //déclencher une exception
        }
        else{
            this.classes.push(classe);
        }
    };

    this.removeClass = function(className){
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

    this.createClass = function(className){
        if(typeof className !== 'string'){

        }
        else{
            var classe = new Classe(name);

            classe.setNamespace(this);
            this.addClass(classe);
        }
    }
};