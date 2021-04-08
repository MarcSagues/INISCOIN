
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { useStateValue } from '../../context/StateProvider';
import jQuery from 'jquery'
import React, { useEffect } from 'react';


export default function Deposits() {
  const [{amount}, dispatch] = useStateValue(); 

  const inisAmount = {
    paddingTop: '0.8em',
  }
  const viewWallet = {
    paddingTop: '1.3em',
    fontSize: '0.9em'
  }
  useEffect(() => {
    jQuery('#amountInis').each( function () {
      // get value of table cell and convert to number...
      var val = parseFloat(amount);
      // put it back as fixed point value
      jQuery(this).text(val.toFixed(2)+' INIS');
  });
  })
  return (
    <React.Fragment>
      <Title>INIS AMOUNT</Title>
      <Typography component="p" variant="h4" id='amountInis' style={inisAmount}>
        {amount} INIS
      </Typography>
      <Typography color="textSecondary" sx={{ flex: 1 }}>
        on 06 April, 2021
      </Typography>
      <div style={viewWallet}>
        <Link href="/wallet"  >
          View wallet
        </Link>
      </div>
    </React.Fragment>
  );
}
