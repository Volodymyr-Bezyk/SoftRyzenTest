import { useLocation } from 'react-router-dom';

import { IoIosArrowRoundBack } from 'react-icons/io';
import EventCard from 'components/EventCard';
import { BackLink, BackButtonText } from './Event.styled';

const Event = () => {
  const locationlink = useLocation();
  const backLinkHref = locationlink.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLinkHref} type="button">
        <IoIosArrowRoundBack size={24} />
        <BackButtonText>Back</BackButtonText>
      </BackLink>

      <EventCard />
    </>
  );
};

export default Event;
