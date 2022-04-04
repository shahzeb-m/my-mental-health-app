import { bem } from '../../../utils/bem';
import './moodjournal.less';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import { MoodCard } from './MoodCard';
import { useSelector } from 'react-redux';
import { selectMoods } from '../../../features/userSlice';
import { AddButton } from './AddButton';
import { formatDate } from '../../../utils/date';
import { InfoButton } from '../../InfoButton';

const classname = bem('mood-journal');

const information =
  'Journaling your thoughts, emotions, and challenges has been shown to reduce anxiety and depression. ' +
  'Here are some reasons why: ' +
  'It Helps You Determine a Course of Action, It Helps You Express Your Emotions, It Will Support Your Healing Process, ' +
  'It Helps Reveal What Your Triggers Are, It Helps You Find the Silver Lining [https://www.healthline.com/health/how-to-keep-mood-journal, https://www.lifehack.org/875824/mood-journal] ' +
  'Click on a mood card below to see your comments';

export function MoodJournal() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);
  const moods = useSelector(selectMoods);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  return (
    <div className={classname()}>
      <div className={classname('title')}>
        <Typography variant={headerFont}>Mood Journal</Typography>
        <InfoButton information={information} />
      </div>
      {moods?.length ? (
        <Box sx={{ flexGrow: 1, pb: 2 }}>
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
