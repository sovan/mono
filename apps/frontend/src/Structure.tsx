import { useParams } from 'react-router-dom';
import Body from './components/Body/Body';
import useBackend from './hooks/useBackend';
import { useEffect } from 'react';

const Structure = () => {
  console.log('sss');
  const params = useParams();
  const { fetchJSON, pageData } = useBackend();

  useEffect(() => {
    fetchJSON('690eb043f161dda08b04a997');
  }, []);

  return <Body data={[pageData]} params={params} />;
};
export default Structure;
