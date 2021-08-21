const router = require("express").Router();

const Workout = require('../models/workouts');

router.get('/stats', async (req, res) => {
    try {
        const workoutData = await Workout.find();
        console.log(workoutData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
