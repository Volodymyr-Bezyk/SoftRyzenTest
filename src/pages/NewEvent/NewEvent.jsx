import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import Form from 'components/Form';

const NewEvent = () => {
  return (
    <>
      <BackLink />
      <PageContentWrapperWithTitle title="Create new event">
        <Form page="newEvent" />
      </PageContentWrapperWithTitle>
    </>
  );
};

export default NewEvent;
