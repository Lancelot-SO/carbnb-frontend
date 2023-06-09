import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './form.css';

function SampleForm() {
  const [price, setPrice] = useState(5);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <Form className="my-form m-auto w-50 my-5">
        <FloatingLabel
          label="Username"
          className="mb-3"
        >
          <Form.Control placeholder="Name" name="user[username]" />
          <Form.Text muted className="ms-2">
            Username should include numbers and letters
          </Form.Text>
        </FloatingLabel>

        <FloatingLabel label={`Price: $${price}`} className="price-label" />
        <Form.Range
          value={price}
          min={1}
          max={100}
          step={0.01}
          onChange={handlePriceChange}
          name="car[price]"
        />
      </Form>
    </>
  );
}

export default SampleForm;
