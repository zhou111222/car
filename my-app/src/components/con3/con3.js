import React, { Component } from 'react';
import { connect } from 'react-redux';
import './con3.scss';
import Con4 from '../con4/con4';

class Con3 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount () {
       
    }
    render () {
        
        return (
            <div className="con3">
              <div className="solution">最后结果为 -- {this.props.state.num}</div>
              <div className="solution1">异步数据为 -- {this.props.state.data.name}</div>
              <Con4/>
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

const Con33= connect(
  mapStateToProps,
  mapDispatchToProps
)(Con3);
export default Con33;