import React, { useState } from "react";
import Topbar from "./Topbar";
import { Form, Input, Layout, Modal, Select, Table, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Progress, Space } from "antd";

import Loading from "./Loading";

function Homepage() {
  const Navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [allTransaction, setAllTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [frequency, setFrequency] = useState("7");

  const handleSubmit = async (values) => {
    try {
      let token = window.localStorage.getItem("token");
      console.log("token", token);
      if (!token) {
        Navigate("/");
      }
      console.log(values);
      const insertdata = await axios.post(
        "https://money-manager-backend-9yjg.onrender.com/expense",
        values,
        {
          headers: {
            authorization: token,
            "Content-type": "application/json",
          },
        }
      );
      message.success("Transaction added successfully");
      setShowModal(false);
    } catch (error) {
      message.error("Failed to Add Transaction");
      console.log(error);
    }
  };

  //get all transactions

  const getAllTransactions = async () => {
    try {
      let token = window.localStorage.getItem("token");
      if (!token) {
        Navigate("/");
      }
      const userdata = await axios.get(
        "https://money-manager-backend-9yjg.onrender.com/expense",
        {
          headers: {
            authorization: token,
            "Content-type": "application/json",
          },
        }
      );
      setAllTransaction(userdata.data);
      console.log(userdata.data);
    } catch (error) {
      console.log(error);
      message.error("Couldnot fetch all transactions");
    }
  };

  useEffect(() => {
    getAllTransactions();
  }, [frequency]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Actions",
    },
  ];
  return (
    <>
      <Topbar />

      <Layout>
        <div className="filters">
          <div>
            <h6>Select Frequency</h6>
            <Select
              value={frequency}
              onChange={(values) => {
                setFrequency(values);
              }}
            >
              <Select.Option value="7">Last 1 Week</Select.Option>
              <Select.Option value="30">Last 1 Month</Select.Option>
              <Select.Option value="365">Last 1 Year</Select.Option>
              <Select.Option value="custom">Custom</Select.Option>
            </Select>
          </div>
          <div className="incomebtn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setShowModal(true);
              }}
            >
              ADD Income/Expense
            </button>
          </div>
        </div>
        <div class="content">
          <Table columns={columns} dataSource={allTransaction} />
        </div>

        <Modal
          title="Add Transaction"
          open={showModal}
          onCancel={() => setShowModal(false)}
          footer={false}
        >
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[{ required: true, message: "Please input your Amount!" }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: "Please enter your Type!" }]}
            >
              <Select>
                <Select.Option value="income">Income</Select.Option>
                <Select.Option value="expense">Expense</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[
                { required: true, message: "Please enter your Category!" },
              ]}
            >
              <Select>
                <Select.Option value="salary">Salary</Select.Option>
                <Select.Option value="bills">Bills</Select.Option>
                <Select.Option value="project">Project</Select.Option>
                <Select.Option value="food">Food</Select.Option>
                <Select.Option value="movie">Movie</Select.Option>
                <Select.Option value="fees">Fees</Select.Option>
                <Select.Option value="medical">Medical</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Please enter your Date!" }]}
            >
              <Input type="date" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please enter your Description!" },
              ]}
            >
              <Input type="text" />
            </Form.Item>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </Form>
        </Modal>
      </Layout>

      {/* <Space wrap>
        <Progress type="circle" percent={75} value="INCOME" />
        <Progress type="circle" percent={70} status="exception" />
      </Space> */}
    </>
  );
}

export default Homepage;
