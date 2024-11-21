import { CustomerOrderDetail, RawMaterialCostingInformation, WarehouseInfo } from "../dto/data-types";

const WareHouseInfo = ({ data }: { data: CustomerOrderDetail[] }) => {
    const dataObj: WarehouseInfo = data[0]?.warehouseInfo2;
  if (!dataObj) {
    return <div>No RM Costing Information available</div>;
  }

  const headers: string[] = Object.keys(dataObj);
  return (
    <div>
      <h1 className="px-2 py-3 text-2xl">Warehouse Information</h1>
      <div className="container w-full border h-min">
        <table className="w-full border border-collapse border-gray-300 table-auto">
          <tbody>
            {headers.map((header, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-semibold border border-gray-300">
                  {header}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {dataObj[header as keyof WarehouseInfo]?.toString() || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WareHouseInfo