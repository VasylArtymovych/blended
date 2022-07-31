import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  return <Grid>
    {countries.map(({id, country, flag}) => (<GridItem key={id} >
      <Link to={`/country/${id}`}>
      <img src={flag} alt={country}/>
      </Link>
      
    </GridItem>))}
  </Grid>;
};
