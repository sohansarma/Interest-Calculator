 import React, { Component } from "react";
import SliderAmount from "./SliderAmount";
import SliderMonth from "./SliderMonth";
import TextBoxAmount from "./TextBoxAmount";
import TextBoxMonth from "./TextBoxMonth";
import Image from './ImageRender'

const fetchValuesFromAPI = (noOfMonths, amount) =>
  fetch(
    `https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${noOfMonths}`
  ).then(res => res.json());

 const RANGE = {
 	"noOfMonths": {
 		min: 6,
 		max: 24,
 	},
 	"amount": {
 		min: 500,
 		max: 5000,
 	}
 }

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfMonths: 12,
      amount: 2000,
      loading: false,
      loaded: false,
      data: {}
    };
  }

  componentDidMount() {
    this.handleFetch();
  }

  handleUpdates = (change, type) => {
  	  const bounds = RANGE[type];
    this.setState(
      {
        [type]: change
      },
      () => this.handleFetch()
    );
  };

  handleFetch = () => {
    const { amount, noOfMonths } = this.state;
    console.log("Hewwww");
    this.setState(
      {
        loading: true,
        data: {}
      },
      () => {
        fetchValuesFromAPI(noOfMonths, amount).then(json => {
          this.setState({
            loading: false,
            data: json
          });
        });
      }
    );
  };

  render() {
    const { amount, noOfMonths, data, loading } = this.state;
    const amount_ = {amount};
    console.log("amount",amount);
    console.log("intere")
    console.log(data);
    return (
      <div className="d-flex">
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="Body_contents">
            <div className="d-flex header_style details_header">Amount Slider</div>
            <SliderAmount
              amount={amount}
              handleUpdates={update => this.handleUpdates(update, "amount")}
            />
            <TextBoxAmount 
            amount={amount} 
            handleUpdates={update => this.handleUpdates(update, "amount")}/>
          </div>

          <div className="Body_contents">
            <div className="d-flex header_style details_header">Month Slider</div>
            <SliderMonth
              amount={noOfMonths}
              handleUpdates={update => this.handleUpdates(update, "noOfMonths")}
            />
            <TextBoxMonth 
            amount={noOfMonths}
            handleUpdates={update => this.handleUpdates(update, "noOfMonths")} />
          </div>
        </div>
        <div className="d-flex justify-content-center rendered_data">
          {data.interestRate && (
            <div>
            <div className="details_header">DETAILS</div>
              <div className="info">
                Your Interest Rate of ${amount} for {noOfMonths} Months will be{" "}
                {data.interestRate}%.
              </div>
              <div className="info">
                Your Monthly Payment will be ${data.monthlyPayment.amount}.
              </div>
            </div>
          )}
        </div>
        </div>
        <div>
         <Image  />
        </div>
      </div>
    );
  }
}

export default Navbar;
