import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageConnectTEF from '@site/src/components/HomepageConnectTEF';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container text--center">
        <Heading as="h1" className={styles.heroTitle}>
          {/* Aceite pagamentos com diversas maquininhas de cartão, tudo numa única integração */}
          Site em construção, volte em outro momento
        </Heading>

        <Link className="button button--secondary button--lg" to="/docs/intro">
          Comece a Integração Agora 🚀
        </Link>

        <div className={styles.integrationLinks}>
          <Link className="button button--primary button--md" to="/docs/api">
            Integração via API
          </Link>
          <Link className="button button--primary button--md" to="/docs/arquivo">
            Troca de Arquivos
          </Link>
          <Link className="button button--primary button--md" to="/docs/dll">
            Integração via DLL
          </Link>
          <Link className="button button--primary button--md" to="/docs/sdk">
            SDK
          </Link>
          <Link className="button button--primary button--md" to="/docs/android-intent">
            Android (Intent)
          </Link>
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
        <HomepageFeatures />
        <HomepageConnectTEF />
      </main>
    </Layout>
  );
}
