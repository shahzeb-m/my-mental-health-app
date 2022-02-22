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

// this component will handle the rendering of the selected page/activity
export function Content() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<ContentWrapper />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
