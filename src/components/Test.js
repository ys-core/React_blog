import React from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'

function Test() {
  return (
    <div>
        <Input autoFocus="true" type="string" placeholder="username or email" fullWidth></Input><br/><br/>
        <Input placeholder="password" type="password" fullWidth></Input><br/><br/><br/>
        <Button color="primary" fullWidth variant="outlined">Submit</Button>
    </div>
  );
}

export default Test