import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureList = [
  {
    imgSrc: 'img/pagamento.png',
    title: 'Perfeito para uso no Caixa/Balcão',
    description: 'Transforme seu SmartPOS em um pinpad integrado sem precisar digitar nada na maquininha.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Delivery com Múltiplas Entregas',
    description: 'Crie uma fila de pagamentos para diferentes pedidos, cada um com sua comanda. Envie dados como produtos, nome e endereço do cliente, e processe tudo com controle total durante as entregas.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Venda Mesmo Sem Internet',
    description: 'Mesmo que o seu sistema esteja sem internet, é possível se comunicar com o SmartPOS pela rede local (Wi-Fi), e a maquininha realiza a transação usando seu próprio chip de dados. Ideal para garantir vendas em qualquer situação.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Anuncie na Tela da Maquininha',
    description: 'Exiba imagens ou vídeos promocionais enquanto o cliente faz o pagamento — transforme cada venda em uma oportunidade de marketing.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Coleta de Inventário',
    description: 'Use a maquininha como um coletor: escaneie produtos, registre quantidades e exporte os dados organizados em tabela para controle de estoque ou sistemas de gestão.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Impressão Direta na Maquininha',
    description: 'Imprima comprovantes ou conteúdos personalizados diretamente na maquininha, enviando texto formatado, imagens em base64 ou até uma URL com o conteúdo pronto.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Avaliação de Atendimento',
    description: 'O cliente pode avaliar o atendimento com um clique após a venda, direto na maquininha.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Coleta de Dados do Cliente',
    description: 'Solicite informações como CPF, telefone ou e-mail diretamente na maquininha, de forma integrada e sem complicações após o pagamento.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Leitor de código',
    description: 'Use a câmera da maquininha para capturar códigos de barras durante as vendas e cadastro de produtos.',
  }
];

const Testimonials = [
  {
    quote: 'A Connect TEF nos permitiu integrar múltiplas adquirentes com rapidez e estabilidade.',
    author: 'Lucas Pereira, CTO de Software House',
    image: 'img/logo.png',
  },
  {
    quote: 'Com uma única integração, conseguimos atender diversos clientes e aumentar nosso portfólio.',
    author: 'Fernanda Lima, Diretora Comercial de Revenda',
    image: 'img/logo.png',
  },
  {
    quote: 'O suporte técnico é excelente e nos ajudou em todas as etapas da homologação.',
    author: 'Ricardo Alves, Analista de Sistemas',
    image: 'img/logo.png',
  },
  {
    quote: 'Eliminamos a dependência de soluções TEF legadas e ganhamos agilidade no onboarding.',
    author: 'Juliana Costa, Coordenadora de Integrações',
    image: 'img/logo.png',
  },
];

const terminals = [
  { name: 'A930', logo: 'img/terminals/A930.webp' },
  { name: 'A920', logo: 'img/terminals/A920.png' },
  { name: 'A910', logo: 'img/terminals/A910.png' },
  { name: 'Clover Flex', logo: 'img/terminals/CloverFlex.png' },
  { name: 'DX8000', logo: 'img/terminals/DX8000.webp' },
  { name: 'GPOS 700', logo: 'img/terminals/GPOS700.png' },
  { name: 'N910', logo: 'img/terminals/N910.png' },
  { name: 'Positivo L300', logo: 'img/terminals/PositivoL300.png' },
  { name: 'Positivo L400', logo: 'img/terminals/PositivoL400.webp' },
  { name: 'Sunmi P2', logo: 'img/terminals/Sunmip2.png' },
  { name: 'Sunmi P3', logo: 'img/terminals/Sunmip3.webp' },
  // ...adicione quantos quiser
];
const adiquirentes = [
  { name: 'adyen', logo: 'img/adiquirentes/adyen.png' },
  { name: 'azulzinha', logo: 'img/adiquirentes/azulzinha.png' },
  { name: 'getnet', logo: 'img/adiquirentes/getnet.png' },
  { name: 'Mercado Pago', logo: 'img/adiquirentes/Mercado Pago.png' },
  { name: 'PicPay', logo: 'img/adiquirentes/PicPay.png' },
  { name: 'Rede', logo: 'img/adiquirentes/Rede.png' },
  { name: 'SumUp', logo: 'img/adiquirentes/SumUp.png' },
  { name: 'Vero', logo: 'img/adiquirentes/Vero.png' }
  // ...adicione quantos quiser
];
function shuffleArray(array) {
  const shuffled = [...array]; // não muta o original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const shuffledTerminals = shuffleArray(terminals);
const shuffledAdiquirentes = shuffleArray(adiquirentes);

function HomologatedTerminalsCarousel() {
  const duplicatedTerminals = [...shuffledTerminals, ...shuffledTerminals];

  return (
    <section className={styles.terminalsSection}>
      <h2 className="text--center" style={{
        marginBottom: '2rem',
        marginTop: '2rem'
      }}>
        Terminais compatíveis
      </h2>

      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {duplicatedTerminals.map((terminal, idx) => (
            <div key={idx} className={styles.terminalCard}>
              <img
                src={terminal.logo}
                alt={terminal.name}
                className={styles.terminalLogo}
              />
              <p>{terminal.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdiquirentesCarousel() {
  const duplicatedAdiquirentes = [...shuffledAdiquirentes, ...shuffledAdiquirentes];

  return (
    <section className={styles.terminalsSection}>
      <h2 className="text--center" style={{
        marginBottom: '0rem',
        marginTop: '2rem'
      }}>
        Adiquirentes homologadas
      </h2>

      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {duplicatedAdiquirentes.map((terminal, idx) => (
            <div key={idx} className={styles.terminalCard}>
              <img
                src={terminal.logo}
                alt={terminal.name}
                className={styles.terminalLogo}
              />
              <p>{terminal.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegacyTefCompatibility() {
  return (
    <section className={styles.legacyTef} style={{ backgroundColor: '#f7f7f7', padding: '2rem 1rem', borderRadius: '8px', margin: '2rem 0' }}>
      <div className="container text--center">
        <h3 style={{ marginBottom: '1rem' }}>Já usa TEF no seu PDV?</h3>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Basta instalar nosso módulo TEF para trocar o pinpad pelo Smart POS, Compatibilidade imediata.
        </p>
      </div>
    </section>
  );
}

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx(styles.card)}>
      <img src={imgSrc} alt={title} className={styles.featureImage} />
      <Heading as="h3" className={styles.title}>{title}</Heading>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

function TestimonialsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {Testimonials.map(({ quote, author, image }, idx) => (
        <div key={idx} className={styles.testimonialCard} style={{ padding: '0 10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <img
              src={image}
              alt={author}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <strong>{author}</strong>
          </div>
          <blockquote style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#444' }}>
            "{quote}"
          </blockquote>
        </div>
      ))}
    </Slider>
  );
}

export default function HomepageConnectTEF() {
  return (
    <>
      <LegacyTefCompatibility />
      <section className={styles.testimonials}>
        <div className="container">
          <Heading as="h2" className="text--center">
            Por que escolher o Connect TEF?
          </Heading>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.container}>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>

      {/* <section className={styles.testimonials}>
        <div className="container">
          <Heading as="h2" className="text--center" style={{ marginBottom: '100px' }}>
            Quem está com a gente compartilha:
          </Heading>
          <TestimonialsCarousel />
        </div>
      </section> */}

      <HomologatedTerminalsCarousel />
      <AdiquirentesCarousel />

      <div className="text--center margin-top--lg">
        <p><strong>🚀 Presença nas maiores adquirentes, alcance total garantido.</strong></p>
      </div>
    </>
  );
}