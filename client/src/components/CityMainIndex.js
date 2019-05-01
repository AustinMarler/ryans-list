import React, { Component } from 'react';
import RyansFooter from './RyansFooter';
import { getCategories } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ChildCategories from './ChildCategories'

class CityMainIndex extends Component {
  componentDidMount() {
    getCategories()
  }

  render() {
    return (
      <div id="cityMainIndexContainer">
        <div id="mainContentContainer" className="flex-row">
          <div id="leftContentContainer" className="flex-column rl-gray-bg l-r-border">
            <div id="logoContainer">
              <a href="/" id="logo">ryanslist</a>
            </div>

            <div id="userActions" className="flex-column">
              <Link to="/">create a listing</Link>
              <a href="/">my account</a>
            </div>

            <div id="searchContainer">
              <input type="text" placeholder="search craigslist"></input>
            </div>

            <div id="eventCalendarContainer">
              <table id="calendar">
                <tbody>
                  <tr id="daysRow">
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                    <th>S</th>
                  </tr>
                  <tr>
                    <th><a href="/">22</a></th>
                    <th><a href="/">23</a></th>
                    <th><a href="/">24</a></th>
                    <th id="today"><a href="/">25</a></th>
                    <th><a href="/">26</a></th>
                    <th><a href="/">27</a></th>
                    <th><a href="/">28</a></th>
                  </tr>
                  <tr>
                    <th><a href="/">29</a></th>
                    <th><a href="/">30</a></th>
                    <th><a href="/">1</a></th>
                    <th><a href="/">2</a></th>
                    <th><a href="/">3</a></th>
                    <th><a href="/">4</a></th>
                    <th><a href="/">5</a></th>
                  </tr>
                  <tr>
                    <th><a href="/">6</a></th>
                    <th><a href="/">7</a></th>
                    <th><a href="/">8</a></th>
                    <th><a href="/">9</a></th>
                    <th><a href="/">10</a></th>
                    <th><a href="/">11</a></th>
                    <th><a href="/">12</a></th>
                  </tr>
                  <tr>
                    <th><a href="/">13</a></th>
                    <th><a href="/">14</a></th>
                    <th><a href="/">15</a></th>
                    <th><a href="/">16</a></th>
                    <th><a href="/">17</a></th>
                    <th><a href="/">18</a></th>
                    <th><a href="/">19</a></th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div id="usefulLinks1" className="flex-column">
              <a href="/">help, faq, abuse, legal</a>
              <a href="/">avoid scams &amp; fraud</a>
              <a href="/">personal safety tips</a>
              <a href="/">terms of use</a>
              <a href="/">privacy policy</a>
              <a href="/">system status</a>
            </div>

            <div id="usefulLinks2" className="flex-column">
              <a href="/">about ryanslist</a>
              <a href="/">ryanslist is hiring in sf</a>
              <a href="/">ryanslist open source</a>
              <a href="/">ryanslist blog</a>
              <a href="/">best-of-ryanslist</a>
              <a href="/">ryanslist TV</a>
              <a href="/">"ryanslist joe"</a>
              <a href="/">ryan connects</a>
            </div>
          </div>

          <div id="middleContentContainer" className="flex-column">
            <div id="cityBanner" className="rl-gray-bg t-b-border">
              <h3 className="main-cat">Las Vegas</h3>
            </div>

            <div id="categoriesContainer">
              {
                this.props.categories.map((cat, index) => {
                  return (
                    <div key={"cat-col-" + index} className="categoryColumn flex-column">
                      <h3 className="rl-gray-bg t-b-border main-cat"><Link to={`/c/${cat.slug}/${cat.id}`}>{cat.name}</Link></h3>
                      <ChildCategories list={cat.child_categories} />
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div id="rightContentContainer" className="flex-column rl-gray-bg l-r-border">
            <div id="languageSelectorContainer">
              <select defaultValue="english" id="languageSelector">
                <option>dansk</option>
                <option>deutsch</option>
                <option>english</option>
                <option>español</option>
                <option>français</option>
                <option>italiano</option>
                <option>português</option>
                <option>suomi</option>
                <option>svenska</option>
                <option>tiếng việt</option>
                <option>türkçe</option>
                <option>русский</option>
                <option>中文</option>
                <option>日本語</option>
                <option>한국말</option>
              </select>
            </div>

            <div id="ryanslistLinks">
              <ul>
                <li className="listName t-b-border"><a href="/">nearby rl</a></li>
                <li><a href="/">bakersfield</a></li>
                <li><a href="/">elko</a></li>
                <li><a href="/">flagstaff</a></li>
                <li><a href="/">fresno</a></li>
                <li><a href="/">gold country</a></li>
                <li><a href="/">hanford</a></li>
                <li><a href="/">imperial co</a></li>
                <li><a href="/">inland empire</a></li>
                <li><a href="/">los angeles</a></li>
                <li><a href="/">merced</a></li>
                <li><a href="/">modesto</a></li>
                <li><a href="/">mohave co</a></li>
                <li><a href="/">orange co</a></li>
                <li><a href="/">palms springs</a></li>
                <li><a href="/">phoenix</a></li>
                <li><a href="/">prescott</a></li>
                <li><a href="/">provo</a></li>
                <li><a href="/">reno</a></li>
                <li><a href="/">salt lake</a></li>
                <li><a href="/">san diego</a></li>
                <li><a href="/">san luis obispo</a></li>
                <li><a href="/">santa barbara</a></li>
                <li><a href="/">santa maria</a></li>
                <li><a href="/">show low</a></li>
                <li><a href="/">st george</a></li>
                <li><a href="/">stockton</a></li>
                <li><a href="/">tijuana</a></li>
                <li><a href="/">ventura</a></li>
                <li><a href="/">visalia-tulare</a></li>
                <li><a href="/">yuma</a></li>
                <li className="listName t-b-border"><a href="/">us cities</a></li>
                <li className="listName t-b-border"><a href="/">us states</a></li>
                <li className="listName t-b-border"><a href="/">canada</a></li>
                <li className="listName t-b-border"><a href="/">rl worldwide</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="footerContainer">
          <RyansFooter />
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    categories: appState.categories
  }
}

export default connect(mapStateToProps)(CityMainIndex)