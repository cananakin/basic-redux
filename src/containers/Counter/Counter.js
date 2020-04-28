import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter( 5 )}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.results.map(result => (
                            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{ result.value }</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter:  () => dispatch(Actions.increment()),
        onDecrementCounter:  () => dispatch(Actions.decrement()),
        onAddCounter:  (value) => dispatch(Actions.add(value)),
        onSubtractCounter:  (value) => dispatch(Actions.subtract(value)),
        onStoreResult: (counter) => dispatch(Actions.storeResult(counter)),
        onDeleteResult: (id) => dispatch(Actions.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);