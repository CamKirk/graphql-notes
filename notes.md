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

- How can I maintain multiple different schemas in separate files, then combine them at runtime? It'd be like concatenating a giant string right now. [This seems like a good article?](https://blog.apollographql.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2)

- As i test i set goodbye to Float even though the root object returns Marfa, gives error:  'Float cannot represent non numeric value: "Marfa"'. Also just noticed that the system _always_ returns an object, even if that object has both error and data type properties!

- How do I pass in arguments to the root object functions? [Docs](https://graphql.org/graphql-js/passing-arguments/) indicate that I need to make the query object accept arguments. Let's try with their doc example before moving on.

- Adding a d20 function went off without a hitch! Must remember that when you make a request to the function, you must pass the argument *by name* instead of order. Subtle difference, but that's because we're working in the *SDL* language _instead_ of javascript, as odd as that is. This also explains why passing a plain js object into the .graphql() method doesn't quite work out.

- okay, i'm ready to start playing with a live server; I'm moving server.js to an archive folder then starting a new setup.

- starting from the express+graphQL example, then adding in modular SDL schemas. May have to write an index file that grabs everything?

- running into trouble, I'm getting an `undefined` in the last .then() for data, instead of printing "Hello World". Although It appears that the promise from the first .then() _does_ correctly fire and resolve. It also appears that the header `'Content-Type':'application/json'` is absolutely necessary for the fetch request to be sent without immediately receiving a 400 error. I wonder if i can set the request object body to json on the server side to fix that. 

- hitting the error line number actually opens graphiQL if you have the setting set to true. SUPER COOL GUYS! :D

- Changing the first .then() to an arrow function fixes the previous issue I was having with the data. This means I need to treat the `r` argument as a promise, since this probably is a binding or implicit return issue. I should have noticed the .json() immediately. This is was fixed by simply adding return in front of r.json();

