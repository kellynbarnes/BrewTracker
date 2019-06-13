import React, {Component} from 'react';
import BrewView from './BrewView';
import {createNewBatch, addNewBrew, getBatch, updateBatch, fillTank, getLastSubmit, getTanks} from './BrewFetch';

class BrewContainer extends Component {

    state = {
      number: '',
      prevNum: '',
      style: '',
      prevStyle: '',
      tank: '',
      prevTank: '',
      tanks: [],
      batch: 
          {id: "",
           prevId: "",
           strikeVolume: "",
           mashTemp: "",
           spargeVolume: "",
           startingBrix: "",
           kettleVolume: "",
           whirlPoolVolume: "",
           fmVolume: "",
           notes: '',
           enter: false,
           submit: false,
          }      
    }

    // stores the setInterval value
    runInterval = 0;
    
      
    handleBrewNumber = (e) => {
      const name = e.target.name;
      const val = e.target.value;

      this.setState({ [name]: val });
    }

    handleBatch = (e) => {
      const { batch } = { ...this.state };
      const currentState = batch;
      const name = e.target.name;
      currentState[name] = e.target.value

      this.setState({ batch: currentState});

    }

    updateMetricData = () => {
      const id = this.state.number;
      const batch = this.state.batch;
      const batchObj = {
        number: id,
        batch: batch,
      }
      updateBatch(id, batchObj)
    }

    handleEnter = (e) => {
      e.preventDefault();
      this.setState({ 
        batch: {
            ...this.state.batch,
            enter: !this.state.enter
          }}, () => {
            const getData = this.state;
            if (this.state.prevNum === this.state.number) {
              // fetch call to update a brew with a new batch. There a multiple batches to a brew
              addNewBrew(getData);
            } else {
              // fetch call to create a new batch into a new brew
              createNewBatch(getData);
            }
            this.runInterval = setInterval(() => this.updateMetricData(),30000)
          });   
    }

    handleDelete = () => {
      console.log('hi');
    }

    handleTransfer = () => {
      this.setState({
        batch: {
        ...this.state.batch,
        submit: !this.state.submit
        }}, () => {
        const id = this.state.number;
        const tank = this.state.tank;
        const style = this.state.style;
        const runOff = this.state.batch.submit
        const batch = this.state.batch;
        const batchObj = {
            number: id,
            batch: batch
        }
        const tankObj = {
            number: id,
            tank: tank,
            style: style,
            batch: batch.fmVolume,
            runOff: runOff
        }
        updateBatch(id, batchObj);
        fillTank(id, tankObj);
        this.renderRedirect();
        })      
    }

    componentWillUnmount = () => {
      clearInterval(this.runInterval);
    }

    // user get redirected to homepage after clicking on Runoff Button
    renderRedirect = () => {
        this.props.history.push('/')
    }

    // change data from componentdidmount fetch to "" instead of null
    changeNull = (data) => {
        const batchVal = data.batch[data.batch.length-1];
        
        for (let val in batchVal) {
          const values = batchVal[val]
          if (typeof values === 'object') {
            batchVal[val] = '';
          }
        }
        return data
    }
    // set state after fetch call with data from a batch where brewer is still entering information
    updateStateBatchBrewing = (data) => {
      const lastBatch = data.batch[data.batch.length-1];
      this.setState(
        {
          number: data.number,
          style: data.style,
          tank: data.tank,
          batch: {
            id: lastBatch.id,
            strikeVolume: lastBatch.strikeVolume,
            mashTemp: lastBatch.mashTemp,
            spargeVolume: lastBatch.spargeVolume,
            startingBrix: lastBatch.startingBrix,
            kettleVolume: lastBatch.kettleVolume,
            whirlPoolVolume: lastBatch.whirlPoolVolume,
            fmVolume: lastBatch.fmVolume,
            notes: lastBatch.notes,
            enter: lastBatch.enter,
            submit: lastBatch.submit
          }
        })
    }

    // set state after fetch call with data from a batch that has been finished a placed into a fermenter
    updateStateLastCompletedBrew = (data) => {
      this.setState({
        prevNum: data.number,
        prevStyle: data.style,
        prevTank: data.tank,
        batch: {
          ...this.state.batch,
          prevId: data.batch[data.batch.length-1].id
        }
      })
    }
  
    componentDidMount = () => {
       getBatch()
          .then(data => {
            const dataObj = data[0];      
            if (dataObj !== undefined) {
                this.changeNull(dataObj);
                this.updateStateBatchBrewing(dataObj);              
                //run interval to post data about that batch to save data during the brew process
                this.runInterval = setInterval(() => this.updateMetricData(),30000)
              } else {
                // if last batch has runOff to fermenter get information from this batch for input options
                getLastSubmit()
                    .then(data => {
                        this.updateStateLastCompletedBrew(data);
                      });
                      // grab tanks that are empty for user fill options
                    getTanks()
                      .then(data => {
                           const tankList = [];
                           data.forEach(tank => {
                            tankList.push(tank.tank)
                            })
                            this.setState({
                              tanks: tankList
                            })
                          });
              }
        })
    }

    render () {
      return(
        <div>
            <BrewView 
              brewBatch={this.state} 
              handleBrewNumber={this.handleBrewNumber} 
              handleBatch={this.handleBatch} 
              handleEnter={this.handleEnter}
              handleTransfer={this.handleTransfer}
              handleDelete={this.handleDelete}
            />
        </div>
        )
    }
}

export default BrewContainer;