const express = require('express');
const router = express.Router();
const db = require('../db')

router.get('/categories', function(req, res, next) {
  const sql = `
  SELECT c1.id, c1.name, c1.slug, c2.name AS parent_name, c2.id AS parent_id, c2.slug AS parent_slug
  FROM categories c1
  LEFT JOIN categories c2 ON c1.parent_id = c2.id;
  `

  db.query(sql, (err, results, fields) => {
    const categories = results
      .filter(category => category.parent_id === null)
      .map(parent => {
        return {
          id: parent.id,
          name: parent.name,
          slug: parent.slug,
          child_categories: results
            .filter(child => {
              return child.parent_id === parent.id
          }).map(child => {
            return {
              id: child.id,
              name: child.name,
              slug: child.slug
            }
          })
        }
      })

    res.json(categories)
  })
})

router.get('/category/:slug', function(req, res, next) {
  const sql = `
  SELECT id, name 
  FROM categories 
  WHERE slug = ?
  `

  db.query(sql, [req.params.slug], function(err, results, fields) {
    res.json(results[0])
  })
})

router.get('/listings/:catId', function(req, res, next) {
  const sql = `
  SELECT l.id, l.title, l.description
  FROM listings l
  LEFT JOIN categories c ON l.category_id = c.id
  WHERE c.id = ?
  `

  db.query(sql, [req.params.catId], function(err, results, fields) {
    res.json(results)
  })
})

router.get('/listing/:id', function(req, res, next) {
  const sql = `
  SELECT l.id, l.title, l.description, l.category_id, c.slug
  FROM listings l
  LEFT JOIN categories c ON l.category_id = c.id
  WHERE l.id = ?
  `

  db.query(sql, [req.params.id], ((err, results, fields) => {
    res.json(results[0])
  }))
})

router.post('/listing', function(req, res, next) {
  const sql = `
  INSERT INTO listings (title, description, category_id) 
  VALUES (?, ?, ?)
  `

  db.query(sql, [req.body.title, req.body.description, req.body.category_id], function(err, results, fields) {
    res.json({
      id: results.insertID,
      title: req.body.title,
      description: req.body.description,
      category_id: req.body.category_id
    })
  })
})

module.exports = router;
