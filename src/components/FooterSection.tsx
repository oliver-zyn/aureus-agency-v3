import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  WhatsappLogo,
} from 'phosphor-react'

import IconLink from './IconLink'
import MaxWidthWrapper from './MaxWidthWrapper'

export default function FooterSection() {
  return (
    <MaxWidthWrapper className="py-10 flex flex-col justify-between gap-5 items-center text-center lg:text-left lg:flex-row md:flex-row md:text-left">
      <div>
        <h2 className="font-semibold text-lg">AureusAgency.</h2>
        <p className="text-sm pt-2">
          Copyright © 2024. Todos os direitos reservados
        </p>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <IconLink
          icon={<WhatsappLogo size={24} />}
          url="https://wa.me/554691357970"
        />
        <IconLink
          icon={<InstagramLogo size={24} />}
          url="https://instagram.com/aureus_agency"
        />
        <IconLink
          icon={<FacebookLogo size={24} />}
          url="https://www.facebook.com/profile.php?id=100093401006980&mibextid=ZbWKwL"
        />
        <IconLink
          icon={<TiktokLogo size={24} />}
          url="https://www.tiktok.com/@aureusagency"
        />
      </div>
    </MaxWidthWrapper>
  )
}
