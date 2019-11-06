import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="mt-3 mb-2">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <h4 className="header">
                            <label htmlFor="search">Video Search</label>
                        </h4>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange} 
                            className="form-control" 
                            id="search" 
                            aria-describedby="searchField" 
                            placeholder="Search"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;