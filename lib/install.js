
module.exports = function (){
	var BoxType = {
		title:'Switch',
		ngcontroller:'switchCtrl as vm',
		html:' <!--The Switch Interface --><div id=\"switch\" style=\"width: 100%\"><div ng-include=\"\'api/hooks/switch/templates/switch.box.html\'\"></div></div>',
		footer:'<div class=\"row\"><div class=\"col-sm-6\">	<!-- Progress bars --> <div class=\"clearfix\" ></div></div><!-- /.col --></div><!-- /.row --> ',
		icon:'fa fa-power-off',
		type:'box box-info',
		view:'dashboard',
	};
	gladys.on('ready', function(){
		return gladys.utils.sql('SELECT * FROM boxtype WHERE title= ? AND ngcontroller= ? AND icon = ? AND  type=?;',[BoxType.title, BoxType.ngcontroller, BoxType.icon, BoxType.type])
		.then(function(boxtype)
		{
			if(boxtype.length=== 0){
				return gladys.boxType.create(BoxType);
			}
			else {
				return Promise.resolve();
			}
		}
		.catch(function(err){
			console.log(err);
			});
	});
};


