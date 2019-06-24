1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map, .filter, .concat and .filter are array/object methods that do not produce side effects. Object.assign can be used to create a new object and extend the properties of another. Or you could just use the spread operator.

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    First, the store is known as the single source of truth because it holds all of the data state in our app. We can always reference the state of our app in store. Actions is are what we use to send a signal to our reducer that we want to change the state of something in store. In between our actions and store is our reducer. Our reducer interprets the actions sent and uses logic to change the state, which then re-renders the app(in react) and the cycle starts over.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    In redux it is convention to use important app data in in the Application State, which is stored in the redux store. This is data that is necessary for large parts of the application. Component State is normally used for things less vital, such as UI changes.

4. What is middleware?

    Middleware is basically just a function that is run in the middle of two other functions. It has many uses such as authentication. In our redux app our middleware runs after our actions and before our reducers.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    In Redux normally we are only allowed to return objects from our action-creators. Redux-thunk basically makes it possible to return a function that evaluates to something inside our action-creators. This makes it possible to fetch-data inside of our actions or many other things.

6. Which `react-redux` method links up our `components` with our `redux store`?

    The react-redux method Connect will link our component to our redux store. You can then choose which parts of the store you would like to use in that component by passing in a function as the first parameter. Then in your component make an instance of that function and return an object of the needed key: value pairs from your store.