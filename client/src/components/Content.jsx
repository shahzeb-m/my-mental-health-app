import './content.less';
import React from 'react';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ContentWrapper } from './ContentWrapper';
import { KnowledgeHub } from './pages/knowledge_hub/KnowledgeHub';
import { MoodJournal } from './pages/mood_journal/MoodJournal';
import { LogMood } from './pages/mood_journal/LogMood';
import { GratitudeWall } from './pages/gratitude_wall/GratitudeWall';
import { PostGratitude } from './pages/gratitude_wall/PostGratitude';
import { MyToDo } from './pages/MyToDo';

// this component will handle the rendering of the selected page/activity
export function Content() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<ContentWrapper />}>
          <Route path="home" element={<Home />} />
          <Route path="knowledge-hub" element={<KnowledgeHub />} />
          <Route path="mood-journal" element={<MoodJournal />} />
          <Route path="mood-journal/new-entry" element={<LogMood />} />
          <Route path="gratitude-wall" element={<GratitudeWall />} />
          <Route path="gratitude-wall/new-entry" element={<PostGratitude />} />
          <Route path="my-to-do" element={<MyToDo />} />
        </Route>
      </Routes>
    </Router>
  );
}
