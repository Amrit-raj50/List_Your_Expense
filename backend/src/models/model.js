const mongoose = require('mongoose');

const listSchema = new mongoose.Schema(
    {
        type: {type : String, required : [true, "type is required"]},
        rupees: {type : Number, required : [true, "rupees is required"]}
    },
    {timestamps: true}
)

const List = mongoose.model('List',listSchema);

module.exports = List;