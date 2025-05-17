import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureList = [
  // 🧾 Operação no Caixa ou Balcão
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
    title: 'Leitor de código',
    description: 'Use a câmera da maquininha para capturar códigos de barras durante as vendas e cadastro de produtos.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Perfeito para Coleta de Inventário',
    description: 'Use a maquininha como um coletor inteligente: escaneie produtos, registre quantidades e exporte os dados organizados em tabela para controle de estoque ou sistemas de gestão.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Comprovante via WhatsApp',
    description: 'Envie o comprovante direto para o WhatsApp do cliente — prático, rápido e ecológico.',
  },
  {
    imgSrc: 'img/pagamento.png',
    title: 'Impressão de Recibos',
    description: 'Imprima comprovantes físicos diretamente na maquininha, se o cliente preferir.',
  },

  // 🔌 Conecte com o que você já usa
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Integração com seu Sistema',
    description: 'Se conecta facilmente ao seu sistema atual via API, arquivos, SDK, ou até mesmo usando Intent no Android.',
  },
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Compatível com TEF Tradicional',
    description: 'Já usa TEF por troca de arquivos? Não precisa mudar nada. Basta instalar nosso módulo e começar a usar o SmartPOS.',
  },
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Múltiplas Adquirentes em Uma Integração',
    description: 'Cielo, Rede, Stone, SafraPay, Getnet e muito mais — tudo com uma única integração.',
  },

  // 🖨️ Recursos Adicionais do SmartPOS
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Leitura de Código de Barras e QR Code',
    description: 'Use a câmera da maquininha para ler códigos, agilizando pedidos, pagamentos ou validações.',
  },
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Impressão de Cupons Personalizados',
    description: 'Imprima imagens, textos ou cupons de forma totalmente personalizada direto na impressora do SmartPOS.',
  },

  // 📲 Coleta de Dados do Cliente
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Peça CPF ou Telefone na Maquininha',
    description: 'Permite solicitar dados como CPF para nota fiscal ou telefone para contato, tudo direto na tela do SmartPOS.',
  },
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Campos Personalizados',
    description: 'Colete qualquer informação do cliente (ex: número da mesa, avaliação do atendimento, observações etc).',
  },
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Avaliação de Atendimento',
    description: 'O cliente pode avaliar o atendimento com um clique após a venda, direto na maquininha.',
  },

  // 📺 Marketing e Experiência
  {
    imgSrc: 'img/docusaurus.png',
    title: 'Anuncie na Tela da Maquininha',
    description: 'Exiba imagens ou vídeos promocionais enquanto o cliente faz o pagamento — transforme cada venda em uma oportunidade de marketing.',
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

function LegacyTefCompatibility() {
  return (
    <section className={styles.legacyTef} style={{ backgroundColor: '#f7f7f7', padding: '2rem 1rem', borderRadius: '8px', margin: '2rem 0' }}>
      <div className="container text--center">
        <h3 style={{ marginBottom: '1rem' }}>Já usa TEF no seu PDV?</h3>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Basta instalar nosso módulo TEF para trocar o pinpad pelo Smart POS — sem necessidade de integrar nada novo. Suportamos o protocolo tradicional de troca de arquivos para garantir compatibilidade imediata.
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
      {/* 
      <section className={styles.benefits}>
        <div className="container text--center">
          <Heading as="h2" className="margin-bottom--md">
            Por que escolher a Connect TEF?
          </Heading>
        </div>
      </section> */}

      <section className={styles.testimonials}>
        <div className="container">
          <Heading as="h2" className="text--center">
            Por que escolher a Connect TEF?
          </Heading>
        </div>
      </section>

      {/* <section className={styles.container}>
        <div className="container">
          {Object.entries(FeatureList).map(([category, items]) => (
            <div key={category} className="margin-bottom--lg">
              <div className={styles.featuresGrid}>
                {items.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Features Section */}
      <section className={styles.container}>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className="container">
          <Heading as="h2" className="text--center" style={{ marginBottom: '100px' }}>
            Quem está com a gente compartilha:
          </Heading>
          <TestimonialsCarousel />
        </div>
      </section>

      <div className="text--center margin-top--lg">
        <p><strong>🚀 Presença nas maiores adquirentes, alcance total garantido.</strong></p>
      </div>
    </>
  );
}