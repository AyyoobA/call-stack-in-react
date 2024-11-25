import { CustomerOrderDetail, FactoryPayableTrace, Metadata } from "../dto/data-types";
import { Tree } from "primereact/tree";
import { useEffect, useState } from "react";
import { TreeNode } from "primereact/treenode";

const FactoryPayableTraceMetaData = ({ data }: { data: CustomerOrderDetail[] }) => {

    const dataObj: Metadata = data[0]?.metadata;

    const factoryPayableTrace: FactoryPayableTrace[] = dataObj?.factoryPayableTrace
    
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    const transformDataToTreeNodes = (
        data: FactoryPayableTrace[]
      ): TreeNode[] => {
        return data.map((item, index) => ({
          key: `node-${index}` ,
          label: `Item ${index} - ${item.itemNumber }`,
          children: Object.entries(item).map(([key, value ]) => ({
            key: `node-${index} - ${key}`,
            label: `${key}: ${value}`,
            leaf: true,
          })),
        }));
      };

      useEffect(() => {
        const data: FactoryPayableTrace[] = factoryPayableTrace;
    
        // Simulate fetching and transforming data into tree nodes
        const treeNodes = transformDataToTreeNodes(data);
        setNodes(treeNodes);
      }, []);

  return (
    <div className="">
        <div>
            <h1 className="title_text">factory Payable Trace</h1>
        </div>
      <Tree
        value={nodes}
        className="w-full md:w-30rem"
        nodeTemplate={(node) => (
          <div className="p-2">
            {node.children ? (
              <strong>{node.label}</strong> // Expandable Parent Node
            ) : (
              <span>{node.label}</span> // Key-Value Pair (Leaf Node)
            )}
          </div>
        )}
      />
    </div>
  );
};

export default FactoryPayableTraceMetaData;
