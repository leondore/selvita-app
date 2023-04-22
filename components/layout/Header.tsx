import BaseSvg from '@/components/BaseSvg';
import SiteNav from '@/components/layout/SiteNav';

const Nav = () => {
  return (
    <div className="bg-white" data-component="site-nav">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex flex-auto items-center justify-between">
          <div className="flex items-center">
            <BaseSvg image="logo" width={200} className="mr-12" />

            <SiteNav className="flex-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
