import { Card, CardContent, Typography } from '@mui/material';
import { bem } from '../../../utils/bem';
import './websitespanel.less';
import React from 'react';

const classname = bem('websites-panel');

const websites = [
  { name: 'Mind', url: 'https://www.mind.org.uk/' },
  { name: 'NHS Mental Health', url: 'https://www.nhs.uk/mental-health/' },
  {
    name: 'Mental Health Foundation',
    url: 'https://www.mentalhealth.org.uk/',
  },
  { name: 'Rethink', url: 'https://www.rethink.org/' },
];

export function WebsitesPanel() {
  return (
    <Card
      aria-label="websites-panel"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
        width: '100%',
      }}>
      <CardContent>
        <Typography variant="h5">Websites</Typography>
        {websites.map(({ name, url }) => {
          return (
            <div className={classname('website')} key={name}>
              <a href={url}>
                <Typography variant="h6">{name}</Typography>
              </a>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
