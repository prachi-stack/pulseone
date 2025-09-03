import "../App.css"

const Contact = () => {
  return (
    <div className="contactparent">
      <div className="wp-form-container">
        <div className="wp-form-header">
          <h2>Contact Us</h2>
        </div>
        <form className="wp-form">
          <div className="wp-form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="wp-form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="wp-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit" className="wp-form-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact