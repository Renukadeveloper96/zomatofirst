import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Search.css';

const locationUrl = "https://zomatojulyapi.herokuapp.com/location";
const restUrl = "https://zomatojulyapi.herokuapp.com/restaurant?stateId=";

class Search extends Component {
    constructor(props) {
        super()

        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })
    }

    handleRest = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        console.log(this.state.restaurant)
        return(
             <div id="search">
            <div class="bike">
                <img src="images/logo.svg" style={{height:'150px',width:'150px'}}/>
            </div>
            <div id="logo">
                <span>e!</span>
            </div>
            <div id="heading">
                <span className="COLORSF">Find</span> <span class="Restaurant">The Best Reståurânts,</span><span className="COLORSF">Cafés and bärs</span> <span id="usercity"></span>
            </div>
            <div id="dropdown">
                <select id="city" onChange={this.handleCity} >
                    <option>Please type a location</option>
                    {this.renderCity(this.state.location)}
                </select>
                <select id="restaurants" onChange={this.handleRest}placeholder='Search for restaurants'>
                    {this.renderRestaurants(this.state.restaurant)}
                </select>
                
            </div>
        </div>
        )
    }

    // on page load we have to call api
    componentDidMount(){
        fetch(locationUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search);