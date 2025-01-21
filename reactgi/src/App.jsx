import { Component } from 'react' //Import React and component to create class-based component
import './App.css'
import BasicInfo from './BasicInfo' //Import BasicInfo component

// VERY EASY:
/*
class App extends Component {
  render() {
    return (
      <div>
        <h1>Basic Info</h1>
        <h4>Name:</h4>
        <p>Angel Duerto</p>
        <h4>Date of Birth:</h4>
        <p>12/20/2004</p>
        <h4>Location:</h4>
        <p>Charlotte</p>
      </div>
    );
  }
}
*/

// EASY: 
/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }
  render() {
    return (
      <div>
        <h1>Basic Info</h1>
        <h4>Name:</h4>
        <p>Angel Duerto</p>
        <h4>Date of Birth:</h4>
        <p>12/20/2004</p>
        <h4>Location:</h4>
        <p>Charlotte</p>
      </div>
    );
  }
}
*/

//MEDIUM:
/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Angel Duerto',
        dateOfBirth: '12/20/2004',
        location: 'Charlotte'
      }
    };
  }
  render() {
    return (
      <div>
        <h1>Basic Info</h1>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}
*/

//HARD:
class App extends Component {
  constructor(props) {
    super(props); //Call parent class's contructor using 'super' to inherit functionality
    //Initialize component's state with array of people
    this.state = {
      people: [
        { name: 'Angel Duerto', dateOfBirth: '12/20/2004', location: 'Charlotte'},
        { name: 'Marco Gonzales', dateOfBirth: '09/10/2002', location: 'New York'},
        { name: 'Melanie Plum', dateOfBirth: '03/05/2000', location: 'Chicago'}
    ]
    };
  }
  
  //For each person in array, render a BasicInfo component
  //Pass person's info as a prop to the BasicInfo component
  //Use 'key' prop with unique value (index)
  render() {
    return (
      <div>
        <h1>Basic Info</h1>
        {this.state.people.map(function (person, index){
          return <BasicInfo key={index} person={person} />
        })}
      </div>
    );
  }
}

export default App 
