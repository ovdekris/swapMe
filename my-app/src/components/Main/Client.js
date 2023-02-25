/*import axios from 'axios';
import React, { Component } from 'react';
import APIService from "./Header/APIService";

class App extends Component{
    state = {
        clients: []
    };






     async componentDidMount() {
         const response = await fetch("http://localhost:9001/v1/item/user/1",{
             method: 'GET', // *GET, POST, PUT, DELETE, etc.
           headers: {
             'Content-Type': 'application/json',
               'Access-Control-Allow-Origin':
                   'Content-Type': 'application/x-www-form-urlencoded'
             }
         })
        response.setHeader('Access-Control-Allow-Origin')
         const body = await response.json();
         this.setState({clients: body});

      console.log(body);





    render() {
        return (
            <div className="App">
              Klients
            </div>
        );
    }
}*/

import {useEffect} from "react";
import axios from "axios";

export function Client(){
  useEffect(()=> {
      //     const response = fetch("http://localhost:9001/v1/item/user/1");
      //     const data=response.json();
      // console.log(data)

      }
  )
    return(
        <div></div>
    )
}