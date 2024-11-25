import { CustomerOrderDetail, FactoryPayableTrace, Metadata } from "../dto/data-types";
import FactoryPayableTraceMetaData from "./FactoryPayableTraceMetaData";

const MetaDataInformation = ({ data }: { data: CustomerOrderDetail[] }) => {
  const dataObj: Metadata = data[0]?.metadata;

  if (!dataObj) {
    return <div>No Metadata Information available</div>;
  }

  const headers: string[] = Object.keys(dataObj);

  return (
    <div>
      <h1 className="title_text">Metadata Information</h1>
      <div className="table-container">
        <table className="table-auto">
          <tbody>
            {headers.map((header, index) => {
              const value = dataObj[header as keyof Metadata];

              // Check if the value is an object
              if (typeof value !== "object" || value === null) {
                return (
                  <tr key={index}>
                    <th className="font-semibold">{header}</th>
                    <td>{value?.toString() || ""}</td>
                  </tr>
                );
              }
            })} 
          </tbody>
        </table>
        {/* <div className="mt-8 mb-5">
          <FactoryPayableTraceMetaData data={factoryPayableTrace}/>
        </div> */}
      </div>
    </div>
  );
};

export default MetaDataInformation;
