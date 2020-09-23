import React from "react";
import "./Footer.css";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-text">{emoji("Made with ❤️ by yesabhishek")}</p>
      <p className="footer-text">Aute esse ea amet pariatur et ea. Laborum velit eu velit ut mollit dolor ullamco amet deserunt anim mollit eu ullamco elit. Anim pariatur labore proident ut aliquip nulla fugiat labore aliqua sit qui ut elit. Exercitation culpa pariatur et dolore esse nostrud Lorem. Quis anim velit dolor adipisicing eu consectetur adipisicing incididunt. Culpa fugiat aliqua nisi deserunt fugiat magna nisi.</p>
    </div>
  );
}
