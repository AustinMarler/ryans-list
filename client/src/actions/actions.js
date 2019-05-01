import store from '../store'
import axios from 'axios'

export function getCategories() {
  axios.get('/api/categories').then(resp => {
    store.dispatch({
      type: "GET_CATEGORIES",
      payload: resp.data
    })
  })
}

export function getCategory(slug) {
  axios.get('/api/category/' + slug).then(resp => {
    store.dispatch({
      type: "GET_CURRENT_CATEGORY",
      payload: resp.data
    })
  })
}

export function getListings(category_id) {
  if (category_id) {
    axios.get('/api/listings/' + category_id).then(resp => {
      store.dispatch({
        type: "GET_CURRENT_LISTINGS",
        payload: resp.data
      })
    })
  }
}

export function getListing(id) {
  if (id) {
    axios.get('/api/listing/' + id).then(resp => {
      store.dispatch({
        type: "GET_CURRENT_LISTING",
        payload: resp.data
      })
    })
  }
}

export function postListing(title, description, category_id) {
  axios.post('/api/listing', {title, description, category_id}).then(resp => {
    getListings(category_id)
  })
}