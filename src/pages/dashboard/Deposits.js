import * as React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>INIS AMOUNT</Title>
      <Typography component="p" variant="h4">
        50 INIS
      </Typography>
      <Typography color="textSecondary" sx={{ flex: 1 }}>
        on 06 April, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
