import InfoWrapper from "./styledComponent/style.info-tiles";

const TilesData = [
  {
    icon: "fa-clock-o",
    title: "Always on time.",
    info: "Click edit button to change this text. Lorem ipsum dolor sit amet",
  },
  {
    icon: "fa-check",
    title: "Hard Working",
    info: "Click edit button to change this text. Lorem ipsum dolor sit amet",
  },
  {
    icon: "fa-calendar",
    title: "24/7 Availability",
    info: "Click edit button to change this text. Lorem ipsum dolor sit amet",
  },
];

const InfoTiles = () => {
  return (
    <>
      <InfoWrapper>
        <div className="container-fluid">
          <div className="title">
            <h1>Why choose us</h1>
            <h1>Accurate Record Keeping</h1>
          </div>
          <div className="row">
            {TilesData.map((d, i) => (
              <>
                <div key={i} className="col-md-4 col-sm-12">
                  <div className="card">
                    <div className="card-image">
                      <i class={"fa" + ` ${d.icon}`} aria-hidden="true"></i>
                    </div>
                    <div className="content">
                      <h2>{d.title}</h2>
                      <p>{d.info}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </InfoWrapper>
    </>
  );
};
export default InfoTiles;
