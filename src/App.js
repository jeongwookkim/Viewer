import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, StudyLesson, ReadContent, Epub } from './Page';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="Nav">
                <Link className="Link" to="/">홈</Link>
                <Link className="Link" to="/StudyLesson">영상 보기</Link>
                <Link className="Link" to="/ReadContent">Epub 보기</Link>
                
          </div>
          <div className="Main">
          <Route exact path='/' component={Home}/>
          <Route path='/StudyLesson' component={StudyLesson}/>
          <Route path='/ReadContent' component={ReadContent}/>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;