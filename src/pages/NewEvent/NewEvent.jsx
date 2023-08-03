import { IoIosClose } from 'react-icons/io';
import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import {
  FormWrap,
  FormInnerDelimeter,
  Formlabel,
  FormLabelText,
  FormLabelInput,
  FormLabelTextArea,
  FormLabelSelect,
  AddEventButton,
  ClearFormInputButton,
  ValidationErrorText,
} from './NewEvent.styled';

const NewEvent = () => {
  return (
    <>
      <BackLink />
      <PageContentWrapperWithTitle title="Create new event">
        <FormWrap>
          <form>
            <FormInnerDelimeter>
              <Formlabel>
                <FormLabelText>Title</FormLabelText>
                <FormLabelInput type="text" />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input </ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Description</FormLabelText>
                <FormLabelTextArea></FormLabelTextArea>
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Select date</FormLabelText>
                <FormLabelSelect></FormLabelSelect>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Select time</FormLabelText>
                <FormLabelSelect></FormLabelSelect>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Location</FormLabelText>
                <FormLabelInput type="text" />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Category</FormLabelText>
                <FormLabelSelect></FormLabelSelect>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Add picture</FormLabelText>
                <FormLabelInput type="text" />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Priority</FormLabelText>
                <FormLabelSelect></FormLabelSelect>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>
            </FormInnerDelimeter>

            <AddEventButton type="submit">Add event</AddEventButton>
          </form>
        </FormWrap>
      </PageContentWrapperWithTitle>
    </>
  );
};

export default NewEvent;
