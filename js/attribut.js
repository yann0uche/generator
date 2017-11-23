/**
 * Created by Yannouche on 19/11/2017.
 */
'use strict';

function Attribut(nom, type, visibilite){
    this.nom = nom;
    this.type = type;
    this.visibilite = visibilite;

    //accesseurs

    this.getNom = function(){
        return this.nom;
    };

    this.getType = function(){
        return this.type;
    };

    this.getVisibilite = function(){
        return this.visibilite;
    };

    this.setNom = function(nom){
        if(typeof nom !== 'string'){

        }
        else{
            this.nom = nom;
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

    this.createDomNode = function(){
        var attributeSpan = document.createElement('span');
        attributeSpan.setAttribute('class', 'attribut ' + this.getVisibilite());
        attributeSpan.textContent = this.getNom() + ' : ' + this.getType();

        return attributeSpan;
    }
}