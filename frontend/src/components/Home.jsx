import { useState, useEffect } from "react";
import { hotels } from "../Data";
import Card from "../components/Card";

export default function Home() {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    setList(hotels);
  }, []);
  const filteredHotels = list.filter(hotel => {
    const term = searchTerm.trim().toLowerCase();
    
    const searchFilter = term === "" ? true : 
      (hotel.name && hotel.name.toLowerCase().includes(term)) ||
      (hotel.location && hotel.location.toLowerCase().includes(term)) ||
      (hotel.city && hotel.city.toLowerCase().includes(term)); 
    
   
    const priceFilter = maxPrice === "" ? true : 
      (hotel.price && Number(hotel.price) <= Number(maxPrice));

    return searchFilter && priceFilter;
  });

  const handleReserve = (hotel) => {
    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    reservations.push(hotel);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    alert(`Réservation enregistrée pour : ${hotel.name}`);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center"> <b> Riviera Tunisie</b></h1>
      <h6 className="mb-4 text-center"><i>L'excellence hôtelière aux couleurs de la Méditerranée</i></h6>

      <div className="card p-3 mb-4 shadow-sm">
        <div className="row">
          <div className="col-md-6">
            <label>Recherche :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ville, nom d'hôtel ou localisation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label>Prix maximum (TND) :</label>
            <input
              type="number"
              className="form-control"
              placeholder="ex: 300"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              min="0"
            />
          </div>
        </div>
        
        <div className="mt-2">
          <small className="text-muted">
            <strong>Villes :</strong> Tunis, Sousse | 
            <strong> Hôtels :</strong> Laico, Majestic, Marhaba
          </small>
        </div>
      </div>

      <div className="alert alert-info">
        <strong>{filteredHotels.length}</strong> hôtel(s) trouvé(s)
        {searchTerm && ` pour "${searchTerm}"`}
        {maxPrice && ` - Prix ≤ ${maxPrice} TND`}
      </div>

      <div className="row">
        {filteredHotels.length === 0 ? (
          <div className="col-12 text-center">
            <div className="alert alert-warning">
              <h5>Aucun hôtel trouvé</h5>
              <p>Essayez avec d'autres critères de recherche.</p>
              <button 
                className="btn btn-outline-primary"
                onClick={() => {
                  setSearchTerm("");
                  setMaxPrice("");
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        ) : (
          filteredHotels.map((hotel) => (
            <div className="col-md-4 mb-4" key={hotel.id}>
              <Card hotel={hotel} onReserve={handleReserve} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}