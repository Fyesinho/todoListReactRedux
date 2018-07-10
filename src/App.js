import React, {Component} from 'react';
import './App.css';
import Form from "./Components/Form";
import List from "./Components/List";
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

const store = createStore(combineReducers({
    // Todos:
}));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Form/>
                    <List/>
                </div>
            </Provider>
        );
    }
}

export default App;
