import BaseSvg from '@/components/ui/BaseSvg';
import Container from '@/components/ui/Container';
import SubscribeBox from '@/components/SubscribeBox';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <BaseSvg image="logoLight" width={240} className="w-52 md:w-60" />

            <SubscribeBox className="mt-8" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
