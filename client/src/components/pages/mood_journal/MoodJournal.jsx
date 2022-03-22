import { bem } from '../../../utils/bem';
import './moodjournal.less';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import { MoodCard } from './MoodCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectMoods } from '../../../features/userSlice';
import { AddButton } from './AddButton';
import { formatDate } from '../../../utils/date';

const classname = bem('mood-journal');

export function MoodJournal() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);
  const moods = useSelector(selectMoods);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;
  return (
    <div className={classname()}>
      <Typography variant={headerFont} pb={paddingValue}>
        Mood Journal
      </Typography>
      {moods?.length ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
              <AddButton />
            </Grid>
            {moods.map(({ rating, comment, date, _id }) => {
              return (
                <MoodCard
                  mood={rating}
                  date={formatDate(date)}
                  comment={comment}
                  key={_id}
                  id={_id}
                />
              );
            })}
          </Grid>
        </Box>
      ) : (
        <div className={classname('add_button')}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Mood Journal is empty. Add a new mood to get started.
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={4}>
                <AddButton />
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}
