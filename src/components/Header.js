import React, { useEffect, useState } from 'react';
import { Button, Card } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';



function Header({ title }) {
  const [user, setUser] = useState(null);

  //load the user and signOut function from Auth
  useEffect(() => {
    async function loadUser() {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      
    }
    loadUser();
    
  }, []);

  
  console.log('user', user );
  
  return (
    <Card variation="outlined">

      <h1>{title || `Welcome ${user?.username}`}</h1>
      <Button onClick={() => Auth.signOut()}>Logout</Button>
    
    </Card>
  );
}

export default Header;
