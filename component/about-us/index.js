import AboutWrapper from "./style.about";
import HeaderBanner from "../baseComponent/headerComponent/HeaderBanner";
const AboutUs = () => {
  return (
    <div>
      <AboutWrapper>
        <div className="about-container">
          <HeaderBanner
            img="/aboutUsAssets/about-us.jpg"
            tag="About Us"
            intro="We're a talented bunch"
          />

          <div className="section-outer row">
            <div className="content  col-lg-6 col-md-12">
              <p>Exceptional Service</p>
              <h2>Practical Financial Advice You Can Count On</h2>
              <h4>
                We are committed to achieve excellence in advising quality
                products to clients and complete customer care by delivering top
                quality products through our highly professional team members.
              </h4>
              <p>
                <strong>SBGIS </strong>
                is a group of highly experience and most trusted professional
                who is having more than 75 years of combined experience and
                serving nation with unbiased advised to families and offering
                platform that provides our customers with financial products and
                services such as Life Insurance, Health Insurance, Motor
                Insurance and many more Insurance solutions. <br /> <br />
                We connect families and corporates with most innovative
                insurance solutions to help them get the best and unmatched
                solution possible. We also provide value-added services to our
                customers such as big-data analytics, risk assessment and
                verification, and automated work-flows for comprehensive
                insurance management.
              </p>
            </div>{" "}
            <div className="section-image col-lg-6 col-md-12">
              <div>
                <img
                  src="https://websitedemos.net/chartered-accountant-02/wp-content/uploads/sites/236/2019/06/feature3-free-img.png"
                  alt="SBGIS"
                />
              </div>
            </div>
          </div>

          <div className="intro-block">
            <div className="intro-block-inner">
              <h3>Our License</h3>
              <div className="content">
                Shri Balaji Global Insurance Private Limited (“SBGIS”) a company
                incorporated under the provisions of the Companies Act, 1956,
                was{" "}
                <strong>
                  granted the license ( License No. 746, License Code CA0746)
                </strong>{" "}
                to act as a Corporate Agent by the Insurance Regulatory and
                Development Authority of India (“IRDAI”) in the year April 2021.
                <br />
                <br />
                <strong>
                  We are committed to achieve excellence in advising quality
                  products to clients and complete customer care by delivering
                  top quality products through our highly professional team
                  members.
                </strong>
              </div>
            </div>
          </div>

          <div className="team-block">
            <div className="block-member" id="Sachin-Sharma">
              <div className="member-img">
                <img
                  src="/aboutUsAssets/team/sachin.png"
                  alt="Sachin Sharma, Principal Office"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Sachin Sharma</h3>
                <h6 className="member-profile">Principal Office</h6>
                <p>
                  Mr. Sachin Sharma, Post graduate in Global Marketing & Finance
                  and B.Com from Delhi University, aged 44 years, is appointed
                  as Principle Office of SBGIS. He has over 23 years of rich
                  experience primarily in financial/ insurance services.
                  <br /> <br />
                  Experienced and innovative with 23 years of rich experience in
                  customer service and insurance business administration skills.
                  <br /> <br />
                  High personal integrity, and able to relate to and create
                  trust in all. Highly articulate, confident and persuasive
                  team-builder, able to motivate and communicate to achieve
                  exceptional business performance.
                  <br /> <br />
                  Dependable and reliable in supporting and enabling team effort
                  to produce genuine long-term sustainable development.
                  Persistent and flexible approach to the mutually beneficial
                  achievement of business plans and personal goals of staff,
                  suppliers and customers.
                </p>
              </div>
            </div>
            <div className="block-member" id="Faiz-Khan">
              <div className="member-img">
                <img
                  src="/aboutUsAssets/avatar.jpg"
                  alt="Faiz Khan, Director"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Faiz Khan</h3>
                <h6 className="member-profile">Director</h6>
                <p>
                  20 years of rich experience in Venue Sales model. One of the
                  founder of Venue Sales Channel in Bajaj Capital. Highly
                  experienced and innovative with sophisticated sales, customer
                  service and business administration skills.
                  <br />
                  <br />
                  High personal integrity, and able to relate to and create
                  trust in all.
                </p>
              </div>
            </div>
            <div className="block-member" id="Pankaj-Kumar">
              <div className="member-img">
                <img
                  src="/aboutUsAssets/avatar.jpg"
                  alt="Pankaj Kumar, Director"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Pankaj Kumar</h3>
                <h6 className="member-profile">Director</h6>
                <p>
                  Pankaj Kumar is a self-driven entrepreneurial leader with 16
                  years of diverse work experience covering BPO & BFSI Sector.
                  <br />
                  <br />
                  He was associated with prestigious NBFC as Vice President &
                  was responsible for end-to-end management. His leadership
                  skills and keen interest in sustainable business practices has
                  manifested and pioneered the best results to the organisation
                  and helped the business grow exponentially over a period.
                  Additionally, he was responsible for driving all large and
                  strategic deals for expanding the insurance distribution
                  channel.
                  <br />
                  <br />
                  Earlier to this, he also worked with IIFL as an Associate Vice
                  President and has been associated with other leading
                  organisations like Intouch Solutions, Religare Technologies,
                  Royal Sundaram at a Senior Management Roles. He is known for
                  his ability to seamlessly partner with team members and
                  achieve shared goals. He is a firm believer in the fact that
                  deliveries happen through people and teams.
                  <br />
                  <br />
                  On the academic front, Pankaj holds a Masters Degree in
                  Finance & Marketing from ICFAI University & has a track record
                  of driving exponential growth in his divisions, setting up
                  operations, driving a culture of excellence and disciplined
                  management.
                  <br />
                  <br />
                  His hobbies include travelling to different places and
                  exploring new things. Mr. Pankaj has been a Director of the
                  Company since it’s incorporation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AboutWrapper>
    </div>
  );
};

export default AboutUs;
