import TransactionLineTable from "./TransactionLineTable";

function TableTransactions() {
  return (
    <table className="flex flex-col  gap-10">
      <thead className="text-[#64748B]/80 tracking-widest">
        <tr className="flex justify-start items-center">
          <th className="text-left font-medium w-3/7">TÍTULO</th>
          <th className="text-left font-medium w-1/7">DATA</th>
          <th className="text-left font-medium w-1/7">VALOR</th>
          <th className="text-left font-medium w-2/7">ANEXO</th>
        </tr>
      </thead>
      <tbody>
        <TransactionLineTable
          transaction={{
            title: "Recebimento - Salário SoftExpert",
            date: "20/12/2020",
            value: 1400,
            attachment: "Recibo de Teste.pdf",
          }}
        />
      </tbody>
    </table>
  );
}

export default TableTransactions;
