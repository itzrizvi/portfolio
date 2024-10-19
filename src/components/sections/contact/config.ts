import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiFacebook,
  SiInstagram,
  SiGitlab,
  SiUpwork,
  SiFiverr
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'shahriar.rizvi02@gmail.com',
  skype: 'live:shahriar.me.work',
  socials: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ShahriarRizvi303',
      Icon: SiFacebook
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/shahriar_rizvi033',
      Icon: SiInstagram
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/shahriar-rizvi',
      Icon: SiLinkedin
    },
    {
      name: 'Github',
      href: 'https://github.com/itzrizvi',
      Icon: SiGithub
    },
    {
      name: 'Gitlab (Personal)',
      href: 'https://gitlab.com/itzrizvi',
      Icon: SiGitlab
    },
    {
      name: 'Gitlab (Work)',
      href: 'https://vcs.technonext.com/shahriar.rizvi',
      Icon: SiGitlab
    },
    {
      name: 'UpWork',
      href: 'https://www.upwork.com/freelancers/~016563ded4572efd4a',
      Icon: SiUpwork
    },
    {
      name: 'Fiverr',
      href: 'https://www.fiverr.com/shahriar03',
      Icon: SiFiverr
    }
  ]
};

export { contact };
