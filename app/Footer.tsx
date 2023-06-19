import Link from 'next/link';
import BaseSvg from '@/components/ui/BaseSvg';
import BaseIcon from '@/components/ui/BaseIcon';
import Container from '@/components/ui/Container';
import SubscribeBox from '@/components/SubscribeBox';
import SocialLink from '@/components/SocialLink';
import { siteConfig } from '@/config/site';

const socialNetworks = [
  'instagram',
  'pinterest',
  'facebook',
  'twitter',
] as const;

const Footer = () => {
  const { nav, contactInfo } = siteConfig;

  return (
    <footer className="bg-dark">
      <Container>
        <div className="grid grid-cols-12 pb-16">
          <div className="col-span-5">
            <BaseSvg image="logoLight" width={240} className="w-52 md:w-60" />

            <SubscribeBox className="mt-8" />
          </div>

          <div className="col-span-7 pl-32 pt-4">
            <div className="grid grid-cols-12 gap-8 border-b border-solid border-white/20 pb-9">
              <div className="col-span-5">
                <h6 className="mb-4 text-white">Menu</h6>
                <ul className="leading-loose">
                  {nav.map((navItem) => (
                    <li key={navItem.name} className="mb-2.5">
                      <Link
                        href={navItem.path}
                        className="font-medium text-gray-300 hover:underline"
                      >
                        {navItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-7">
                <h6 className="mb-4 text-white">Contact</h6>
                <p className="font-medium leading-loose text-gray-300">
                  {contactInfo.email}
                  <br />
                  {contactInfo.phone}
                  <br />
                  Santo Domingo
                  <br />
                  República Dominicana
                </p>
              </div>
            </div>

            <div className="flex items-center gap-16 pt-9">
              <div className="flex h-11 items-center gap-3">
                {socialNetworks.map((network) => (
                  <SocialLink
                    key={network}
                    network={network}
                    className="bg-white/10 text-white hover:bg-overlay-link"
                  />
                ))}
              </div>

              <Link href="tel:8296551178" className="flex items-center gap-3">
                <BaseIcon
                  icon="lgt-mobile-signal-out"
                  className="text-5xl text-white"
                />
                <div>
                  <div className="text-sm text-white">Llamame!</div>
                  <div className="text-xl font-medium text-white">
                    {contactInfo.phone}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-t-md bg-white/20 px-4  py-6 text-center text-sm text-white">
          Copyright &copy; La Selvita de Concreto, 2023
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
