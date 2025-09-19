import React from "react";

const projects = [
  {
    title: "ACF 5130 Individual Report",
    description: "Company evaluation report for Breville.",
    links: [
      { label: "Full Report (PDF)", href: "/files/ACF 5130 Individual report (1).pdf" }
    ]
  },
  {
    title: "ACF Individual Assignment",
    description: "Valuation model and analysis.",
    links: [
      { label: "Model (XLSX)", href: "/files/ACF Induvidual assignement Srav.xlsx" }
    ]
  },
  {
    title: "Applied Investment Group Report",
    description: "Group assignment covering equity research.",
    links: [
      { label: "Report (DOCX)", href: "/files/BFF5220 - Group 10 Assignment (1).docx" }
    ]
  },
  {
    title: "BFF5956 A2 Model",
    description: "Excel model for tutorial work.",
    links: [
      { label: "Model (XLSX)", href: "/files/BFF5956 S12025 – Excel – A2 – Tutorial 01 (1).xlsx" }
    ]
  },
  {
    title: "BFF5956 A2 Report",
    description: "Written report for A2 tutorial.",
    links: [
      { label: "Report (DOCX)", href: "/files/BFF5956 S12025 – Report – A2 – Tutorial 01 (2).docx" }
    ]
  },
  {
    title: "BRG Earnings Quality",
    description: "Analysis of earnings quality.",
    links: [
      { label: "Report (XLSX)", href: "/files/BRG Earnings Quality - Individual Report (1).xlsx" }
    ]
  },
  {
    title: "MA Major Assignment",
    description: "Comprehensive major project submission.",
    links: [
      { label: "Full Report (PDF)", href: "/files/MA Major Assignment- Sravanth Saranu-34165665 (1).pdf" },
      { label: "Model (XLSX)", href: "/files/MA Major Assignment- Sravanth Saranu-34165665.xlsx" }
    ]
  }
];

export default function App() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Finance Portfolio</h1>
      <p className="text-gray-300">Collection of valuation models, reports, and assignments.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.title} className="p-4 border rounded-lg bg-gray-900 shadow">
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p className="text-gray-400 text-sm">{proj.description}</p>
            <ul className="mt-2 space-y-1">
              {proj.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
