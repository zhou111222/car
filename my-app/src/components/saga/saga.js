import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../action/action';
import './saga.scss';

class Saga extends Component {
    constructor (props) {
        super(props);
        this.state = {    
        }
        this.handleClickGet = this.handleClickGet.bind(this);
    }
    handleClickGet() {
      this.props.dispatch(getData());
    }
    render () {
        let {num} = this.props.state;
        return (
            <div className="saga"  onClick={this.handleClickGet}>
              异步
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
  state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const SagaTest= connect(
  mapStateToProps,
  mapDispatchToProps
)(Saga);
export default SagaTest;