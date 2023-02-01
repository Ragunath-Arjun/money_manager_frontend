import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Popup() {
  const [isemail, setemail] = useState([]);
  const Navigate = useNavigate();
  const myFormik = useFormik({
    initialValues: {
      income: "",
      expense: "",
      description: "",
      categories: "",
      divisions: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.income == "") {
        errors.income = "Income cannot be blank";
      }
      if (values.expense == "") {
        errors.expense = "Expense cannot be blank";
      }
      if (values.description == "") {
        errors.description = "Description cannot be blank";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const insertdata = await axios.post(
          "https://money-manager-backend-9yjg.onrender.com/expense",
          values,
          {
            headers: {
              Authorization: `${window.localStorage.getItem("token")}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary mt-3"
          data-toggle="modal"
          data-target="#myModal"
        >
          ADD Income/Expense
        </button>

        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Money Manager</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="mb-0">
                  <form className="p-3 mt-3" onSubmit={myFormik.handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                      <span>Income:</span>
                      <input
                        type="text"
                        name="income"
                        placeholder="Income"
                        className="form-control"
                        onChange={myFormik.handleChange}
                        value={myFormik.values.income}
                      />
                    </div>
                    <span style={{ color: "red" }}>
                      {myFormik.errors.income}
                    </span>

                    <div className="form-field d-flex align-items-center">
                      <span>Expense:</span>
                      <input
                        type="text"
                        name="expense"
                        placeholder="expense"
                        className="form-control"
                        onChange={myFormik.handleChange}
                        value={myFormik.values.expense}
                      />
                    </div>
                    <span style={{ color: "red" }}>
                      {myFormik.errors.expense}
                    </span>
                    <div className="form-field d-flex align-items-center">
                      <span>Description:</span>
                      <input
                        type="text"
                        name="description"
                        placeholder="description"
                        className="form-control"
                        onChange={myFormik.handleChange}
                        value={myFormik.values.description}
                      />
                    </div>
                    <span style={{ color: "red" }}>
                      {myFormik.errors.description}
                    </span>
                    <div className="form-field d-flex align-items-center">
                      <span>Categories:</span>
                      <select name="categories"className="form-group" onChange={myFormik.handleChange} value={myFormik.values.categories}>
                        <option value="Fuel">Fuel</option>
                        <option value="Movie">Movie</option>
                        <option value="Food">Food</option>
                        <option value="Loan">Loan</option>
                        <option value="Medical">Medical</option>
                        <option value="Others">Others</option>

                      </select>
                    </div>

                    <div className="form-field d-flex align-items-center">
                      <span>Divisions:</span>
                      <select name="divisions"className="form-group" onChange={myFormik.handleChange} value={myFormik.values.divisions}>
                        <option value="office">Office</option>
                        <option value="personal">Personal</option>

                      </select>
                    </div>

                    <span style={{ color: "red" }}>
                      {myFormik.errors.email}
                    </span>
                    <button className="btn btn-primary mt-3" type="Submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
