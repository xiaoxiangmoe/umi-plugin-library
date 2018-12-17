import React from 'react';
import { injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';

import Banner from './Banner.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

function Home(props) {
  return (
    <DocumentTitle title={`Ant Design - ${props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
      <div className="home-wrapper">
        <Banner isMobile={props.isMobile} />
        <Page1 isMobile={props.isMobile} />
        <Page2 />
      </div>
    </DocumentTitle>
  );
}

export default injectIntl(Home);
