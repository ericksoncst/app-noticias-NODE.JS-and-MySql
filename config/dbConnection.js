var mysql = require('mysql');

var connMysql = function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			database : 'portal_noticias'
	});
}
// passamos a exportar uma var e não uma funcao,para que o banco seja conectado,apenas pela pg
// e não toda vez que o server for iniciado
module.exports = function() {
	return connMysql;
}

		