import { Route, Routes } from 'react-router-dom';
import Structure from './Structure';
import WebFlowDesign from './WebFlowDesign';

const Routers = () => {
  return (
    <Routes>
      <Route path="/create-page" element={<WebFlowDesign />} />

      <Route path="/" element={<Structure />} />
      <Route path="/:pageName" element={<Structure />} />
      <Route path="/:pageName/:operation" element={<Structure />} />
    </Routes>
  );
};
export default Routers;
