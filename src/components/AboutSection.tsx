import ArrowButton from './ArrowButton'
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import logoImg from '../assets/logo.jpg'

export default function AboutSection() {
  return (
    <MaxWidthWrapper className="flex justify-between items-center flex-col text-center gap-10 pt-60 lg:pt-80 lg:flex-row lg:text-left">
      <div>
        <h1 className="max-w-4xl text-3xl font-normal lg:text-4xl">
          Sobre a <span className="font-semibold">Aureus Agency</span>
        </h1>
        <p className="mt-7 mb-3 max-w-xl text-primary/90 sm:text-lg">
          Somos uma empresa especializada em marketing digital,{' '}
          <span className="font-semibold text-purple-aureus">
            sempre buscando inovação e excelência
          </span>{' '}
          para impulsionar a presença online de nossos clientes. Nosso
          compromisso é ir além das expectativas, desenvolvendo estratégias
          personalizadas que não apenas atraem, mas também{' '}
          <span className="font-semibold text-purple-aureus">
            envolvem e convertem
          </span>
          .
        </p>
        <ArrowButton
          text="Iniciar minha jornada"
          url="https://wa.me/554691163405"
          target="_blank"
          className="bg-purple-aureus hover:bg-purple-aureus/85"
        />
      </div>
      <div className="rounded-xl overflow-hidden max-w-96">
        <Image src={logoImg} width={500} height={500} alt="" />
      </div>
    </MaxWidthWrapper>
  )
}
