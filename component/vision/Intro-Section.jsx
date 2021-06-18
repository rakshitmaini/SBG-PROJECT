import { IntroWrapper } from "./style.vision";

export const IntroSection = () => {
  return (
    <IntroWrapper>
      <div className="section-outer">
        <div className="section-inner">
          <div className="block-head">
            <h3 className="">OUR VISION</h3>
          </div>
          <div className="block-body">
            <strong>
              Our mantra is to grow sustainably and help our customers achieve
              sustainable growth through our solutions and service offerings.
            </strong>
            <br />
            <br />
            <strong>The Most Desired Employer in Financial Services</strong>
            <p>
              A culture of empowerment and a spirit of enterprise attracts
              bright minds with an entrepreneurial streak to join us and build
              long-term careers with us. Working with a home grown
              professionally managed company.
            </p>
            <strong> The Most Trusted Financial Services Company</strong>{" "}
            <p>
              Adhering to high standards of compliance and corporate governance
              is an integral part of building trust.
            </p>
          </div>
        </div>
        <div className="section-inner">
          <div className="block-head">
            <h3 className="">OUR MISSION</h3>
          </div>
          <div className="block-body">
            <strong>
              To help customers achieve their financial objectives by providing
              innovative, best-in-class consulting, need base and unbiased
              solutions and services.
            </strong>
            <br /> <br />
            <strong>
              To make it a joy for all stakeholders to work with us.
            </strong>
            <p>
              We swear that we will be dedicated to building long term
              relationships with our clients by providing need based solutions
              that add optimum value to their lives. We will create a positive
              experience with every customer. We will deliver the best advice,
              best processes and best technology. We will help our clients live
              longer. We will be the most productive team in the industry.
            </p>
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};
