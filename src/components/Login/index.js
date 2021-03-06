import React, {Component} from 'react';
import './index.css';
import axios from 'axios';

class Login extends Component {

constructor(props){
super(props);
this.state={
username:'',
password:''

}
  this.login=this.login.bind(this);

}
login(){

    var userName = document.getElementById('userName').value;
    var password = document.getElementById('passWord').value;

    var data = "grant_type=password&username="+userName+"&"+"password="+password; //store username and password in data variable

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Accept": "*/*",
          'Authorization': 'Basic ' + (new Buffer(


            'ynlrljIfzNq3fSowtP2FybQ_xqsa'+':'+'5mcIE9EzLd7VZfajHmZTWjHUhgMa' // Consumer Key And Consumer Secret
              ).toString('base64')) // Encode using base64
      }
    };

    axios.post("https://localhost:8243/login/1.0.0/oauth2/token", data, axiosConfig) //FRONTEND_URL
    .then((res) => {

      console.log("RESPONSE RECEIVED: ", res.data);


      document.cookie=data.access_token;  //store access_token in cookie



;
if(res.status==200){
   document.location.href = "http://localhost:3000/products";
 }else{

   alert("In correct Username or Password");

 }

    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
      alert("Username or Password Incorrect");
    });



}
  render() {
    return (
      <div className="login_place" >
      <div className="row" id="Body" >
        <div className="medium-5 columns left" >

        <h4>Login</h4>

        <label> Username</label>

        <input type="text" id= "userName" name="username" placeholder="Username"/>

        <label>Password</label>
        <input align="center" type="password" id ="passWord" name="password"  placeholder="password" />

        <input type="submit" className="button success" value="Login" onClick={this.login}/>


        </div>
      </div>
      </div>
    );
  }
}
export default Login;
