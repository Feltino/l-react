import React from 'react';
import { useState } from 'react';
import MinMax from './les3/MinMax';
import Modal from './les4/Modal';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function () {
  let [products, setProducts] = useState(productStub());
  let [showDetails, setShowDetails] = useState(false);
  let [showFaq, setShowFaq] = useState(false);

  let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
  // let total = useMemo(() => products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0), [products]);

  let setCnt = (id, cnt) => {
    setProducts(products.map(pr => pr.id != id ? pr : { ...pr, cnt }))
  }

  let removeProduct = (id) => {
    setProducts(products.filter(el => el.id !== id));
  }

  return <div className='container mt-1'>
    <h1>Products List</h1>
    <hr />
    <strong onClick={() => setShowDetails(true)}>Total: {total}</strong>
    <Modal
      showed={showDetails}
      title={`${products.length} in list, please pay order`}
      onClose={() => setShowDetails(false)}>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Cnt</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {products.map((pr, i) => (
            <tr key={pr.id}>
              <td>{i + 1}</td>
              <td>{pr.title}</td>
              <td>{pr.price}</td>
              <td><MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)} /></td>
              <td>{pr.price * pr.cnt}</td>
              <td>
                <button type='button' onClick={() => removeProduct(pr.id)}>x</button>
                <button type='button' onClick={() => setCnt(pr.id, pr.rest)}>Max</button>
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </Modal>
    <hr />
    <footer>
      <strong onClick={() => setShowFaq(true)}>FAQ</strong>
      <BModal show={showFaq} onHide={() => setShowFaq(false)}>
        <BModal.Header closeButton>
          Attention
        </BModal.Header>
        <BModal.Body>
          <p>Hello bootstrap</p>
        </BModal.Body>
        <BModal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </BModal.Footer>
      </BModal>
    </footer>
  </div>;
}

function productStub() {
  return [
    {
      id: 100,
      title: 'Ipnone 200',
      price: 12000,
      rest: 10,
      cnt: 1
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5,
      cnt: 1
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2,
      cnt: 1
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8,
      cnt: 1
    }
  ];
}