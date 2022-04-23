import React from "react";

var visitCount = localStorage.getItem("page_view");
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
console.log(visitCount);

const Footer = () => {
  return (
    <div className="footer">
      <span>telegram : @ssrcsr</span>
      <span className="count">{visitCount}</span>
    </div>
  );
};

export default Footer;
