import { Form, Input, Select } from "antd";
import React, { useEffect, useReducer, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { addTask, getAllUsers } from "../APIs/user.api";
import { dropdownvaluesUsers } from "../../utils/helpers";
import { toast } from "react-toastify";

export default function AddTaskModal({handlegetTasks, openModal, setOpenModal }) {
  const [users, setUsers] = useState()
  const handlegetAllUsers = async () =>{
    const res = await getAllUsers()
    const u = dropdownvaluesUsers(res?.data)
    setUsers(u)
  }
  useEffect(()=>{
    handlegetAllUsers()
  },[])
  const onFinish = async (formdata) => {
    const res = await addTask(formdata)
    if(res?.data){
      toast.success("Task created successfully")
      handlegetTasks()
    }
  };

  return (
    <div>
      <div>
        <div className="card">
          <div style={{ backgroundColor: "#172C4D" }} className="card-body">
            <Modal
              size="md"
              show={openModal}
              onHide={() => setOpenModal(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
      

              <Modal.Body>
                <div id="print" >
                  <Form
                    name="dynamic_form_nest_item"
                     onFinish={onFinish}
                    // style={{ maxWidth: 600 }}
                    autoComplete="off"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label className="label-forms">Name</label>

                        <Form.Item name="name">
                          <Input name="name" />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="label-forms">Description</label>
                        <Form.Item name="desc">
                          <Input name="desc" />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label className="label-forms">Date</label>
                        <Form.Item name="dueDate">
                          <Input type="date" name="dueDate" />
                        </Form.Item>
                      </div>
                    </div>
                   <div className="row">
                      <div className="col-md-6">
                        <label className="label-forms">Assign to</label>
                        <Form.Item name="assignTo">
                          <Select options={users} name="assignTo" />
                        </Form.Item>
                      </div>
                    </div>
                    <Form.Item>
                      <Button style={{marginLeft: "2px"}} className="btn156" type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
