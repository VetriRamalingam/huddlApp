import React from 'react';
import './comments.css';

const comments = (props) => (
    <article className=" comment">
        <div className="header-container">
            <span className="subject-header">Subject :</span>
            <span >{props.data.name}</span>
        </div>
        <div className="header-container">
            <span className="subject-header"> Created By :</span>
            <span> {props.data.email}</span>
        </div>
        <div className="comment-body">
            {props.data.body}
        </div>
    </article>
);
export default comments