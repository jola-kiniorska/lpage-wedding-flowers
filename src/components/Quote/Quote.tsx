import React from "react";
import "./Quote.scss";

const Quote = ({ quote }: { quote: string }) => {
  return (
    <div className="el_quote">
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
