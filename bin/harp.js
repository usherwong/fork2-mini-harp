#!/usr/bin/env node

var app = require('../index.js')(),
parseArgs = require('minimist'),
serveStatic = require('serve-static');
var args = parseArgs(process.argv.slice(2));

//console.log(typeof args.port);
function miniHarp(args){
	var t = args["_"][0];
	console.log(t);
	var root = t?t:process.cwd();
	app.use(serveStatic(root));
	console.log("Starting mini-harp on http://localhost: %d",args.port==true||args.port==undefined?4000:args.port);
	app.listen(args.port==true||args.port==undefined?4000:args.port);
}
miniHarp(args);
