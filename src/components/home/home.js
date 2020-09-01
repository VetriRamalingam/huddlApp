import React, { Component } from 'react';
import Posts from '../posts/posts';
import { BrowserRouter, Route } from 'react-router-dom';
import Userpage from '../userpage/userpage';
import Fullpost from '../fullpost/fullpost';

class home extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/userpage" component={Userpage} />
                    <Route exact path="/fullpost" component={Fullpost} />
                </div>
            </BrowserRouter>
        )
    }

}
export default home