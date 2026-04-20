import { ArrowDown, ArrowUp, Paperclip } from "lucide-react";

function TransactionLineTable({ transaction }) {
  return (
    <div className="flex justify-start items-center">
      <div className="text-left font-medium w-3/7">
        <div className="flex items-center gap-4">
          <div
            className={`${transaction.value < 0 ? "bg-[#F8E7E8] text-[#B61722]" : "bg-[#047756]/15 text-[#047756] "} rounded-full p-2 shadow`}
          >
            {transaction.value < 0 ? <ArrowDown /> : <ArrowUp />}
          </div>
          <p>{transaction.title}</p>
        </div>
      </div>
      <div className="text-left font-medium w-1/7 text-[#64748B]/80">
        {transaction.date}
      </div>
      <div className="text-left font-medium w-1/7">
        <h2
          className={`${transaction.value < 0 ? "text-[#B61722]" : "text-[#047756]"} font-semibold`}
        >
          {transaction.value < 0
            ? `-R$ ${(transaction.value * -1).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : `+R$ ${transaction.value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
        </h2>
      </div>
      <div className="text-left font-medium w-2/7 text-[#64748B]/80">
        <div className="flex items-center gap-4">
          <Paperclip />
          <p>{transaction.attachment}</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionLineTable;
