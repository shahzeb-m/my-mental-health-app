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
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings';
import { RequireAuth } from './RequireAuth';
import { Breathing } from './pages/Breathing';

// this component will handle the rendering of the selected page/activity
export function Content() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<ContentWrapper />}>
          <Route
            path="home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="knowledge-hub"
            element={
              <RequireAuth>
                <KnowledgeHub />
              </RequireAuth>
            }
          />
          <Route
            path="mood-journal"
            element={
              <RequireAuth>
                <MoodJournal />
              </RequireAuth>
            }
          />
          <Route
            path="mood-journal/new-entry"
            element={
              <RequireAuth>
                <LogMood />
              </RequireAuth>
            }
          />
          <Route
            path="gratitude-wall"
            element={
              <RequireAuth>
                <GratitudeWall />
              </RequireAuth>
            }
          />
          <Route
            path="gratitude-wall/new-entry"
            element={
              <RequireAuth>
                <PostGratitude />
              </RequireAuth>
            }
          />
          <Route
            path="my-to-do"
            element={
              <RequireAuth>
                <MyToDo />
              </RequireAuth>
            }
          />
          <Route
            path="breathing"
            element={
              <RequireAuth>
                <Breathing />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LogIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route
            path="settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
