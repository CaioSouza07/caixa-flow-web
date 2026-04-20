import { TrendingDown, TrendingUp } from "lucide-react";

function CardBalance({ balance, progress }) {
  return (
    <div className="rounded-2xl shadow flex w-1/2 bg-[#047756]">
      <div className="p-6 flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-white/80 tracking-widest text-xs">SALDO ATUAL</p>
          <h1 className="text-white font-bold text-5xl tracking-wide">{`R$ ${balance.toLocaleString(
            "pt-BR",
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          )}`}</h1>
          {progress <= 0 ? (
            <div className="flex items-center gap-2 text-[#FF6467]">
              <TrendingDown />
              <p
                className="
                    font-semibold"
              >{`${progress.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}% do mês anterior`}</p>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[#85F8C3]">
              <TrendingUp />
              <p
                className="
                    font-semibold"
              >{`${progress.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}% do mês anterior`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardBalance;
