import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';

import './MortgageCalculator.css';
import { Col} from 'react-bootstrap';

class Result extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
      console.log(this.props)
    return (
        <>
        <li>
        Loan Amount $:  {this.props.mortgage.totalsum}
        </li>
        
        <li>
        Annual interest rate (%): {this.props.mortgage.annual_percent}
        </li>
        
        <li>
        Term: {this.props.mortgage.term} months
        </li>
        
        <li>
        Residual Value $: {this.props.mortgage.residual_value}
        </li>

        <li>
        Monthly payment $: {this.props.mortgage.monthly_payment}
        </li>
        </>
    )
  }
}

export default Result;