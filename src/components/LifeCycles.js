// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
/*
Mounting
    constructor
        -applies to class-based components only
        -optional
        -used for:
            -setting up state
            -creating refs
            -method binding

    getDerivedStateFromProps
        -last method called before rendering
        -is also called both before mount and before updating
        -use it to set state according to the initial props
        -Common Use Case: Returning a state object based on the initial props

    render
        -does all the work. 
        -returns the JSX of your actual component

    componentDidMount
        -called after rendering our component for the first time
        -If you need to load data, here’s where you do it. 
        -Don’t try to load data in the constructor or render or anything crazy
        -add event listeners given there is a guarantee components have been rendered
        -Most common usecase: Starting AJAX calls to load in data for your component



Updating
    getDerivedStateFromProps
        -yes - this one again
        -Updating state based on props, when the props themselves aren’t enough
        -has no access to the component via "this"

    shouldComponentUpdate
        -should always return a boolean — an answer to the question, “should I re-render?”
        -is an awesome place to improve performance - determine whether or not to re-render
        -use with caution - React component will not update normally based on condition set
        -Common usecase:  Controlling exactly when your component will re-render
    render
        -again
        -same as before

    getSnapshotBeforeUpdate
        -new addition
        -called between render and the updated component actually being propagated to the DOM
        -Common Use Case: Taking a look at some attribute of the current DOM, 
                and passing that value on to componentDidUpdate
    
    componentDidUpdate
        -called after changes have been commited to the DOM
        -we have access to three things: 
            -the previous props,
            -the previous state, 
            -and whatever value we returned from getSnapshotBeforeUpdate


unmounting
    componentWillUnmount
        -you can cancel any outgoing network requests, or
        -remove all event listeners associated with the component.

errors
    getDerivedStateFromError
        - return the updated state object
        -Don’t use this method for any side effects
        -Most usecase:  Updating state to display an error screen

    componentDidCatch
        - we can now perform any side effects, like logging the error
        -Common use case: Catching and logging errors
    
        
*/