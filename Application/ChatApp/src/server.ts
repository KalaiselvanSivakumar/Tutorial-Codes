import express from "express";

var app = express();

app.use(express.static(__dirname));

app.listen(3020, () => {
	console.log('Listening in the port 3020');
});
