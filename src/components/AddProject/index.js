import React from 'react'
import { connect } from 'react-redux'

import useInput from '../Input'
import Button from '../Button'
import { addProject } from '../../actions'

import './AddProject.scss'
import { withRouter } from 'react-router'

function AddProject(props) {
    const [projectTitle, projectTitleField] = useInput({ placeholder: 'Project title...'})
    const [projectDescription, projectDescriptionField] = useInput({ placeholder: 'Project description...'})

    function addProject() {
        props.addProject({ projectTitle, projectDescription })
            .then((project) => {
                props.history.push(`/home/project/${project._id}`)
            })
    }

    return (
        <div className="home-container add-project-container">
            {
                window.innerWidth < 400 &&
                <div className="hamburger-icon-sidebar">
                    <img src={require('../../assets/icons/hamburger-icon.svg')} alt="icon to show sidebar" />
                </div>
            }

            <div className="add-project-container-title">
                <h1>New Project...</h1>
            </div>

            <div className="add-project-container-form">
                {projectTitleField}
                {projectDescriptionField}
            </div>

            <Button
                onClick={() => addProject()}
                variant="primary"
                text="Add"
                size="md"
            />
        </div>
    )
}

export default withRouter(connect(undefined, { addProject })(AddProject))
