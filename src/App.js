import React from 'react';
import { useState } from 'react';
import MinMax from './les2/MinMax';

export default function () {
  let [products, setProducts] = useState(productStub());

  let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);

  let setCnt = (id, cnt) => {
    setProducts(products.map(pr => pr.id != id ? pr : { ...pr, cnt }))
  }

  let removeProduct = (id) => {
    setProducts(products.filter(el => el.id !== id));
  }

  return <>
    <h1>Products List</h1>
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
            <td><MinMax min={10} max={pr.rest * 10} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)} /></td>
            <td>{pr.price * pr.cnt}</td>
            <td>
              <button type='button' onClick={() => removeProduct(pr.id)}>x</button>
            </td>
          </tr>
        )
        )}
      </tbody>
    </table>
    <hr />
    <strong>Total: {total}</strong>
  </>;
}

function productStub() {
  return [
    {
      id: 100,
      title: 'Ipnone 200',
      price: 12000,
      rest: 10,
      cnt: 10
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5,
      cnt: 10
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2,
      cnt: 10
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8,
      cnt: 10
    }
  ];
}