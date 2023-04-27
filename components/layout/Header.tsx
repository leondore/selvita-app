import BaseSvg from '@/components/BaseSvg';
import BaseButton from '@/components/BaseButton';
import SiteNav from '@/components/layout/SiteNav';

const Nav = () => {
  return (
    <div className="bg-white py-4" data-component="site-header">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex flex-auto items-center justify-between">
          <div className="flex items-center">
            <BaseSvg
              image="logo"
              width={200}
              className="w-44 sm:w-52 md:mr-6 lg:mr-12"
            />

            <SiteNav className="flex-auto" />
          </div>

          <BaseButton size="lg" icon="reg-message-smile">
            <span className="lg:hidden">Escribeme!</span>
            <span className="hidden lg:inline">Mandame un Mensaje!</span>
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Nav;
