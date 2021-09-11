import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { getVisibleTodos } from './todos-selector';
import {
  useStyles,
  Checkbox,
  CardItem,
  CardList,
  Form,
} from './StyledComponent';
import bg_header from '../../image/cardHeader.jpg';
import { deleteItem, editItem } from '../../redux/todos/todos-operation';
import * as actions from '../../redux/todos/todos-actions';

export function ToDoList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const items = useSelector(getVisibleTodos);
  const { control, handleSubmit } = useForm();
  let [isOpenEditor, setIsOpenEditor] = useState(false);
  let [itemsOnEdit, setItemsOnEdit] = useState(null);
  const handlerEditItem = item => {
    setIsOpenEditor(true);
    setItemsOnEdit(item);
  };

  const onSubmit = data => {
    if (!editItem) {
      return;
    }
    data.id = itemsOnEdit.id;
    console.log(data);
    dispatch(editItem(data));
    setIsOpenEditor(false);
  };

  const handleCheckbox = id => {
    dispatch(actions.toggleCompleted(id));
  };

  return (
    <CardList>
      {items &&
        items.map(item => (
          <>
            {item.todo && (
              <CardItem key={item.id}>
                <Card className={classes.root} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="100"
                      image={bg_header}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="h2">
                        {item.todo}
                        <Checkbox
                          type="checkbox"
                          className={classes.checkbox}
                          checked={item.completed}
                          onChange={() => handleCheckbox(item.id)}
                        />
                      </Typography>
                      {item.createdAt ? <i>was created: {item.createdAt.slice(0,10)}</i>  : <i>was edited few seconds ago</i>}
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="large"
                      color="primary"
                      onClick={() => dispatch(deleteItem(item))}
                    >
                      Delete
                    </Button>
                    <Button
                      size="large"
                      color="primary"
                      onClick={() => handlerEditItem(item)}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
                {isOpenEditor && item.id === itemsOnEdit.id && (
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                      name="todo"
                      control={control}
                      defaultValue={item.todo}
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
                      className={classes.formButton}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Save
                    </Button>
                    <Button
                      onClick={() => setIsOpenEditor(false)}
                      className={classes.formButton}
                      variant="contained"
                    >
                      Cancel
                    </Button>
                  </Form>
                )}
              </CardItem>
            )}
          </>
        ))}
    </CardList>
  );
}
