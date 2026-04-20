import { NavLink } from "react-router";
import AddTransactionButton from "./AddTransactionButton";
import TableTransactions from "./TableTransactions";

function RecentTransactionCard({ transactions }) {
  return (
    <div className="rounded-2xl shadow flex bg-white/80 p-4 flex-col gap-6 h-full min-h-0">
      <div className="flex justify-between items-center h-fit shrink-0">
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
      <div className="flex-1 overflow-hidden min-h-0">
        <TableTransactions transactions={transactions} />
      </div>
    </div>
  );
}

export default RecentTransactionCard;
