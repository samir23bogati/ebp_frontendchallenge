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
    title: "You choose invoices to get paid",
    description:
      "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
  },
  {
    icon: "⏱",
    title: "Simple pricing",
    description:
      "Only pay for what you use,if you don't need us,there are no costs.",
  },
  {
    icon: "📊",
    title: "Click and quick",
    description:
      "We fund each invoice once approved and collect payment to optimise your cash flow.",
  },
  {
    icon: "🧩",
    title: "Flexible",
    description:
    "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
},
  {
    icon: "🔐",
    title: "Invest in your business",
    description:
      "Only pay for what you use,if you don't need us,there are no costs.",
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
