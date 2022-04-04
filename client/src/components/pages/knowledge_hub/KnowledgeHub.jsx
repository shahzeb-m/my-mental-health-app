import { bem } from '../../../utils/bem';
import './knowledgehub.less';
import React from 'react';
import { Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import { ArticlesPanel } from './ArticlesPanel';
import { ContactsPanel } from './ContactsPanel';
import { WebsitesPanel } from './WebsitesPanel';
import { InfoButton } from '../../InfoButton';

const classname = bem('knowledge-hub');

const information =
  'This page provides a range of NHS guides and articles on various mental health topics, as well as ' +
  'helpline numbers to call in times of need, and mental health organisation/charity websites for more resources. ' +
  'By reading such articles, clients undergo psychoeducation which includes educating themselves about\n' +
  'mental health so that they better understand their or others’ symptoms, causes, and\n' +
  'treatment options of mental health problems (Bevan Jones et al., 2020). It also provides\n' +
  'the user with strategies to cope with any symptoms they may be experiencing (Coyle\n' +
  'et al., 2007).\n';

export function KnowledgeHub() {
  const { isDesktop, isTabletLarge, isTabletSmall, isMobile } =
    React.useContext(LayoutContext);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';

  return (
    <div className={classname()}>
      <div className={classname('title')}>
        <Typography variant={headerFont}>Knowledge Hub</Typography>
        <InfoButton information={information} />
      </div>
      <div
        className={classname(
          'container',
          { large: isDesktop || isTabletLarge },
          { small: isTabletSmall || isMobile },
        )}>
        <div
          className={classname(
            'articles',
            { large: isDesktop || isTabletLarge },
            { small: isTabletSmall || isMobile },
          )}>
          <ArticlesPanel />
        </div>
        <div className={classname((isTabletLarge || isDesktop) && 'column')}>
          <div
            className={classname(
              'contacts',
              { large: isDesktop || isTabletLarge },
              { small: isTabletSmall || isMobile },
            )}>
            <ContactsPanel />
          </div>
          <div
            className={classname(
              'websites',
              { large: isDesktop || isTabletLarge },
              { small: isTabletSmall || isMobile },
            )}>
            <WebsitesPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
