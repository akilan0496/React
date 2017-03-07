#### Syntax:

React.createClass
	
    var MyComponent = React.createClass({ });

React.Component
	
    export default class MyComponent extends React.Component{ }

#### getInitialState() :

React.createClass: Yes

React.Component: No
	
#### constructor() :
React.createClass: No

React.Component: Yes
	
#### propTypes  Syntax :
React.createClass

	var MyComponent = React.createClass({
		propTypes: { }
	});

React.Component

	export default class MyComponent extends React.Component{ }
	MyComponent.prototypes = { }

	
#### Default Properties : 
React.createClass

	var MyComponent = React.createClass({
		getDefaultProps(): { return {} }
	});

React.Component

	export default class MyComponent extends React.Component{ }
	MyComponent.defaultProps = { }
	
#### state : 
React.createClass

	State changes can be made inside getInitialState() function
	
React.Component

	State changes can be made inside constructor(props) function
	
#### this :  
React.createClass

	Automatically bind 'this' values.
	Ex: <div onClick={this.handleClick}></div>
	'this' can be accessed by default in handleClick function

React.Component

	whereas here we need to bind explicitly,
	Ex: <div onClick={this.handleClick.bind(this)}></div>
