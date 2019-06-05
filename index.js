// Manage Roles (id, name)
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require("./knexfile")

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

// list all roles
server.post('/api/cohorts', (req, res) => {
  db("cohorts").insert(req.body, "id")
  .then(ids => {
    db("cohorts")
    .where({id: ids[0]})
    .first()
    .then(cohort => {
      res.status(201).json(cohort)
    })
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.get('/api/cohorts', (req, res) => {
  db("cohorts")
  .then(zoos => {
    res.status(200).json(zoos)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  db("zoos")
  .where({id: req.params.id})
  .first()
  .then(zoo => {
    if (zoo) res.status(200).json(zoo)
    else zoo.status(404).json("Record not found")
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  db("zoos")
  .where({id: req.params.id})
  .update(changes)
  .then(count => {
    if (count > 0) {
      db("zoos")
      .where({id: req.params.id})
      .first()
      .then(zoo => {
        res.status(200).json(zoo)
      }) 
    } else {
      res.status(404).json("Zoo not found")
    }
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  db("zoos")
  .where({id: req.params.id})
  .del()
  .then(count => {
    if (count > 0) res.status(204).end()
    else zoo.status(404).json("Zoo not found")
  }).catch(err => {
    res.status(500).json(err)
  })
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
