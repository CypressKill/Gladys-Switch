/*var SendRadio = require('./services/SendRadio')

module.exports = {
	Prise: function (numPrise, position){
		this.statut = 0;
		this.numPrise = numPrise;
		this.position = position;

		Prise.prototype.startSwitch = function(){
		
			SendRadio.sendRadio(this.numPrise, 'ON');
			this.statut = 1;
		}
		Prise.prototype.shutdownSwitch = function(){
			SendRadio.sendRadio(this.numPrise, 'OFF');
			this.statut = 0;
		}

	}
	
}
module.exports.Prise = Prise;*/
'use strict';
var SendRadio = require('../../../services/SendRadio');

module.exports = {
	attributes:{
		id:{
			type:'string',
			primaryKey:true,
			required : true,
			unique:true,
		},
		location:{
			type:'string',
			required : true,
			unique:false,
		},
		statut:{ //down = 0 up= 1
			type:'integer',
			required:true,
			unique:false,
			defaultsTo:0,
		},
		type:{
			type:'string',
			required:false,
			unique:false,
		}
	}
	/*
	start: function(){
		SendRadio.sendRadio(this.id , 'ON');
		this.statut= true;


	}
	shutdown: function(){
		SendRadio.sendRadio(this.id, 'OFF');
		this.statut =false;

	}


	*/

};