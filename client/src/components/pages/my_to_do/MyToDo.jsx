import { bem } from '../../../utils/bem';
import './mytodo.less';
import React from 'react';
import { Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import { ToDoList } from '../../ToDoList';
import { AddButton } from './AddButton';
import { ClearCompletedButton } from './ClearCompletedButton';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, selectTodos } from '../../../features/userSlice';
import _ from 'lodash';
import { deleteTodo } from '../../../api/todos';
import { InfoButton } from '../../InfoButton';

const classname = bem('my-to-do');

const information =
  'Research on the psychology of goal-making has revealed that an unfinished goal causes interference ' +
  "with other tasks you're trying to achieve. But simply making a plan to facilitate that goal, such as detailing " +
  'steps on a to-do list, can help your mind set it aside to focus on other things. [https://edition.cnn.com/2020/07/14/health/to-do-lists-psychology-coronavirus-wellness/index.html]' +
  'Furthermore, Psychologist and author Dr David Cohen gives three benefits of to-do lists: they dampen anxiety about ' +
  'the chaos of life; they give us a structure, a plan that we can stick to; ' +
  'and they are proof of what we have achieved that day, week or month. [https://www.theguardian.com/lifeandstyle/2017/may/10/the-psychology-of-the-to-do-list-why-your-brain-loves-ordered-tasks]';

export function MyToDo() {
  const { isDesktop, isTabletLarge, isTabletSmall, isMobile } =
    React.useContext(LayoutContext);
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const completed = _.filter(todos, (todo) => todo.completed);

  async function deleteItem(id) {
    try {
      await deleteTodo(id);
      dispatch(getTodos());
    } catch (err) {
      console.log(err);
    }
  }

  function handleClearCompleted() {
    _.forEach(completed, (item) => deleteItem(item._id));
  }

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  return (
    <div className={classname()}>
      <div className={classname('title')}>
        <Typography variant={headerFont}>My To-Do</Typography>
        <InfoButton information={information} />
      </div>
      <div className={classname('buttons', { mobile: isMobile })}>
        <AddButton />
        <ClearCompletedButton onClick={handleClearCompleted} />
      </div>

      <ToDoList items={todos} />
    </div>
  );
}
