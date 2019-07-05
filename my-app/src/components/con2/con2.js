import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduceTodo } from '../../action/action';
import './con2.scss';
class Con2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
        this.handleClickReduce = this.handleClickReduce.bind(this);
    }
    componentDidMount () {
      
    }
    handleClickReduce() {
      // let num = this.props.state.num;
      // num = num - 1;
      this.props.dispatch(reduceTodo());
    }
    render () {
        
        return (
            <div className="con2" onClick={this.handleClickReduce}>
              -
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

const Con22= connect(
  mapStateToProps,
  mapDispatchToProps
)(Con2);
export default Con22;