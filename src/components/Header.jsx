import { IoMdPerson } from "react-icons/io";
import { MdTagFaces } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((store) => store.bag);
  console.log("bag Container", bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/product">Women</Link>
        <Link to="/product">Kids</Link>
        <Link to="/product">Home & Living</Link>
        <Link to="/product">Men</Link>
        <Link to="/product">Beauty</Link>
        <Link to="/product">
          Studio <sup>New</sup>
        </Link>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <Link to="" className="action_container">
          <IoMdPerson />
          <span className="action_name">Profile</span>
        </Link>

        <Link to="" className="action_container">
          <MdTagFaces />
          <span className="action_name">Wishlist</span>
        </Link>

        <Link className="action_container" to="/bag">
          <IoBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
