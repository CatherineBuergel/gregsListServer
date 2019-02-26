
const router = require('express').Router()
let Job = require('../models/Job')

router.get('', (req, res, next) => {
  Job.find({})
    .then(jobs => {
      res.status(200).send(jobs)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

router.post('', (req, res, next) => {
  Job.create(req.body)
    .then(job => {
      res.status(201).send(job)
    })
})

router.get('/:id', (req, res, next) => {
  Job.findById(req.params.id)
    .then(job => {
      res.status(200).send(job)
    })
})

router.put('/:id', (req, res, next) => {
  Job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(oldData => {
      res.status(200).send('Successfully deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

module.exports = router