import path from 'path';
import {
  addEnvConfigScriptAlias,
  addHTMLWebpackPlugin,
  addSpritesmithSprite,
  defineGlobalEnvConstants,
  configOutputPath,
  addMainEntryPoint,
  addIndexTemplateLoader,
  addJSONLoader,
  addCommonStaticFilesLoader,
  configPostcss,
  addInlineVendorStylesSupport,
  addInlineSassSupport,
  addBabelSupport,
  addEslint,
  addLoader,
  defineAlias
} from 'apptension-tools';

export default [
  /**
   * Userland loaders and aliases
   */
  defineAlias('create-reducer', path.join(process.cwd(), 'app/src/utils/createReducer.js')),

  /**
   * Sprite generation definitions
   */
  addSpritesmithSprite({name: 'mobile'}),
  addSpritesmithSprite({name: 'tablet'}),

  /**
   * Common file loaders
   */
  addJSONLoader,
  addCommonStaticFilesLoader,

  /**
   * Index file generating
   */
  addIndexTemplateLoader,
  addHTMLWebpackPlugin(),

  /**
   * CSS related configuration
   */
  configPostcss,
  addInlineVendorStylesSupport,
  addInlineSassSupport,

  /**
   * Core build configuration
   */
  configOutputPath(),
  addMainEntryPoint,
  addEnvConfigScriptAlias,
  defineGlobalEnvConstants,
  addBabelSupport,
  addEslint
];
