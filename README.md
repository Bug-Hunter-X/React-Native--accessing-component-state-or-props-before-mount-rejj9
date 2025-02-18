# React Native: Accessing Component State/Props Before Mount

This repository demonstrates a common error in React Native: attempting to access component state or props before the component has fully mounted.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

**Problem:**  Accessing `this.props` or `this.state` within the `constructor` or `componentWillMount` lifecycle methods often leads to `undefined` errors, as these methods execute *before* the component receives its initial props and state.

**Solution:**  The best practice is to perform actions that depend on props or state within the `componentDidMount` lifecycle method, which is guaranteed to run after mounting is complete.