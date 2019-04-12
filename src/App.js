import React, { Component } from 'react';
import * as m from '@material-ui/core';
import * as i from '@material-ui/icons';
import {Switch , Redirect, Route, Link} from 'react-router-dom';
import './App.css';



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

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/pay/ccdc" component={ CCDC }/>
          <Route exact path="/pay/cod" component={ COD }/>
          <Route exact path="/pay" component={ Pay }/>
        </Switch>
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
    let id = parseInt(urlParams.get("id"));
    console.log(id);

    /*for (let i = 0; i < thej.length; i++) {
      if (thej[i].id === id){
        this.setState({
          amount: thej[i].amount,
          user: thej[i].user
        });
      }else{
        continue;
      }
    }*/
    thej.map((item, i) => {
      if (item.id === id){
        this.setState({
          amount: item.amount,
          user: item.user
        });
        
      }else{
        console.log("it's not here" + i);
      }
    })
  }
  render(){
    return(
      <m.Card className="card" style={{maxWidth:400}} >
          <m.CardContent>
            <m.Typography variant="h6">{this.state.user}</m.Typography>
            <m.Avatar sizes="large" aria-label="Reciepe" className="avatar">
              C
            </m.Avatar>
            <m.Typography id="amount" variant="h6">{this.state.amount + "  "} EGP</m.Typography>
            <m.List>
              <m.ListItem>
                <m.ListItemText primary="Credit Card or Debit Card" secondary="Pay using Visa or MasterCard"/>
                <m.ListItemSecondaryAction>
                  <Link to="/pay/ccdc"><m.IconButton>
                    <i.ArrowForward/>
                  </m.IconButton></Link>
                </m.ListItemSecondaryAction>
              </m.ListItem>
              <m.ListItem>
                <m.ListItemText primary="Cash on Delivery" secondary="Our Representer will be on Your Door Step"/>
                <m.ListItemSecondaryAction>
                  <Link to="/pay/cod"><m.IconButton>
                    <i.ArrowForward/>
                  </m.IconButton></Link>
                </m.ListItemSecondaryAction>
              </m.ListItem>
            </m.List>
          </m.CardContent>
        </m.Card>
    )
  }
}

class COD extends React.Component{

  state = {
    name: '',
    address: '',
    city: '',
    phone: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render(){
    return(
      <m.Card className="card">
        <Link to="/pay"><m.Button>
          <i.ArrowBack/> Back
        </m.Button></Link>
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
        </div>
      </m.Card>
    )
  }
}


class CCDC extends React.Component{
  render() {
    return (
      <div>
        <m.Card className="card">
          <Link to="/pay"><m.Button>
            <i.ArrowBack/> Back
          </m.Button></Link>
          
        </m.Card>
      </div>
    );
  }
}


export default App;
