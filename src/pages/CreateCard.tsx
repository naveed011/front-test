import React from 'react';
import styled from 'styled-components';
import { useCreatePlayer } from '../hooks/useCreatePlayer';
import { useFormHook } from '../hooks/useFormHook';
import { Loading } from '../components/Loading';
import Dialog from '../components/Dialog';
import { ErrorBoundary } from '../components/ErrorBoundary';

const Container = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  margin: auto;
  padding: 20px;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem rgba(0,0,0,0.1);
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    box-shadow: inset 0 0 0 transparent;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  input:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
  }

  .error {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface CreateCardProps {
  retrigger: () => void;
}

export const CreateCard: React.FC<CreateCardProps> = ({ retrigger }) => {
  const { submitPlayer, submitting, error, showPopup, setShowPopup } = useCreatePlayer({ setRetrigger: retrigger });
  const { values, handleChange, errors, handleSubmit, touched } = useFormHook({ createPlayer: submitPlayer });

  return (
    <>
      <ButtonContainer>
        <Button onClick={() => setShowPopup(true)}>Add Player</Button>
      </ButtonContainer>

      <Dialog show={showPopup} onClose={() => setShowPopup(false)}>
        <Container>
          <Title>
            <h2>Enter Player Info</h2>
          </Title>

          <Loading visible={submitting} />

          {error && <ErrorBoundary>Unable to Create Player</ErrorBoundary>}

          <Form onSubmit={handleSubmit}>
            <FormField>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter First Name"
                value={values.firstname}
                onChange={handleChange}
              />
              {touched.firstname && errors.firstname && (
                <div className="error">{errors.firstname}</div>
              )}
            </FormField>

            <FormField>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter Last Name"
                value={values.lastname}
                onChange={handleChange}
              />
              {touched.lastname && errors.lastname && (
                <div className="error">{errors.lastname}</div>
              )}
            </FormField>

            <FormField>
              <label htmlFor="birthday">Date Of Birth</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={values.birthday}
                onChange={handleChange}
              />
              {touched.birthday && errors.birthday && (
                <div className="error">{errors.birthday}</div>
              )}
            </FormField>

            <FormField>
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Enter Image URL"
                value={values.image}
                onChange={handleChange}
              />
              {touched.image && errors.image && (
                <div className="error">{errors.image}</div>
              )}
            </FormField>

            <Button type="submit">Create</Button>
          </Form>
        </Container>
      </Dialog>
    </>
  );
};
