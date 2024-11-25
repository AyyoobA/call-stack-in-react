import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
import MainTable from "./components/main-table";
import { CustomerOrderDetail } from "./dto/data-types";
import { datapayload } from "./data/data";
import LineTable from "./components/line-table";
import WareHouseInfo from "./components/warehouse-infomation";
import MetaDataInfomation from "./components/meta-data-information";
import FactoryPayableTraceMetaData from "./components/FactoryPayableTraceMetaData";
import RMCostingInfo from "./components/RM-costing-Information";

function App() {
  const dataFromLocal = datapayload;
  
  const [tableData, setTableData] = useState<CustomerOrderDetail[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/orders");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: CustomerOrderDetail[] = await response.json();
        setTableData(data); 
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  if (!tableData) {
    return <div>Loading...</div>;
  }
  
  return (
    <main className="px-5 py-5 space-y-10 md:py-10 md:px-10 lg:20">
      <MainTable data={tableData} />
      <LineTable data={tableData} />
      <RMCostingInfo  data={tableData}/>
      <WareHouseInfo data={tableData} />
      <MetaDataInfomation data={tableData} />
      <FactoryPayableTraceMetaData data={tableData}/>
    </main>
  );
}

export default App;
