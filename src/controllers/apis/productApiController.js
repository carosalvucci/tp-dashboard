list: async (req,res) => {
    let response = {};
    try {
        
        const [products, categories] = await Promise.all (Product.findAll (), Category.findAll ({include: [{association: "el alias del nombre de la asociacion por parte de categorias-seria products"}]}),)
        response.count = products.length
        response.countByCategory = {}
        categories.forEach ((category) => {
            response.countByCategory [category.name] = category.products.length
        }
        )
        response.products = products.map ((product) => {
           return { 
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            detail: "url de la imagen: /api/products/$(req.params.id)"
           }
        })


catch (e) {
    response.msg = "error"
    return res.json (response)

}}