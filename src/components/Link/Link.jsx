import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="hover:bg-[#35353518] text-lg rounded py-1 px-6">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
