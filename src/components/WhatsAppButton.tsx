import { WhatsappLogo } from 'phosphor-react'
import { buttonVariants } from './ui/button'

interface WhatsAppButtonProps {
  size: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
  className: string
}

export default function WhatsAppButton({
  size,
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      className={buttonVariants({
        size,
        className,
      })}
      href="https://wa.me/554691163405"
      target="_blank"
      rel="noreferrer"
    >
      Fale Conosco <WhatsappLogo weight="fill" className="ml-2 h-5 w-5" />
    </a>
  )
}
