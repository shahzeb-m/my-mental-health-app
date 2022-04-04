import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { bem } from '../../../utils/bem';
import './contactspanel.less';
import React from 'react';

const classname = bem('contacts-panel');

const contacts = [
  { name: 'Samaritans', number: '116 123' },
  { name: 'SANEline', number: '0300 304 7000' },
  { name: 'National Suicide Prevention Helpline UK', number: '0800 689 5652' },
  { name: "Mind's Infoline", number: '0300 123 3393' },
];

export function ContactsPanel() {
  return (
    <Card
      aria-label="contacts-panel"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
        width: '100%',
      }}>
      <CardContent>
        <Typography variant="h5">Helplines</Typography>
        {contacts.map(({ name, number }) => {
          return (
            <div className={classname('contact')} key={name}>
              <Typography variant="h6">
                {name}: <a href={`tel:${number}`}>{number}</a>
              </Typography>
            </div>
          );
        })}
      </CardContent>
      <CardActions>
        <Button href="https://www.mind.org.uk/information-support/guides-to-support-and-services/crisis-services/helplines-listening-services/">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
