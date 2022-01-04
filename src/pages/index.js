import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Tech Foundations</h1>
        <p className="hero__subtitle">An Integrated Tech Industry Foundations Course</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An Integrated Tech Industry Foundations Course">
      <HomepageHeader />
      <main>
      <section className={styles.features}>
      <div className="container">
      <div class="row">
        <div class="col col--3">
          Week 1
          <ul>
          <li>
              PF-1 Introduction to Programming
            </li>
            <li>
              LF-1 Introduction to Linux
            </li>
            <li>
              PF-2 Control Flow
            </li>
            <li>
              PF-2 Commanding Linux
            </li>
            <li>
              CF-1 Binary Code
            </li>
          </ul>
        </div>
        <div class="col col--3">
          Week 2
          <ul>
          <li>
              NF-1 Linking Computers
            </li>
            <li>
              SF-1 User Security
            </li>
            <li>
              LF-3 Users, Groups and Permissions
            </li>
            <li>
              PF-3 Algorithms
            </li>
            <li>
              NF-2 The Internet Protocol
            </li>
          </ul>
        </div>
        <div class="col col--3">
          Week 3
          <ul>
          <li>
              LF-4 Working with Text
            </li>
            <li>
              NF-3 Transport Protocols
            </li>
            <li>
              LF-5 Managing Services
            </li>
            <li>
              NF-4 The HyperText Transfer Protocol
            </li>
            <li>
              PF-4 Application Programming Interfaces
            </li>
          </ul>
        </div>
        <div class="col col--3">
          Week 4
          <ul>
          <li>
              SF-2 Threat Analysis
            </li>
            <li>
              CF-2 Computer Hardware
            </li>
            <li>
              CF-3 Cloud Computing
            </li>
            <li>
              SF-3 Protecting Computers
            </li>
            <li>
              PF-5 Version Control
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>
      </main>
    </Layout>
  );
}
