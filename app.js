// 1)import the dependencies
var express = require("express"); //used for building web api
var mongoose = require("mongoose"); //used to connect mongodb
var cors = require("cors"); //act as middleware known as cross origin resource
var bodyparser = require("body-parser"); //to convert data to json.
var path = require('path');

//2)to use express method assign it to some variable

var app = express();
const route = require('./routes/routes');


//3)define port	

const port = 3000;

//connecting to mongodb
mongoose.connect('mongodb://anchalagarwal:java123@ds135594.mlab.com:35594/contactdata');
mongoose.connection.on('connected', () => {
	console.log("connected to database");
});
mongoose.connection.on('error', (err) => {
	console.log("Error in connection is", err);
})


//5 to use methos app.use
app.use(cors());
app.use(bodyparser.json());
// app.use(express.static(path.join(__dirname,'/client/')));
app.use('/api', route);

//4) bind server to port
app.listen(port, () => {
	console.log("server started at port 3000!")
})

//6 testing server

app.get('/', (req, res) => {
	console.log(">>>>request ", req);
	res.send("anchal agarwal");
})