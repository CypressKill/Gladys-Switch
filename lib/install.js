
module.exports = function (){
	var BoxType = {
		title:'Switch',
		ngcontroller:'switchCtrl as vm',
		html:' <!--The Switch Interface --><div id="switch" style="width: 100%"><div ng-include="\'hooks/switch/templates/switch.box.html\'"></div></div>',
		footer:'<div class=\"row\"><div class=\"col-sm-6\">	<!-- Progress bars --> <div class=\"clearfix\" ></div></div><!-- /.col --></div><!-- /.row --> ',
		icon:'fa fa-power-off',
		type:'box box-info',
		view:'dashboard',
	};
	console.log(gladys.boxType);
	gladys.boxType.create(BoxType).catch(function(err){
			console.log(err);
			});
};


