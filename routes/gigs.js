var express = require("express");
var router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
    console.log(req.body);
    let {title, technologies, budget, description, contact_email} = req.body;
    let errors = [];

    if(!title) {
        errors.push({ text: 'Please add a title'});
    }
    if(!technologies) {
        errors.push({ text: 'Please add a description'});
    }
    if(!description) {
        errors.push({ text: 'Please add a description'});
    }
    if(!contact_email) {
        errors.push({ text: 'Please add a email'});
    }

    if(errors.length > 0) {
        res.render('add', {
            errors, 
            title, 
            technologies, 
            budget, 
            description, 
            contact_email
        })
    } else {
        if(!budget) {
            budget = 'Unknown';
        } else {
            budget = `$${budget}`
        }

        //Make lower case an remove space after comma
        technologies = technologies.toLowerCase().replace(/, /g, ',');

        //insert into table
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
    }
}); 

// Search for gigs

router.get('/search', (req, res) => {
    let { term } = req.query;

    // Make lowercase
    term = term.toLowerCase();

    Gig.findAll({
        where: {
            technologies: {
                [Op.like]: '%' + term + '%'
            }
        }
    }).then(gigs => {
        res.render('gigs', {gigs})
    })
    .catch(err => console.log(err));
        
});

module.exports = router;