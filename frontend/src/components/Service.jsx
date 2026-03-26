
export default function Service() {
  const services = [
    {
      title: "Réservation en ligne",
      description: "Réservez votre hôtel en quelques clics avec le meilleur prix ",
      icon: "📅"
    },
    {
      title: "Assistance 24/7", 
      description: "Notre équipe est disponible 24h/24 et 7j/7 Contactez nous sur +216 25124254",
      icon: "📞"
    },
    {
      title: "Meilleur prix garanti",
      description: "Trouvez les meilleurs prix pour votre séjour chez Riviera TN",
      icon: "💰"
    },
    {
      title: "Annulation gratuite",
      description: "Annulez gratuitement jusqu'à 24h avant",
      icon: "✅"
    }
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Nos Services</h1>
      
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <div className="display-4 mb-3">{service.icon}</div>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}