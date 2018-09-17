import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studentList: []
    }
  }
  
  componentDidMount() {
    return fetch("https://g95-hometown.herokuapp.com/")
      .then(response => response.json())
      .then(responseJSON => this.setState({studentList: responseJSON.data}))
      .then(something => {console.log(this.state)})
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

