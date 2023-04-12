class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Valido que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios.");
        return;
      }
  
      // Valido que el campo "code" no se repita
      if (this.products.find((product) => product.code === code)) {
        console.log("El código ya existe.");
        return;
      }
  
      // Crear un nuevo producto con un id autoincrementable
      const newProduct = new Product(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      );
      newProduct.id = ++this.productIdCounter;
  
      // Agrege el nuevo producto al arreglo de productos
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.log("Producto no encontrado.");
      }
      return product;
    }
  }