import React, { Component } from 'react';
import './App.css';
import Feed from './Feed/Feed';

class App extends Component {
  state = {
    feeds: [
      {
        user: "User 1",
        value: "Something user 1 would say...",
        id: 1,
        timestamp: "1502580722572",
        timeZoneOffset: "300",
        likes: 3
      },
      {
        user: "User 2",
        value: "Something user 2 did say...",
        id: 2,
        timestamp: "1502180722530",
        timeZoneOffset: "300",
        likes: 1
      }
    ]
  }

  incrementLikesHandler = (feedIndex) => {
    const feeds = [...this.state.feeds];
    let oldLikes = feeds[feedIndex].likes;
    feeds[feedIndex].likes = oldLikes + 1;
    this.setState({feeds:feeds});
  }

  addNewUserFeedHandler = (event) => {
    if(event.key === 'Enter') {
      const feeds = [...this.state.feeds];
      let newFeed = {
              user: "New User",
              value: event.target.value,
              id: 3,
              timestamp: "1502580722572",
              timeZoneOffset: "300",
              likes: 0
      }
      feeds[feeds.length + 1] = newFeed;
      this.inputText.value = "";
      this.setState({feeds:feeds});
    }
  }

  render() {
    let feeds = null;
    feeds = (
      <div className="Feed-container">
        {this.state.feeds.map((feed, index) => {
          return <Feed 
            value = {feed.value} 
            user = {feed.user} 
            likes = {feed.likes}
            click = {this.incrementLikesHandler.bind(this, index)} />
        })}
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Social Media Feed</h1>
        </header>
        <div className="Feed-container">
          {feeds}
          <div>
            <input className="Feed-new" type="text" placeholder="Enter New Feed value" ref={el => this.inputText = el} 
              onKeyDown={this.addNewUserFeedHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
