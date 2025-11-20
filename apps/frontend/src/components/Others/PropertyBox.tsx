import Body from '../Body/Body';

const PropertyBox = (props: any) => {
  switch (props.data.type) {
    case 'col': {
      const res = require(`../../data/property/col.json`);
      return <Body data={res} formValue={props.formValue} />;
    }
    case 'text': {
      const res = require(`../../data/property/text.json`);
      return <Body data={res} formValue={props.formValue} />;
    }
    case 'container': {
      const res = require(`../../data/property/container.json`);
      return <Body data={res} formValue={props.formValue} act={props.act} />;
    }
    default:
      return 'Property for ' + props.data.type + ' is not created.';
  }
};
export default PropertyBox;
