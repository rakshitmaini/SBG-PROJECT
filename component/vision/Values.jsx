import { ValuesWrapper } from "./style.vision";

const valuesList = [
  { title: "Belong", desc: "We don’t work for SBGIS, we are a part of SBGIS" },
  {
    title: "Value",
    desc: "High Respect, High Dignity: We hold our customers and team members in highest esteem and treat them with respect and dignity.",
  },
  {
    title: "Ownership",
    desc: "We stand behind what we say and the services we provide, and hold ourselves accountable for our resources",
  },
  {
    title: "Integrity",
    desc: "We operate with uncompromising integrity in every conversation and transaction and are guided by truth, honesty and sincerity",
  },
  {
    title: "Commitment",
    desc: "We are dedicated to developing trust based relationships with our customers and team members",
  },
  {
    title: "Excellence",
    desc: "We are self - motivated in our actions, disciplined in our decision making, and directed by our character and values",
  },
];
export const Values = () => {
  return (
    <ValuesWrapper>
      <div className="values-outer">
        <div className="values-head">
          <h3>OUR VALUES - B VOICE</h3>
        </div>
        <div className="values-list">
          {valuesList.map((m) => (
            <div className="value">
              <div className="value-title">{m.title}</div>
              <div className="value-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ValuesWrapper>
  );
};
