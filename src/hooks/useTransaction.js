import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useTransaction() {
  // const staticTransactions = [
  //   {
  //     id: "t-1",
  //     title: "Recebimento - Salário SoftExpert",
  //     date: "01/01/2026",
  //     value: 1400,
  //     attachment: "RECIBO_SALARIO.pdf",
  //   },
  //   {
  //     id: "t-2",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  //   {
  //     id: "t-3",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  //   {
  //     id: "t-4",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  //   {
  //     id: "t-5",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  //   {
  //     id: "t-6",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  //   {
  //     id: "t-7",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  //   {
  //     id: "t-8",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  //   {
  //     id: "t-9",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  //   {
  //     id: "t-10",
  //     title: "Pagamento - Corte de Cabelo",
  //     date: "21/04/2026",
  //     value: -50,
  //     attachment: "RECIBO_STUDIO97.pdf",
  //   },
  // ];

  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || [],
  );
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (title, date, value, attachment) => {
    if (!title.trim()) return;
    if (value === 0) return;
    const transaction = {
      id: uuidv4(),
      title,
      date,
      value,
      attachment,
    };
    setTransactions((prev) => [...prev, transaction]);
    setBalance(balance + value);
  };
  return {
    balance,
    addTransaction,
    transactions,
  };
}

export default useTransaction;
