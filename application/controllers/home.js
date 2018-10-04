module.exports.index = function(app, req, res) {

	var connection = app.config.dbConnection();
	var noticiasModel = new app.application.models.NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(function(error, result){
		res.render("home/index", {noticias : result});
		//funcao render permite que se crie um rotulo json para receber o result
		// error e result,são params obrigatorios da funcao query
	});
}