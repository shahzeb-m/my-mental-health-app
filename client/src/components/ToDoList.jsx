import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const listItems = [
  { id: 1, label: 'Go to the gym' },
  { id: 2, label: 'Do reading for Theory of HCI' },
  { id: 3, label: 'Submit Demonstration of Progress' },
  { id: 4, label: 'Hang out with friends' },
];

export function ToDoList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {listItems.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem key={value.id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.label} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
