function Container({ children }) {
  return (
    <>
      <div className="bg-[#E0E3E5] shadow-inner h-full w-full p-8 pl-10 pr-10 flex flex-col gap-6">
        {children}
      </div>
    </>
  );
}

export default Container;
