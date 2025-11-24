import { useParams } from 'react-router-dom';
import Body from './components/Body/Body';
import useBackend from './hooks/useBackend';
import { useEffect } from 'react';

const Structure = () => {
  const params = useParams();
  const { fetchJSON, pageData, insertData } = useBackend();

  const handleForm = (formValue: any) => {
    insertData(formValue);
  };

  useEffect(() => {
    fetchJSON(params.id);
  }, []);

  return <Body data={[pageData]} params={params} formValue={handleForm} />;
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
export default Structure1;
