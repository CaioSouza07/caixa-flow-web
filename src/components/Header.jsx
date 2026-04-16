import Logo from "../assets/logo.png";
import SearchTransactions from "./SearchTransactions";

function Header() {
  return (
    <>
      <div className="bg-white w-full p-4 flex flex-row items-center gap-10">
        <img src={Logo} alt="Logo do site" className="w-46" />
        <SearchTransactions />
      </div>
    </>
  );
}

export default Header;
