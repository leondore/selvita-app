import BaseSvg from '@/components/ui/BaseSvg';

const Footer = () => {
  return (
    <footer>
      <BaseSvg
        image="logo"
        width={200}
        className="mr-2 w-44 md:mr-6 md:w-52 lg:mr-12"
      />
    </footer>
  );
};

export default Footer;
