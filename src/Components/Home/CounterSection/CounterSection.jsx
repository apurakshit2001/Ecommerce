import React from 'react';
import './CounterSection.css';

const CounterSection = () => {
  return (
    <div className="counter-container">
      <div className="counter-row text-center">
        <div className="counter-col">
          <div className="counter-item">
            <i className="fa fa-code fa-2x"></i>
            <h2 className="counter-number timer count-title">1500</h2>
            <p className="counter-text">Our Customers</p>
          </div>
        </div>
        <div className="counter-col">
          <div className="counter-item">
            <i className="fa fa-coffee fa-2x"></i>
            <h2 className="counter-number timer count-title">1500</h2>
            <p className="counter-text">Happy Clients</p>
          </div>
        </div>
        <div className="counter-col">
          <div className="counter-item">
          <i class="fa-solid fa-truck"></i>
          <h2 className="counter-number timer count-title" >1000</h2>
            <p className="counter-text">Succesfully Deleverd</p>
          </div>
        </div>
        <div className="counter-col">
          <div className="counter-item">
            <i className="fa fa-bug fa-2x"></i>
            <h2 className="counter-number timer count-title" >1B</h2>
            <p className="counter-text">NetWorth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
