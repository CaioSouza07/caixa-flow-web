import { NavLink } from "react-router";
import AddTransactionButton from "./AddTransactionButton";
import TableTransactions from "./TableTransactions";

function RecentTransactionCard() {
  return (
    <div className="rounded-2xl shadow flex flex-1 bg-white/80 p-4 flex-col gap-6 overflow-hidden">
      <div className="flex justify-between w-full items-center h-fit">
        <h1 className="text-xl font-semibold">Transações recentes</h1>
        <div className="flex items-center gap-4">
          <NavLink
            to={"/finances"}
            className={"font-semibold text-[#047857] text-lg hover:opacity-90"}
          >
            Ver todos
          </NavLink>
          <AddTransactionButton />
        </div>
      </div>
      <div>
        <TableTransactions />
      </div>
    </div>
  );
}

export default RecentTransactionCard;
