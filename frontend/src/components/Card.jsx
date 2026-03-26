import Details from "./Details";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  
  let informations = {
    build_year: props.hotel.build_year,
    time_period: props.hotel.time_period,
    location: props.hotel.location,
    price: props.hotel.price 
  };

  const handleWikipediaClick = (id) => {
    const champ = props.hotel;
    if (champ.id === id) {
      const wikipediaUrl = `https://fr.wikipedia.org/wiki/${encodeURIComponent(champ.name)}`;
      window.open(wikipediaUrl, "_blank");
    }
  };

  const handleReservation = (hotel) => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    navigate("/reservation");
  };

  return (
    <div className="col">
      <div className="card shadow-sm" style={{ width: "18rem" }}>

        <img
          src={props.hotel.image}
          className="card-img-top"
          alt={props.hotel.name}
          height={200}
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{props.hotel.name}</h5>
          
          {props.hotel.price && (
            <div className="mb-2">
              <span className="badge bg-success fs-6">
                {props.hotel.price} TND / nuit
              </span>
            </div>
          )}

          <p className="card-text">{props.hotel.desc}</p>

          <Details informations={informations} />

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <button
                className="btn btn-primary w-100"
                onClick={() => handleWikipediaClick(props.hotel.id)}
              >
                Wikipédia
              </button>
            </li>

            <li className="list-group-item">
              <a
                className="btn btn-outline-dark w-100"
                href={props.hotel.google_maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </li>

            <li className="list-group-item">
              <button
                className="btn btn-success w-100"
                onClick={() => handleReservation(props.hotel)}
              >
                Réserver maintenant
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;