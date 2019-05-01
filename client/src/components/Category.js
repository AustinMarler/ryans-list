import React, { Component } from 'react';
import { getCategory, getListings } from '../actions/actions';
import { connect } from 'react-redux'
import RyansHeader from './RyansHeader'
import RyansFooter from './RyansFooter'
import { Link } from 'react-router-dom'

class Category extends Component {
  componentDidMount() {
    getCategory(this.props.slug)
    getListings(this.props.category_id)
  }

  componentWillReceiveProps() {
    getCategory(this.props.slug)
    getListings(this.props.category_id)
  }

  render() {
    return (
      <div id="categoryPageContainer">
        <RyansHeader />
        <Link to="/">&lt; Back to home</Link>
        <Link to="/post-listing">Create listing</Link>
        <h1>{this.props.name}</h1>
        <div id="categoryListings">
          {
            this.props.currentListings.map((listing, index) => {
              return (
                <div key={"listing" + index}>
                  <Link to={"/l/" + listing.id}>{listing.title}</Link>
                </div>
              )
            })
          }
        </div>
        <RyansFooter />
      </div>
    )
  }
}

function mapStateToProps(appState, ownProps) {
  return {
    name: appState.currentCategory.name,
    slug: ownProps.match.params.category,
    category_id: ownProps.match.params.id,
    currentListings: appState.currentListings
  }
}

export default connect(mapStateToProps)(Category)