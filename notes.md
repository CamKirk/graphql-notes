# Note-taking while playing with graphql docs

- Removing root from graphql call means that the call knows the schema, but not what to pass as the content;

- So root is essentially an object that provides the functionality for resolving what happens at that location? To test:

```javascript
var root = {
    hello:function(){
        return "Paris";
    },
    goodbye:function(){
        return "Marfa";
    }
};
```

- In the graphql call, receive an error: 'Cannot query field "goodbye" on type "Query".' Obviously I need to also ensure that the schema has an appropriate field for the query. This is nice because I know that I (ideally) won't get wonky stuff sent in as a request that can break the server; I do need revisit this for error handling later. (Can i use a .catch method on the graphql promise chain?)

- Since I need to change the Query schema, what all can I add there? [here](https://graphql.org/learn/schema/#scalar-types) is the list of all the types I can use, but I can also pass in query and mutation types in addition to these basic scalar types. I'm understanding types and their interrelations as being a graph model that, while strange at first, is powerful because I only need to maintain the schema regardless of what is on the other side of the interface; additionally there's only a single data endpoint we need to hit from the frontend regardless of what data is requested.

- How can I maintain multiple different schemas in separate files, then combine them at runtime? It'd be like concatenating a giant string right now.

- As i test i set goodbye to Float even though the root object returns Marfa, gives error:  'Float cannot represent non numeric value: "Marfa"'. Also just noticed that the system _always_ returns an object, even if that object has both error and data type properties!

- How do I pass in arguments to the root object functions?