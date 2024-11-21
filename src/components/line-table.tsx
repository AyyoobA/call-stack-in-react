import React from "react";
import { CustomerOrderDetail } from "../dto/data-types";

const LineTable = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: any = data[0];
  console.log(dataObj)

  const headers: string [] = dataObj['lines'][0];
  // console.log(headers);

  return (
    <div className="container w-full h-min">
      <table className="w-full border border-collapse border-gray-300 table-auto">
        <thead>
          {/* {dataObj['lines'][0].map(item => item)} */}
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
};

export default LineTable;
