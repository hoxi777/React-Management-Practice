import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";



const customer =[{
    "id" : 1,
    "image" : "https://placeimg.com/64/64/1",
    "name" : "정태현",
    "birth" : 911015,
    "gender" : "남자",
    "job" : "대학생"
  },
  {
    "id" : 2,
    "image" : "https://placeimg.com/64/64/2",
    "name" : "나루토",
    "birth" : 20011212,
    "gender" : "남자",
    "job" : "프로그래머"
  },
  {
    "id" : 3,
    "image" : "https://placeimg.com/64/64/any",
    "name" : "루피",
    "birth" : 981029,
    "gender" : "남자",
    "job" : "의사"
  }
]



class App extends Component {
  state = {

  }

  componentDidMount() {
    this.setState({
      customer
    })

  }

  _renderCustomers = () => {
    const customer = this.state.customer.map((customer, index) => {
        return <Customer
          id={customer.id}
          key={index}
          image={customer.image}
          name = {customer.name}
          birth = {customer.birth}
          gender = {customer.gender}
          job = {customer.job}
      />
    })

    return customer;

}

  render() {
    return (
      <div className="App">
      {this.state.customer ? this._renderCustomers() : "Loading"}
      </div>
    );
  }
}

export default App;
