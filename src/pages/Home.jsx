import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    const  fetchCountries = async()=> {
      try {
        const countries = await getCountries();
        setCountries(countries);
    }catch (error) {
        console.log(error.message);
      }
    }  
    fetchCountries();
  },[])
  return (
    <Section>
      <Container>
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
