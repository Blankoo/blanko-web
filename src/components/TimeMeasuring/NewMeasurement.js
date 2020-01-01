import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import useInput from '../Input'
import Button from '../Button'
import { addNewTimeMeasurement } from '../../actions'

import { time } from './../../utils'
const { hoursToSeconds, minutesToSeconds } = time

function NewMeasurement(props) {
    const { addNewTimeMeasurement, taskId, toggleIsAddNewMeasurementShown } = props
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const container = useRef()

    const [hourInput, hourInputField] = useInput({ type: 'number' })
    const [minuteInput, minuteInputField] = useInput({ type: 'number' })

    const totalSeconds = (hoursToSeconds(hours > 0 ? hours : 0) + minutesToSeconds(minutes)) * 1000

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    })

    const handleClickOutside = (e) => {
        if (container && !container.current.contains(e.target)) {
            toggleIsAddNewMeasurementShown()
        }
    }

    return (
        <div className="new-measurement-container" ref={container}>
            <div className="new-measurement-container-content">
                {hourInputField}
                <span className="colon">
                    <img src={require('../../assets/icons/colon.svg')} />
                </span>
                {minuteInputField}

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

export default connect(mapStateToProps, { addNewTimeMeasurement })(NewMeasurement)
