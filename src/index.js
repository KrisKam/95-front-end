import React, {Component} from "react";
import ReactDOM from "react-dom";
import StudentCards from "./components/StudentCards"

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
      .then(responseJSON => this.setState({studentList: responseJSON.students}))
      .then(() => {console.log(this.state)})
  }

  render() {
    return(
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

