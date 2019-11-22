import React from 'react';

class SearchBar extends React.Component{
    state = {
        term : ''
    };

    onInputChange = event => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault();

        // we will callback from parent
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className='Search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Search Videos</label>
                        <input type='text' value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;