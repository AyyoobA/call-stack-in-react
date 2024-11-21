import { CustomerOrderDetail, Metadata } from "../dto/data-types";

const MetaDataInfomation = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: Metadata = data[0]?.metadata;
  if (!dataObj) {
    return <div>No Metadata Information available</div>;
  }

  const headers: string[] = Object.keys(dataObj);
  return (
    <div>
      <h1 className="px-2 py-3 text-2xl">Metadata Information</h1>
      <div className="container w-full border h-min">
        <table className="w-full border border-collapse border-gray-300 table-auto">
          <tbody>
            {/* {headers.map((header, index) => {
              if (typeof dataObj[index] !== "object" ) {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2 font-semibold border border-gray-300">
                      {header}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {dataObj[header as keyof Metadata]?.toString() || ""}
                    </td>
                  </tr>
                );
              }
            })} */} 
            {/* implementing....... */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MetaDataInfomation;
