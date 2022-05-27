import React from "react";
import "./Card.scss";

const Card = ({course}) => {
  
  return (
    <div className="card">
        <div>

      {/* <img className="card-img" src="graphics-designing.jpg" alt="Logo" /> */}
        </div>

      <h4>
        <span>{course}</span>
      </h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et felis ut velit convallis feugiat. Etiam at metus maximus, rutrum quam sed, dapibus velit. Sed nulla dui, ornare eget posuere eu, efficitur non arcu. Nulla eleifend pellentesque lacus egestas porta. Vivamus rhoncus a mi id pretium. Proin sodales elit arcu, ut malesuada mi accumsan in. Sed feugiat ex at accumsan viverra. Suspendisse potenti.</p>
      <button className="btn-enroll"> <span> Enroll</span></button>

    </div>
  );
};

export default Card;
