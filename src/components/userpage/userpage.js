import React, { Component } from 'react';
import './userpage.css';

class userpage extends Component {

    goback = () => {
        this.props.history.push("/");
    }
    render() {
        const userdata = this.props.location.state.userdata
        return (
            <div className="Container">
                <div className="header">
                    User Details
                <div className="header-button"><button onClick={this.goback}>Go back</button></div>

                </div>
                <div className="User-Container">
                    <div className="title">
                        UserName
                    </div>
                    <div className="element-Container">
                        :   {userdata.username}
                    </div>
                </div>
                <div className="User-Container">
                    <div className="title">
                        Full Name
                    </div>
                    <div className="element-Container">
                        :   {userdata.name}
                    </div>
                </div>
                <div className="User-Container">
                    <div className="title">
                        Email
                    </div>
                    <div className="element-Container">
                        :    {userdata.email}
                    </div>
                </div>
                <div className="User-Container">
                    <div className="title">
                        Website
                    </div>
                    <div className="element-Container">
                        :   {userdata.website}
                    </div>
                </div>
                <div className="Company-Container">
                    <div className="title">
                        Company Details
                    </div>
                    <div className="C-Container">
                        <div className="C-row">
                            <div className="Ctitle">
                                Name
                            </div>
                            <div className="Celement">
                                :   {userdata.company.name}
                            </div>
                        </div>
                        <div className="C-row">
                            <div className="Ctitle">
                                Business
                            </div>
                            <div className="Celement">
                                :   {userdata.company.bs}
                            </div>
                        </div>
                        <div className="C-row">
                            <div className="Ctitle">
                                Catch Phrase
                            </div>
                            <div className="Celement">
                                :   {userdata.company.catchPhrase}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={this.goback}>Go back</button>
                </div>
            </div>
        )
    }
}
export default userpage