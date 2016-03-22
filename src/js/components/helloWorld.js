import React, {Component} from 'react'
import axios from 'axios'
import animate from 'animate.css'

export default class HelloWorld extends Component {
  constructor() {
    super()
    this.state = { response: [], isClicked: true }
  }

  getResponse(){
    axios.get("http://localhost:3001/responses")
      .then((response) => {
        console.log(response.data['data']);
        this.setState({ response: response.data['data']})
       }
    )
  }

  renderAction(){
    if (this.state.isClicked) {
      return (
        <div>
          <button className='btn-warning' onClick={function(){this.onPress(); this.getResponse()}.bind(this)}>Shake</button>
          <h1>{this.state.response.map(e => e['attributes']['reply'])[0]}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <button className='btn-warning' onClick={function(){this.onPress(); this.getResponse()}.bind(this)}>Shake Again</button>
          <h1>{this.state.response.map(e => e['attributes']['reply'])[1]}</h1>
        </div>
      )
    }
  }

  onPress() {
    this.setState({ isClicked: (this.state.isClicked == true ? false : true) })
    console.log(this.state.isClicked)
  }

  render() {
    return (
      <div className="container" style={{maxWidth: 800, width:800, height: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, textAlign:'center'}}>
        {this.renderAction()}
        <img className="bounce" style={{paddingTop:90,width:700, height: 550, margin:0, display: 'block', paddingRight: 120}}src="https://pixabay.com/static/uploads/photo/2012/04/16/11/05/ball-35516_960_720.png"/>
      </div>
    )
  }
}