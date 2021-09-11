import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Form, useStyles } from './StyledComponent';
import { addItem } from '../../redux/todos/todos-operation';

export function ToDoCreateForm() {
  const { control, handleSubmit, reset } = useForm();
  const classes = useStyles();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addItem(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="todo"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            className={classes.inputText}
            onChange={onChange}
            value={value}
            label="todo"
            variant="outlined"
            required
          />
        )}
      />
      <Button
        className={classes.buttonSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Create
      </Button>
    </Form>
  );
}
