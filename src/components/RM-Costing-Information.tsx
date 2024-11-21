import React from "react";
import { CustomerOrderDetail, Line } from "../dto/data-types";
import { extractHeaders, getNestedValue } from "../util/common";

const RMCostingInfo = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: CustomerOrderDetail = data[0]; // Assuming a single customer order object
  const lines: Line[] = dataObj?.lines || []; // Safely access lines as an array

  // Extract headers recursively from the first line object
  const linesHeaders = lines.length > 0 ? extractHeaders(lines[0]) : [];
  
  return (
    <div >
      <h1 className="px-2 py-3 text-2xl">RM Costing Information</h1>
      <div>
        <div className="overflow-scroll border">
          <table className="w-full border border-collapse border-gray-300 table-auto">
            <thead>
              <tr>
                {linesHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left border border-gray-300"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lines.map((line, lineIndex) => (
                <tr key={lineIndex}>
                  {linesHeaders.map((header, headerIndex) => (
                    <td
                      key={headerIndex}
                      className="px-4 py-2 border border-gray-300"
                    >
                      {getNestedValue(line, header)?.toString() || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RMCostingInfo;
