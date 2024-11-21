import { useState } from "react";
import { useEffect } from "react";
import MainTable from "./components/main-table";
import "./index.css";
import { CustomerOrderDetail } from "./dto/data-types";
import { datapayload } from "./data/data";
import LineTable from "./components/line-table";
import RMCostingInfo from "./components/RM-Costing-Information";

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
        setTableData(data); // Update state with fetched data
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
    <main className="px-10 space-y-10">
      <MainTable data={tableData} />
      <LineTable data={tableData} />
      <RMCostingInfo  data={tableData}/>
    </main>
  );
}

export default App;
