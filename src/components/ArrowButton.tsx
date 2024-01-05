import { ArrowRight } from 'phosphor-react'
import { buttonVariants } from './ui/button'

interface ArrowButtonProps {
  text: string
  url: string
  target?: string
  className?: string
}

export default function ArrowButton({
  text,
  url,
  target,
  className,
}: ArrowButtonProps) {
  return (
    <a
      className={buttonVariants({
        size: 'lg',
        className: `mt-5 z-10 max-w-72 relative group ${className}`,
      })}
      href={url}
      target={target}
      rel="noreferrer"
    >
      {text}{' '}
      <span className="ml-2 inline-block">
        <ArrowRight
          weight="bold"
          className="h-5 w-5 group-hover:translate-x-1 transition-transform"
        />
      </span>
    </a>
  )
}
