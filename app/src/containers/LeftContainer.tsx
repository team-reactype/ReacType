import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import ComponentPanel from '../components/right/ComponentPanel';
import HTMLPanel from '../components/left/HTMLPanel';
import { styleContext } from './AppContainer';

// Left-hand portion of the app, where component options are displayed
const LeftContainer = (props): JSX.Element => {
  const { style } = useContext(styleContext);

// --------------------------COMPONENT PANEL MOVED TO RIGHTCONTAINER----------------------------

  return (
    <div className="column left" style={style}>
      <Grid container direction="row" alignItems="center">
        <HTMLPanel isThemeLight={props.isThemeLight}/>
      </Grid>
    </div>
  );
};

export default LeftContainer;
