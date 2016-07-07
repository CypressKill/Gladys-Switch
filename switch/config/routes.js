/**
 * Routes rules
 * @doc http://sailsjs.org/documentation/concepts/routes
 */

module.exports.routes = {
	'POST /switch/create': 'SwitchController.create',
	'POST /switch/update':'SwitchController.update',
	'POST /switch/destroy':'SwitchController.destroy',
	'GET /switch/index':'SwitchController.index',
	'POST /switch/getByType':'SwitchController.getByType',
	'GET /switch/getAllTypes':'SwitchController.getAllTypes',
	'POST /switch/start':'SwitchController.start',
	'POST /switch/shutdown':'SwitchController.shutdown',
	'POST /switch/startAll':'SwitchController.startAll'
	
};
//'/switch/startAll':'SwitchController.startAll',
	//'/switch/shutdownAll':'SwitchController.shutdownAll'