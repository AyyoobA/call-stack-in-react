import React from "react";
import { CustomerOrderDetail, Line } from "../dto/data-types";

// Recursive function to extract headers from nested objects
function extractHeaders(obj: any, parentKey: string = ""): string[] {
  let headers: string[] = [];

  Object.keys(obj).forEach((key) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key; // Create dot-separated keys for nested fields

    if (typeof obj[key] === "object" && obj[key] !== null) {
      headers = headers.concat(extractHeaders(obj[key], fullKey)); // Recursively extract nested headers
    } else {
      headers.push(fullKey);
    }
  });

  return headers;
}

// Recursive function to get values based on dot-separated keys
function getNestedValue(obj: any, keyPath: string): any {
  return keyPath.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ""), obj);
}

const LineTable = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: CustomerOrderDetail = data[0]; // Assuming a single customer order object
  const lines: Line[] = dataObj?.lines || []; // Safely access lines as an array

  // Extract headers recursively from the first line object
  const linesHeaders = lines.length > 0 ? extractHeaders(lines[0]) : [];

  return (
    <div className="container w-full h-min">
      <table className="w-full border border-collapse border-gray-300 table-auto">
        <thead>
          <tr>
            {linesHeaders.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left border border-gray-300">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lines.map((line, lineIndex) => (
            <tr key={lineIndex}>
              {linesHeaders.map((header, headerIndex) => (
                <td key={headerIndex} className="px-4 py-2 border border-gray-300">
                  {getNestedValue(line, header)?.toString() || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LineTable;