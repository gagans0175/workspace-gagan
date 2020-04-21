/**
 * @routes - centralized routes
 */
import React from 'react';
import LandingComponent from './components/Landing';
import DashboardComponent from './components/Dashboard';
import SurveyNewComponent from './components/SurveyNew';

export default function createRoute() {
  return [
    {
      path: '/',
      exact: true,
      component: () => <LandingComponent />
    },
    {
      path: '/dashboard',
      exact: true,
      component: () => <DashboardComponent />
    },
    {
      path: '/survey/createNewSurvey',
      component: () => <SurveyNewComponent />
    }
  ];
}
