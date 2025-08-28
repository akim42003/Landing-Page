import React, { useState } from "react";

const Publications = () => {
  const [showAll, setShowAll] = useState(false);
  
  const publications = [
    {
      id: 1,
      title:
        "Large Language Models for Zero-Shot Procedure Extraction in Orthopedic Surgery: A Comparative Evaluation",
      authors: "Alexander Kim, et al.",
      venue: "medRixv",
      year: "2025",
      link: "https://www.medrxiv.org/content/10.1101/2025.08.19.25333995v2",
      description:
        "Survey of LLM's for zero-shot orthopedic procedure prediction and feature extraction.",
    },
    {
      id: 2,
      title:
        "Machine Learning Approaches to Vocal Register Classification in Contemporary Male Pop Music",
      authors: "Alexander Kim, Charlotte Botha",
      venue: "Journal of New Music Research (submitted)",
      year: "2025",
      link: "https://arxiv.org/abs/2505.11378",
      description:
        "Methods for classifying vocal registers in male pop music audio signals using mel-spectrogram image analysis. Introduces AVRA (Automatic Vocal Register Analysis) software using SVM and CNN models for consistent vocal register classification.",
    },
    {
      id: 3,
      title:
        "Intermediate Domain Finetuning for Weakly Supervised Domain-adaptive Clinical NER",
      authors: "Alexander Kim, et al.",
      venue: "ACL Anthology Bio NLP",
      year: "2023",
      link: "https://aclanthology.org/2023.bionlp-1.29/",
      description:
        "Proposes InterDAPT framework that leverages Intermediate Domain Finetuning to allow language models to adapt to narrow clinical domains with small, noisy datasets for Named Entity Recognition.",
    },
    {
      id: 4,
      title:
        "Prevalence and Predictors of Concomitant Meniscal and Ligamentous Injuries Associated With ACL Surgery: An Analysis of 20 Years of ACL Reconstruction at a Tertiary Care Children’s Hospital",
      authors: "Alexander Kim, et al.",
      venue: "The American Journal of Sports Medicine",
      year: "2023",
      link: "https://journals.sagepub.com/doi/full/10.1177/03635465231205556",
      description:
        "Application of NLP to extract clinical variables from 20 years of ACL procedure notes to understand the prevalance of cocomitant injuries.",
    },
    {
      id: 5,
      title: "Distracted Driving Laws and Motor Vehicle Crash Fatalities",
      authors: "Alexander Kim, et al.",
      venue: "Pediatrics",
      year: "2020",
      link: "https://publications.aap.org/pediatrics/article-abstract/145/6/e20193621/76936/Distracted-Driving-Laws-and-Motor-Vehicle-Crash?redirectedFrom=fulltext",
      description:
        "A retrospective time-series analysis of fatal MVC's in the United States involving teenagers, and multivariage negative binomial regression analysis to compare MVC rates across states with different distracted driving laws.",
    },
  ];

  const displayedPublications = showAll ? publications : publications.slice(0, 3);

  return (
    <div className="w-full py-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Publications
          </span>
        </h3>
        <p className="text-gray-400">
          Research contributions and academic work
        </p>
      </div>

      <div className="space-y-6">
        {displayedPublications.map((pub) => {
          return (
            <div
              key={pub.id}
              className="glass-morphism p-6 rounded-2xl hover-lift transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="flex-1">
                  {/* Title */}
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pub.title}
                  </h4>

                  {/* Authors and venue */}
                  <div className="text-gray-300 text-sm mb-2">
                    <span className="font-medium">{pub.authors}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-cyan-300">{pub.venue}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span>{pub.year}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  {/* Link */}
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors text-sm font-medium"
                  >
                    <span>Read Publication</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {publications.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium text-white transition-all duration-200 transform hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Publications;
