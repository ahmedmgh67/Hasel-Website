/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as m from '@material-ui/core';
import * as i from '@material-ui/icons';
import './bootstrap.css';
import axios from 'axios';
import './style.css';
import './themify-icons.css';
import './icomoon.css';
import mobileapp from './images/mobileapp.jpg';
import logo from './typoperfect.png';
import {Switch , Route, Link} from 'react-router-dom';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/pay/ccdc" component={ CCDC }/>
          <Route exact path="/pay/cod" component={ COD }/>
          <Route exact path="/pay" component={ Pay }/>
          <Route exact path="/" component={ Landing }/>
        </Switch>
      </div>
    );
  }
}


class Landing extends React.Component{
  render(){
    return(
      <div>
        <div id="head-top" >
          <div className="gtco-top" >
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-xs-6">
                  <div id="gtco-logo"><img className="logo" alt=""src={ logo }/>{/*<a href="index.html">Confidence<em>.</em></a>*/}</div>
                </div>
                <div className="col-md-6 col-xs-6 social-icons">
                  <ul className="gtco-social-top">
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin"></i></a></li>
                    <li><a href="#"><i className="icon-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>	
          </div>
          
        </div>
        
        <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="gtco-container">
            <div className="row row-mt-15em">
              <div className="col-md-2 mt-text text-right animate-box" data-animate-effect="fadeInUp">
                <h1>Hasel  Your Money <strong>Now.</strong></h1>
                <div className="text-center"><a href="https://facebook.com/confidda" className="btn btn-primary btn-lg popup-vimeo">Send Message</a></div>
              </div>
              <div className="col-md-40 text-center">
                <img src={mobileapp} alt="" className="img-responsive"/>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

class Pay extends React.Component{

  state={
    amount: "",
    user:"",
    id: 0
  }



  componentDidMount = () =>{
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    let id = urlParams.get("id");
    console.log(id);
    axios.get("http://url/api/searchTransictions/" + id).then((data) => {
      this.setState({
        id: data._id,
        amount: data.amount,
        user: data.user
      });
    })
  }
  render(){
    return(
      <m.Card className="card" style={{maxWidth:400}} >
          <m.CardContent>
            <m.Typography variant="h6">{this.state.user}</m.Typography>
            <m.Avatar sizes="large" aria-label="Reciepe" className="avatar">
              this.state.
            </m.Avatar>
            <m.Typography id="amount" variant="h6">{this.state.amount + "  "} EGP</m.Typography>
            <m.List>
              <m.ListItem>
                <m.ListItemText primary="Credit Card or Debit Card" secondary="Pay using Visa or MasterCard"/>
                <m.ListItemSecondaryAction>
                  <Link to={"/pay/ccdc?id="+ this.state.id}><m.IconButton>
                    <i.ArrowForward/>
                  </m.IconButton></Link>
                </m.ListItemSecondaryAction>
              </m.ListItem>
              <m.ListItem>
                <m.ListItemText primary="Cash on Delivery" secondary="Our Representer will be on Your Door Step"/>
                <m.ListItemSecondaryAction>
                  <Link to={"/pay/cod?id=" + this.state.id}><m.IconButton>
                    <i.ArrowForward/>
                  </m.IconButton></Link>
                </m.ListItemSecondaryAction>
              </m.ListItem>
            </m.List>
          </m.CardContent>
        </m.Card>
    );
  }
}

class COD extends React.Component{

  state = {
    name: '',
    address: '',
    city: '',
    phone: '',
    id: 0,
    amount : "",
    user : ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount = () => {
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    let id = parseInt(urlParams.get("id"));

    axios.get("http://url/api/searchTransictions/" + id).then((data) => {
      this.setState({
        id: data._id,
        amount: data.amount,
        user: data.user
      });
    });
    return 0;
  }


  render(){
    return(
      <m.Card className="card">
        <Link to={"/pay?id=" + this.state.id} ><m.Button>
          <i.ArrowBack/> Back
        </m.Button></Link>
        <m.Typography variant="h6" > Pay {this.state.amount} for {this.state.user}</m.Typography>
        <div className="form">
          <m.TextField 
          variant="outlined" 
          onChange={this.handleChange("name")} 
          value={this.state.name} 
          margin="normal" 
          label="Name" 
          size="large" 
          className="forminput"/><br/>
          <m.TextField 
          variant="outlined" 
          onChange={this.handleChange("address")} 
          multiline
          maxRow="4"
          value={this.state.address} 
          margin="normal" 
          label="Address" 
          size="large" 
          className="forminput"/><br/>
          <m.TextField 
          variant="outlined" 
          onChange={this.handleChange("phone")} 
          value={this.state.phone} 
          margin="normal" 
          label="Phone Number" 
          size="large" 
          className="forminput"/><br/>
          <m.TextField 
          variant="outlined" 
          onChange={this.handleChange("city")} 
          value={this.state.city} 
          margin="normal" 
          label="City" 
          size="large" 
          className="forminput"/><br/>
          <m.Button>Pay Now</m.Button>
        </div>
        
      </m.Card>
    )
  }
}


class CCDC extends React.Component{
  state ={
    ccv: "",
    cardnumber: "",
    holderName: "",
    expiry: "",
    id: 0,
    amount: "",
    user: ""
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount = () => {
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    let id = parseInt(urlParams.get("id"));

    axios.get("http://url/api/searchTransictions/" + id).then((data) => {
      this.setState({
        id: data._id,
        amount: data.amount,
        user: data.user
      });
    });
  }

  render() {
    return (
      <div>
        <m.Card className="card">
          <Link to={"/pay?id=" + this.state.id}><m.Button>
            <i.ArrowBack/> Back
          </m.Button></Link>
          <m.Typography variant="h6">Pay {this.state.amount} for {this.state.user}</m.Typography>
          <m.TextField 
          variant="outlined" 
          onChange={this.handleChange("cardNumber")} 
          value={this.state.cardNumber} 
          margin="normal" 
          label="Card Number" 
          size="large" 
          className="forminput"/><br/>
          <m.TextField 
          variant="outlined" 
          onChange={this.handleChange("expiry")} 
          value={this.state.expiry} 
          margin="normal" 
          label="Expiry Date" 
          size="large" 
          className="forminput"/><br/>
          <m.TextField 
          variant="outlined" 
          onChange={this.handleChange("ccv")} 
          value={this.state.ccv} 
          margin="normal" 
          label="CCV (Security Code)" 
          size="large" 
          className="forminput"/><br/>
          <m.TextField 
          variant="outlined" 
          onChange={this.handleChange("holderName")} 
          value={this.state.holderName} 
          margin="normal" 
          label="Card Holder Name" 
          size="large" 
          className="forminput"/><br/>
          <m.Button>Pay Now</m.Button>
        </m.Card>
      </div>
    );
  }
}


export default App;

// eslint-disable-next-line no-unused-vars
var thej = [
  {
    id : 1,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 2,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 3,
    amount : "5000",
    user : "Confidence"
  },
  { 
    id : 4,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 5,
    amount : "10000",
    user : "Confidence"
  },
  {
    id : 6,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 7,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 8,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 9,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 10,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 11,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 12,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 13,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 14,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 15,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 16,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 17,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 18,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 19,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 20,
    amount : "5000",
    user : "Confidence"
  },
  {
    id : 21,
    amount : "5000",
    user : "Confidence"
  },
]
