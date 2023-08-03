import {
  EventCardWrap,
  EventTitle,
} from './PageContentWrapperWithTitle.styled';

const PageContentWrapperWithTitle = ({ children, title }) => {
  return (
    <EventCardWrap>
      <div>
        <EventTitle>{title}</EventTitle>
        {children}
      </div>
    </EventCardWrap>
  );
};

export default PageContentWrapperWithTitle;
