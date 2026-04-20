function Button({ colorText, colorBg, onSubmit, children }) {
  return (
    <button
      className={` text-[${colorText}] bg-[${colorBg}] font-semibold p-2 rounded-xl shadow`}
      onClick={onSubmit}
    >
      {children}
    </button>
  );
}

export default Button;
