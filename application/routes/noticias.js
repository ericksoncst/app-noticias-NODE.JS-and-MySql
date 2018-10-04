module.exports = function(app){

	app.get('/noticias', function(req, res) {
		app.application.controllers.noticias.noticias(app, req, res);
	});

	app.get('/noticia', function(req, res) {
		app.application.controllers.noticias.noticia(app, req, res);
	});
}