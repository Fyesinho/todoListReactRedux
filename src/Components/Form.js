import React, {Component} from 'react';
import {addItem, addTodo} from '../store';
import {connect} from 'react-redux';

class Form extends Component {
    changeClick = e => {
        e.preventDefault();
        const {currentItem, addTodo} = this.props;
        addTodo({currentItem, id: Math.random().toString(36)});
    };

    changeItem = ({target}) => {
        const {addItem} = this.props;
        addItem(target.value);
    };

    render() {
        return (
            <form onSubmit={this.changeClick}>
                <input type="text" onChange={this.changeItem} placeholder="Ingresa algo..."/>
                <button type="submit">Guardar</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    const {Todos} = state;
    return Todos;
};

const mapDispatchToProps = dispatch => ({
    addTodo: payload => dispatch(addTodo(payload)),
    addItem: payload => dispatch(addItem(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(Form);