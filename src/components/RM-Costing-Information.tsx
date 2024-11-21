import {
  CustomerOrderDetail,
  RawMaterialCostingInformation,
} from "../dto/data-types";

const RMCostingInfo = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: RawMaterialCostingInformation =
    data[0]?.rawMaterialCostingInformation;
  if (!dataObj) {
    return <div>No RM Costing Information available</div>;
  }

  const headers: string[] = Object.keys(dataObj);

  return (
    <div>
      <h1 className="title_text">RM Costing Information</h1>
      <div className="table-container">
        <table className="table-auto">
          <tbody>
            {headers.map((header, index) => (
              <tr key={index}>
                <th className="font-semibold">{header}</th>
                <td>
                  {dataObj[
                    header as keyof RawMaterialCostingInformation
                  ]?.toString() || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RMCostingInfo;
