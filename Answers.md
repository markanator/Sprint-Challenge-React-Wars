# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a Javascript library strictly used for building user interfaces. Everything can be a component, from our titles,text, footers.

2. Describe component state.

State is a snapshot of one point in time. States start with a default value when a Component mounts. This state can then be altered anytime, usualy based off user events.

3. Describe props.

Props (Properties) are a Component's data, key:valaues are passed though from above and lets us pass them to children components.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side Effects are React Hooks that let us affect something outside the scope of the currect function, like API requests.
You sync effects based off a specific state or prop change by adding and empty array and/or specific props or states you'd like to watch as the useEffects second arguement ie: useEffect(cb,[x,y]);