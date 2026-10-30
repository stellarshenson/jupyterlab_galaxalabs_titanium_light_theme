import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @stellarshenson/galaxalabs-jupyterlab-titanium-light-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@stellarshenson/galaxalabs-jupyterlab-titanium-light-theme:plugin',
  description:
    'Light neutral-gray theme in the Win95 light-gray convention, the light counterpart of Galaxa Dark Theme - Titanium (Darcula lineage), designed to reduce eye strain',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
      'JupyterLab extension @stellarshenson/galaxalabs-jupyterlab-titanium-light-theme is activated!'
    );
    const style =
      '@stellarshenson/galaxalabs-jupyterlab-titanium-light-theme/index.css';

    manager.register({
      name: 'Galaxa Light Theme - Titanium',
      themeScrollbars: true,
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
