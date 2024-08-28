import React, { useReducer, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useEffect } from "react";

import Spinners from "../../app/shared/Spinner2";
import { useRef } from "react";
import easyinvoice from "easyinvoice";
import jsPDF from "jspdf";
import ReactToPrint from "react-to-print";
import MyInvoice from "./MyInvoice";
import InvoiceHeader from "../../app/shared/InvoiceHeader";
export default function InvoiceModal({
  openModal,
  setOpenModal,

  data,
  fTax,
  dpayment
}) {
  const reportTemplateRef = useRef(null);
  const [sumData, setSumData] = useState();
  const [totalValue, setTOtalValue] = useState()
  const componentRef = useRef();
  const [state, setState] = useState({});

  const handleSumData = () => {
    console.log("dd", data);
    const summedData = data?.reduce((accumulator, currentObject) => {
      // Loop through each key in the current object
      for (let key in currentObject) {
        // If the key doesn't exist in the accumulator, initialize it to 0
        if (!accumulator[key]) {
          accumulator[key] = 0;
        }
        // Add the current value to the accumulated value
        accumulator[key] += Number(currentObject[key]);
      }
      setSumData(accumulator);
      console.log("Aaaaaaaaaaaa", accumulator);
      setTOtalValue(accumulator?.gross_value)
      return accumulator;
      
    }, {});
  };

  useEffect(() => {
    handleSumData();
  }, [data]);

  console.log("fffff", data);
  function numberWithCommas(x) {
    let x1 =  x && Number(x).toFixed(2)
    return x1?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  

  let tr = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <Modal
              size="lg"
              show={openModal}
              onHide={() => setOpenModal(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              {/* <Modal.Header closeButton>
                <Modal.Title>Invoice</Modal.Title>
              </Modal.Header> */}

              <Modal.Body>
                <div id="print" className="row">
                  <div className="col-12">
                    {/* {!loading ? ( */}
                    <div>
                      <div>
                        <div className="row" id="print" ref={reportTemplateRef}>
                          <div className="col-lg-12">
                            <div className="card px-2">
                              <h4
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className="lh-sm fw-bold mt-5"
                              >
                                CASH MEMO/SALE INVOICE
                              </h4>
                              <div className="card-body">
                                <div>
                                  <InvoiceHeader />
                                </div>
                                <div
                                  style={{
                                    margin: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                ></div>

                                <div className="container-fluid mt-5 d-flex justify-content-center w-100">
                                  <div className="table-responsive w-100">
                                    <table className="table  table-sm table-bordered mt-5">
                                      <thead>
                                        <tr>
                                          <th>Product Name</th>
                                          <th>Product Code</th>
                                          <th> R.P/ Pcs - Incl.Tax</th>
                                          <th>Rate Code</th>
                                          <th>T.P/PCS EXCL. FED</th>
                                          <th>QTY (ctn)</th>

                                          <th>QTY (Pcs)</th>
                                          <th>Total (Weight)</th>
                                          <th>Value  Excl. tax</th>
                                          <th>gst @ 18%</th>
                                          <th>TO Rate</th>
                                          <th>ATO Rate</th>

                                          <th>Special discount</th>
                                          <th>Total Trade Offer</th>
                                          <th>Gross Invoice Value</th>
                                        </tr>
                                      </thead>

                                      <tbody>
                                        {data?.map((item) => (
                                          <tr>
                                            <td>{item.name}</td>
                                            <td>{item.product_code}</td>
                                            <td>{item.retail_price}</td>
                                            <td>{item.rate_code}</td>
                                            <td>{item.tp}</td>
                                            <td>
                                              {Number(
                                                item.quantity_ctn
                                              ).toFixed(2)}
                                            </td>
                                            <td>{item.quantity_pcs}</td>
                                            <td>
                                              {Number(
                                                item.total_weight
                                              ).toFixed(2)}
                                            </td>
                                            <td>{item.value_before_tax}</td>
                                            <td>{Number(item.gst).toFixed(2)}</td>
                                            <td>{item.to_rate}</td>
                                            <td>{item.ato_rate}</td>
                                            <td>
                                              {Number(item.discount).toFixed(2)}
                                            </td>
                                            <td>
                                              
                                              {item.trade_offer ?  Number(item.trade_offer).toFixed(
                                                2 
                                              ) : ""}
                                            </td>
                                            <td>
                                              {Number(item.gross_value).toFixed(
                                                2
                                              )}
                                            </td>
                                          </tr>
                                        ))}

                                        <tr>
                                          <td style={{ fontWeight: "600" }}>
                                            Total
                                          </td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td style={{ fontWeight: "500" }}>
                                            {sumData?.total_weight}
                                          </td>
                                          <td style={{ fontWeight: "500" }}>
                                            {Number(sumData?.value_before_tax).toFixed(2)}
                                          </td>
                                          <td style={{ fontWeight: "500" }}>
                                            {Number(sumData?.gst).toFixed(2)}
                                          </td>
                                          <td style={{ fontWeight: "500" }}>
                                            {sumData?.to_rate}
                                          </td>
                                          <td style={{ fontWeight: "500" }}>
                                            {sumData?.ato_rate}
                                          </td>
                                          <td style={{ fontWeight: "500" }}>
                                            {sumData?.discount}
                                          </td>
                                          <td style={{ fontWeight: "500" }}>
                                            {sumData?.trade_offer
                                              ? Number(sumData?.trade_offer).toFixed(2)
                                              : ""}
                                          </td>
                                          <td style={{ fontWeight: "500" }}>{Number(sumData?.gross_value).toFixed(2)}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className="container-fluid mt-5 w-100">
                                  <p className="text-right mb-2">
                                    Grand Total (PKR) - &nbsp;{" "}
                                    {numberWithCommas(sumData?.gross_value)}
                                  </p>
                                 <p className="text-right mb-2">
                                  Further Tax - &nbsp;{" "}
                                    { fTax ?  numberWithCommas(fTax) : 0}
                                  </p>
                                  <p className="text-right mb-2">

                                  Due Payment - &nbsp;{" "}
                                    { dpayment ?  numberWithCommas(dpayment) : 0  }
                                  </p>
                                 
                                  <h5 className="text-right mb-5">
                                    Payable Value: - &nbsp;{" "}
                                    {numberWithCommas((totalValue ? Number(totalValue) : 0 + fTax ? Number(fTax) : 0 +  dpayment ?  Number(dpayment) : 0).toFixed(2))}
                                  </h5>
                                  <hr />
                                </div>
                                <div className="container-fluid w-100">
                                  <ReactToPrint
                                    trigger={() => (
                                      <button
                                        href="!#"
                                        onClick={(event) =>
                                          event.preventDefault()
                                        }
                                        className="btn btn-primary float-right mt-4 ml-2"
                                      >
                                        <i className="ti-printer mr-1"></i>
                                        Print
                                      </button>
                                    )}
                                    content={() => componentRef.current}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {
                            <div style={{ display: "none" }}>
                              <MyInvoice
                                ref={componentRef}
                                // data={myData}
                                // reqData = {reqData}
                            
                                data={data}
                                fTax={fTax}
                                dpayment={dpayment}
                                totalValue= {totalValue}
                                sumData = {sumData}


                              />
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
