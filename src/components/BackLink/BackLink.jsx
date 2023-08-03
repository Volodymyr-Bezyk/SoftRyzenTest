import { useLocation } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { BackLinkHref, BackButtonText } from './BackLink.styled';

const BackLink = () => {
  const locationlink = useLocation();
  const backLinkHref = locationlink.state?.from?.state?.from || '/';

  return (
    <BackLinkHref to={backLinkHref} type="button">
      <IoIosArrowRoundBack size={24} />
      <BackButtonText>Back</BackButtonText>
    </BackLinkHref>
  );
};

export default BackLink;
