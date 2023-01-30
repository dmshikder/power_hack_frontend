import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CustomerBillingContext } from "../contexts/CustomerBillingContexts";
import AddBill from "./AddBill";
import CustomerBilling from "./CustomerBilling";

const CustomerBillingList = () => {


  const { bills } = useContext(CustomerBillingContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [searchResult, setSearchResult] = useState("");

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const match = bills.filter(
      (i) =>
        i.fullName.includes(searchText) ||
        i.email.includes(searchText) ||
        i.phone.includes(searchText)
    );
    setSearchResult(match);
  };

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6 d-flex gap-4 ">
            <h2 className="ms-4">
              <b>Billings</b>
            </h2>
            <input
              onChange={handleSearch}
              type="text"
              placeholder="search here"
            />
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              Add bill
            </Button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResult
            ? searchResult.map((bill) => (
                <tr key={bill._id}>
                  <CustomerBilling bill={bill} />
                </tr>
              ))
            : bills.map((bill) => (
                <tr key={bill._id}>
                  <CustomerBilling bill={bill} />
                </tr>
              ))}
        </tbody>
      
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBill />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomerBillingList;
