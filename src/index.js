import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studentList: []
    }
  }
  render() {
    return(
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

