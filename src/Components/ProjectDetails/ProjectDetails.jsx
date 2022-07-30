import React from 'react'
import './ProjectDetails.css'

export const ProjectDetails = () => {
  return (
    <div className="projectdetails-header">
      <div className="p-name">Project Details</div>
      <div className="projectdetails">
        <div className="l-projectdetails">
          <span>Project name</span>
          <span>Cleanly</span>
          <span>Role</span>
          <span>FrontEnd Develover</span>
        </div>
        <div className="r-projectdetails">
          <div className="card">
            <span>This is an awareness application where user
              <br />
              can get information for a medicine by uploading
              <br />
              the image of the medicine through the webcam. In
              <br />
              this application Microsoft and Google login is used
              <br />
              as a part of login system.
            </span>
            <button className="button r-p-button">Link</button>
          </div>
        </div>
      </div>

    </div>
  )
}
