import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchUser } from '../../redux/Actions/user-actions';

import './form.css';

function SampleForm() {
  const [price, setPrice] = useState(5);
  // const [username, setUsername] = useState('');

  // const handleUserChange = (event) => {
  //   setUsername(event.target.value);
  // };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  // const dispatch = useDispatch();

  // const currUser = dispatch(fetchUser(username));

  const currUser = ''; // instead of this, we will use Redux selector to check if user already exists.

  return (
    <>
      <Form className="my-form m-auto w-50 my-5">
        <FloatingLabel
          label="Username"
          className="mb-3"
        >
          <Form.Control placeholder="Name" name="user[username]" /* onChange={handleUserChange} */ />
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

        <Button type="submit" variant="outline-success mt-2 sub-btn">{currUser ? 'Login' : 'Register' }</Button>

      </Form>
    </>
  );
}

export default SampleForm;
