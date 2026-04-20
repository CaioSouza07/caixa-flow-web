import { ArrowUp } from "lucide-react";
import CardBalance from "./CardBalance";

function CardMonth({ variant, value }) {
  return (
    <div className="rounded-2xl shadow flex flex-1 bg-white p-2">
      {variant === "income" ? (
        <div className="flex flex-col w-full justify-between">
          <div className="flex justify-between items-start w-full text-[#047756] font-semibold p-2">
            <div className="bg-[#047756]/15 rounded-lg p-2">
              <ArrowUp size={32} />
            </div>
            <div className="bg-[#047756]/15 rounded-lg p-2 pt-1 pb-1 text-sm">
              <p>Mensal</p>
            </div>
          </div>
          <div className="flex p-2 flex-col">
            <p className="text-[#64748B] text-ms">Total receitas</p>
            <h2 className="text-[#047756] font-semibold text-3xl">
              {`R$ 
              ${value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full justify-between">
          <div className="flex justify-between items-start w-full text-[#B61722] font-semibold p-2">
            <div className="bg-[#F8E7E8] rounded-lg p-2">
              <ArrowUp size={32} />
            </div>
            <div className="bg-[#F8E7E8] rounded-lg p-2 pt-1 pb-1 text-sm">
              <p>Mensal</p>
            </div>
          </div>
          <div className="flex p-2 flex-col">
            <p className="text-[#64748B] text-ms">Total despesas</p>
            <h2 className="text-[#B61722] font-semibold text-3xl">
              {`-R$
              ${value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardMonth;
