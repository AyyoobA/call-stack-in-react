import React from "react";
import { CustomerOrderDetail } from "../dto/data-types";

const LineTable = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: any = data[0]; // customer order details single object
  const lines: string [] = dataObj['lines'][0];
  let headers : string [] = [] //  array for storing the headers in objects

  return (
    <div className="container w-full h-min">
      <table className="w-full border border-collapse border-gray-300 table-auto">
        <thead>
          {

          }
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
};

export default LineTable;


function extractHeaders(data: any){
  let headers: string [] = []

  if(typeof data == "object"){
    headers = Object.keys(data)
  }

  return headers;
}
