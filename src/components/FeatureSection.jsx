import React from "react";
import "./FeatureSection.css";

const features = [
  {
    icon: "💰",
    title: "Access up to $100,000",
    description:
      "We fund each invoice once approved and collect payment to optimise your cash flow.",
  },
  {
    icon: "⚡",
    title: "Click and quick",
    description:
      "We fund each invoice once approved and collect payment to optimise your cash flow.",
  },
  {
    icon: "⏱",
    title: "Instant access",
    description:
      "We fund each invoice once approved and collect payment to optimise your cash flow.",
  },
  {
    icon: "📊",
    title: "Fast cash flow",
    description:
      "We fund each invoice once approved and collect payment to optimise your cash flow.",
  },
  {
    icon: "🧩",
    title: "Seamless process",
    description:
      "We fund each invoice once approved and collect payment to optimise your cash flow.",
  },
  {
    icon: "🔐",
    title: "Safe and secure",
    description:
      "We fund each invoice once approved and collect payment to optimise your cash flow.",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-header">
        <h2>Outsource payment collection</h2>
        <p>
          Faster and Flexible access to cash flow from one or all your invoices.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
