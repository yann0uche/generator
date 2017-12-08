/**
 * Created by Yannouche on 19/11/2017.
 */
'use strict';

function Argument(nom, type) {
    this.nom = nom;
    this.type = type;

    this.getNom = function () {
        return this.nom;
    };

    this.getType = function () {
        return this.type;
    };

    this.setNom = function (nom) {
        if (typeof nom !== 'string') {

        }
        else {
            this.nom = nom;
        }
    };

    this.setType = function (type) {
        if (typeof type !== 'string') {

        }
        else {
            this.type = type;
        }
    }
}