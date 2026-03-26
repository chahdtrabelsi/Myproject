import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [reservationData, setReservationData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    nights: 0,
    totalPrice: 0
  });

  useEffect(() => {
    const hotel = JSON.parse(localStorage.getItem("selectedHotel"));
    if (hotel) {
      setSelectedHotel(hotel);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const calculateTotal = () => {
    if (reservationData.checkIn && reservationData.checkOut && selectedHotel) {
      const checkIn = new Date(reservationData.checkIn);
      const checkOut = new Date(reservationData.checkOut);
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (nights > 0) {
        const total = nights * selectedHotel.price;
        setReservationData(prev => ({
          ...prev,
          nights,
          totalPrice: total
        }));
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    const reservation = {
      id: Date.now(),
      hotel: selectedHotel,
      ...reservationData,
      reservationDate: new Date().toISOString()
    };
    
    reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    
    alert("Réservation confirmée !");
    navigate("/mes-reservations");
  };

  if (!selectedHotel) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>Réservation - {selectedHotel.name}</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Date d'arrivée</label>
                    <input
                      type="date"
                      className="form-control"
                      name="checkIn"
                      value={reservationData.checkIn}
                      onChange={handleInputChange}
                      onBlur={calculateTotal}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date de départ</label>
                    <input
                      type="date"
                      className="form-control"
                      name="checkOut"
                      value={reservationData.checkOut}
                      onChange={handleInputChange}
                      onBlur={calculateTotal}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Nombre de voyageurs</label>
                  <select
                    className="form-select"
                    name="guests"
                    value={reservationData.guests}
                    onChange={handleInputChange}
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                    ))}
                  </select>
                </div>

                {reservationData.nights > 0 && (
                  <div className="alert alert-info">
                    <h5>Détails de la réservation :</h5>
                    <p>Nombre de nuits : {reservationData.nights}</p>
                    <p>Prix par nuit : {selectedHotel.price} TND</p>
                    <h6>Total : {reservationData.totalPrice} TND</h6>
                  </div>
                )}

                <button type="submit" className="btn btn-success btn-lg">
                  Confirmer la réservation
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Détails de l'hôtel</h5>
              <img
                src={selectedHotel.image}
                className="img-fluid rounded mb-3"
                alt={selectedHotel.name}
              />
              <p><strong>{selectedHotel.name}</strong></p>
              <p>{selectedHotel.location}</p>
              <p className="text-success fs-5">
                <strong>{selectedHotel.price} TND / nuit</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}