import React,{Component} from 'react';
import './placeorder.css';

const url = "https://zomatojulyapi.herokuapp.com/menuItem";
const PostUrl = "https://zomatojulyapi.herokuapp.com/placeOrder";


class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            details:'',
            amount:0,
            hotel_name:this.props.match.params.restName,
            name:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[0]:'',
            phone:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[2]:'',
            email:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[1]:'',
            address:'',
            status:'Pending'
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(PostUrl,
            {
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            }
        )
        .then(console.log("payment gateway"))
    }

    renderItems =  (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="items" key={item.menu_id}>
                        <span><img src={item.menu_image} alt={item.menu_name} className="placeorderimage"/>
                        <h4 className="placeorderimage1"><span className="menuprice">{item.menu_name}</span></h4>
                        <h4 className="placeorderimage1"><span className="menuprice">Rs {item.menu_price}</span></h4></span>
                    </div>
                    
                )
            })
        }else{
            return(
                <img src="/images/loader.gif" alt="loader"/>
            )
        }
    }

    render(){
        if(!sessionStorage.getItem('userData')){
            return(
                <div>
                    <h1>Login first to place booking</h1>
                </div>
            )
        }
        console.log(this.state)
        return(
            <div className="container container1">
                <br/>
                <div className="panel panel-info">
                    <div className="panel-heading">
                      
                        {this.props.match.params.restName} 
                       
                    </div>
                    <div className="panel-body">
                    <form method="POST" action="https://paymentedu.herokuapp.com/paynow">
                        <div className="row">
                            
                        <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name" value={this.state.name}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>EmailId</label>
                                        <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control" name="phone" value={this.state.phone}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" name="address" value={this.state.address}
                                        onChange={this.handleChange}/>
                                    </div>
                              
                                
                            </div>
                            <input type="hidden" name="amount" value={this.state.amount}/>
                            <input type="hidden" name="id" value={this.state.id}/>
                        </div>
                        {this.renderItems(this.state.details)}
                        <div className="row total">
                            <div className="col-md-12 menuprice3 ">
                            <span className="menuprice1">Total Cost is Rs.<span className="menuprice2">{this.state.amount}</span></span>
                            </div>
                        </div>
                        <button className="btn btn-success btn1" onClick={this.handleSubmit} 
                        type="submit">
                                    Checkout
                        </button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }

    componentDidMount(){
        var menuItem =  sessionStorage.getItem('menu');
        var orderId = []
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => 
        {
            var Totalprice = 0;
            data.map((item) => {
                Totalprice = Totalprice+parseInt(item.menu_price)
                return 'ok'
            })
            this.setState({details:data,amount:Totalprice})
        })

        
    }
}

export default PlaceOrder