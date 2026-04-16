import { Search } from "lucide-react";

function SearchTransactions() {
  return (
    <>
      <div className="flex w-1/2 items-center bg-[#F2F4F6] p-2 rounded-xl gap-4 shadow focus-within:outline-2 hover:opacity-86">
        <Search color="#9EA3AD" strokeWidth={3} />
        <input
          type="text"
          placeholder="Procurar transações..."
          className="placeholder:font-semibold placeholder:text-[#9EA3AD] placeholder:text-lg flex w-full focus:outline-0"
        />
      </div>
    </>
  );
}

export default SearchTransactions;
