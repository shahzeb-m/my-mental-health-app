import { mockApiResponse } from '../../../api/articles';
import _ from 'lodash';
import { Card, CardContent, Typography } from '@mui/material';
import { bem } from '../../../utils/bem';
import './articlespanel.less';

const classname = bem('articles-panel');

export function ArticlesPanel() {
  const articles = _.map(mockApiResponse.hasPart, (article) =>
    _.pick(article, ['headline', 'description', 'url']),
  );
  const withHeadline = _.filter(articles, (article) => article.headline.length);

  return (
    <Card
      aria-label="articles-panel"
      sx={{ display: 'flex', height: '100%', overflow: 'auto' }}>
      <CardContent>
        <Typography variant="h5">NHS Articles</Typography>
        {withHeadline.map(({ headline, description, url }) => {
          return (
            <div className={classname('article')} key={url}>
              <a href={url} title={headline} aria-label={headline}>
                <Typography variant="h6">{headline}</Typography>
              </a>
              <Typography variant="body1">{description}</Typography>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
