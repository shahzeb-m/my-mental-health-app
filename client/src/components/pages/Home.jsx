import { bem } from '../../utils/bem';
import './home.less';
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { LayoutContext } from '../Layout';
import { MoodWidget } from '../widgets/MoodWidget';
import { GratitudeWidget } from '../widgets/GratitudeWidget';

const classname = bem('home');

const Quote = () => {
  return (
    <div className={classname('quote')}>
      <Typography variant={'subtitle1'} align={'center'}>
        "There is hope, even when your brain tells you there isn't"
      </Typography>
      <Typography variant={'subtitle1'} fontStyle={'italic'}>
        — John Green
      </Typography>
    </div>
  );
};

export function Home() {
  const { isDesktop, isTabletLarge, isTabletSmall, isMobile } =
    React.useContext(LayoutContext);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;
  return (
    <div className={classname()}>
      <Typography variant={headerFont} py={paddingValue}>
        Welcome, User
      </Typography>
      <Quote />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}>
          <MoodWidget />
          <GratitudeWidget />
          {/*{Array.from(Array(6)).map((_, index) => (*/}
          {/*  <Grid item xs={2} sm={4} md={4} key={index}>*/}
          {/*    <Card sx={{ minWidth: 275 }}>*/}
          {/*      <CardContent>*/}
          {/*        <Typography variant="h5" component="div">*/}
          {/*          This is a widget title*/}
          {/*        </Typography>*/}
          {/*        <Typography variant="body2">*/}
          {/*          this is a widget caption*/}
          {/*        </Typography>*/}
          {/*      </CardContent>*/}
          {/*      <CardActions>*/}
          {/*        <Button size="small">This is a widget button</Button>*/}
          {/*      </CardActions>*/}
          {/*    </Card>*/}
          {/*  </Grid>*/}
          {/*))}*/}
        </Grid>
      </Box>
    </div>
  );
}
