import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      Built by{' '}
      <Link color='inherit' href='https://github.com/sa-webb'>
        sa-webb
      </Link>
    </Typography>
  );
}

export default Footer;
