var http = require('http');

var server = http.createServer( function(req, res){

	var categoria = req.url;

	if (categoria == '/tecnologia') {
		res.end("<html><body>Pagina de tecnologia</body></html>");

	} else if (categoria == '/beleza'){
		res.end("<html><body>Pagina de beleza</body></html>");

	} else if (categoria == '/esportes'){
		res.end("<html><body>Pagina de esportes</body></html>");

	} else {
		res.end("<html><body>Requisitando pagina sem nenhum módulo</body></html>");
	}

}).listen(3000);