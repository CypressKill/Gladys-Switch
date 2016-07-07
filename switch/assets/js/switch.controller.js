(function (){
	'use strict';
	angular
		.module('app')
		.controller('switchCtrl',switchCtrl);

	switchCtrl.$inject = ['switchService','$timeout'];

	function switchCtrl(switchService, $timeout){

		var vm = this;
		/*Methods */
		/* Method to get information from database */
		vm.index = index;
		vm.getByType = getByType;
		vm.getAllTypes=getAllTypes;

		/* Method to operate on database*/
		vm.create= create;
		vm.viewEdit = viewEdit;
		vm.update = update;
		vm.destroy=destroy;

		/*Methods to control Switch*/
		vm.start=start;
		vm.shutdown = shutdown;
		vm.startAll=startAll;
		vm.shutdownAll=shutdownAll;
		vm.startByType = startByType;
		vm.shutdownByType = shutdownByType;

		/* Infos to Display*/
		vm.switchs=[]; //All the switchs of database
		vm.classedSwitchs=[]; //Switch classed by types
		vm.types=[]; // where all types are stocked


		/*Template Config*/
		vm.modal=false;
		var switchs={};
		
		/*Form*/
		vm.new_switch={
			id:"",
			location:"",
			type:""
		}; //Add a device variable
		vm.update_switch = {}; //Input value to update a switch
		vm.switch={};
		vm.type="";; //Type chosen to start/stopByType

		activate();

		function activate(){
			index();
			getAllTypes();
			startByType();
		}

		function index(){
			return switchService.index()
			.then(function(switchs){
				vm.switchs=switchs;
			});


		}
		function getByType(Type){
			var switchObj={
				id:"999999",
				location:"NoWhere and EveryWhere",
				statut:"121212121",
				type:Type

			};
			console.log("Type : " + Type + "switch.type : "+ switchObj.type);
			return switchService.getByType(switchObj)
			.then(function(switchs){
				vm.classedSwitchs = switchs;
				console.log("Fin de getByType : " + vm.classedSwitchs.length);
			});
		}/*
		function getTypeOf(s){
			var verif=vm.types; 
			for (var i = 0; i < vm.switchs.length; i++) { 
				var exist=false;
				for(var j=0; verif.length; j++){ 
					if (verif[j]===vm.switchs[i].type){
						exist=true;
					}
				}
				if(!exist){
					console.log("Added to types");
					console.log(vm.switchs[i].type);
					verif.push(vm.switchs[i].type);
					vm.types.push(vm.switchs[i].type);
				}
			}


		}*/

		function getAllTypes(){
			return switchService.getAllTypes()
			.then(function(types){
				vm.types=types;
			});
		}

		function create(){
			return switchService.create(vm.new_switch)
			.then(function(data){
				vm.switchs.push(data);
				vm.new_switch = {
					id:"",
					location:"",
					type:""
				};
				vm.modal=false;
				getAllTypes();
			});
			
		}

		
		function update(Switchy){
			return switchService.update(Switchy)
			.then(function(data){
				console.log("In update : "+Switchy.id +Switchy.statut + Switchy.location);
				index();
				vm.modal =false;
				getAllTypes();
			});
		}

		function destroy(switchs){
			if(confirm("Are you sure to delete this switch ?"))
			{
				return switchService.destroy(switchs)
				.then(function(){
					vm.switchs.splice(vm.switchs.indexOf(switchs),1);
					getAllTypes();
				});
			}

		}
		
		function viewEdit(switchObj){
			console.log("Je suis dans le viewEdit");
			vm.modal = 'edit';
			switchs = switchObj;
			vm.update_switch = angular.copy(switchObj);
			
		}

		function start(Switch){
			console.log("M'allume je ?")
			Switch.statut=1;
			var SwitchObj={
					id:Switch.id,
					location:Switch.location,
					statut:Switch.statut,
					type:Switch.type
				};
			update(SwitchObj);
			return switchService.start(Switch);

					
		}

		function shutdown(Switch){
			console.log("M'éteins je ?");
			Switch.statut=0;
			var SwitchObj={
					id:Switch.id,
					location:Switch.location,
					statut:Switch.statut,
					type:Switch.type
				};

			update(SwitchObj);
			return switchService.shutdown(Switch);

		}
		function startAll(){
			for(var i=0; i<vm.switchs.length; i++)
			{
				start(vm.switchs[i]);
			}
			
		}
		function startByType()
		{
			console.log("startByType says : "+ vm.type);
			getByType(vm.type);
			for(var i=0; i<vm.classedSwitchs.length;i++)
			{
				start(vm.classedSwitchs[i]);
			} 
			vm.classedSwitchs=[];
			console.log("Est ce que j'arrive a la fin de startByType ?");
		}

		function shutdownAll(){
			for(var i=0; i<vm.switchs.length; i++)
			{
				shutdown(vm.switchs[i]);
			}
			
		}
		function shutdownByType()
		{
			console.log("shutdownByType says : "+vm.type);
			getByType(vm.type);
			for(var i=0; i<vm.classedSwitchs.length;i++)
			{
				console.log("Switch "+ i);
				shutdown(vm.classedSwitchs[i]);
			} 
			vm.classedSwitchs=[];
		}
		
	}








})();