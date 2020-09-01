import React, { Component } from 'react';
import { API } from '../../apiconfig';
import Post from '../post/post';
// import {} from 'react-router-dom';
import './posts.css';

class posts extends Component {
    constructor() {
        super()
        this.state = {
            postsArray: [],
            userArray: [],
            search: ''
        }
    }
    componentDidMount() {
        this.fetchPosts()
    }
    fetchPosts = () => {
        fetch(API + '/posts', {
            method: 'get'
        }).then((response) => {
            return response.json();
        }).then((res) => {
            this.fetchUserDetails()
            let tempArray = res.slice(0, 80);
            console.log(tempArray)
            this.setState({
                postsArray: tempArray
            })
        })
    }
    fetchUserDetails = () => {
        fetch(API + '/users', {
            method: 'get'
        }).then((response) => {
            return response.json();
        }).then((res) => {
            let tempArray = res
            console.log(tempArray)
            this.setState({
                userArray: tempArray
            })
        })
    }
    handlePostClick = (postid, usr) => {
        const post = this.state.postsArray.find(p => {
            return p.id === postid;
        });
        console.log(post)
        this.props.history.push({
            pathname: '/fullpost',
            state: {
                postdata: post,
                username: usr
            }
        })
    }
    handleUserClick = (usr) =>{
        const user = this.state.userArray.find( u =>{
            return u.username === usr;
        });
        this.props.history.push({
            pathname: '/userpage',
            state: {
                userdata: user
            }
        })
    }
    handleSearch = (e) =>{
        this.setState({
            search: e.target.value
        });
    }
    render() {
        
        const usernameArray = this.state.userArray.map((res) => {
            return { "userId": res.id, "username": res.username }
        })
        let postsArrayData = this.state.postsArray.map(res => ({ ...res, ...usernameArray.find(res2 => res2.userId === res.userId) }))
        // console.log(postsArrayData)
        if( this.state.search){
            postsArrayData = postsArrayData.filter( data =>{
               return data.username.toLowerCase().includes(this.state.search.toLowerCase())
            })
        }
        const postsElement = postsArrayData.map((res) => {
            return <Post key={res.id} data={res} postclicked={() => this.handlePostClick(res.id, res.username)} userclicked= {() => this.handleUserClick(res.username)}/>
        })
        return (
            <div className="HomeContainer">
                <h2>Posts</h2>
                <div className="Searchbar">
                    <input placeholder="Search by Author" value={this.state.search} onChange= {(e) => this.handleSearch(e)} />
                </div>
                <div className="Posts">
                    {postsElement}
                </div>
            </div>
        )
    }
}
export default posts