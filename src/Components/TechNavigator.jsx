import React from "react";
import "./TechNavigator.css"; // Import the CSS file for styles

const LanguageButtons = () => {
  const languages = ["React", "Node.js", "MySql", "Swift", "HTML", "PYTHON", "JAVA", "CSS", "C++"];

  return (
    <div className="container">
      <div className="languageButtons" aria-label="Programming Languages">
        {languages.map((language, index) => (
          <button
            key={index}
            className={`languageButton ${
              index === 0
                ? "firstChild"
                : index === 1
                ? "secondChild"
                : index === 2
                ? "thirdChild"
                : index === 3
                ? "fourthChild"
                : index === 4
                ? "fifthChild"
                : index === 5
                ? "sixthChild"
                : index === 6
                ? "seventhChild"
                : index === 7
                ? "eightChild"
                : index === 8
                ? "ninthChild"
                : "lastChild"
            }`}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageButtons;
