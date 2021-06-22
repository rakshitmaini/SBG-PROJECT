import InfoWrapper from "./styledComponent/style.info-tiles";

const TilesData = [
  {
    icon: "fa-line-chart",
    title: "Value Added Services",
    info: "Provide value-added services to our customers to get unmatched solution possible",
  },
  {
    icon: "fa-check",
    title: "Committed to You",
    info: "We are committed to achieve excellence in advising quality products",
  },
  {
    icon: "fa-calendar",
    title: "24/7 Availability",
    info: "Feel free to contact us anytime, get your queries cleared.",
  },
];

const InfoTiles = () => {
  return (
    <div>
      <InfoWrapper>
        <div className="container-fluid">
          <div className="title">
            <h1>Why choose us</h1>
            <h1>Deliver Top Quality Products</h1>
          </div>
          <div className="row">
            {TilesData.map((d, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-duration="1000"
                className="col-md-4 col-sm-4 col-xs-12"
              >
                <div className="card">
                  <div className="card-image">
                    <i className={"fa" + ` ${d.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h2>{d.title}</h2>
                    <p>{d.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </InfoWrapper>
    </div>
  );
};
export default InfoTiles;
