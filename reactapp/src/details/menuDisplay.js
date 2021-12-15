import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class MenuDisplay extends Component {
    orderId = []
    placeOrder = (id) => {
        this.orderId.push(`${id}`)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        /*console.log(id)
        console.log(this.orderId)
        console.log(this.orderId.indexOf(id))*/
        this.orderId.splice(this.orderId.indexOf(id.toString()), 1)
        this.props.finalOrder(this.orderId)
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b> &nbsp;
                           <img src={item.menu_image} alt ={item.menu_name}style={{height:80,width:80}} className="imgcircle"/>
                            &nbsp;&nbsp; {item.menu_name} - {item.menu_price}
                        </div>
                        <div className="col-md-4 col-md-77">
                            <button className="btn  btncircle" onClick={() => {this.placeOrder(item.menu_id)}}>
                                <span class="pm">+</span>
                            </button> &nbsp;
                            <button className="btn  btncircle1 " onClick={() => {this.removeOrder(item.menu_id)}}>
                            <span class="pm" >-</span>
                            </button>
                        </div>
                        &nbsp;
                </div>
                )
            })
        }
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return (
                    <b key={index}> {item} &nbsp;&nbsp; </b> 
                )
            })
        }
    }

    render(){
        // console.log(">>>>menu",this.props)
        return(
             <div>
            <div className="col-md-12 bg-warning">
              Item Number
               <span className="style">({this.renderCart(this.orderId)}) added</span>
            </div>

            <div className="col-md-12 bg-danger">
                {this.renderMenu(this.props)}
            </div>
            <br/>
            <hr/>
        </div>
        )
    }
}

export default withRouter(MenuDisplay);