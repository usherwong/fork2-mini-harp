var createMiniHarp = require("connect")
  , app = createMiniHarp();
//console.log("Starting mini-harp on http://localhost:4000");
module.exports = function(){
	return app;
}

//app.listen(4000);
