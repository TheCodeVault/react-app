import React from 'react';
import ReactDom from 'react-dom';

// this always return cross Javascript

function Greeting(){
  return <h4>this is hassan and this is my react component</h4>;
}

ReactDom.render(<Greeting/>, document.getElementById('root'));