import discordIcon from '@/assets/images/discord.svg'
import facebookIcon from '@/assets/images/facebook.svg'
import instagramIcon from '@/assets/images/instagram.svg'
import tiktokIcon from '@/assets/images/tiktok.svg'
import twitterIcon from '@/assets/images/twitter.svg'
import youtubeIcon from '@/assets/images/youtube.svg'

const iconMappings = {
  facebook: {
    icon: facebookIcon,
    defaultUrl: 'https://www.facebook.com/',
  },
  twitter: {
    icon: twitterIcon,
    defaultUrl: 'https://www.twitter.com/',
  },
  youtube: {
    icon: youtubeIcon,
    defaultUrl: 'https://www.youtube.com/',
  },
  instagram: {
    icon: instagramIcon,
    defaultUrl: 'https://www.instagram.com/',
  },
  tiktok: {
    icon: tiktokIcon,
    defaultUrl: 'https://www.tiktok.com/',
  },
  discord: {
    icon: discordIcon,
    defaultUrl: 'https://discord.gg/',
  },
}

export default iconMappings
