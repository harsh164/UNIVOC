import { useState } from 'react';
import '../benefitCard/BenefitCard.css';

function BenefitCard({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="benefit-card" onClick={handleCardClick}>
      <h3 className="benefit-card-title">{title}</h3>
      {isExpanded && (
        <ol>
          {description.map((desc, index) => (
            <li key={index}>
              {desc.heading && <strong>{desc.heading}: </strong>}
              {desc.content}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default BenefitCard;
