import React,{Component} from 'react';
import {Button, TextField, NativeSelect, Typography} from '@material-ui/core'

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
        billamt : 0, 
        noOfPeople : 1, 
        tipPercentage : "",
        tipAmt : 0,
        showTip : false
    }
  }

  handleInput = (e) => {
    this.setState({
      billamt: e.target.value
    })
  }

  handleChange = (e) => {
    this.setState({
      tipPercentage : e.target.value
    })
  }

  handleNoOfPeople = (e) => {
    this.setState({
      noOfPeople: e.target.value
    })
  }

  calculateTip = () => {
    let tipPercentage = this.state.tipPercentage 
    let billamt = this.state.billamt
    let noOfPeople = this.state.noOfPeople
    let tip = (billamt*tipPercentage)/(100*noOfPeople)
    this.setState({
      tipAmt : Math.round(tip), 
      showTip : true
    }) 
  }

  render() { 
    console.log(this.state)
    let tip = this.state.showTip ? <div>
      <Typography variant="h5">Tip should be {this.state.tipAmt}</Typography>  
    </div> : null
    return <div style={{margin: "20px"}}>
        <TextField required placeholder="Bill" margin="normal" onChange={(event) => this.handleInput(event)}/>
        <br/>
        <NativeSelect
          value={this.state.tipPercentage}
          name="tipPercentage"
          onChange={(event) => this.handleChange(event)}
        >
          <option value="" disabled>
            Choose a tip percentage
          </option>
          <option value={5}>5% - Bad</option>
          <option value={10}>10% - Average</option>
          <option value={20}>20% - Good </option>
          <option value={30}>30% - Outstanding</option>
        </NativeSelect>
        <br/>
        <TextField placeholder="No. of People" margin="normal" onChange={(event) => this.handleNoOfPeople(event)}/>
        <br/>
        <Button style={{backgroundColor: "Blue", margin:"10px"}} onClick={this.calculateTip}>Submit</Button>
        <br/>
        {tip}
      </div>  
  }
}

export default App;
