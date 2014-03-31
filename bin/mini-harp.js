#!/usr/bin/env node

var app = require('../index.js')(),
parseArgs = require('minimist'),
serveStatic = require('serve-static');
var args = parseArgs(process.argv.slice(2));

//console.log(typeof args.port);
function miniHarp(args){
	app.use(serveStatic(process.cwd()));
	app.use(function(req,res,next){
		var r = req.url.split('/')[1];
		if(r == 'current-time'){
			res.end(new Date().toISOString());
		}else{
			res.end('Can not Get: '+r);
		}
	});
	console.log("Starting mini-harp on http://localhost: %d",args.port==true||args.port==undefined?4000:args.port);
	app.listen(args.port==true||args.port==undefined?4000:args.port);
}
miniHarp(args);
