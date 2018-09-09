var gq = require('graphql');
var buildSchema = gq.buildSchema;

//required schema for requests
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// root value passed to all resolve functions in graphql call
var root = {
    hello: function(){ return 'Hello world!'}
};

//calling graphql, passing schema, the request string '{hello}', and the root object.
gq.graphql(schema, '{hello}', root).then(function(res){
    console.log(res);
});