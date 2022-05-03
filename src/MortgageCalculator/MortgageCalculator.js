import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';

import './MortgageCalculator.css';
import { Col } from 'react-bootstrap';

class SumForm extends React.Component {
  constructor(props) {
    super(props);
    this.requestMortgage = props.requestMortgage.requestMortgage
    console.log(this.requestMortgage)
    this.state = {
      totalsum: 100000,
      annual_percent: 10,
      term: 36,
      residual_value: 1000,
      monthly_payment: "?"
    }

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChangeTotalsum = this.handleChangeTotalsum.bind(this);
    this.handleChangeAnnualPercent = this.handleChangeAnnualPercent.bind(this);
    this.handleChangeTerm = this.handleChangeTerm.bind(this);
    this.handleChangeResidualValue = this.handleChangeResidualValue.bind(this);
    this.getNewMonthlyValue = this.getNewMonthlyValue.bind(this);
  }

  handleChangeTotalsum(event) {
    this.setState({ totalsum: parseFloat(event.target.value) });

  }

  handleChangeAnnualPercent(event) {
    this.setState({ annual_percent: parseFloat(event.target.value) });

  }

  handleChangeTerm(event) {
    this.setState({ term: parseFloat(event.target.value) });

  }

  handleChangeResidualValue(event) {
    this.setState({ residual_value: parseFloat(event.target.value) });
  }

  getNewMonthlyValue() {
    let S = this.state.totalsum;
    let P = this.state.annual_percent / 12;
    let n = 12;
    let t = this.state.term;
    let RV = this.state.residual_value
    // let monthly_payment = S * (P + (P /(((1+P)**t) -1)))
    let monthly_payment = ((S + RV) / (2 * P * t) + (S - RV)) / t
    return Math.round(monthly_payment * 100) / 100
  }

  handleSubmit(event) {
    this.requestMortgage(this.state)
    event.preventDefault();
  }

  onBlur(event) {
  }

  render() {
    return (

      <Container>
        <Row>
          <h3> Mortgage calculator </h3>
        </Row>

        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col className='col-sm'>
              <InputGroup className="mb-3">
                <InputGroup.Text id="totalsum">Loan Amount $: </InputGroup.Text>
                <FormControl
                  placeholder="1000"
                  aria-label="totalsum"
                  aria-describedby="totalsum"
                  value={this.state.totalsum}
                  onChange={this.handleChangeTotalsum}
                  onBlur={this.onBlur}
                />
              </InputGroup>
            </Col>
            <Col className='col-sm'>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Annual interest rate (%): </InputGroup.Text>
                <FormControl
                  placeholder="1"
                  aria-label="basic-addon2"
                  aria-describedby="basic-addon2"
                  value={this.state.annual_percent}
                  onChange={this.handleChangeAnnualPercent}
                />
              </InputGroup>
            </Col>
            <Col className='col-sm'>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">Term (months): </InputGroup.Text>
                <FormControl
                  placeholder="12"
                  aria-label="basic-addon3"
                  aria-describedby="basic-addon3"
                  value={this.state.term}
                  onChange={this.handleChangeTerm}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className='col-sm'>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon4">Residual Value $: </InputGroup.Text>
                <FormControl
                  placeholder="1000"
                  aria-label="basic-addon4"
                  aria-describedby="basic-addon4"
                  value={this.state.residual_value}
                  onChange={this.handleChangeResidualValue}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <h2>Monthly payment <input id="monthly payment" value={this.getNewMonthlyValue()} readOnly /> $</h2><div>  </div>
          </Row>
          <Row>
            {/* <Button variant="primary" onChange={this.handleChange}>Recalculate</Button> */}
            <Button variant="secondary" onClick={this.handleSubmit}>Submit</Button>
          </Row>

        </form>
      </Container>
    );
  }
}


const MortgageCalculator = (requestMortgage) => (
  <SumForm requestMortgage={requestMortgage}>
  </SumForm>
);

export default MortgageCalculator;
