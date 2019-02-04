import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, setTaskActive } from '../../actions'

// Components
import Checkbox from '../Checkbox'

// Styles
import './Task.scss'

const Task = ({
	activeProjectId,
	deleteTask,
	setTaskActive,
	task
}) => (
	<div className="task-small" onClick={() => setTaskActive(task)}>
		<Checkbox check={task.status === 'DONE'}/>

		<div>
			<div className="task-small-title">{ task.title }</div>
			{
				task.subTitle !== '' && (
					<div className="task-small-sub">{ task.subTitle }</div>
				)
			}
		</div>
		{/* <span onClick={() => deleteTask(activeProjectId, task._id)}>X</span> */}
	</div>
)

const mapStateToProps = ({ projectReducer }) => ({
	activeProjectId: projectReducer.activeProjectId
})

export default connect(mapStateToProps, { deleteTask, setTaskActive })(Task)

