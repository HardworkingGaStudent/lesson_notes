const productModel = require('../../models/products/products')
const productValidators = require('../validators/products')

const controller = {

    createProduct: async (req, res) => {
        // validations
        const validationResults = productValidators.createProductValidator.validate(req.body)

        if (validationResults.error) {
            res.send('validation error occurred')
            return
        }

        const validatedResults = validationResults.value

        try {
            await productModel.create(validatedResults)
        } catch(err) {
            console.log(err)
        }

        // todo: redirect to products page
        res.send('asd')
    },

    listProducts: async (req, res) => {
        const products = productModel.find().exec()

        res.render('products/index', {products})
    },

    getProduct: async (req, res) => {
        const products = await productModel.findById(req.param.product_id)
        res.render('products/show', {products})

    }

}

module.exports = controller