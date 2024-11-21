import { CustomerOrderDetail } from "../dto/data-types";

const MainTable = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: any = data[0];

  const headers: string[] = Object.keys(dataObj);
  // console.log(headers);

  return (
    <div>
  <h1 className="title_text">Details</h1>
  <div className="table-container">
    <table className="table-auto">
      <tbody>
        {headers.map((header, index) => {
          if (typeof dataObj[header] !== "object") {
            return (
              <tr key={index}>
                <th className="font-semibold">
                  {header}
                </th>
                {data.map((row, rowIndex) => (
                  <td key={rowIndex}>
                    {row[header as keyof CustomerOrderDetail]?.toString() || ""}
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
  );
};

export default MainTable;
