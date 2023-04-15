import PropTypes from "prop-types";
import "../assets/css/completeBeerCard.css";
import noImg from "../assets/img/no_img_beer.png";
import hopImg from "../assets/img/hop.png";
import maltImg from "../assets/img/malt.png";

function CompleteBeerCard({ beer, setSurpriseModale }) {
  // console.log(beer);

  // remove double from hop array
  const hopsArrWithDouble = [];
  beer.ingredients.hops.forEach((hop) => {
    hopsArrWithDouble.push(hop.name);
  });
  const hopsArr = Array.from(new Set(hopsArrWithDouble));

  // remove double from malt array
  const maltArrWithDouble = [];
  beer.ingredients.malt.forEach((malt) => {
    maltArrWithDouble.push(malt.name);
  });
  const maltArr = Array.from(new Set(maltArrWithDouble));

  return (
    <>
      <div className="beer-img-section">
        <button
          type="button"
          className="back-button"
          onClick={() => setSurpriseModale(false)}
        >
          X
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
        <div className="details">
          {beer.abv && <p>{beer.abv} degrees</p>}
          {beer.ibu && <p>IBU {beer.ibu}</p>}
          {beer.ebc && <p>EBC {beer.ebc}</p>}
        </div>
        <div className="hopAndMalt">
          <img src={hopImg} alt="hop logo" width="30px" />
          <ul>
            {hopsArr.map((hop, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{hop}</li>
            ))}
          </ul>
          <img src={maltImg} alt="malt logo" width="30px" />
          <ul>
            {maltArr.map((malt, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{malt}</li>
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
    abv: PropTypes.number,
    ibu: PropTypes.number,
    ebc: PropTypes.number,
    tagline: PropTypes.string,
    ingredients: PropTypes.shape({
      hops: PropTypes.shape([
        {
          name: PropTypes.string,
        },
      ]),
      malt: PropTypes.shape([
        {
          name: PropTypes.string,
        },
      ]),
    }),
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setSurpriseModale: PropTypes.func.isRequired,
};
