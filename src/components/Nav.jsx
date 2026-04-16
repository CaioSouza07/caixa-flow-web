import { LayoutDashboard, Wallet } from "lucide-react";
import NavButton from "./NavButton";

function Nav() {
  return (
    <>
      <div className="bg-white h-full p-4 pt-8 pr-10 flex flex-col gap-8">
        <NavButton>
          <LayoutDashboard size={26} strokeWidth={2.5} />
          Dashboard
        </NavButton>
        <NavButton>
          <Wallet size={26} strokeWidth={2.5} />
          Finanças
        </NavButton>
      </div>
    </>
  );
}

export default Nav;
