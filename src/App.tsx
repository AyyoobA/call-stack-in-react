import { useState } from "react";
import MainTable from "./components/main-table";
import "./index.css";
import { CustomerOrderDetail } from "./dto/data-types";
import { datapayload } from "./data/data";
import LineTable from "./components/line-table";

function App() {
  const dataFromLocal = datapayload;

  const [tableData, setTableData] = useState<CustomerOrderDetail[]>(dataFromLocal);

  return (
    <main>
      <MainTable data={tableData} />
      <LineTable data={tableData} />
    </main>
  );
}

export default App;
