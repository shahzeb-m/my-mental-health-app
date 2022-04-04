import { bem } from '../../utils/bem';
import './worrynot.less';
import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { LayoutContext } from '../Layout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { AddButton } from './my_to_do/AddButton';
import { InfoButton } from '../InfoButton';
const classname = bem('worry-not');

const information =
  'Worry is a cognitive process that involves thinking about problems that might happen in a way ' +
  'that can leave you feeling anxious or apprehensive. Not all worry is problematic – we all foresee difficulties in' +
  ' our lives and spend some time anticipating ways around potential obstacles. The activity below takes users through' +
  "the worry tree which is adapted from Butler and Hope's (1995) approach to worry and anxiety. It is a way of " +
  'conceptualizing some of the important steps in the treatment of generalized anxiety disorder (GAD) and communicating ' +
  'these to clients. It systematically guides clients to distinguish whether ' +
  'they are experiencing real event or hypothetical event worry, and then to engage in problem-solving ' +
  '(real event worry) or distraction / cognitive defusion (hypothetical event worry). [https://www.psychologytools.com/resource/worry-decision-tree/]';

export function WorryNot() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);

  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [question, setQuestion] = React.useState('');

  useEffect(() => {
    switch (questionNumber) {
      case 1:
        setQuestion('What am I worrying about?');
        break;
      case 2:
        setQuestion('Is there anything I can do about this?');
        break;
      case 3:
        setQuestion('Is there anything I can do right now?');
        break;
      case 12:
        setQuestion('Let the worry go. Change your focus of attention.');
        break;
      case 13:
        setQuestion('Schedule a To-Do for later.');
        break;
      case 4:
        setQuestion(
          'Do it now, then let the worry go and change your focus of attention.',
        );
        break;
      default:
        setQuestion('What am I worrying about?');
    }
  }, [questionNumber]);

  const handleNextClick = () => {
    setQuestionNumber((prevState) => prevState + 1);
  };

  const handleYesClick = () => {
    setQuestionNumber((prevState) => prevState + 1);
  };

  const handleNoClick = () => {
    setQuestionNumber((prevState) => prevState + 10);
  };

  const handleRestart = () => {
    setQuestionNumber(1);
  };

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 2 : isTabletSmall ? 2 : 1;
  return (
    <div className={classname()}>
      <div className={classname('title')}>
        <Typography variant={headerFont}>Worry Not</Typography>
        <InfoButton information={information} />
      </div>
      <Typography variant="h6" pb={paddingValue}>
        Go through the following questions to alleviate your worry.
      </Typography>
      <div className={classname('questions')}>
        <Typography variant="h5" align="center" pb={paddingValue}>
          {question}
        </Typography>
        {questionNumber === 1 ? (
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ width: 'fit-content', alignSelf: 'center' }}
            onClick={handleNextClick}>
            Next
          </Button>
        ) : questionNumber === 4 ? (
          <Button
            variant="contained"
            size="large"
            endIcon={<RestartAltIcon />}
            sx={{ width: 'fit-content', alignSelf: 'center' }}
            onClick={handleRestart}>
            Restart
          </Button>
        ) : questionNumber === 13 ? (
          <div className={classname('buttons')}>
            <AddButton />
          </div>
        ) : questionNumber === 12 ? (
          <Button
            variant="contained"
            size="large"
            sx={{ width: 'fit-content', alignSelf: 'center' }}
            href="https://thepsychologygroup.com/defusion/">
            Practise Cognitive Defusion
          </Button>
        ) : (
          <div className={classname('buttons')}>
            <Button
              variant="contained"
              size="large"
              sx={{ width: 'fit-content', alignSelf: 'center' }}
              onClick={handleYesClick}>
              Yes
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ width: 'fit-content', alignSelf: 'center' }}
              onClick={handleNoClick}>
              No
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
