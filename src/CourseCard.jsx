import React, { useState } from 'react'
import './CourseCard.css'

const CourseCard = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="course-card slide-in">
        <div className="video-preview">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            muted
            autoPlay
            loop
            playsInline
          />
        </div>
        <div className="course-info">
          <span className="badge">🔥 Trending</span>
          <h2>React Basics: Build Your First App</h2>
          <p className="duration">⏱ 2h 30m</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
          <button className="watch-btn" onClick={() => setShowModal(true)}>
            ▶ Watch Now
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              className="modal-video"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default CourseCard
