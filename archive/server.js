var gq = require('graphql');
var buildSchema = gq.buildSchema;

//required schema for requests
var schema = buildSchema(`
    type Query {
        hello: String,
        goodbye: String
        d20(numDice: Int!): [Int]
    }
`);

// root value passed to all resolve functions in graphql call
var root = {
    hello:function(){
        return "Paris";
    },
    goodbye:function(){
        return "Marfa";
    },
    d20:function(args){
        var output = [];

        for (let index = 0; index < args.numDice; index++) {
            output.push(Math.floor(Math.random()*20)+1);
        }
        
        return output;
    }
};
//calling graphql, passing schema, the request string '{hello}', and the root object.
gq.graphql(schema, '{d20(numDice: 3), hello}', root).then(function(res){
    console.log(res);
});