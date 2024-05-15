import React from "react";
import off1 from "/images/off-1.png";
import off2 from "/images/off-2.png";
import off3 from "/images/off-3.png";
import off4 from "/images/off-4.png";
import off5 from "/images/off-5.png";
import off6 from "/images/off-6.png";
import off7 from "/images/off-7.png";
import off8 from "/images/off-8.png";
import off9 from "/images/off-9.png";
import off10 from "/images/off-10.png";
import itm1 from "/images/item-1.png";
import itm2 from "/images/item-2.png";
import itm3 from "/images/item-3.png";
import itm4 from "/images/item-4.png";
import itm5 from "/images/item-5.png";
import itm6 from "/images/item-6.png";
import itm7 from "/images/item-7.png";
import itm8 from "/images/item-8.png";
import itm9 from "/images/item-9.png";
import itm10 from "/images/item-10.png";
import itm11 from "/images/item-11.png";
import itm12 from "/images/item-12.png";
import { Link } from "react-router-dom";

const item = () => {
  const offerImg = [
    off1,
    off2,
    off3,
    off4,
    off5,
    off6,
    off7,
    off8,
    off9,
    off10,
  ];
  const itemImg = [
    itm1,
    itm2,
    itm3,
    itm4,
    itm5,
    itm6,
    itm7,
    itm8,
    itm9,
    itm10,
    itm11,
    itm12,
  ];

  return (
    <>
      <div className="main-mk">
        <h1>SHOP BY CATEGORY</h1>
        <Link to="/product" className="img-con-mk">
          {offerImg.map((item) => (
            <img src={item} alt="" />
          ))}
        </Link>
      </div>
      <div className="main-mk">
        <h1>MEDAL WORTHY BRANDS TO BAG</h1>
        <Link to="/product" className="img-con-mk">
          {itemImg.map((item) => (
            <img src={item} alt="" />
          ))}
        </Link>
      </div>
    </>
  );
};

export default item;
