import AddTransactionButton from "./AddTransactionButton";

function RecentTransactionCard() {
  return (
    <div className="rounded-2xl shadow flex flex-1 bg-white/80 p-4">
      <div className="flex justify-between w-full items-center h-fit">
        <h1 className="text-xl font-semibold">Transações recentes</h1>
        <div>
          <AddTransactionButton />
        </div>
      </div>
    </div>
  );
}

export default RecentTransactionCard;
