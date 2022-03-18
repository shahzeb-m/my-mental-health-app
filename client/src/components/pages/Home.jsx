import { bem } from '../../utils/bem';
import './home.less';
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { LayoutContext } from '../Layout';
import { MoodWidget } from '../widgets/MoodWidget';
import { GratitudeWidget } from '../widgets/GratitudeWidget';
import { ToDoWidget } from '../widgets/ToDoWidget';
import { KnowledgeWidget } from '../widgets/KnowledgeWidget';
import { useSelector } from 'react-redux';
import { selectQuoteCategory, selectUser } from '../../features/userSlice';
import { getQuote } from '../../api/quote';

const classname = bem('home');

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const category = useSelector(selectQuoteCategory);

  async function fetchQuote() {
    const response = await getQuote(category);
    console.log(response);
    response
      ? setQuote(response.quote)
      : setQuote("There is hope, even when your brain tells you there isn't");
    response ? setAuthor(response.author) : setAuthor('John Green');
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={classname('quote')}>
      <Typography variant={'subtitle1'} align={'center'}>
        {quote.length ? `"${quote}"` : 'Loading...'}
      </Typography>
      <Typography variant={'subtitle1'} fontStyle={'italic'}>
        {author.length && `— ${author}`}
      </Typography>
    </div>
  );
};

export function Home() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);
  const user = useSelector(selectUser);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;
  return (
    <div className={classname()}>
      <Typography variant={headerFont} py={paddingValue}>
        Welcome, {user.name}
      </Typography>
      <Quote />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}>
          <KnowledgeWidget />
          <GratitudeWidget />
          <ToDoWidget />
          <MoodWidget />
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
