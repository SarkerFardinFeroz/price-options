import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="shadow-xl border rounded-md p-4 flex flex-col">
      <h2 className="text-center pt-4">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-black text-white border w-full py-2 font-bold rounded-lg duration-300 hover:bg-[#272727]">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
