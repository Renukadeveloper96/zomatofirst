import React,{Component} from 'react';

import axios from 'axios';
import './details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuDisplay'

const url = "https://zomatojulyapi.herokuapp.com/details"
const menu = "https://zomatojulyapi.herokuapp.com/menu"

class Details extends Component {
    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:''
        }
    }

    addToCart = (data) => {
        console.log("data in card",data)
        this.setState({userItem:data})

    }

    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        // console.log(">>>>details state",this.state.userItem)
        //let details = this.state.details
        let {details} = this.state
        return(
            <>
              
                <br/>
                        <div className="container">
                        <div className="panel-body">
                            <img src={details.restaurant_thumb} alt={details.restaurant_name} className="sliderImage"/>
                             
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Menu</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                <span className=" restaurantname"> About this place</span>

                                <h2><div className="restaurantname">
                                Cuisine
                                </div></h2>

                                <div className="restaurantname1">
                                  {details.restaurant_name}
                               </div>
                               <h2><div className="restaurantname">
                               Average Cost
                                </div></h2>

                                <div className="restaurantname1">
                                ₹ {details.cost}<span class="rating_txt">({details.average_rating})
                                        ({details.rating_text})
                                </span>
                               </div>
                               <h2><div className="restaurantname">
                               User Rating
                                </div></h2>

                                <div className="restaurantname1">
                                <i class="fa fa-star-o star" style={{"color":"yellow"}}></i>&nbsp;
                                    <i class="fa fa-star-o star" style={{"color":"yellow"}}></i>&nbsp;
                                    <i class="fa fa-star-o star" style={{"color":"yellow"}}></i>&nbsp;
                                    <i class="fa fa-star-o star" style={{"color":"gray"}}></i>&nbsp;
                                    <i class="fa fa-star-o star" style={{"color":"gray"}}></i>&nbsp;
                            
                               </div>

                               
                                </TabPanel>
                               <TabPanel>
                                   <h2>Menu</h2>
                                <MenuDisplay menudata={this.state.menuList}restId={this.props.match.params.restId}
                                finalOrder={(data)=>{this.addToCart (data)}}/>
                                </TabPanel>
                                <TabPanel>
                                   <span className="colormobile"> Phone Number</span>
                                   <h4> <span className="colorNumber">+91 805014357</span> </h4>
                                    <br/>
                                    <div className='restaurantname'>
                                    {details.restaurant_name}
                                    </div>
                                    <div className="colorNumber"> 
                                    {details.address}
                                    </div>
                                </TabPanel>
                            </Tabs>
                            <button className="btn btn-success buttonproceed" onClick={this.proceed}>Place Order</button>
                        </div>
                        </div>
                       
                  
               
            </>
            
        )
    }

    //api 
    async componentDidMount(){
        let restId = this.props.match.params.restId;
        let response = await axios.get(`${url}/${restId}`);
        let menudata = await axios.get(`${menu}/${restId}`);
        console.log(response.data)
        console.log(menudata.data)
        this.setState({details:response.data[0],menuList:menudata.data})
    }
}

export default Details;