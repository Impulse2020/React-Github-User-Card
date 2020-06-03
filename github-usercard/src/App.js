import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';



class App extends React.Component {
  constructor() {
    super();
    this.state = {};


  }

  componentDidMount() {
    axios.get('https://api.github.com/users/impulse2020/followers')
      .then(function (Response) {
        console.log(this)
      
      })
      .catch(console.log('error'))
  }


  render() {

    return (
      <div className="Main">
        <h2>here should be some github goodies</h2>
        <Card userData={this.state.user} />
      </div>
    )
  }

}

export default App;
