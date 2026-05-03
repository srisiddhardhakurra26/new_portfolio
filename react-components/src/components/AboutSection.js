import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };  
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div ref={sectionRef} className="about-section section">
      <motion.div 
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <motion.p
          className="about-text"
          variants={itemVariants}
        >
          Full Stack AI &amp; Data Engineer with ~5 years of experience specializing in AI/ML applications, data engineering, and cloud infrastructure automation. Proven expertise building production-grade ETL pipelines using Apache Spark and Databricks on AWS, architecting HIPAA-compliant Delta Lake solutions, and deploying GenAI systems using AWS Bedrock agents, RAG pipelines, and foundation models (Claude, Titan, Llama). Proficient in PySpark, Snowflake, Airflow, and ML feature engineering. Strong background in Infrastructure as Code (Terraform), CI/CD automation, and modern web technologies (React.js, Node.js, Python).
        </motion.p>

        <motion.h3
          className="accomplishments-title"
          variants={itemVariants}
        >
          Key Accomplishments
        </motion.h3>

        <motion.ul
          className="accomplishments-list"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants}>
            🤖 Architected GenAI agentic systems at C3.ai using RAG pipelines, LangGraph, and AWS Bedrock — deployed 20+ enterprise AI demo applications end-to-end.
          </motion.li>
          <motion.li variants={itemVariants}>
            📊 Drove 10% MAE reduction on an XGBoost churn model at Salesforce by engineering multi-source Snowflake features and integrating SHAP explainability for business stakeholders.
          </motion.li>
          <motion.li variants={itemVariants}>
            🏗️ Designed a 6-layer financial data platform on Databricks, Delta Lake, and Unity Catalog at FactSet — including fiscal period resolution UDFs across 8.5M+ rows.
          </motion.li>
          <motion.li variants={itemVariants}>
            🔒 Built real-time LLM guardrails with RoBERTa-based toxicity detection and a PII masking pipeline using NER models, reducing harmful content exposure by 98%.
          </motion.li>
          <motion.li variants={itemVariants}>
            ⚡ Migrated healthcare ETL to Databricks on AWS using PySpark + Apache Kafka, processing 50K+ daily records into Delta Lake with significantly reduced latency.
          </motion.li>
          <motion.li variants={itemVariants}>
            ☁️ Automated HIPAA-compliant infrastructure across AWS (ECS, RDS, VPC) using Terraform IaC modules, standardizing security policies across dev/staging/prod.
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default AboutSection;