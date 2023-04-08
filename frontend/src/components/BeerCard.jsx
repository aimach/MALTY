import PropTypes from "prop-types";
import "../assets/css/beerCard.css";

function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      {beer.image_url && (
        <img src={beer.image_url} alt={beer.name} className="beer-img" />
      )}
      <h1>{beer.name}</h1>
      <p>{beer.description}</p>
    </div>
  );
}

export default BeerCard;

BeerCard.propTypes = {
  beer: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
