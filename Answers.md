- [ ] What problem does the context API help solve?

context api solves the problem of passing props down the app tree. you can provide a value at the top of the tree and call on that value anywhere down the line. 

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are the way we give data to the store.

reducers determine how the state changes in response to the actions we send to the store.

the store is where your state is stored you can access state and up date it from the store.

the store is the single source of truth because it holds the state for our entire app tree.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is like the store in redux it encomasas your whole application and can be accessed from any component that calls on that state.
this is useful for large applications with hundreds of thousands ofusers annd many differant components.

component state is localized to one or just a few comonents and passed via props this is usefull for small apps like our lambda projects because its easier to use but isnt as scalable.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is midle whare that allows us to call action creators that return a function instaid of the standard action object.


- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

context api because its as easy to understand as passing props but is able to skip the intermedeary steps of drilling props down the app tree.