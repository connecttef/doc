import clsx from 'clsx';
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageConnectTEF from '@site/src/components/HomepageConnectTEF';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    mensagem: '',
    interest: 'Quero utilizar no meu negócio',
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);

  const validatePhone = (phone) =>
    /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(phone); // Aceita formatos como (11) 99999-9999

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Email inválido.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Telefone inválido.');
      return;
    }

    try {
      setError('');

      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erro na requisição');

      setSubmitted(true);
      setFormData({
        name: '',
        empresa: '',
        email: '',
        phone: '',
        mensagem: '',
        interest: 'Quero utilizar no meu negócio',
      });
    } catch (err) {
      setError('Erro ao enviar, tente novamente.');
    }
  }

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLeft}>
          <Heading as="h1" className={styles.heroTitle}>
            Transforme o smartpos em um ponto de pagamento integrado!
          </Heading>
        </div>

        <div className={styles.heroRight}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h3>Entre em Contato</h3>
            <input type="text" name="name" placeholder="Nome" required onChange={handleChange} value={formData.name} />
            <input type="text" name="empresa" placeholder="Empresa" value={formData.empresa} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
            <input type="tel" name="phone" placeholder="Telefone" required onChange={handleChange} value={formData.phone} />
            <select name="interest" value={formData.interest} onChange={handleChange} required>
              <option value="Quero utilizar no meu negócio">Quero utilizar no meu negócio</option>
              <option value="Quero revender (White Label)">Quero revender (White Label)</option>
              <option value="Outro">Outro</option>
            </select>
            <button className="button button--secondary button--sm" type="submit">Enviar</button>
            {submitted && <p style={{ color: 'lightgreen' }}>Enviado com sucesso!</p>}
            {error && <p style={{ color: 'salmon' }}>{error}</p>}
          </form>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
    
        <HomepageConnectTEF />
      </main>
    </Layout>
  );
}
