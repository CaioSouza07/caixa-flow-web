import { LayoutDashboard, Wallet } from "lucide-react";
import NavButton from "./NavButton";

function Nav() {
  return (
    <>
      <div className="bg-white h-full pt-8 pr-8 flex flex-col gap-6">
        <NavButton router={"/"}>
          <LayoutDashboard size={26} strokeWidth={2.5} />
          Dashboard
        </NavButton>
        <NavButton router={"/finances"}>
          <Wallet size={26} strokeWidth={2.5} />
          Finanças
        </NavButton>
      </div>
    </>
  );
}

export default Nav;
