import ArrowButton from './ArrowButton'
import MaxWidthWrapper from './MaxWidthWrapper'

export default function MessageSection() {
  return (
    <MaxWidthWrapper className="flex flex-col justify-center items-center text-center py-60 lg:py-80">
      <h1 className="max-w-4xl text-2xl font-semibold pb-12 !leading-[1.6] lg:text-4xl">
        Em nosso universo digital, somos seu{' '}
        <span className="text-purple-aureus">foguete para o sucesso</span>.
        Impulsione sua marca com a{' '}
        <span className="text-purple-aureus">Aureus Agency</span> e alcance{' '}
        <span className="text-purple-aureus">novas alturas</span>!
      </h1>
      <ArrowButton
        text="Iniciar minha jornada"
        url="https://wa.me/554691163405"
        target="_blank"
        className="bg-purple-aureus hover:bg-purple-aureus/85"
      />
    </MaxWidthWrapper>
  )
}
