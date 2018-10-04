module.exports = function(app){
	app.get('/', function(req, res) {
		app.application.controllers.home.index(app, req, res);
	});
}