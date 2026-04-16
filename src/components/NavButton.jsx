import { NavLink } from "react-router";

function NavButton({ children, router }) {
  return (
    <NavLink
      to={router}
      className="text-[#64748B] text-2xl font-semibold flex items-center gap-4"
    >
      {children}
    </NavLink>
  );
}

export default NavButton;
