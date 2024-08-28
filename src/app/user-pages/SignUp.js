import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useState } from "react";

import { toast } from "react-toastify";

import { Button, Form, Input } from "antd";
import { signUp } from "../APIs/user.api";

export default function SignUp() {
  const history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (formdata) => {
    const res = await signUp(formdata)
    console.log("res", res)
    if(res?.data){
      toast.success("User Created Successfully")
    }
  if(res?.response?.data?.message){
    toast.error(res?.response?.data?.message)
  }
  };

  return (
    <div>
      <div className="upertext">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white" }}>
            <span className="maintext1"> Task Management App </span>
          </p>
        </div>
        <p className="signin-text">Sign UP</p>
        <p className="signin-he">Create Your Account</p>
      </div>
      <div className="loginmaindiv">
        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
          <div>
            <Form onFinish={handleSubmit} className="pt-3">
              <Form.Item
                rules={[{ required: true, message: "Missing Name" }]}
                name="name"
              >
                <div className="fieldwrapperlogin">
                  <Input placeholder="Name" type="text" />
                </div>
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Missing Email" }]}
                name="email"
              >
                <div className="fieldwrapperlogin">
                  <Input placeholder="email" type="text" />
                </div>
              </Form.Item>

              <Form.Item
                rules={[{ required: true, message: "Missing Password" }]}
                name="password"
              >
                <div className="fieldwrapperlogin">
                  <Input placeholder="password" type="password" />
                </div>
              </Form.Item>

              <div className="mt-3">
                <Form.Item>
                  <Button
                    style={{
                      background: "#26B6CD",
                      borderRadius: "17px",
                      border: "none",
                      width: "100%",
                      color: "white",
                      height: "42px",
                    }}
                    type="primary"
                    htmlType="submit"
                    // className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                  >
                    SIGN UP
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
          <p style={{ color: "white" }}>
            If you don't have account Please{" "}
            <span
              onClick={() => {
                history.push("/login");
              }}
              style={{ color: "#26B6CD", marginLeft: "5px", cursor: "pointer" }}
            >
              Login
            </span>
          </p>
  
        </div>

        
      </div>
    </div>
  );
}
