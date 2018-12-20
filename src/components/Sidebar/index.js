import React, { Component } from 'react'
import { connect } from 'react-redux'
import './sidebarStyle.scss'

import Projectslist from '../ProjectsList'

class SideBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="sidebar">
				<div className="blanko">Blanko.</div>
				<div className="blanko-small">B.</div>

				<Projectslist/>

				<span className="logout-icon">
					<svg width="31px" height="32px" viewBox="0 0 31 32" version="1.1">
					  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					    <g className="logout-icon-path" fill="#7A848F" fillRule="nonzero">
					      <path
					        d="M15.9999806,0 L15.9999806,2.28569346 L2.2857116,2.28569346 L2.2857116,29.7142417 L15.9999806,29.7142417 L15.9999806,32 L-3.55271368e-14,32 L-3.55271368e-14,0 L15.9999806,0 Z M10.7142495,14.0571397 L24.7142486,14.0571397 L18.7142486,8.01427065 L20.714249,6 L30.7142495,16.0713818 L20.714249,26.1428492 L18.7142494,24.1285786 L24.7142492,18.0857381 L10.7142495,18.0857381 L10.7142495,14.0571397 Z"
					        transform="translate(15.357125, 16.000000) scale(-1, 1) translate(-15.357125, -16.000000) "></path>
					    </g>
					  </g>
					</svg>
				</span>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		projects: state.projectReducer.projects
	}
}

export default connect(mapStateToProps, {})(SideBar)