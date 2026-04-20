import { TrendingDown } from "lucide-react";
import CardBalance from "./components/CardBalance";
import Container from "./components/Container";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { useState } from "react";
import Button from "./components/Button";
import CardMonth from "./components/CardMonth";
import RecentTransactionCard from "./components/RecentTransactionsCard";

function App() {
  const [balance, setBalance] = useState(0);
  const [progress, setProsgress] = useState(12);
  return (
    <>
      <div className="h-screen w-screen flex flex-col font-inter">
        <Header />
        <div className="flex bg-black flex-1">
          <Nav />
          <Container>
            <div className="flex gap-6">
              <CardBalance balance={balance} progress={progress}></CardBalance>
              <CardMonth variant={"income"} value={1820.5} />
              <CardMonth variant={"expense"} value={1130.2} />
            </div>
            <RecentTransactionCard />
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
