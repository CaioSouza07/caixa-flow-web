import { CirclePlus } from "lucide-react";

function AddTransactionButton() {
  return (
    <button className="bg-[#047756] font-bold text-lg text-white flex items-center gap-2 p-2 rounded-lg">
      <CirclePlus />
      Transação
    </button>
  );
}

export default AddTransactionButton;
