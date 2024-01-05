import { buttonVariants } from './ui/button'

interface NavLinksProps {
  size: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
  className?: string
  closeMobileMenu: () => void
}

export default function NavLinks({
  size,
  className,
  closeMobileMenu,
}: NavLinksProps) {
  return (
    <>
      <a
        href="#about"
        onClick={closeMobileMenu}
        className={buttonVariants({
          variant: 'ghost',
          size,
          className: `hover:bg-[#F4F4F5] min-w-20 ${className}`,
        })}
      >
        Sobre
      </a>
      <a
        href="#services"
        onClick={closeMobileMenu}
        className={buttonVariants({
          variant: 'ghost',
          size,
          className: `hover:bg-[#F4F4F5] min-w-20 ${className}`,
        })}
      >
        Serviços
      </a>
      <a
        href="#contact"
        onClick={closeMobileMenu}
        className={buttonVariants({
          variant: 'ghost',
          size,
          className: `hover:bg-[#F4F4F5] min-w-20 ${className}`,
        })}
      >
        Contato
      </a>
    </>
  )
}
