import BaseSvg from '@/components/BaseSvg';
import SiteNav from '@/components/layout/SiteNav';
import MobileNav from '@/components/layout/MobileNav';
import HeaderCta from '@/components/layout//HeaderCta';

const Header = () => {
  return (
    <div className="bg-white py-5" data-component="site-header">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex flex-auto items-center justify-between">
          <div className="flex items-center">
            <BaseSvg
              image="logo"
              width={200}
              className="mr-2 w-44 md:mr-6 md:w-52 lg:mr-12"
            />

            <SiteNav className="hidden sm:block" />
          </div>

          <HeaderCta size="lg" className="hidden sm:inline-block">
            <span className="lg:hidden">Escribeme!</span>
            <span className="hidden lg:inline">Mandame un Mensaje!</span>
          </HeaderCta>

          <MobileNav className="inline-block sm:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Header;
