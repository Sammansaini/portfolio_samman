import styles from './App.module.css'
import ContactForm from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Recommendations from './components/Recommendations/Recommendations'
import Skills from './components/Skills/Skills'
import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.App}>
      <Navbar onTabClick={handleTabClick} />
      <div className={styles.content}>
        {activeTab === 'skills' ? (
          <Skills />
        ) : (
          <>
            <Hero />
            <Projects />
            <Recommendations />
            <ContactForm />
          </>
        )}
       
        <Footer />
      </div>
    </div>
  );
}

export default App;