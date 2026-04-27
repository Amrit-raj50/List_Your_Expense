const List = require('../models/model');


const postTask = async (req, res) => {
    try {
        const { type, rupees } = req.body;

        const newTask = new List({ type, rupees });
        await newTask.save();

        res.status(201).json({
            msg: 'expense added',
            List: newTask,
        })
    } catch (error) {
        res.status(500).json({ msg: 'Server error.', error: error.message });
    }
};

const getTask = async (req, res) => {
    try {
        const list = await List.find({});

        if (!list) {
            return res.status(404).json({ msg: 'expense not found' });
        }

        res.status(200).json({ msg: 'expense fetched successfully', list });
    } catch (error) {
        res.status(500).json({ msg: 'server error', error: error.message })
    }
}

module.exports ={
    postTask,
    getTask
}