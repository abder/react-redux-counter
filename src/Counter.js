import React from "react";
import { connect } from "react-redux";

// Action Creators
const increase = { type: "increase" };
const decrease = { type: "decrease" };

// Map store value with props
const mapStateToProps = state => {
  return {
    countValue: state.count
  };
};

// Map dispatch with props
const mapDispatchTopProps = dispatch => {
  return {
    increaseCount: function() {
      return dispatch(increase);
    },
    decreaseCount: function() {
      return dispatch(decrease);
    }
  };
};

const Counter = props => {
  return (
    <div className='container'>
      <button className='buttons' onClick={props.decreaseCount}>
        -
      </button>
      <span>{props.countValue}</span>
      <button className='buttons' onClick={props.increaseCount}>
        +
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchTopProps)(Counter);
