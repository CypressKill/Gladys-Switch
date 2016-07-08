module.exports = function (boxType) {
	gladys.on('ready',function(){
		console.log('init uninstallation of Switch module');
		return gladys.boxType.delete(boxType);
	}

}
