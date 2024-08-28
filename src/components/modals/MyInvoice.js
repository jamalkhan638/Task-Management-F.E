import React, { useState, Component } from "react";
import InvoiceHeader from "../../app/shared/InvoiceHeader";

// import html2pdf from 'html2pdf.js/dist/html2pdf.min';

export class MyInvoice extends Component {
  // numberWithCommas = (x) => {
  //   return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };
  // numberWithCommas(x) {
  //   return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  numberWithCommas(x) {
    let x1 = x && Number(x).toFixed(2);
    return x1?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    return (
      <div id="print" className="row">
        <div className="col-12">
          {/* {!loading ? ( */}
          <div>
            <div>
              {/* <Preview id={'jsx-template'} > */}
              {/* {data?.parts_installed?.length > 0 || data?.packageappointment?.length > 0 || data?.additional_services?.length > 0 || data?.inspection_report?.length > 0 ? ( */}
              <div className="row">
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

                      <div className="col-lg-12 table-responsive">
                        <table class="table  table-sm table-bordered mt-5">
                          <thead>
                            <tr>
                              <th>Product Name</th>
                              <th>Product Code</th>
                              <th> R.P/ Pcs - Incl.Tax</th>
                              <th>Rate Code</th>
                              <th>T.P/PCS EXCL. FED</th>
                              <th>
                                QTY (ctn)
                                </th>

                              <th>QTY (Pcs)</th>
                              <th>Total (Weight)</th>
                              <th>Value Excl. tax</th>
                              <th>gst @ 18%</th>
                              <th>TO Rate</th>
                              <th>ATO Rate</th>

                              <th>Special discount</th>
                              <th>Total Trade Offer</th>
                              <th>Gross Invoice Value</th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.props.data?.map((item) => (
                              <tr>
                                <td>{item.name}</td>
                                <td>{item.product_code}</td>
                                <td>{item.retail_price}</td>
                                <td>{item.rate_code}</td>
                                <td>{item.tp}</td>
                                <td>{Number(item.quantity_ctn).toFixed(2)}</td>
                                <td>{item.quantity_pcs}</td>
                                <td>{Number(item.total_weight).toFixed(1)}</td>
                                <td>{item.value_before_tax}</td>
                                <td>{Number(item.gst).toFixed(2)}</td>
                                <td>{item.to_rate}</td>
                                <td>{item.ato_rate}</td>
                                <td>{Number(item.discount).toFixed(2)}</td>
                                <td>
                                  {item.trade_offer
                                    ? Number(item.trade_offer).toFixed(2)
                                    : ""}
                                </td>
                                <td>{Number(item.gross_value).toFixed(2)}</td>
                              </tr>
                            ))}
                            <tr>
                              <td style={{ fontWeight: "600" }}>Total</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td style={{ fontWeight: "500" }}>
                                {this.props.sumData?.total_weight}
                              </td>
                              <td style={{ fontWeight: "500" }}>
                                {Number(this.props.sumData?.value_before_tax).toFixed(2)}
                              </td>
                              <td style={{ fontWeight: "500" }}>
                                {Number(this.props.sumData?.gst).toFixed(2)}
                              </td>
                              <td style={{ fontWeight: "500" }}>
                                {this.props.sumData?.to_rate}
                              </td>
                              <td style={{ fontWeight: "500" }}>
                                {this.props.sumData?.ato_rate}
                              </td>
                              <td style={{ fontWeight: "500" }}>
                                {this.props.sumData?.discount}
                              </td>
                              <td style={{ fontWeight: "500" }}>
                                {this.props.sumData?.trade_offer
                                  ? Number(
                                      this.props.sumData?.trade_offer
                                    ).toFixed(2)
                                  : ""}
                              </td>
                              <td style={{ fontWeight: "500" }}>
                                {Number(
                                  this.props.sumData?.gross_value
                                ).toFixed(2)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="container-fluid mt-5 w-100">
                        <p className="text-right mb-2">
                          Grand Total (PKR) - &nbsp;{" "}
                          {this.numberWithCommas(
                            this.props.sumData?.gross_value
                          )}
                        </p>
                        <p className="text-right mb-2">
                          Further Tax - &nbsp;{" "}
                          {this.props.fTax
                            ? this.numberWithCommas(this.props.fTax)
                            : 0}
                        </p>
                        <p className="text-right mb-2">
                          Due Payment - &nbsp;{" "}
                          {this.props.dpayment
                            ? this.numberWithCommas(this.props.dpayment)
                            : 0}
                        </p>

                        <h5 className="text-right mb-5">
                                    Payable Value: - &nbsp;{" "}
                                    {this.numberWithCommas((this.props.totalValue ? Number(this.props.totalValue) : 0 + this.props.fTax ? Number(this.props.fTax) : 0 +  this.props.dpayment ?  Number(this.props.dpayment) : 0).toFixed(2))}
                                  </h5>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyInvoice;
