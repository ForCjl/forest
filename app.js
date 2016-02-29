var express = require("express");
var port  = process.env.PORT || 3000;
var app = express();

app.set("views" , "./views");
app.set("view engine" , "jade");
app.listen(port);

console.log(" forest started on port " + port);

app.get("/", function(req, res) {
	res.render("index" ,  {
		title : 'forest 首页'
	});
});

app.get("/movie/:id", function(req, res) {
	res.render("details" ,  {
		title : 'forest 详情页'
	});
});

app.get("/admin/movie", function(req, res) {
	res.render("movie" ,  {
		title : 'forest 后台录入页'
	});
});
app.get("/admin/list", function(req, res) {
	res.render("list" ,  {
		title : 'forest 管理界面'
	});
});

