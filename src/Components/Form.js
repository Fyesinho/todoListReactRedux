import React, {Component} from 'react';
import store, {addTodo} from '../store';
import {connect} from 'react-redux';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            item: []
        };
    }

    addTodo = e => {
        e.preventDefault();
        const {item} = this.state;
        addTodo({...item, id: Math.random().toString(36)});
    };

    changeItem = ({target}) => {
        store.dispatch({
            type: "ADD_ITEM",
            item_temp: target.value
        });
    };

    render() {
        return(
            <form onSubmit={this.addTodo}>
                <input type="text" onChange={this.changeItem} placeholder="Ingresa algo..."/>
                <button type="submit">Guardar</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    const {list} = state;
    return list;
};

export default connect(mapStateToProps)(Form);