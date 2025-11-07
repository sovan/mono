import { useParams } from 'react-router-dom';
import Body from './components/Body/Body';

const Structure = () => {
  const params = useParams();

  const fetchJSON = () => {
    let page = params.pageName ? params.pageName : 'pages';
    page += params.operation ? '-' + params.operation : '';
    try {
      console.log(`sovan ./data/${page}.json`);
      const res = require(`./data/${page}.json`);
      return res;
    } catch {
      const res = require(`./data/page-not-found.json`);
      return res;
    }
  };

  return <Body data={fetchJSON()} params={params} />;
};
export default Structure;
