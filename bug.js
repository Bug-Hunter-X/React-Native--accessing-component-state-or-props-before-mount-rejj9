This error occurs when you try to access a component's state or props before it has mounted.  This often happens in lifecycle methods like `componentWillMount` or within the constructor, which run *before* the component receives its props and state. 

**Example:**
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.someProp); // Error: this.props is undefined
  }
  render() {
    return <Text>Hello</Text>;
  }
}
```