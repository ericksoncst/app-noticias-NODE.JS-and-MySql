module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
        app.application.controllers.admin.formulario_inclusao_noticia(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res){
        app.application.controllers.admin.noticias_salvar(app, req, res);
    });
}