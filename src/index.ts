import { SimplePlugin } from './SimplePlugin';

interface IPlugin {
  name: string;
  area: string;
  type: string;
  component: () => (data: any) => JSX.Element;
}

const plugin: IPlugin = {
  name: 'simple',
  area: 'Toolbar',
  type: 'InboundShipment',
  component: () => SimplePlugin,
};
export default plugin;
