import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      languages: [
        {name: "Python", votes: 0},
        {name: "Go", votes: 0},
        {name: "Javascript", votes: 0},
        {name: "C++", votes: 0},
      ]
    };
  }

  vote(i) {
    let after= [...this.state.languages];
    after[i].votes++;
    this.setState({languages: after});
  }

  render() {
    return (
      <>
      <h1>Vote your language</h1>
      <div class="languages">
        {
          this.state.languages.map((lang, i)=>
            <div key={i} className="language">
              <div className="VoteCount">
                {lang.votes}
              </div>
              <div className="languageName">
                {lang.name}
              </div>
              <button onClick={this.vote.bind(this,i)}>Click Here</button>
            </div>
          )
        }
      </div>
      </>
    )
  }
}

export default App;
