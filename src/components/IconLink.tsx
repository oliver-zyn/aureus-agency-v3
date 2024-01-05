import { IconProps } from 'phosphor-react'

interface IconLinkProps {
  icon: IconProps
  url: string
}

export default function IconLink({ icon, url }: IconLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="block cursor-pointer hover:-translate-y-1 transition-transform"
    >
      <>{icon}</>
    </a>
  )
}
