import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom'

const url = "https://loginregisterapi.herokuapp.com/api/auth/userInfo"
class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        this.setState({userData:''});
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userData');
        this.props.history.push('/')

    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArry = [data.name,data.email,data.phone,data.role];
            sessionStorage.setItem('userData', outputArry);
            return(
                <>
                    <div id="loginHi">Hi {this.state.userData.name}</div>
                    &nbsp;
                    <div id="loginbox" onClick={this.handleLogout}>Sign Out</div>
                </>
            )
        }else{
            return(
                <>
                    <Link to="/login" id="login">
                        <span > Sign In</span>
                    </Link> &nbsp;
                    <Link to="/register" >
                        <span id="loginbox">Create an account</span>
                    </Link>
                </>
            )
            
        }
    }
    render(){
        return(
            <header id="header">
                <div id="logo_main">
                    <Link to="/"><h1 id="headingListing">E!</h1></Link>
                    <Link to="/viewOrder"><span className="orders" data-toggle="modal" data-target="#myModal"> Orders</span></Link>
                </div>
                <div className="logoRight">
                    {this.conditionalHeader()}
                    
                </div>
            </header>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => { 
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);

