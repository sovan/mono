import { useParams } from 'react-router-dom';
import Body from './components/Body/Body';
import useBackend from './hooks/useBackend';
import { useEffect } from 'react';

const Structure = () => {
  const params = useParams();
  const { fetchJSON, pageData } = useBackend();

  useEffect(() => {
    fetchJSON('690f1f12dcb7cd2e82ad8073');
  }, []);

  return <Body data={[pageData]} params={params} />;
};
export default Structure;
