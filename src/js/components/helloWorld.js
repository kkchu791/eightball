import React, {Component} from 'react'
import axios from 'axios'

export default class HelloWorld extends Component {
  constructor() {
    super()
    this.state = { response: [], isClicked: true }
    // this.getResponse = this.getResponse.bind(this)
    // this.onPress = this.onPress.bind(this)
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
          <h1>{this.state.response.map(e => e['attributes']['reply'])[0]}</h1>
          <button className='btn-warning' onClick={function(){this.onPress(); this.getResponse()}.bind(this)}>Press</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>{this.state.response.map(e => e['attributes']['reply'])[1]}</h1>
          <button className='btn-warning' onClick={function(){this.onPress(); this.getResponse()}.bind(this)}>Run</button>
          <img style={{width:"400", height:"400", float: 'right'}}src = "http://res.freestockphotos.biz/pictures/3/3485-illustration-of-a-gorilla-pv.png" />
        </div>
      )
    }
  }

  onPress() {
    this.setState({ isClicked: (this.state.isClicked == true ? false : true) })
    console.log(this.state.isClicked)
  }

  render() {

    // let toggle = (arg) => {
    //   for (var i = 0; i < arg.length; i++) {
    //     console.log(arg.length)
    //     return (this.state.response.map(e => e['attributes']['reply'])[i])
    //     i++;
    //   }
    // }
    return (
      <div style={{fontFamily: 'helvetica', backgroundImage:"url('http://www.adventurephiles.com/wp-content/uploads/2013/01/IMG_4397.jpg')", backgroundSize: "1900px 900px",width: '1900', height: '900'}}>
        {this.renderAction()}
        <img style={{float:'left', width:'200', height:'200', marginTop: '200px'}}src="http://clipartsign.com/upload/2016/01/18/kangaroo-clip-art-2.png" />
      </div>
    )
  }
}