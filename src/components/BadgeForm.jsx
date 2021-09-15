import React from "react";

class BadgeForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          {this.props.error && (
            <div className="alert alert-danger mt-4" role="alert">
              An error has occurred: {this.props.error.message}
            </div>
          )}

          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              required
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              required
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              required
            />
          </div>

          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
