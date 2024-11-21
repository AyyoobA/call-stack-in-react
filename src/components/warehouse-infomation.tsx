import {
  CustomerOrderDetail,
  RawMaterialCostingInformation,
  WarehouseInfo,
} from "../dto/data-types";

const WareHouseInfo = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: WarehouseInfo = data[0]?.warehouseInfo2;
  if (!dataObj) {
    return <div>No Warehouse Information available</div>;
  }

  const headers: string[] = Object.keys(dataObj);
  return (
    <div>
      <h1 className="title_text">Warehouse Information</h1>
      <div className="table-container">
        <table className="table-auto">
          <tbody>
            {headers.map((header, index) => (
              <tr key={index}>
                <th className="font-semibold">{header}</th>
                <td>
                  {dataObj[header as keyof WarehouseInfo]?.toString() || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WareHouseInfo;
