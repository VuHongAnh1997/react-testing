React Testing Tutorial - 16 - What to test

What to test
Test component renders
Test component renders with props
Test component renders in different states
Test component reacts to events

What not to test
Implementation details
Third party code
Code that is not important from a user point of view

React Testing Tutorial - 17 - RTL Queries

Every test we write generally involves the following basic steps

1. Render the component
2. Find an element rendered by the component
3. Assert against the element found in step 2 which will pass or fail the test

To render the component, we use the render method from RTL
For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom
