import {useState} from 'react'
import './ContentManagementTool.css'

const ContentManagementTool = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowDetails(true)
  }

  return (
    <div className="content-management-container">
      <h1 className="title">BlogEssence Tool</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title" className="label">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="input"
        />

        <label htmlFor="content" className="label">
          Content:
        </label>
        <textarea
          id="content"
          name="content"
          rows="4"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="textarea"
        />

        <label htmlFor="image" className="label">
          Image URL:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={e => setImage(e.target.value)}
          className="input"
        />

        <label htmlFor="video" className="label">
          Video URL:
        </label>
        <input
          type="text"
          id="video"
          name="video"
          value={video}
          onChange={e => setVideo(e.target.value)}
          className="input"
        />

        <button type="submit" className="submit-button">
          Create Blog
        </button>
      </form>

      {showDetails && (
        <div className="blog-details">
          <h2 className="details-heading">Blog Details</h2>
          <h3 className="details-title">{title}</h3>
          <p className="details-content">{content}</p>
          {image && <img src={image} alt="Blog" className="details-image" />}
          {video && (
            <p className="details-video">
              Video URL:{' '}
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                {video}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default ContentManagementTool
