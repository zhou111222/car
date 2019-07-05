import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../action/action';
import './con1.scss';
class Con1 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }
    componentDidMount () {
      console.log(addTodo());
    }
    handleClickAdd() {
      this.props.dispatch(addTodo());
    }
    render () {
        
        return (
            <div className="con1" onClick={this.handleClickAdd}>
              +
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

const Con11= connect(
  mapStateToProps,
  mapDispatchToProps
)(Con1);
export default Con11;