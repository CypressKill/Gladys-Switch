var SendRadio = require('../../../services/SendRadio');

module.exports = {
	/**
	 * Description
	 * @method create a Switch in data base
	 * @param {} req
	 * @param {} res
	 * @param {} next
	 * @return 
	 */
	 create: function(req, res,next){
	 	var switchObj = {
	 		id: req.param('id'),
	 		location : req.param('location'),
	 		statut : 0,
	 		type : req.param('type')
	 	};
	 	Switch.create({id:req.param('id') , location: req.param('location'), statut : 0,type: req.param('type')},function(err, Switch) {
				if (err){
					console.log(err);
					return res.json(err);
				}
	
				return res.json(Switch);
			});



	 },

	 update: function(req,res,next){
	 	var switchObj = {
	 		id: req.param('id'),
	 		location : req.param('location'),
	 		statut : req.param('statut'),
	 		type : req.param('type')
	 	};
	 	console.log("Switch Update with value : " + switchObj.statut + " "+ switchObj.id);
	 	Switch.update({
	 		id:req.param('id')}, switchObj, function switchUpdated(err, Switch) {
			if (err){
				console.log(err);
				return res.json(err);
			} 

			res.json(Switch);
		});


 	},


 	destroy: function(req,res,next){
 		var switchObj = {
	 		id: req.param('id'),
	 		location : req.param('location'),
	 		statut : req.param('statut'),
	 		type : req.param('type')
	 	};
	 	Switch.destroy({id:req.param('id')},function(err, Switch) {
			if (err) return res.json(err);

			res.json(Switch);
		});





 	},
 	index:function(req,res ,next){
	 	Switch.find({},function(err, Switch) {
			if (err) return res.json(err);

			res.json(Switch);
		});

 	},
 	getAllTypes: function(req,res,next){
 		var request="SELECT DISTINCT switch.type FROM switch;";
 		Switch.query(request,function(err,results){
 			if(err) return res.serverError(err);
 			res.json(results);

 		});

 	},
 	getByType: function(req,res,next){
 		var switchObj = {
	 		id: req.param('id'),
	 		location : req.param('location'),
	 		statut : req.param('statut'),
	 		type : req.param('type')
	 	};
 		console.log("Le Type cherché est : " + req +" "+ req.param('type') +" "+ req.type+" "+ switchObj.type);
 		/*Switch.query({text:'SELECT * FROM switch WHERE switch.type= $1',values:[switchObj.type]}*/
 		Switch.find({type:req.param('type')},function(err,results){
 			if(err) return res.serverError(err);
 			res.json(results);

 		});


 	},
 	start: function(req,res,next){
 		var switchObj = {
	 		id: req.param('id'),
	 		location : req.param('location'),
	 		statut : req.param('statut'),
	 		type : req.param('type')
	 	};
	 	//update(switchObj);
	 	SendRadio.sendRadio(req.param('id'),'ON');
 	},

 	shutdown: function(req,res,next){
 		var switchObj = {
	 		id: req.param('id'),
	 		location : req.param('location'),
	 		statut : req.param('statut'),
	 		type : req.param('type')
	 	};
	 	//update(switchObj);
	 	SendRadio.sendRadio(req.param('id'),'OFF');
 	},
 	startAll: function(req,res,next){
 		for(var i =0; i<req.length; i++){
 			var switchObj = {
		 		id: req[i].param('id'),
		 		location : req[i].param('location'),
		 		statut : req[i].param('statut'),
		 		type : req[i].param('type')
	 		};
	 		SendRadio.sendRadio(req[i].param('id'),'ON');
	 		console.log("Prise allumée : " + req[i].param('id'));


 		}
 		console.log("Coucou toi, je suis ici !");


 	}


 };


