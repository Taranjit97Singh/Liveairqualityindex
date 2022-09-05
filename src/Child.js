import React from 'react';

function Child(props) {
    return (
        <div>
            {props.parentToChild}
        </div>
    );
}

export default Child;