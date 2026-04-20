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
          <div>
            <p>Total receitas</p>
            <h2>
              R$
              {value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
          </div>
        </div>
      ) : (
        <p>teste</p>
      )}
    </div>
  );
}

export default CardMonth;
