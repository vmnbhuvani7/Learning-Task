import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './bill.css';

const Bill = () => {
  var d = new Date();

  var datestring =
    d.getDate() +
    '-' +
    (d.getMonth() + 1) +
    '-' +
    d.getFullYear() +
    ' ' +
    d.getHours() +
    ':' +
    d.getMinutes();

  const [status, setStatus] = useState(false);
  const [bill, setBill] = useState(false);
  const [show, setShow] = useState(true);
  const [discount, setDiscount] = useState(false);
  const [dstatus, setDstatuts] = useState(false);
  const [discountprice, setDiscountPrice] = useState(0);
  const [quentity, setQuentity] = useState(1);
  const [person, setPerson] = useState({
    name: '',
    address: '',
    number: '',
    gstnumber: '',
    billno: Math.random().toString().substr(9, 4),
    date: datestring,
    products: [],
  });
  const [product, setProduct] = useState({
    product: '',
    price: '',
    qty: quentity,
  });

  const handleClose = () => setShow(false);
  const addHandler = () => setShow(true);

  const incrementQuentity = () => {
    setQuentity(quentity + 1);
    setProduct({
      ...product,
      qty: product.qty + 1,
    });
  };
  const decrementQuentity = () => {
    if (quentity > 1) {
      setQuentity(quentity - 1);
      setProduct({
        ...product,
        qty: product.qty - 1,
      });
    }
  };

  const Onchange = e => {
    //changes
    const { name, value } = e.target
    setPerson({
      ...person,
      [name]: value
    });
  };

  const saveData = () => {
    setShow(false);
    setBill(true);
    setStatus(true);
  };
  const iteam = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const additem = () => {
    setPerson({
      ...person,
      products: [...person.products, product],
    });
    setProduct({
      product: '',
      price: '',
      qty: quentity,
    });
  };

  var totalprice = 0;
  let mult = 0;
  {
    person &&
      person.products.map((data) => {
        mult = parseInt(data.qty) * parseInt(data.price);
        totalprice += mult;
      });
  }

  const discountamt = () => {
    setDiscount(true)
  }

  let dprice = 0
  const donchange = (e) => {
    // console.log(e.target.value);
    dprice = totalprice - e.target.value
    setDiscountPrice(dprice)
  }
  const handleCloseDiscount = () => {
    // console.log(dprice);
    setDiscount(false)
    setDstatuts(true)
  }

  return (
    <div>
      {status == false && (
        <Button variant="primary" onClick={() => addHandler()}>
          Add Details
        </Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <legend>Customer Information:</legend>
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="name"
                      placeholder="Enter Name "
                      onChange={e => Onchange(e)}
                    />
                  </div>

                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="address"
                      placeholder="Enter Address "
                      onChange={e => Onchange(e)}
                    ></textarea>
                  </div>

                  <div class="form-group">
                    <input
                      minlength="10"
                      maxlength="10"
                      name="number"
                      class="form-control"
                      onChange={e => Onchange(e)}
                      placeholder=" Enter Mobile no: "
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="gstnumber"
                      class="form-control"
                      onChange={e => Onchange(e)}
                      placeholder="Enter Gst-No *"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <legend className="d-flex justify-content-between"> Product Information:
              <Button
                className="ml-5"
                onClick={() => {
                  additem();
                }}
              >
                Add item
              </Button>
            </legend>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="product"
                    value={product.product}
                    onChange={e => iteam(e)}
                    placeholder="Enter Item Name"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="price"
                    value={product.price}
                    onChange={e => iteam(e)}
                    placeholder="Enter Price"
                  />
                </div>

                <div class="form-group">
                  <Button
                    className="ml-1 mr-2"
                    onClick={() => incrementQuentity()}
                  >
                    +
                  </Button>
                  {quentity}
                  <Button
                    className="ml-2"
                    onClick={() => decrementQuentity()}
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>saveData()}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container">
        {bill && (
          <Card>
            <Card.Header className=" text-left d-flex justify-content-between text-light bg-primary p-3">
              <h1>Blue Soft</h1>
              <p>
                240 - RoyalPlaza <br/>
                bapasitaram Chock
                <br/>
                Jakatnaka,Surat-394130
              </p>
              
            </Card.Header>

            <Card.Body>
              {<Card.Title></Card.Title>}
              <Card.Text>
                <div className="row">
                  <div className="col-4">
                    <h5>Billed To</h5>
                    <p>
                      {person.name}
                      <br />
                      <p>
                        {person.address}
                        <br />
                        <p>{person.gstnumber}</p>
                      </p>
                    </p>
                  </div>
                  <div className="col-4">
                    <h5>Invoice Number</h5>
                    <p>{person.billno}</p>
                    <h6>Date of issue</h6>
                    <p>{person.date}</p>
                  </div>
                  <div align="right" className="col-4">
                    <h5>Invoice total</h5>
                    {dstatus ? <b><h6>&#x20B9;{discountprice}</h6></b> : <h6><b>&#x20B9;{totalprice}</b></h6>}
                  </div>
                </div>
                <hr />

                <table style={{ border: '2px solid black', width: '100%' }}>
                  <thead>
                    <tr>
                      <th>Product </th>
                      <th>Cost</th>
                      <th>Quentity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {person.products.map((item) => {
                      return (
                        <tr align="left">
                          <td>{item.product}</td>
                          <td>&#x20B9;{item.price}</td>
                          <td>{item.qty}</td>
                          <td>
                            &#x20B9;{parseInt(item.price) * parseInt(item.qty)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="ml-0">
                  <Button style={{ marginLeft: '0px ' }} onClick={() => { discountamt() }}>-</Button>
                </div>
                <hr />
                <div className="row">
                  <div align="left" className="col-4">
                    {/* <Button>-</Button> */}
                  </div>
                  <div align="right" className="abc col-6">
                    <h6>Sub Total:</h6>
                    <h6>Tax:</h6>
                    <h6>Total:</h6>
                  </div>
                  <div align="left" className="col-2">
                    <p>
                      <b>
                        &#x20B9;{totalprice}
                        <br />
                        &#x20B9;0 <br />
                        &#x20B9;{totalprice}
                      </b>
                    </p>
                  </div>
                </div>
                <br />

                <div className="row">
                  <div align="left" className="col-4">
                    <p>
                      Invoice terms
                      <br />
                      <b>Ex.Please Pay Your invoice by..</b>
                    </p>
                  </div>
                  <div align="right" className="abc col-6">
                    <h6>Amount Due(USD):</h6>
                  </div>
                  <div align="left" className="col-2">
                    {dstatus ? <p><b>&#x20B9;{discountprice}</b></p> : <p><b>&#x20B9;{totalprice}</b></p>}
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>

      <Modal show={discount} onHide={handleCloseDiscount}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input type="number" onChange={(e) => { donchange(e) }}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDiscount}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseDiscount}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
}

export default Bill;