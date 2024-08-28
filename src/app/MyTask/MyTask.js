import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { editTask, getAlltasks, getAllUsers } from "../APIs/user.api";
import EditTaskModal from "../modals/EditTaskModal";
import { toast } from "react-toastify";

export default function MyTask() {
  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState();

  const handlegetTasks = async () => {
    const res = await getAlltasks();
    const res1 = await getAllUsers();
    let users = res1?.data;

    let tasks = res?.data;
    let userId = localStorage.getItem("user_id");
    let newTasks = tasks.filter((item) => item.assignTo == userId);

    let t = newTasks?.forEach((item) => {
      item["assignToName"] = users?.find(
        (item1) => item1?._id == item.assignTo
      )?.name;
    });
    console.log("tasks", newTasks);
    setData(newTasks);
  };

  useEffect(() => {
    handlegetTasks();
  }, []);

  const handleoPnemodal = (id1) => {
    setId(id1);
    setOpenModal(true);
  };
  const handleSelct = async (e, id1) => {
    let data = {
      status: e.target.value,
    };

    const res = await editTask(data, id1);
    if (res?.data) {
      toast.success("Status updated successfully");
      handlegetTasks();
    }
  };

  return (
    <div className=" ">
      <div className="row scroldiv">
        {data?.map((item) => (
          <div className="col-4 mt-4 ">
            <div className="bluediv  p-3">
              <div className="d-flex">
                <select
                  onChange={(e) => {
                    handleSelct(e, item._id);
                  }}
                  className="statusdivc"
                >
                  {item.status == "pending" ? (
                    <option selected>pending</option>
                  ) : (
                    <option>pending</option>
                  )}
                       {item.status == "Dev-Ready" ? (
                    <option selected>Dev-Ready</option>
                  ) : (
                    <option>Dev-Ready</option>
                  )}
                  {item.status == "Dev-In-Progress" ? (
                    <option selected>Dev-In-Progress</option>
                  ) : (
                    <option>Dev-In-Progress</option>
                  )}
                  {item.status == "completed" ? (
                    <option selected>Completed</option>
                  ) : (
                    <option>Completed</option>
                  )}
                </select>
                <i
                  onClick={() => {
                    handleoPnemodal(item._id);
                  }}
                  style={{
                    color: "#1E96B9",
                    cursor: "pointer",
                    marginLeft: "2rem",
                  }}
                  class="fa fa-edit"
                ></i>
                <p style={{ color: "aqua" }} className=" ml-4">
                  {item?.assignToName}
                </p>
              </div>

              <div className="p-4 ">
                <div className="d-flex">
                  <div>
                    <p className="textAqua">{item.name}</p>
                  </div>
                  <div className="ml-4" style={{ marginTop: "-1rem" }}>
                    {/* <p style={{float: "right"}}>Change Status</p> */}
                  </div>
                </div>
                <p className="text-white">{item.desc}</p>

                <div className="bluedivtarget p-3 d-flex textgrey">
                  <div>
                    <p className="textgrey">Created at</p>
                    <p className="textgrey">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="ml-5">
                    <p className="textgrey">Due date</p>
                    <p className="textgrey">
                      {new Date(item.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openModal && (
        <EditTaskModal
          id={id}
          openModal={openModal}
          setOpenModal={setOpenModal}
          handlegetTasks={handlegetTasks}
        />
      )}
    </div>
  );
}
