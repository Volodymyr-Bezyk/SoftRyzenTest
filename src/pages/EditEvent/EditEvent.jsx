import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import Form from 'components/Form';

const EditEvent = () => {
  return (
    <>
      <BackLink />
      <PageContentWrapperWithTitle title="Edit event"></PageContentWrapperWithTitle>
      <Form page="editEvent" />
    </>
  );
};
export default EditEvent;
