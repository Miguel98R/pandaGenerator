const express = require('express')
const router = express.Router()


router.get("/", async (req, res) => {

    res.render('index', {
            title: 'Panda Generator | Home',



        }
    )
})




router.get("/:page", async (req, res) => {
    res.render("404", {
        title: 'Panda Generator | 404',

    })
});


module.exports = router