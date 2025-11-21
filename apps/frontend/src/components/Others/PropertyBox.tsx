import Body from '../Body/Body';

const PropertyBox = (props: any) => {
  try {
    const res = require('../../data/property/' + props.data.type + '.json');
    return <Body data={res} formValue={props.formValue} act={props.act} />;
  } catch {
    return 'Property for ' + props.data.type + ' is not created.';
  }
};
export default PropertyBox;
