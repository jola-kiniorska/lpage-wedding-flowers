import React from "react";
import "./Address.scss";

interface AddressProps {
  text_one: string;
  text_two: string;
  text_three: string;
}

const Address = ({ text_one, text_two, text_three }: AddressProps) => {
  return (
    <div className="el_address">
      <p>
        {text_one}
        <br />
        {text_two}
        <br />
        {text_three}
      </p>
    </div>
  );
};

export default Address;
