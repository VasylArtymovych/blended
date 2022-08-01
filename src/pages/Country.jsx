import { Section, Container, CountryInfo, Loader } from 'components';
import { fetchCountry } from '../service/country-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Country = () => {
  const [infoCountry, setInfoCountry] = useState([]);

  const { id: name } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetchCountry(name);
        setInfoCountry(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCountry();
  }, [name]);

  const { flag, capital, countryName, id, languages, population } = infoCountry;
  return (
    <Section>
      <Container>
        <CountryInfo
          id={id}
          flag={flag}
          capital={capital}
          country={countryName}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
