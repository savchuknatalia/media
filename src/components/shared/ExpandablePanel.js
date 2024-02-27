import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";
import { useState } from "react";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row justify-between items-center">
          { header }
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoTriangleDown /> : <GoTriangleLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{ children }</div>}
    </div>
  );
}

export default ExpandablePanel;
