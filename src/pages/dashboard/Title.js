import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Title(props) {

  const titles = {
    color: '#3578e3',
    fontSize: '1em',
  }

  return (
    <Typography style={titles} >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
