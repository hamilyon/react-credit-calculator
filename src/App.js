import React from 'react';

import './App.css';

import MortgageCalculator from './MortgageCalculator/MortgageCalculator';
import Result from './MortgageCalculator/Result';

import requestMortgage from './MortgageCalculator/MortgageCalculatorService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "index"      
    }

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.requestMortgage = requestMortgage.bind(this);
  }

  render() {
    if (this.state.currentPage == "index") {
      return (
          <MortgageCalculator requestMortgage={this.requestMortgage}>
          </MortgageCalculator>
      );
    } else if (this.state.currentPage == "contactUs") {
      return (<h3> Thank you for your business! </h3>)
    } else if (this.state.currentPage == "result") {

      return (<Result mortgage={this.state}></Result> )
    }
  }
}

// const App = () => (

export default App;
