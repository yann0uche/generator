/**
 * Created by Yannouche on 19/11/2017.
 */
'use strict';

function Argument(nom, type) {
    this.name = nom;
    this.type = type;

    this.getNom = function () {
        return this.name;
    };

    this.getType = function () {
        return this.type;
    };

    this.setNom = function (nom) {
        if (typeof nom !== 'string') {

        }
        else {
            this.name = nom;
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