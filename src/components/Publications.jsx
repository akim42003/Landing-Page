import React from "react";

const Publications = () => {
  const publications = [
    {
      id: 1,
      title:
        "Machine Learning Approaches to Vocal Register Classification in Contemporary Male Pop Music",
      authors: "Alexander Kim, Charlotte Botha",
      venue: "arXiv preprint",
      year: "2025",
      link: "https://arxiv.org/abs/2505.11378",
      description:
        "Methods for classifying vocal registers in male pop music audio signals using mel-spectrogram image analysis. Introduces AVRA (Automatic Vocal Register Analysis) software using SVM and CNN models for consistent vocal register classification.",
    },
    {
      id: 2,
      title:
        "Intermediate Domain Finetuning for Weakly Supervised Domain-adaptive Clinical NER",
      authors:
        "Shilpa Suresh, Nazgol Tavabi, Shahriar Golchin, Leah Gilreath, Rafael Garcia-Andujar, Alexander Kim, Joseph Murray, Blake Bacevich, Ata Kiapour",
      venue: "BioNLP Workshop at ACL 2023",
      year: "2023",
      link: "https://aclanthology.org/2023.bionlp-1.29/",
      description:
        "Proposes InterDAPT framework that leverages Intermediate Domain Finetuning to allow language models to adapt to narrow clinical domains with small, noisy datasets for Named Entity Recognition.",
    },
    {
      id: 3,
      title:
        "Prevalence and Predictors of Concomitant Meniscal and Ligamentous Injuries Associated With ACL Surgery: An Analysis of 20 Years of ACL Reconstruction at a Tertiary Care Children’s Hospital",
      authors: "Alex Kim, et al.",
      venue: "The American Journal of Sports Medicine",
      year: "2023",
      link: "https://journals.sagepub.com/doi/full/10.1177/03635465231205556",
      description:
        "Application of NLP to extract clinical variables from 20 years of ACL procedure notes to understand the prevalance of cocomitant injuries.",
    },
    {
      id: 4,
      title: "Distracted Driving Laws and Motor Vehicle Crash Fatalities",
      authors: "Alex Kim, et al.",
      venue: "Pediatrics",
      year: "2020",
      link: "https://publications.aap.org/pediatrics/article-abstract/145/6/e20193621/76936/Distracted-Driving-Laws-and-Motor-Vehicle-Crash?redirectedFrom=fulltext",
      description:
        "A retrospective time-series analysis of fatal MVC's in the United States involving teenagers, and multivariage negative binomial regression analysis to compare MVC rates across states with different distracted driving laws.",
    },
  ];

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
        {publications.map((pub) => {
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
    </div>
  );
};

export default Publications;
