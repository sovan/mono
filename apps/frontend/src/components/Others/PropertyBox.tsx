import Body from '../Body/Body';

const PropertyBox = (props: any) => {
  switch (props.data.type) {
    case 'col': {
      const res = require(`../../data/property/col.json`);
      return <Body data={res} formValue={props.formValue} />;
    }
    default:
      return 'Property for ' + props.data.type + ' is not created.';
  }
};
export default PropertyBox;
