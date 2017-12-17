/**
 * Created by Yannouche on 19/11/2017.
 */
'use strict';

function Attribut(name, type, visibilite){
    this.name = name || '';
    this.type = type || '';
    this.visibilite = visibilite  || 'public';

    //accesseurs

    this.getName = function(){
        return this.name;
    };

    this.getType = function(){
        return this.type;
    };

    this.getVisibilite = function(){
        return this.visibilite;
    };

    this.setNom = function(name){
        if(typeof name !== 'string'){

        }
        else{
            this.name = name;
        }
    };

    this.setType = function(type){
        if(typeof type !== 'string'){

        }
        else{
            this.type = type;
        }
    };

    this.setVisibilite = function(visibilite){
        if(!['private', 'protected', 'public'].includes(visibilite)){

        }
        else{
            this.visibilite = visibilite;
        }
    };
}