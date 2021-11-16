import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

export const ExperienceDescription = props => {
  return (
    <div className="xp-job-description">
      <div className="xp-job-name">
        {props.position}
        <a href={props.site} rel="noreferrer" target="_blank">
          @{props.name}
        </a>
      </div>
      <div className="xp-job-date">{props.date}</div>
      {props.description.map((task, index) => (
        <div className="xp-job-tasks" key={index}>
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            className="arrow-right-icon"
          />
          {task}
        </div>
      ))}
    </div>
  )
}