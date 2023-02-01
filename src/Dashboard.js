import React, { useState } from "react";
import Date from "./Date";
import Popup from "./Popup";

function Dashboard() {
  const [data, setData] = useState("test");
  return (
    <>
      <div className="Container bg-secondary">
        <div className="row">
          <div className="col-lg-6">
            <h1>Dashboard</h1>

            <select
              className="form-group ml-3"
              onChange={(e) => {
                console.log(e.target.value);
                setData(e.target.value);
              }}
            >
              <option>-----Select-----</option>
              <option value="Monthly">
                Monthly-wise Income and Expenditure
              </option>
              <option value="Weekly">Weekly-wise Income and Expenditure</option>
              <option value="yearly">Yearly-wise Income and Expenditure</option>
            </select>
            <br />
            {data == "Monthly" ? (
              <select className="form-group ml-3">
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sept</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
            ) : null}
            {data == "Weekly" ? (
              <select className="form-group ml-3">
                <option>1-7</option>
                <option>8-14</option>
                <option>15-21</option>
                <option>22-28</option>
                <option>28-31</option>
              </select>
            ) : null}
            {data == "yearly" ? (
              <select className="form-group ml-3">
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
              </select>
            ) : null}
            <br />
            <button
              type="button"
              onClick={() => {
                alert("No data found");
              }}
              className="btn btn-primary ml-5"
            >
              Filter
            </button>
          </div>
          <div className="col-lg-6">
            <h1 className="text-center">History</h1>
            <Date />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Income</th>
                  <th scope="col">Expense</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Divisions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>10000</td>
                  <td>5000</td>
                  <td>02-01-2023</td>
                  <td>Shopping</td>
                  <td>Movie</td>
                  <td>Personal</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>10000</td>
                  <td>0</td>
                  <td>03-01-2023</td>
                  <td>No Expense</td>
                  <td>others</td>
                  <td>Personal</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>0</td>
                  <td>5000</td>
                  <td>04-01-2023</td>
                  <td>Petrol</td>
                  <td>Fuel</td>
                  <td>Personal</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>1000</td>
                  <td>500</td>
                  <td>14-01-2023</td>
                  <td>Headphones</td>
                  <td>others</td>
                  <td>Office</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>10000</td>
                  <td>10000</td>
                  <td>18-01-2023</td>
                  <td>Mobile</td>
                  <td>others</td>
                  <td>Personal</td>
                </tr><tr>
                  <th scope="row">6</th>
                  <td>10000</td>
                  <td>50</td>
                  <td>20-01-2023</td>
                  <td>Purchase</td>
                  <td>others</td>
                  <td>Personal</td>
                </tr><tr>
                  <th scope="row">7</th>
                  <td>2999</td>
                  <td>500</td>
                  <td>25-01-2023</td>
                  <td>Dream 11</td>
                  <td>others</td>
                  <td>Personal</td>
                </tr><tr>
                  <th scope="row">8</th>
                  <td>7899</td>
                  <td>500</td>
                  <td>30-01-2023</td>
                  <td>Amazon Purchase</td>
                  <td>others</td>
                  <td>Personal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
