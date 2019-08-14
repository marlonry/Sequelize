const Sequelize = require("sequelize");
const db = require("../config/database");

// const Gig = db.define('gig', {
//     title: {
//         type: Sequelize.STRING,
//     },
//     technologies: {
//         type: Sequelize.STRING,
//     },
//     description: {
//         type: Sequelize.STRING,
//     },
//     budget: {
//         type: Sequelize.STRING,
//     },
//     contactEmail: {
//         type: Sequelize.STRING,
//     }
// });

class Gig extends Sequelize.Model {}
Gig.init({
    title: Sequelize.STRING,
    technologies: Sequelize.STRING,
    description: Sequelize.STRING,
    budget: Sequelize.STRING,
    contact_email: Sequelize.STRING,
}, { sequelize: db, modelName: 'gigs' });


module.exports = Gig; // exporting a a single named value module.exports , exports can multiple named variables