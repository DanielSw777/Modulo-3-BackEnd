const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            public_id: String,
            secure_url: String
        },
        price: {
            type: Number,
            required: true
        },
        description: String,
        stock: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
