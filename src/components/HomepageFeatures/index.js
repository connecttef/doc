import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Integração Simples e Rápida',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Conecte seu sistema a maquininhas SmartPOS em poucos passos, com documentação clara e suporte ágil.
      </>
    ),
  },
  {
    title: 'Suporte a Múltiplas Adquirentes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Trabalhe com operadoras como Cielo, Rede, Stone e muitas outras sem precisar de múltiplas integrações.
      </>
    ),
  },
  {
    title: 'Transações Seguras e Confiáveis',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Plataforma desenvolvida com foco em estabilidade e segurança para garantir a confiabilidade dos pagamentos.
      </>
    ),
  }
];


function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
