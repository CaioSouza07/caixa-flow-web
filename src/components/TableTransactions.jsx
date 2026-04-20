import TransactionLineTable from "./TransactionLineTable";

function TableTransactions({ transactions }) {
  return (
    <div className="h-full overflow-y-auto flex flex-col">
      <div className="flex flex-col  gap-10">
        <div className="text-[#64748B]/80 tracking-widest">
          <div className="flex justify-start items-center">
            <div className="text-left font-medium w-3/7">TÍTULO</div>
            <div className="text-left font-medium w-1/7">DATA</div>
            <div className="text-left font-medium w-1/7">VALOR</div>
            <div className="text-left font-medium w-2/7">ANEXO</div>
          </div>
        </div>
        <div className="flex flex-col gap-8 overflow-hidden">
          {transactions.map((transaction) => (
            <TransactionLineTable
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableTransactions;
