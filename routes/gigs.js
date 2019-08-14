var express = require("express");
var router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Display add gig form
router.get('/add', (req, res) => {
    res.render('add');
})

/* GET gig listing. */
router.get("/", (req, res, next) => 
    Gig.findAll()
        .then(gigs => {
        res.render('gigs', {
            gigs,
        });
    })
    .catch(err => {
        console.log(err);
    }));

// Add a gig // never add data to a server throught a get request

router.post('/add', (req, res) => {
    const data = {
        title: "Simple Wordpress Website",
        technologies: 'wordpress,php,html,css',
        budget: '$1000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque metus suscipit, euismod sapien non, blandit est. Nullam non dui eu massa rutrum gravida id id nulla. Curabitur odio ligula, maximus vel justo sit amet, condimentum lacinia neque. Suspendisse at luctus leo. Nam quis suscipit mi. Aliquam nisi ex, placerat eget laoreet a, elementum eu lorem.',
        contact_email: 'user2@gmail.com'
    }

    let {title, technologies, budget, description, contact_email} = data;

    // INSERT INTO TABLE

    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email,
    })
        .then(gig => {
            res.redirect('/gigs')
        })
        .catch(err => {
            console.log(err);
        })
}); 

module.exports = router;