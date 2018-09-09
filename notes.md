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