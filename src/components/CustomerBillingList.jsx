import React from "react";
import CustomerBilling from "./CustomerBilling";

const CustomerBillingList = () => {

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6 d-flex gap-4 ">
            <h2 className="ms-4">
              <b>Billings</b>
            </h2>
            <input type="text" />
          </div>
          <div className="col-sm-6">
            <button>
              <span>Add New Bill</span>
            </button>
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
         <tr> <CustomerBilling /></tr>
        </tbody>
      </table>
    </>
  );
};

export default CustomerBillingList;
