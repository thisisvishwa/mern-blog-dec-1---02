```javascript
import React from 'react';

class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
    }

    componentDidMount() {
        // Fetch tags from API
        fetch(`${API_URL}/tags`)
            .then(response => response.json())
            .then(data => this.setState({ tags: data }));
    }

    render() {
        return (
            <div id="tag-list">
                {this.state.tags.map(tag => (
                    <div key={tag.id} className="tag">
                        {tag.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default Tag;
```