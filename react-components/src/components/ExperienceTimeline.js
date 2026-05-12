import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceTimeline.css';

/* ─── Logo Components ──────────────────────────────────────────
   Google & Salesforce → official Font Awesome brand icons (FA 6.4 loaded)
   Fractal, C3.ai, FactSet → simple verified SVG primitives only
   (no arc path commands; only polygon, circle, rect, line, text)
──────────────────────────────────────────────────────────────── */

const glowStyle = { filter: 'drop-shadow(0 0 5px rgba(255,215,0,0.55))' };

/*
  Isometric cube logo — a flat-top regular hexagon divided into 3 rhombuses.
  Hexagon: center=(24,24), circumradius=18
  Vertices (flat-top): top=(24,6), TR=(40,15), BR=(40,33), bot=(24,42), BL=(8,33), TL=(8,15)
  Top face:   (24,6) → (40,15) → (24,24) → (8,15)
  Right face: (40,15) → (40,33) → (24,42) → (24,24)
  Left face:  (8,15) → (24,24) → (24,42) → (8,33)
  Internal Y-edges from (24,24) to (24,6), (40,15), (8,15)
*/
const FractalLogo = ({ size = 52 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={glowStyle} aria-hidden="true">
    {/* Top face — brightest (light source above) */}
    <polygon points="24,6 40,15 24,24 8,15" fill="rgba(255,215,0,0.95)" />
    {/* Right face — medium */}
    <polygon points="40,15 40,33 24,42 24,24" fill="rgba(255,215,0,0.55)" />
    {/* Left face — darkest */}
    <polygon points="8,15 24,24 24,42 8,33"  fill="rgba(255,215,0,0.28)" />
    {/* Internal Y-edges for depth */}
    <line x1="24" y1="24" x2="24" y2="6"  stroke="rgba(26,26,26,0.55)" strokeWidth="0.8" />
    <line x1="24" y1="24" x2="40" y2="15" stroke="rgba(26,26,26,0.55)" strokeWidth="0.8" />
    <line x1="24" y1="24" x2="8"  y2="15" stroke="rgba(26,26,26,0.55)" strokeWidth="0.8" />
    {/* Outer hexagon border */}
    <polygon
      points="24,6 40,15 40,33 24,42 8,33 8,15"
      fill="none"
      stroke="#FFD700"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const C3Logo = ({ size = 40 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={glowStyle} aria-hidden="true">
    <circle cx="24" cy="24" r="21" fill="rgba(255,215,0,0.07)" stroke="#FFD700" strokeWidth="2" />
    <text
      x="24" y="24"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#FFD700"
      fontSize="13"
      fontWeight="800"
      fontFamily="Poppins, sans-serif"
    >C3.ai</text>
  </svg>
);

const FactSetLogo = ({ size = 40 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={glowStyle} aria-hidden="true">
    <rect x="3" y="3" width="42" height="42" rx="7" fill="rgba(255,215,0,0.07)" stroke="#FFD700" strokeWidth="2" />
    {/* Ascending bars: heights 6, 12, 18, 24 */}
    <line x1="12" y1="37" x2="12" y2="31" stroke="#FFD700" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="20" y1="37" x2="20" y2="25" stroke="#FFD700" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="28" y1="37" x2="28" y2="19" stroke="#FFD700" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="36" y1="37" x2="36" y2="13" stroke="#FFD700" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

/* Font Awesome brand icons — reliable, pixel-perfect, gold */
const faIconStyle = {
  color: '#FFD700',
  fontSize: '2rem',
  filter: 'drop-shadow(0 0 5px rgba(255,215,0,0.5))',
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const GoogleLogo = () => (
  <span style={faIconStyle}><i className="fab fa-google" /></span>
);

const SalesforceLogo = () => (
  <span style={faIconStyle}><i className="fab fa-salesforce" /></span>
);

const logoMap = {
  fractal:    <FractalLogo size={40} />,
  c3ai:       <C3Logo />,
  salesforce: <SalesforceLogo />,
  factset:    <FactSetLogo />,
  google:     <GoogleLogo />,
};

/* ─── Experience Data (from resume, newest first) ─── */
const clients = [
  {
    client: 'FactSet',
    logoKey: 'factset',
    role: 'Senior Architect',
    period: 'Mar 2026 – Apr 2026',
    description:
      'Architected semantic (L2) and domain service (L3) layers for a 6-layer financial data platform on Databricks, Delta Lake, and Unity Catalog. Built a fiscal period resolution SQL UDF using 6 CTEs, regex parsing, and window functions across 8.5M+ rows. Evaluated entity-matching architecture (n-gram indexing, Jaro-Winkler, TF-IDF on Spark) and designed the entity resolution layer wrapping FactSet\'s Concordance API.',
    tags: ['Databricks', 'Delta Lake', 'Unity Catalog', 'PySpark', 'SQL', 'AWS DocumentDB'],
  },
  {
    client: 'Salesforce',
    logoKey: 'salesforce',
    role: 'Full Stack AI Engineer',
    period: 'Dec 2025 – Mar 2026',
    description:
      'Engineered customer churn prediction features in Snowflake using complex multi-source SQL aggregations powering an XGBoost-based attrition model in production. Drove a 10% MAE reduction and scaled the model to expand at-risk AOV coverage. Integrated SHAP explainability into the pipeline, using an LLM to generate plain-language prediction explanations for business stakeholders.',
    tags: ['Snowflake', 'XGBoost', 'SHAP', 'SageMaker', 'Airflow', 'Python'],
  },
  {
    client: 'Google',
    logoKey: 'google',
    role: 'Software Engineer',
    period: 'Sep 2025 – Dec 2025',
    description:
      'Engineered an intelligent data consolidation pipeline using NLP-based duplicate detection (Levenshtein + Jaro-Winkler) with confidence scoring, reducing manual data review time by 90%. Built automated data quality and anomaly flagging in Apps Script across 1,000+ records. Designed data transformation and validation pipelines to normalize multi-source inputs into structured formats for downstream AI/analytics workflows.',
    tags: ['NLP', 'Python', 'Apps Script', 'Google Sheets', 'Data Quality', 'Jaro-Winkler'],
  },
  {
    client: 'C3.ai',
    logoKey: 'c3ai',
    role: 'Full Stack AI Engineer',
    period: 'Dec 2024 – Aug 2025',
    description:
      'Contributed to a production agentic GenAI system using RAG pipelines and vector embeddings for multi-modal document querying. Implemented real-time LLM guardrails with RoBERTa-based toxicity detection on air-gapped infrastructure, reducing harmful content exposure by 98%. Built AI agent workflows with LangGraph and React Flow, and a PII masking pipeline using NER models. Deployed ~20 demo applications across Dev, UAT, and Prod over 8 months.',
    tags: ['RAG', 'LangGraph', 'AWS Bedrock', 'RoBERTa', 'NER', 'React', 'Python'],
  },
];

/* ─── Components ─── */
const ClientCard = ({ exp, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
      <motion.div
        className="timeline-card"
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="timeline-card-header">
          <div className="timeline-logo-name">
            {logoMap[exp.logoKey]}
            <div>
              <h3 className="timeline-company">{exp.client}</h3>
              <p className="timeline-via">via Fractal Analytics</p>
            </div>
          </div>
          <span className="timeline-period">{exp.period}</span>
        </div>
        <p className="timeline-role">{exp.role}</p>
        <p className="timeline-description">{exp.description}</p>
        <div className="timeline-tags">
          {exp.tags.map(tag => (
            <span key={tag} className="timeline-tag">{tag}</span>
          ))}
        </div>
      </motion.div>
      <div className="timeline-dot" />
    </div>
  );
};

const ExperienceTimeline = () => (
  <div className="timeline-section">
    <motion.h2
      className="timeline-section-title"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Experience
    </motion.h2>

    {/* Fractal Analytics employer banner */}
    <motion.div
      className="fractal-banner"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <FractalLogo size={56} />
      <div className="fractal-banner-text">
        <h3 className="fractal-name">Fractal Analytics</h3>
        <p className="fractal-meta">Data &amp; AI Consultant &nbsp;·&nbsp; Dec 2024 – Present</p>
        <p className="fractal-desc">
          Embedded with Fortune 500 clients to deliver AI/ML systems, data engineering platforms,
          and cloud infrastructure solutions across multiple strategic engagements.
        </p>
      </div>
    </motion.div>

    <div className="timeline-wrapper">
      <div className="timeline-line" />
      {clients.map((exp, i) => (
        <ClientCard key={exp.client} exp={exp} index={i} />
      ))}
    </div>
  </div>
);

export default ExperienceTimeline;
