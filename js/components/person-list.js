import React from 'react';
import Person from './person';

Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};

export default function PersonList() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    imageUrl="https://scontent.cdninstagram.com/t51.2885-19/11377856_626372960798542_1396263462_a.jpg"
                    job="Male model" />
            <Person name="Donald Knuth"
                    job="Clever chap" />
        </div>
    );
}
