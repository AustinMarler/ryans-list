import React, { Component } from 'react';
import { postListing } from '../actions/actions'
import { connect } from 'react-redux';

class PostClassified extends Component {
  state = {
    title: '',
    description: ''
  }

  setListingData = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    postListing(this.state.title, this.state.description, this.props.category_id)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="title" name="title" placeholder="Enter a title" onChange={this.setListingData} />
          <textarea id="description" name="description" placeholder="Enter a description" onChange={this.setListingData} />
        </form>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    category_id: appState.currentCategory.id
  }
}

export default connect(mapStateToProps)(PostClassified)