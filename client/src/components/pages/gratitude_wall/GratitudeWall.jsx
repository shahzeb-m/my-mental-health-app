import { bem } from '../../../utils/bem';
import './gratitudewall.less';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import { AddButton } from './AddButton';
import { GratitudeCard } from './GratitudeCard';
import { useSelector } from 'react-redux';
import { selectGratitudePosts } from '../../../features/userSlice';
import { formatDate } from '../../../utils/date';
import { InfoButton } from '../../InfoButton';

const classname = bem('gratitude-wall');

const information =
  'In positive psychology research, gratitude is strongly and consistently associated with greater happiness. ' +
  'Gratitude helps people feel more positive emotions, relish good experiences, improve their health, ' +
  'deal with adversity, and build strong relationships. [https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier]';

export function GratitudeWall() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);
  const posts = useSelector(selectGratitudePosts);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  return (
    <div className={classname()}>
      <div className={classname('title')}>
        <Typography variant={headerFont}>Gratitude Wall</Typography>
        <InfoButton information={information} />
      </div>
      {posts?.length ? (
        <Box sx={{ flexGrow: 1, pb: 2 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
              <AddButton />
            </Grid>
            {posts.map(({ content, date, _id }) => {
              return (
                <GratitudeCard
                  content={content}
                  date={formatDate(date)}
                  key={_id}
                  id={_id}
                />
              );
            })}
          </Grid>
        </Box>
      ) : (
        <>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Gratitude Wall is empty. Add a new post to get started.
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
        </>
      )}
    </div>
  );
}
