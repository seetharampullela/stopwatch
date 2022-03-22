// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {min: 0, sec: 0, isActive: false}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimer()
  }

  clearTimer = () => {
    clearInterval(this.timerId)
  }

  tick = () => {
    // const {sec, min} = this.state
    // const isTimerFinish = sec === min * 60
    // if (isTimerFinish) {
    //   this.clearTimer()
    //   this.setState({isActive: false})
    // } else {
    this.setState(prevState => ({sec: prevState.sec + 1}))
    // }
  }

  startTimer = () => {
    console.log('Start clicked')
    const {isActive} = this.state
    this.setState({isActive: true})
    if (!isActive) {
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  stopTimer = () => {
    const {isActive} = this.state
    this.setState({isActive: false})
    if (isActive) {
      this.clearTimer()
    }
  }

  resetTimer = () => {
    console.log('reset clicked')
    this.clearTimer()
    this.setState(initialState)
  }

  getTimerInSeconds = () => {
    const {min, sec} = this.state
    const totalRemSec = sec - min * 60
    const minutes = Math.floor(totalRemSec / 60)
    const seconds = Math.floor(totalRemSec % 60)
    const minString = minutes > 9 ? minutes : `0${minutes}`
    const secString = seconds > 9 ? seconds : `0${seconds}`
    return `${minString}:${secString}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1> Stopwatch </h1>
        <div className="inner-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <h1>Timer</h1>
          </div>
          <h1 className="timer">{this.getTimerInSeconds()}</h1>
          <div>
            <button
              type="button"
              onClick={this.startTimer}
              className="btn start"
            >
              Start
            </button>
            <button type="button" className="btn stop" onClick={this.stopTimer}>
              Stop
            </button>
            <button
              type="button"
              onClick={this.resetTimer}
              className="btn reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
