import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <ul>
                {list && list.map((value) => <li key={value.id}>{value.currentItem}
                    <button>Eliminar</button>
                </li>)}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    const {Todos} = state;
    return Todos;
};

export default connect(mapStateToProps)(List);