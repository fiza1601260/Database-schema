var express = require('express');
var mysql = require('mysql');
var app=express();
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'crime rate detector'
});

//INSERT QUERY
// connection.connect(function(err){
// 	if(err)
// 		throw err;
// 	console.log("Connected");
// 	var sql="INSERT INTO location (locName, longitude ,latitude) VALUES ('Nazimabad', '1234567','98076543')";
// 	connection.query(sql,function(err,result){
// 		if(err) 
// 			throw err;
// 		console.log("1 recorded inserted");
// 	});
// });



//SELECT QUERY
// connection.connect(function(err) {
//   connection.query("SELECT * FROM location", function (err, result, fields) {
//     if (err) 
//     	throw err;
//     console.log(result);
//   });
// });
// app.listen(2000);


//UPDATE QUERY
// connection.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE location SET longitude = '23456789' WHERE locName = 'Nazimabad'";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });



//DELETE QUERY
// connection.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM location WHERE locName = 'Nazimabad'";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });