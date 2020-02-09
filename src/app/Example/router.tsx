import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ExamplePage } from './containers';

type PropTypes = {
  match: {
    url: string;
  };
};

const ExampleRouter: React.FC<PropTypes> = ({ match }) => (
  <BrowserRouter>
    <Route path={`${match.url}`} component={ExamplePage} />
  </BrowserRouter>
);

export default ExampleRouter;
