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
    axios.get('https://api.github.com/users/impulse2020')
      .then(response => {
        this.setState({user:response.data.login,name:response.data.name,picture:response.data.avatar_url, bio:response.data.bio,location:response.data.location})
        console.log(response.data)
      })
      .catch(console.log('error'))
  }


  render() {

    return (
      <div className="Main">
        <h2>here should be some github goodies</h2>
        <Card user={this.state.user} name={this.state.name} bio={this.state.bio} location={this.state.location} picture={this.state.picture}/>
      </div>
    )
  }

}

export default App;
