var SubformInfo = React.createClass({
  getInitialState: function() {
    return {
      course_summary: null
    }
  },
  render: function() {
    var course = this.props.course
    return (
      <div className="new-course-form">
        <h1 className="nav-content-title">Course Info</h1>

        <label className="new-course-label" for="course_title">Course Title</label>
        <input type="text" placeholder="Course Title" id="course_title" onChange={this.props.handleTitleChange} className="new-course-form-title" defaultValue={this.props.title}></input>
        
        <label className="new-course-label" for="course_summary">Summarization</label>
        <textarea type="text" placeholder="Course Summary" id="course_summary" onChange={this.props.handleSummaryChange} className="new-course-form-summary" defaultValue={this.props.summary}></textarea>
        
        <label className="new-course-label" for="course_summary">Description</label>
        <textarea placeholder="Course Description" id="course_description" onChange={this.props.handleDescriptionChange} className="new-course-form-description" defaultValue={this.props.description}></textarea>
      </div>
    )
  }
});

var SubformDate = React.createClass({
  render: function() {
    return (
      <h1>Hello Data!</h1>
    )
  }
});

var SubformImages = React.createClass({
  render: function() {
    return (
      <h1>Hello Images!</h1>
    )
  }
});