'use client';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Treatments from '../components/Treatments/Treatments';
import Results from '../components/Results/Results';
import Reviews from '../components/Reviews/Reviews';
import ClinicLocation from '../components/Clinic/ClinicLocation';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import styles from './page.module.css';

export default function Home() {
  // Ativa os efeitos de scroll e paralaxe em todas as seções
  useScrollReveal();
  useParallax();

  return (
    <div className={styles.mainWrapper}>
      <Header />
      <Hero />
      <div className={styles.sectionDivider} />
      <About />
      <div className={styles.sectionDivider} />
      <Treatments />
      <div className={styles.sectionDivider} />
      <Results />
      <div className={styles.sectionDivider} />
      <Reviews />
      <div className={styles.sectionDivider} />
      <ClinicLocation />
      <div className={styles.sectionDivider} />
      <FAQ />
      <Footer />
    </div>
  );
}