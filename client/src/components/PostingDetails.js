import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListing } from '../actions/actions';
import { Link } from 'react-router-dom'

class PostingDetails extends Component {
  componentDidMount() {
    getListing(this.props.listing_id)
  }

  componentWillReceiveProps() {
    getListing(this.props.listing_id)
  }

  render() {
    return (
      <div>
        <Link to={"/c/" + this.props.slug + "/" + this.props.category_id}>&lt; Back to category</Link>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

function mapStateToProps(appState, ownProps) {
  return {
    listing_id: ownProps.match.params.listing_id,
    title: appState.currentListing.title,
    description: appState.currentListing.description,
    slug: appState.currentListing.slug,
    category_id: appState.currentListing.category_id
  }
}

export default connect(mapStateToProps)(PostingDetails)