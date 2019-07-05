import React, { Component } from 'react';
import { connect } from 'react-redux';
import './con4.scss';

class Con4 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount () {

    }
    render () {
        let {num} = this.props.state;
        return (
            <div className="con4">
              {num}
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

const Con44= connect(
  mapStateToProps,
  mapDispatchToProps
)(Con4);
export default Con44;