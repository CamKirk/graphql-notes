var gq = require('graphql');
var buildSchema = gq.buildSchema;

//required schema for requests
var schema = buildSchema(`
    type Query {
        hello: String,
        goodbye: String
    }
`);

// root value passed to all resolve functions in graphql call
var root = {
    hello:function(){
        return "Paris";
    },
    goodbye:function(){
        return "Marfa";
    }
};
//calling graphql, passing schema, the request string '{hello}', and the root object.
gq.graphql(schema, '{goodbye, hello}', root).then(function(res){
    console.log(res);
});