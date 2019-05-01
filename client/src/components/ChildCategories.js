import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class ChildCategories extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.list.map((cat, index) => (
            <div className="child-cat" key={"child-cat-" + index}>
              <Link to={'/c/' + cat.slug + '/' + cat.id}>{cat.name}</Link>
            </div>
          ))
        }
      </Fragment>
    )
  }
}

export default ChildCategories