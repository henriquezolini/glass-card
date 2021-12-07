import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function Cards() {
  useEffect(() => {
    const card = document.querySelector(".card");
    VanillaTilt.init(card, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1
    });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <h3 className="bank">bank</h3>
        <img src="/images/chip.png" className="chip" />
        <img src="/images/contactless-indicator.png" className="indicator" />
        <h3 className="number">4100 1234 5678 9010</h3>
        <h5 className="card-holder">
          <span>card holder</span>
          <br />
          HENRIQUE F ZOLINI
        </h5>
        <h5 className="valid">
          <span>expiry date</span>
          <br />
          20/30
        </h5>
        <img src="/images/visa.png" className="logo" />
      </div>
    </div>
  );
}

export default Cards;
