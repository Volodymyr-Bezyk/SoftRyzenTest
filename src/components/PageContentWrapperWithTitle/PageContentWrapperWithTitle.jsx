import {
  EventCardWrap,
  EventTitle,
} from './PageContentWrapperWithTitle.styled';

const PageContentWrapperWithTitle = ({ children, title, position }) => {
  return (
    <EventCardWrap $align={position}>
      <div>
        <EventTitle>{title}</EventTitle>
        {children}
      </div>
    </EventCardWrap>
  );
};

export default PageContentWrapperWithTitle;
