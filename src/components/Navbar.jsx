const Navbar = () => {
  return (
    <div className="w-full px-4 py-3 bg-[#F5F5F5] flex justify-between ">
      <div>
        <a href="/">Logo</a>
      </div>
      <div className="flex space-x-3">
        <a href="#">Cart</a>
        <a href="#">Github</a>
      </div>
    </div>
  );
};

export default Navbar;
