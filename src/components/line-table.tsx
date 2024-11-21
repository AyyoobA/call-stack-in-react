import { CustomerOrderDetail, Line } from "../dto/data-types";
import { extractHeaders, getNestedValue } from "../util/common";

const LineTable = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: CustomerOrderDetail = data[0]; // Assuming a single customer order object
  const lines: Line[] = dataObj?.lines || []; // Safely access lines as an array

  // Extract headers recursively from the first line object
  const linesHeaders = lines.length > 0 ? extractHeaders(lines[0]) : [];

  return (
    <div>
      <h1 className="title_text">Lines</h1>
      <div className="overflow-scroll border shadow-sm">
        <table className="table-auto">
          <thead>
            <tr>
              {linesHeaders.map((header, index) => (
                <th key={index} className="text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lines.map((line, lineIndex) => (
              <tr key={lineIndex}>
                {linesHeaders.map((header, headerIndex) => (
                  <td key={headerIndex}>
                    {getNestedValue(line, header)?.toString() || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LineTable;
