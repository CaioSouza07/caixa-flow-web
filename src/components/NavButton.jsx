import { NavLink } from "react-router";

function NavButton({ children, router }) {
  return (
    <NavLink to={router}>
      {({ isActive }) => (
        <span
          className={
            isActive
              ? "text-[#047756] text-2xl font-semibold flex items-center gap-4 bg-[#047756]/15 shadow p-2 pl-6 rounded-r-xl"
              : "text-[#64748B] text-2xl font-semibold flex items-center gap-4 p-2 pl-6"
          }
        >
          {children}
        </span>
      )}
    </NavLink>
  );
}

export default NavButton;
