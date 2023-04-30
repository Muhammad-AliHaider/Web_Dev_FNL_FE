import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const CreditCardForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const fetchCreditCardInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/credit-card-info"); // Replace with your API endpoint
      form.setFieldsValue(response.data);
    } catch (error) {
      message.error("Error fetching credit card information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCreditCardInfo();
  }, []);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await axios.put("/api/update-credit-card-info", values); // Replace with your API endpoint
      message.success("Credit card information updated successfully");
    } catch (error) {
      message.error("Error updating credit card information");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="content">
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Cardholder Name"
            name="cardholderName"
            rules={[
              { required: true, message: "Please enter the cardholder name" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Card Number"
            name="cardNumber"
            rules={[
              { required: true, message: "Please enter the card number" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Expiration Date"
            name="expirationDate"
            rules={[
              { required: true, message: "Please enter the expiration date" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="CVV"
            name="cvv"
            rules={[{ required: true, message: "Please enter the CVV" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Update Credit Card Information
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreditCardForm;
