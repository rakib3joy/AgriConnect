import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Formcrud = () => {

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const product_name = form.product_name.value;
    const product_price = form.product_price.value;
    const product_link = form.product_link.value;
    const product_ditalise = form.product_ditalise.value;
    const product_discount = form.product_discount.value;

    const product = { product_name, product_price, product_link, product_ditalise, product_discount };
    console.log("Product to send:", product);

    fetch('http://localhost:3001/products', { 
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(res => res.json())
    .then(data => {
      console.log("Server Response:", data);
      if (data.insertedId) {
        alert("✅ Product added successfully!");
        form.reset();
      }
    })
    .catch(error => {
      console.error("Error adding product:", error);
      alert("❌ Failed to add product.");
    });
  }

  return (
    <Container>
      <div>
        <h1>Add Products</h1>
      </div>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" name='product_name' required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" placeholder="Price" name='product_price' required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Picture Link</Form.Label>
          <Form.Control type="text" placeholder="Product Link" name='product_link' required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>About Product</Form.Label>
          <Form.Control type="text" placeholder="Product Details" name='product_ditalise' required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Discount</Form.Label>
          <Form.Control type="number" placeholder="Discount" name='product_discount' />
        </Form.Group>

        <Button type="submit" variant="info">Add Product</Button>
      </Form>
    </Container>
  );
}

export default Formcrud;
