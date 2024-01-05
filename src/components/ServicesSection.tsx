import {
  Funnel,
  InstagramLogo,
  Megaphone,
  NewspaperClipping,
  NotePencil,
  PresentationChart,
} from 'phosphor-react'

import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import ServiceItem from './ServiceItem'
import servicesImg from '../assets/servicesImg.png'
import servicesImg2 from '../assets/servicesImg2.png'

export default function ServicesSection() {
  return (
    <MaxWidthWrapper className="py-60 lg:py-80">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="max-w-4xl text-3xl font-normal lg:text-5xl">
          <span className="font-semibold text-purple-aureus">
            Elevando marcas:
          </span>{' '}
          descubra nossos serviços de marketing digital
        </h1>
        <p className="mt-10 max-w-4xl text-primary/90 sm:text-lg md:max-w-2xl">
          Com a{' '}
          <span className="font-semibold text-purple-aureus">
            Aureus Agency
          </span>
          , por meio da metodologia Sigma,{' '}
          <span className="font-semibold text-purple-aureus">
            geramos resultados
          </span>{' '}
          a curto, médio e longo prazo. Preparamos estrategicamente seu projeto
          para{' '}
          <span className="font-semibold text-purple-aureus">
            impulsionar o crescimento
          </span>{' '}
          da sua empresa.
        </p>
        <div className="flex justify-center items-center mt-16 gap-16 flex-col lg:flex-row">
          <div className="rounded-xl overflow-hidden max-w-96 max-h-80 lg:max-h-none order-1 shadow-md">
            <Image
              src={servicesImg}
              width={1000}
              height={1500}
              alt=""
              className="lg:h-[33rem] object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 text-left lg:order-1">
            <ServiceItem
              icon={
                <InstagramLogo
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Gestão de redes sociais"
              description="Potencialize sua presença no Instagram e Facebook. Com estratégias envolventes, construímos conexões sólidas que destacam sua marca digitalmente."
            />
            <ServiceItem
              icon={
                <PresentationChart
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Gestão de tráfego pago"
              description="Otimizamos campanhas de tráfego pago para maximizar resultados e impulsionar o crescimento estratégico do seu negócio."
            />
            <ServiceItem
              icon={
                <Funnel
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Criação de funil de vendas"
              description="Transformamos visitantes em clientes com funis de vendas personalizados. Da atração à conversão, potencialize suas vendas conosco."
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-16 gap-16 flex-col lg:flex-row">
          <div className="flex flex-col gap-12 text-left lg:order-1">
            <ServiceItem
              icon={
                <NewspaperClipping
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Facebook e Google ADS"
              description="Com estratégias afiadas no Facebook e Google Ads, sua marca ganha visibilidade, conquista novos públicos e impulsiona suas metas de negócios."
            />
            <ServiceItem
              icon={
                <NotePencil
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Criação de conteúdo"
              description="Desenvolvemos conteúdo envolvente e autêntico para destacar sua marca. Cada palavra é cuidadosamente criada para conectar-se e envolver seu público-alvo."
            />
            <ServiceItem
              icon={
                <Megaphone
                  size={32}
                  weight="fill"
                  className="text-purple-aureus min-w-[2rem]"
                />
              }
              title="Estratégias de marketing personalizadas"
              description="Transforme visitantes em clientes. Nossa equipe destaca sua presença digital com experiências focadas na conversão."
            />
          </div>
          <div className="rounded-xl overflow-hidden max-w-96 max-h-80 lg:max-h-none order-1 shadow-md">
            <Image
              src={servicesImg2}
              width={1000}
              height={1500}
              alt=""
              className="lg:h-[33rem] object-top -translate-y-24 lg:translate-y-0"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
