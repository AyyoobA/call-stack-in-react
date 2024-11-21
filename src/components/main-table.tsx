import { CustomerOrderDetail } from "../dto/data-types";

const MainTable = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: any = data[0];

  const headers: string[] = Object.keys(dataObj);
  // console.log(headers);

  return (
    <div>
      <h1 className="px-2 py-3 text-2xl">Details</h1>
      <div className="container w-full border h-min">
        <div>
          <table className="w-full border border-collapse border-gray-300 table-auto">
            <tbody>
              {headers.map((header, index) => {
                if (typeof dataObj[header] !== "object") {
                  return (
                    <tr key={index}>
                      <td className="px-4 py-2 font-semibold border border-gray-300">
                        {header}
                      </td>
                      {data.map((row, rowIndex) => (
                        <td
                          key={rowIndex}
                          className="px-4 py-2 border border-gray-300"
                        >
                          {row[
                            header as keyof CustomerOrderDetail
                          ]?.toString() || ""}
                        </td>
                      ))}
                    </tr>
                  );
                } else if (Array.isArray(dataObj[header])) {
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainTable;
