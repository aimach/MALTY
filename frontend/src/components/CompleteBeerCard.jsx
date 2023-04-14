import PropTypes from "prop-types";
import "../assets/css/completeBeerCard.css";
import noImg from "../assets/img/no_img_beer.png";
import hopImg from "../assets/img/hop.png";
import maltImg from "../assets/img/malt.png";

function CompleteBeerCard({ beer, setSurpriseModale }) {
  return (
    <>
      <div className="beer-img-section">
        <button
          type="button"
          className="back-button"
          onClick={() => setSurpriseModale(false)}
        >
          Back
        </button>
        <img
          src={beer.image_url ? beer.image_url : noImg}
          alt={beer.name}
          className="beer-img-surprise"
        />
        <div className="background-letters-img">{beer.name.toUpperCase()}</div>
      </div>

      <div className="beer-text-section">
        <h1>{beer.name.toUpperCase()}</h1>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <div className="hopAndMalt">
          <ul>
            <img src={hopImg} alt="hop logo" width="30px" />
            {beer.ingredients.hops.map((hop) => (
              <li key={hop.id}>{hop.name}</li>
            ))}
          </ul>
          <ul>
            <img src={maltImg} alt="malt logo" width="30px" />
            {beer.ingredients.malt.map((malt) => (
              <li key={malt.id}>{malt.name}</li>
            ))}
          </ul>
        </div>
        <p>{beer.description}</p>
      </div>
    </>
  );
}

export default CompleteBeerCard;

CompleteBeerCard.propTypes = {
  beer: PropTypes.shape({
    tagline: PropTypes.string,
    ingredients: PropTypes.shape({
      hops: PropTypes.object,
      malt: PropTypes.object,
    }),
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    first_brewed: PropTypes.string,
  }).isRequired,
  setSurpriseModale: PropTypes.func.isRequired,
};
