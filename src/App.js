import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage'
import BatchList from './components/batches/BatchList'
import BatchOverview from './components/batches/BatchOverview'
import StudentPage from './components/students/StudentPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Student Evaluation Tool</h1>
          </header>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/batches" component={BatchList}/>
          <Route exact path="/batches/:id" component={BatchOverview}/>
          <Route exact path="/batches/:batchId/students/:studentId" component={StudentPage}/>
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
