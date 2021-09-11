import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputText: {
    width: '80%',
    marginBottom: 20,
    fontSize: '1.7rem',
  },
  buttonSubmit: {
    height: '40px',
    width: '80%',
    fontSize: '1.7rem',
  },
}));

const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  resize: none;
  margin-bottom: 20px;
  font-size: 1.6rem;
  outline: none;
  border: solid 2px #000000;
  border-radius: 5px;
  padding: 10px;
  :focus {
    border-color: blueviolet;
  }
`;

const Form = styled.form`
  width: 400px;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export { Form, useStyles, TextArea };
