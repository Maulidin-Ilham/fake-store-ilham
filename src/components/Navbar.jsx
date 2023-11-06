import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GitHubIcon from "@mui/icons-material/GitHub";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Navbar = () => {
  return (
    <div className="w-full text-lg font-semibold px-4 py-3 bg-[#F5F5F5] items-center flex justify-between ">
      <div>
        <StorefrontIcon to={"/"} />
      </div>
      <div className="flex space-x-3">
        <ShoppingCartIcon to={"/cart"} />

        <a href="#">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
