import React, { useState } from "react";
import selfie from "../assets/selfie.jpeg";
import Timeline from "./Timeline";
import Publications from "./Publications";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="py-20">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-16"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="typewriter">
                About{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                  Me
                </span>
              </span>
            </h2>

            <div className="glass-morphism p-6 rounded-2xl space-y-6">
              <div className="achievement-block">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Education
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  This past spring, I graduated from{" "}
                  <span className="text-cyan-300 font-semibold">
                    Hamilton College
                  </span>{" "}
                  where I studied Mathematics and Music.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                Ever since I can remember, I've had a passion for learning and
                creating things—whether it's through music, legos, or lines of
                code. Despite the transition from student to working
                professional, not much has changed. I spent my summer building
                with tmc, enjoying time with friends and family, finishing
                long-term passion projects, and researching areas of computing I
                could get better at.
              </p>

              <div className="achievement-block">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Machine Learning and Research Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I first fell in love with the possibilities of machine
                  learning during my internship at the{" "}
                  <span className="text-cyan-300 font-semibold">
                    Boston Children's Hospital Musculoskeletal Informatics Group
                  </span>
                  .
                </p>
              </div>

              {showMore && (
                <div className="animate-fade-in space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    As a Research Intern at Boston Children's Hospital, I helped
                    process and verify dataset quality and wrote image feature
                    extraction programs as my first experience with computer
                    vision. I got my first glimpse into the impact of ML/AI in
                    healthcare, contributing to 3D model segmentation pipelines
                    and NLP treatment planning projects through a
                    weakly-supervised domain adaptation project.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    I returned the following year, writing 3D modeling
                    algorithms to simulate orthopedic procedures. This
                    experience deepend my love for engineering and coding,
                    ultimately leading me to explore personal projects through
                    hackathons and experiments with machine learning.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    The joy of independent creation and learning inspired me to
                    pursue the{" "}
                    <span className="text-cyan-300 font-semibold">
                      Emerson Fellowship
                    </span>{" "}
                    at Hamilton for summer 2024. With this grant, I developed a
                    vocal register classification pipeline with a
                    musician-friendly GUI. This tool helps singers understand
                    and apply technique, particularly useful for my acapella
                    group, The Buffers.
                  </p>

                  <div className="research-quote">
                    <p className="text-gray-300 leading-relaxed mb-2">
                      My formal research pre-print from the vocal register
                      classification project:
                    </p>
                    <a
                      href="https://arxiv.org/abs/2505.11378"
                      className="research-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      "Machine Learning Approaches to Vocal Register
                      Classification in Contemporary Male Pop Music
                    </a>
                  </div>

                  <div className="achievement-block">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Into 2026 and beyond!
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Looking toward the opportunities post-college, I am
                      excited about applying to CS and Bioinformatics PhD
                      programs this upcoming cycle, and learning the ins and
                      outs of Epic's EHR's in the U.S. healthcare system.
                      <span className="text-cyan-300 font-semibold">
                        <p>
                          <br></br>I'm particularly interested in developments
                          with NLP/LLM domain adaptation in clinical spaces, and
                          multi-modal bioinformatics.
                        </p>
                      </span>
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Since graduating, I finished up the mlp method for my C++
                    powered, tensor-based ML library, tensorkit-learn, and
                    writing google suite tools, and tweaking the OmniParser OCR
                    method for my computer-use agent SOFIA.
                    <br></br>
                    <br></br>
                    Additionally, I worked with tmc to develop their OCR
                    pipeline and mobile app before starting my Project
                    Management job at Epic Systems. Recently, I have been
                    exploring an OS development passion project (see LIOS below)
                    and reading about CUDA Kernels and Optimization in my time
                    after work.
                  </p>
                  <p className="text-gray-300 leading-relaxed"></p>
                  <div className="achievement-block">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Life Offline
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Outside of coding and music, I enjoy{" "}
                      <span className="text-cyan-300">
                        basketball and volleyball in all forms, cooking with
                        family, running and lifting, and reading about
                        computers, history and neuroscience.
                      </span>
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={toggleShowMore}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="glass-morphism p-4 rounded-2xl hover-lift mx-auto max-w-md">
              <img
                src={selfie}
                alt="Alex Kim"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <Timeline />
      </div>

      {/* Publications Section */}
      <div id="publications" className="max-w-7xl mx-auto px-6 mt-16">
        <Publications />
      </div>
    </div>
  );
};

export default About;
