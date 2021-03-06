import React from 'react';
import { useState } from 'react';
import MinMax from './les2/MinMax';

export default function () {
  let [products, setProducts] = useState(productStub());
  let setCnt = (id, cnt) => {
    setProducts(products.map(pr => pr.id != id ? pr : { ...pr, cnt }))
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
        </tr>
        {products.map((pr, i) => (
          <tr key={pr.id}>
            <td>{i + 1}</td>
            <td>{pr.title}</td>
            <td>{pr.price}</td>
            <td><MinMax max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)} /></td>
          </tr>
        )
        )}
      </tbody>
    </table>
  </>;
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