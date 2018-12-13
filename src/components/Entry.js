import React from 'react';

class Entry extends React.Component {
    render() {
        this.inputRef = React.createRef();

        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input type="text" placeholder="More work?" ref={this.inputRef} />
                <input type="submit" value="Add Todo" />
            </form>
        );
    }

    onSubmit(e) {
        const text = this.inputRef.current.value;

        e.preventDefault();
        
        if (!text) {
            return;
        }

        this.props.onSubmit(text);
        this.inputRef.current.value = "";
    }
}

export default Entry;