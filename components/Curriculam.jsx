"use client";

import { useState } from "react";
import { Code } from "lucide-react";

const modules = [
  {
    number: "1",
    title: "AI Product Design & Prototyping",
    description:
      "Design thinking, user personas, user journeys, rapid prototyping using tools like Figma, Miro, Voiceflow.",
  },
  {
    number: "2",
    title: "Programming Fundamentals & Backend Setup",
    description:
      "Python, Go, and JS fundamentals, REST APIs, JSON, LLM integration using FastAPI and Postman.",
  },
  {
    number: "3",
    title: "Full-Stack App Development",
    description:
      "Build UIs with React and Tailwind, backend with Flask/FastAPI, connect AI APIs to DB.",
  },
  {
    number: "4",
    title: "Databases for AI",
    description:
      "RDBMS, NoSQL, vector databases, graph databases like PostgreSQL, MongoDB, Neo4j, Pinecone.",
  },
  {
    number: "5",
    title: "Data Engineering & Pipelines",
    description:
      "Build ETL/ELT pipelines, perform data cleaning, batch vs streaming using Airflow, Pandas, Spark.",
  },
  {
    number: "6",
    title: "AI & ML Essentials",
    description:
      "ML lifecycle, supervised learning, feature engineering, model evaluation, deployment with Scikit-learn and TensorFlow.",
  },
  {
    number: "7",
    title: "Generative AI & LLMs",
    description:
      "GPT-4, Claude, Mistral, Llama3, prompt engineering, and LLM app development using LangChain and Hugging Face.",
  },
  {
    number: "8",
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Chunking, embedding pipelines, retrieval systems using FAISS, Weaviate, LangChain.",
  },
  {
    number: "9",
    title: "AI Agents & Agentic Workflows",
    description:
      "Agent architecture, planning, memory, execution, tools like CrewAI, LangGraph, AutoGPT.",
  },
  {
    number: "10",
    title: "Cloud & DevOps for AI",
    description:
      "Docker, GitLab CI/CD, microservices, deployment to AWS/GCP, API gateway setup.",
  },
  {
    number: "11",
    title: "AI Product Strategy & Business",
    description:
      "Build business models, understand governance, ethics, and monetization strategies.",
  },
  {
    number: "12",
    title: "Go-To-Market & Product-Led Growth",
    description:
      "Positioning, messaging, PLG frameworks, feedback loops using tools like HubSpot, Mixpanel, SEMrush.",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Full-Stack AI. Every Layer.{" "}
            <span className="gradient-text">No Fluff.</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            You'll master the complete AI product lifecycle — from idea to code
            to cloud to business.
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <HoverExpandableCard
              key={index}
              number={module.number}
              title={module.title}
              description={module.description}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>

        {/* Capstone Project */}
        <div className="mt-14 p-8 rounded-xl border border-dashed border-blue-600 bg-blue-50 dark:bg-zinc-900 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Capstone Project
            </h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            You'll apply everything by building your own AI product — prototype
            to MVP to deployment — and prepare it for pitch and launch.
          </p>
        </div>
      </div>
    </section>
  );
}

function HoverExpandableCard({ number, title, description, delay = "0ms" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="rounded-xl border border-gray-200 dark:border-blue-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-lg border-blue cursor-pointer transition-all duration-300"
      style={{ animationDelay: delay }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {title}
          </h3>
          <div
            className={`mt-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 ${
              isExpanded
                ? "opacity-100 max-h-32"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
