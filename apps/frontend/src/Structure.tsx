import { useParams } from 'react-router-dom';
import Body from './components/Body/Body';
import useBackend from './hooks/useBackend';
import { useEffect } from 'react';

const Structure = () => {
  const params = useParams();
  const { fetchJSON, pageData } = useBackend();

  useEffect(() => {
    fetchJSON('6920eda279f2d090bce0bd97');
  }, []);

  return <Body data={[pageData]} params={params} />;
};

const Structure1 = () => {
  const params = useParams();

  const fetchJSON = () => {
    try {
      const res = require(`./data/all-components.json`);
      return res;
    } catch {
      const res = require(`./data/page-not-found.json`);
      return res;
    }
  };

  return <Body data={fetchJSON()} params={params} />;
};
export default Structure;
