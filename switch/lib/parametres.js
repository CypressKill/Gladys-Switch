
module.exports = {
    
    folderName: 'switch',
    // Inject Boxs in dashboard
    // dashboadBoxs is an array of dashboardBox 
    dashboardBoxs: [{
        title: 'Switch',
        // the name of your Angular Controller for this box (put an empty string if you don't use angular)
        ngController: 'switchCtrl as vm',
        file : 'box.ejs',
        icon: 'fa fa-power-off',
        type: 'box-primary'
    }],
 
    // link assets to project
    linkAssets: true
};