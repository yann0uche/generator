/**
 * Created by Yannouche on 08/12/2017.
 */

var Constante = function(name, value){
	this.name = name;
	this.value = value;

	this.getValue = function(){
		return this.value;
	};

	this.getName = function(){
		return this.name;
	};

	this.setValue = function(value){
		this.value = value;
	};

	this.setName = function(name){
		if(typeof name !== 'string'){
			//todo gestion erreur
		}
		else{
			this.name = name;
		}
	};
};