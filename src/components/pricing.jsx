import React from "react";

export const Pricing = ({ data }) => {
  return (
    <section id="pricing" className="text-center py-5 bg-light">
      <div className="container">
        <div className="section-title mb-5">
          <h2 className="fw-bold">Our Prices</h2>
          <p className="text-muted">Choose the perfect plan for your needs</p>
        </div>
        <div className="row justify-content-center">
          {data && data.length > 0 ? (
            data.map((service, i) => (
              <div key={i} className="col-12 col-sm-10 col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <i className={`${service.icon} fa-3x text-primary mb-3`}></i>
                    <h3 className="card-title fw-semibold">{service.service}</h3>
                    <div className="mt-3 text-start">
                      {Object.keys(service).map((key, index) =>
                        key !== "icon" && key !== "service" ? (
                          <div key={index} className="mb-4">
                            <h5 className="text-success">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </h5>
                            <p className="text-muted"><strong>Price:</strong> {service[key].price}</p>
                            <p className="text-muted"><strong>Discount:</strong> {service[key].discount}</p>
                            <p className="text-muted"><strong>Duration:</strong> {service[key].duration}</p>
                            <p className="text-muted"><strong>Renewal:</strong> {service[key].renewal}</p>
                            <ul className="list-group list-group-flush">
                              {service[key].features.map((feature, idx) => (
                                <li key={idx} className="list-group-item">{feature}</li>
                              ))}
                            </ul>
                            <div className="text-center mt-3">
                              <button
                                className={`btn ${
                                  key.toLowerCase().includes("starter")
                                    ? "btn-success"
                                    : key.toLowerCase().includes("business")
                                    ? "btn-warning"
                                    : key.toLowerCase().includes("premium")
                                    ? "btn-primary"
                                    : "btn-danger"
                                }`}
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading services...</p>
          )}
        </div>
      </div>
    </section>
  );
};
