import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integração Simplificada',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Com o ConnectTEF, você conecta seu sistema de forma rápida a máquinas SmartPOS.
      </>
    ),
  },
  {
    title: 'Flexível para seu Sistema',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Suporte a múltiplas formas de integração: API, troca de arquivos, Intents, DLL ou SDK.
        Escolha o modelo ideal para o seu ambiente.
      </>
    ),
  },
  {
    title: 'Baseado em Tecnologia Confiável',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        O ConnectTEF foi construído com foco em estabilidade, escalabilidade e segurança,
        pronto para ambientes de missão crítica.
      </>
    ),
  },
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
