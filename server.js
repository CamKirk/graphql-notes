var express = require('express');
var graphqlHTTP = require('express-graphql');
var buildSchema = require('graphql').buildSchema;

var app = express();

var schema = buildSchema(`
    type Query {
        hello:String
    }
`);

var root = {
    hello: function(){
        return "Hello World";
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false
})).listen(3000,function(){
    console.log(process.platform);
});

app.use(express.static('./public'));

app.get('/');