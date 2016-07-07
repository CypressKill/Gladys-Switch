
module.exports = function (sails) {



	var loader = require("sails-util-mvcsloader")(sails);
	loader.injectAll({
		policies : __dirname + '/policies',
		config : __dirname + '/config'
	});
	//var install = require('./lib/install')(sails);
	/*gladys.on('ready', function(){
		var install = require('./lib/install');
		install();
	});
*/
	return {

       	    defaults: require('./lib/defaults'),
	    configure: require('./lib/configure')(sails),
//	    initialize: require('./lib/initialize')(sails),
	    //exec: require('./lib/exec')(sails),
	    //setup: require('./lib/setup')(sails),
            //uninstall: require('./lib/uninstall')(sails),
	    //install:require('./lib/install')(sails),
            routes: require('./lib/routes')(sails),

	};
};	
