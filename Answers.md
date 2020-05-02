# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a Javascript library primarily used for building user interfaces. It lets us build dynamic, modular, large scale applications. Everything can be a component, from our titles, divs, footers.

1. Describe component state.

States are an object that determines how that component renders & behaves. States start with a default value when a Component mounts. This state can then be altered anytime, usualy based off user events. States are similar to props, but it is private and fully controlled by the component.

1. Describe props.

Props (Properties) are objects that hold data which are passed though from above and lets us pass them to children components. Children components cannot change props.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side Effects is a React Hook that lets us affect something outside the scope of the currect function, like API requests.
To sync effects based off a specific state or prop change by adding and empty array and/or specific props or states you'd like to watch as the useEffects second arguement ie: useEffect(cb,[x,y])
