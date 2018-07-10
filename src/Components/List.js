import React, {Component} from 'react';
import store from "../store";


class List extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
        store.subscribe(() => {
            this.setState({
                list: store.getState().list
            })
        })
    }
    render() {
        return(
            <ul>
                {this.state.list && this.state.list.map((value, index) => <li key={index}>{value}<button>Eliminar</button></li>)}
            </ul>
        )
    }
}

export default List;