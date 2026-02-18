import React, { useState } from "react";

function SubmissionSuccess({ formData }) {
  return (
    <div className="alert alert-success">
      <h4>Thank you, {formData.name}!</h4>
      <p>Your message has been sent successfully.</p>

      <hr />
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Message:</strong> {formData.message}</p>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmissionSuccess formData={formData} />;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1 className="mb-4">Contact Me</h1>

        <form onSubmit={handleSubmit} className="card p-4 shadow">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
