import React, { useState } from 'react'
import { connect } from 'react-redux'
import Input from '../Input'
import Button from '../Button'
import { addNewTimeMeasurement } from '../../actions'

import {
  hoursToSeconds,
  minutesToSeconds
} from './measurementActions'

function NewMeasurement(props) {
  const { addNewTimeMeasurement, taskId, toggleIsAddNewMeasurementShown } = props
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const totalSeconds = (hoursToSeconds(hours) + minutesToSeconds(minutes)) * 1000

  return (
    <div className="new-measurement-container">
      <div className="new-measurement-container-content">
        <Input
          type="number"
          min="0"
          id="hour"
          placeholder="hours"
          onChange={e => setHours(parseInt(e.target.value))}
        />
        <span className="colon">
          <img src={require('../../assets/icons/colon.svg')} />
        </span>
        <Input
          type="number"
          min="0"
          id="minutes"
          placeholder="minutes"
          onChange={e => setMinutes(parseInt(e.target.value))}
        />
        <Button text="Add" onClick={() => {
          addNewTimeMeasurement(totalSeconds, taskId)
          toggleIsAddNewMeasurementShown()
        }} />
      </div>
    </div>
  )
}

function mapStateToProps({ projectReducer }) {
  return {
    taskId: projectReducer.activeTask._id
  }
}

export default connect(mapStateToProps, {addNewTimeMeasurement})(NewMeasurement)
