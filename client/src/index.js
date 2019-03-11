import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/ui-elements/Button';
import Footer from './components/Footer/Footer';


console.log(`Your port is ${process.env.PORT}`);

const HelloWorld = React.createElement('h1', null, 'Hello World');

const FunctionalComponet = () => <h2>This is Functional Component</h2>

class ReactComponet extends React.Component {
  render() {
    return (
      <h2>This is React Component</h2>
    )
  }
}

class ReactPureComponent extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>This is React Pure Component</h2>
        <p>Pure component is more performant version of Component</p>
        <p>When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on
          the other hand won’t compare current props and state to next out of the box. Thus, the component will
          re-render by default whenever shouldComponentUpdate is called.</p>
      </div>
    )
  }
}

const App = () => {
  return (
    <React.Fragment>
      <h1>Task 1 & 2</h1>
      <FunctionalComponet/>
      <ReactComponet/>
      <ReactPureComponent/>
      <h2>This is my secret: {process.env.REACT_APP_MY_SECRET}</h2>
      <Footer />
      <Button
        message="Click Me!"
      />
    </React.Fragment>
  )
};


ReactDOM.render(<App/>, document.getElementById('root'));
