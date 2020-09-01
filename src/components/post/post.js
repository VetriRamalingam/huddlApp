import React from 'react';
import './post.css';

const post = (props) => (
    <article className="Post">
        <div className="TitleContainer" onClick={props.postclicked}>
        <span>{props.data.title}</span>
        </div>
        <div className="UserDetails" onClick={props.userclicked}>
                {props.data.username}
        </div>
    </article>
);

export default post