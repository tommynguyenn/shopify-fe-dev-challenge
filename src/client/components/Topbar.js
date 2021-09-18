import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';

export default function Topbar() {
  return (
    <AppBar>
      <Toolbar className="df">
        <div className="header-text">
          <Typography variant="h1" className="b">Spacestagram</Typography>
          <Typography variant="body1">Brought to you by NASA&#39;s image API</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
