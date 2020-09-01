import React, {Component} from 'react';
import {API} from '../../apiconfig';
import Comments from './comments/comments'
import './fullpost.css'

class fullpost extends Component{
    constructor(){
        super()
        this.state= {
            commentsArray: []
        }
    }
    componentDidMount(){
        console.log(this.props.location.state.postdata)
        this.fetchComentsbyID(this.props.location.state.postdata.id)
    }
    fetchComentsbyID = (postid) =>{
        fetch(API + '/comments?' + new URLSearchParams({
            postId: postid
        }), {
            method: 'get'
        }).then((response) => {
            return response.json();
        }).then((res) => {
            let tempArray = res
            console.log(tempArray)
            this.setState({
                commentsArray: tempArray
            })
        })
    } 
    goback =() =>{
        this.props.history.push("/");
    }
    render(){
        const data = this.props.location.state.postdata;
        const username = this.props.location.state.username;
        const Commentelement = this.state.commentsArray.map((cdata) => {
            return <Comments key= {cdata.id} data={cdata} />
        })
        return(
            <div className="fullpost">
                <div className="header">
                Title : {data.title}
                <div className="header-button"><button onClick= {this.goback}>Go back</button></div>
                
                </div>
                <div>
                    Created By : {username}
                </div>
                <div className="body-container">
                    {data.body}
                </div>
                <div className="commentcontainer">
                    <span>Comments:</span>
                    <div>
                        {Commentelement}
                    </div>
                </div>
                <div className="footer">
                <button onClick= {this.goback}>Go back</button>
                </div>
            </div>
        )
    }
}
export default fullpost