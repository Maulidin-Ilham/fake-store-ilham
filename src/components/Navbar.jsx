import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <div className="w-full text-lg font-semibold px-4 py-3 bg-[#F5F5F5] flex justify-between ">
      <div>
        <a href="/">Logo</a>
      </div>
      <div className="flex space-x-3">
        <a href="#">
          <ShoppingCartIcon />
        </a>
        <a href="#">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
