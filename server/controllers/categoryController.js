```javascript
const Category = require('../models/Category');

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    }
};

// Create a new category
exports.createCategory = async (req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const savedCategory = await category.save();
        res.json(savedCategory);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the category."
        });
    }
};

// Update a category
exports.updateCategory = async (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Category name can not be empty"
        });
    }

    try {
        const category = await Category.findByIdAndUpdate(req.params.categoryId, {
            name: req.body.name,
            description: req.body.description
        }, {new: true});

        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });
        }

        res.json(category);
    } catch (err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });                
        }

        return res.status(500).send({
            message: "Error updating category with id " + req.params.categoryId
        });
    }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndRemove(req.params.categoryId);

        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });
        }

        res.json({message: "Category deleted successfully!"});
    } catch (err) {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });                
        }

        return res.status(500).send({
            message: "Could not delete category with id " + req.params.categoryId
        });
    }
};
```