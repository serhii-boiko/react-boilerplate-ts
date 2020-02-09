import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from '@/common/languageProvider';

type PropTypes = {
  locale: {
    locale: string;
  };
};

const ExampleRouter = lazy(() => import('@/app/Example/router'));

const MainRouter: React.FC<PropTypes> = ({ locale }) => {
  const defaultLocale = 'en';
  const currentAppLocale = AppLocale[locale.locale] || AppLocale[defaultLocale];

  return (
    <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact={true} path="/" component={ExampleRouter} />
        </Suspense>
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = ({ settings }: any) => {
  const { locale } = settings;
  return {
    locale,
  };
};

export default withRouter(connect(mapStateToProps, {})(MainRouter));
