import { bem } from '../../../utils/bem';
import './moodjournal.less';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import { MoodCard } from './MoodCard';

const classname = bem('mood-journal');

export function MoodJournal() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;
  return (
    <div className={classname()}>
      <Typography variant={headerFont} pb={paddingValue}>
        Mood Journal
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => {
            return (
              <MoodCard
                mood="Great"
                date="19 Feb, 2022"
                comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
