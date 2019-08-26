import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      users  {
        name
        _id
        password
        email
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.users.map(({_id, name, password,
    email}) => (
    <div key={_id}>
      <p>
        {name} {password} {_id} {email}
      </p>
    </div>
  ));
}

export default ExchangeRates;