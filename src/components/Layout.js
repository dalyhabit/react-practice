import React from 'react';
import { browserHistory } from 'react-router';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function Layout({ children }) {
  return (
    <MuiThemeProvider>
      <div>
        <Toolbar>
          <ToolbarTitle text="Hai der" />
        </Toolbar>
        {children}
      </div>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node
};
