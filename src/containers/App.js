import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField } from "../actions";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            // searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }

    // for custom function
    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value });
    // }
    
    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        
        return !robots.length ?
        <h1>Loading...</h1> :
        (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)