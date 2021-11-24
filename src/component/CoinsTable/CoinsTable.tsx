import { DataTable } from "src/component/CoinsTable";

export const CoinsTable = () => {
  return (
    <div className=" mt-5 min-h-screen">
      <h3 className="mb-4 text-4xl font-normal text-center text-white">Cryptocurrency Prices by Market Cap</h3>
      <div className="truncate">
        <DataTable />
      </div>
    </div>
  );
};
