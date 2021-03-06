/* eslint-disable no-undef,no-underscore-dangle,no-param-reassign,no-shadow,no-prototype-builtins */
import { GestureEventListeners } from "../@polymer/polymer/lib/mixins/gesture-event-listeners.js";
import { addListener, removeListener } from "../@polymer/polymer/lib/utils/gestures.js";
import { beforeNextRender } from "../@polymer/polymer/lib/utils/render-status.js";
import { mixinBehaviors } from "../@polymer/polymer/lib/legacy/class.js";
import { IronResizableBehavior } from "../@polymer/iron-resizable-behavior/iron-resizable-behavior.js";
import { html, PolymerElement } from "../@polymer/polymer/polymer-element.js";
import * as MyScript from "../myscript/dist/myscript.esm.js";
import "./myscript-stylesheet.js";
/**
 `myscript-common-element` is a web component wrapper around MyScriptJS editor.

    <myscript-common-element
         type="TEXT"
         applicationkey="YOUR MYSCRIPT DEVELOPER APPLICATION KEY"
         hmackey="YOUR MYSCRIPT DEVELOPER HMAC KEY">
    </myscript-common-element>

 ### Styling

 `<myscript-common-element>` provides the following custom properties for styling:

 CSS variable | Default
 -------------|--------
 `--myscript-common-element-background` | none
 `--myscript-common-element-color` | #FFFFFF
 `--myscript-common-element-line-pattern` | Classic notebook square pattern
 `--myscript-common-element-button-background` | #1A9FFF
 `--myscript-common-element-button-focus-background` | #1A9FFF
 `--myscript-common-element-button-disabled-background` | #F5F6F7

 @demo src/demo-app/examples/non-version-specific/get_started.html Get started [V4]
 @demo src/demo-app/examples/non-version-specific/handle_exports.html Handle exports [V4]
 @demo src/demo-app/examples/non-version-specific/customize_style.html Customize style [V4]
 @demo src/demo-app/examples/non-version-specific/custom_controls.html Redefining the controls [V4]
 @demo src/demo-app/examples/v4/import_content.html Import content [V4]
 @demo src/demo-app/examples/index.html Other demonstrations
 */

class MyScriptCommonElement extends GestureEventListeners(mixinBehaviors([IronResizableBehavior], PolymerElement)) {
  constructor() {
    super();
    this.logger = MyScript.LoggerConfig.getLogger('common-element');
  }

  static get template() {
    return html`
        <style include="myscript-stylesheet">
            :host {
                --myscript-common-element-background: var(--myscript-editor-background);
                --myscript-common-element-color: var(--myscript-editor-color);
                --myscript-common-element-hover-color: var(--myscript-editor-hover-color);
                --myscript-common-element-focus-color: var(--myscript-editor-focus-color);
                --myscript-common-element-disabled-color: var(--myscript-editor-disabled-color);
                --myscript-common-element-line-pattern: var(--myscript-editor-line-pattern);
                --myscript-common-element-capture-background: var(--myscript-editor-capture-background);
                --myscript-common-element-error-background: var(--myscript-editor-error-background);
                --myscript-common-element-loader: var(--myscript-editor-loader);
                --myscript-common-element-error: var(--myscript-editor-error);
                box-sizing: border-box;
                display: block;
                position: relative;
                min-height: 200px;
                min-width: 200px;
                color: var(--myscript-common-element-color);
                z-index: 0;
                font-family: sans-serif;
                border-top: 1px solid #D7DDE3; /*#A9B7C5*/
            }

            nav {
                padding: 12px;
            }

            /** Undo redo Buttons **/
            
            .nav-btn {
                display: inline-block;
                position: relative;
                cursor: pointer;
                height: 35px;
                line-height: 35px;
                padding: 0 1.5rem;
                color: #424242;
                font-size: 15px;
                font-weight: 600;
                font-family: 'Roboto', sans-serif;
                letter-spacing: 1px;
                text-align: center;
                text-decoration: none;
                text-transform: uppercase;
                vertical-align: middle;
                white-space: nowrap;
                outline: none;
                border: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                border-radius: 2px;
                -webkit-transition: all .1s ease-out;
                transition: all .1s ease-out;
                -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
            }
            
            .nav-btn > svg {
                display: block;
                width: 50%;
                margin: 9px auto;
            }
            
            .nav-btn.btn-fab, .nav-btn.btn-fab-mini {
                overflow: hidden;
                position: relative;
                margin: auto 12px auto auto;
                padding: 0;
                line-height: normal;
                border-radius: 50%;
                -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
            }
            .nav-btn.btn-fab {
                width: 56px;
                height: 56px;
                font-size: 28px;
            }
            .nav-btn.btn-fab-mini {
                width: 40px;
                height: 40px;
                font-size: 24px;
            }
            
            /* Buttons Color */
            .nav-btn.btn-lightBlue {
                color: #FFF;
                background-color: var(--myscript-common-element-color);
            }
            
            .nav-btn.btn-lightBlue:active {
                color: #fff;
                text-decoration: none;
                background: var(--myscript-common-element-focus-color);
                box-shadow: 0 2px 8px -2px rgba(0, 0, 0, .5);
            }
            
            .nav-btn:disabled, .nav-btn[disabled] {
                pointer-events: none;
                cursor: default;
                background-color: var(--myscript-common-element-disabled-color);
                -webkit-box-shadow: none;
                box-shadow: none;
            }
            
            .button-div {
                display: flex;
            }

            :host * {
                box-sizing: border-box;
            }

            :host::after {
                @apply --myscript-common-element-icon;
            }

            .ms-editor {
                background: var(--myscript-common-element-background);
            }

            .ms-editor canvas.ms-rendering-canvas {
                @apply --myscript-common-element-line-pattern;
            }

            .ms-editor canvas.ms-capture-canvas {
                background: var(--myscript-common-element-capture-background);
            }

            .loader {
                @apply --myscript-common-element-loader;
            }

            .error-msg {
                @apply --myscript-common-element-error;
            }

            .error-msg::before {
                content: var(--myscript-common-element-error-background);
            }
        </style>
        <nav hidden="[[ disablecontrols ]]">
          <div class="button-div">
            <button id="clear" class="nav-btn btn-fab-mini btn-lightBlue" title="clear" on-tap="clear" disabled="[[ !canclear ]]" hidden="[[ disableclearcontrol ]]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 18 18" preserveAspectRatio="xMinYMin meet">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(3.000000, 2.000000)">
                        <path d="M0,3 L12,3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M2,4 L2.48764038,13.7528076 C2.49446641,13.8893282 2.62149811,14 2.74913371,14 L9.25086629,14 C9.38845904,14 9.50561523,13.8876953 9.51235962,13.7528076 L10,4"
                            stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6,3 L6,14" stroke-linecap="square"/>
                        <polyline stroke-linecap="round" stroke-linejoin="round" points="3.5 2.5 4.5 4.4408921e-14 7.5 4.4408921e-14 8.5 2.5"/>
                    </g>
                    <path fill="#FFFFFF" d="M5.62296704,4 L3,4 C2.44771525,4 2,4.44771525 2,5 C2,5.55228475 2.44771525,6 3,6 L3.99997755,6 C3.99999108,6.01656372 4.00041143,6.03321294 4.00124766,6.04993762 L4.48888804,15.8027452 C4.52251805,16.4753454 5.09212362,17 5.74913371,17 L12.2508663,17 C12.9203449,17 13.4777078,16.4708291 13.511112,15.8027452 L13.9987523,6.04993762 C13.9995886,6.03321294 14.0000089,6.01656372 14.0000225,6 L15,6 C15.5522847,6 16,5.55228475 16,5 C16,4.44771525 15.5522847,4 15,4 L12.377033,4 L11.4284767,1.62860932 C11.2766133,1.24895094 10.9089046,1 10.5,1 L7.5,1 C7.09109541,1 6.72338666,1.24895094 6.57152331,1.62860932 L5.62296704,4 Z M7.77703296,4 L10.2222938,4 L9.82223657,3.00178511 L8.17458307,3.00612473 L7.77703296,4 Z M8,6 L6.00124922,6 L6.45156729,15.0063615 L8,15.0046629 L8,6 Z M10,6 L11.9988268,6 L11.562488,15.0007551 L10,15.0024691 L10,6 Z"/>
                </g>
              </svg>
            </button>
            <button id="undo" class="nav-btn btn-fab-mini btn-lightBlue" title="undo" on-tap="undo" disabled="[[ !canundo ]]" hidden="[[ disableundoredocontrol ]]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 18 18" preserveAspectRatio="xMinYMin meet">
                <path fill="#FFFFFF" d="M4.39697383,9 L6.70445204,11.2902483 C7.09643706,11.6793064 7.09880981,12.3124669 6.70975173,12.704452 C6.32069366,13.096437 5.68753312,13.0988097 5.2955481,12.7097517 L1.46742303,8.9102111 C0.987762098,8.43413178 0.977383357,7.64061697 1.46214298,7.15223767 L5.29026801,3.29552824 C5.67933703,2.90355407 6.31249762,2.90119897 6.70447179,3.29026798 C7.09644596,3.679337 7.09880106,4.31249759 6.70973205,4.70447176 L4.43121736,7 L13.0012144,7 C15.2087842,7 17,8.79333215 17,11 C17,13.2090846 15.2124325,15 13.0048815,15 L11,15 C10.4477153,15 10,14.5522847 10,14 C10,13.4477153 10.4477153,13 11,13 L13.0048815,13 C14.1070244,13 15,12.1053519 15,11 C15,9.89737333 14.1036857,9 13.0012144,9 L4.39697383,9 Z"/>
              </svg>
            </button>
            <button id="redo" class="nav-btn btn-fab-mini btn-lightBlue" title="redo" on-tap="redo" disabled="[[ !canredo ]]" hidden="[[ disableundoredocontrol ]]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 18 18" preserveAspectRatio="xMinYMin meet">
                <path fill="#FFFFFF" d="M13.5943767,9 L11.2942172,11.291572 C10.9029633,11.6813653 10.9017791,12.3145291 11.2915724,12.7057831 C11.6813656,13.0970371 12.3145295,13.0982212 12.7057834,12.708428 L16.5339081,8.89459534 C17.0122594,8.41802996 17.0226374,7.62453348 16.5365481,7.13662937 L12.7084233,3.294212 C12.3186274,2.90296072 11.6854635,2.90178094 11.2942122,3.29157689 C10.902961,3.68137284 10.9017812,4.31453672 11.2915771,4.705788 L13.5772554,7 L4.99878564,7 C2.79121581,7 1,8.79333215 1,11 C1,13.2090846 2.78756752,15 4.9951185,15 L7,15 C7.55228475,15 8,14.5522847 8,14 C8,13.4477153 7.55228475,13 7,13 L4.9951185,13 C3.89297562,13 3,12.1053519 3,11 C3,9.89737333 3.89631432,9 4.99878564,9 L13.5943767,9 Z"/>
              </svg>
            </button>
          </div>
          <div class="spacer"></div>
          <button class="classic-btn" title="convert" on-tap="convert" disabled="[[ !canconvert ]]" hidden="[[ disableconvertcontrol ]]">
              Convert
          </button>
        </nav>
        <div id="editorDomElement" class="ms-editor" on-idle="_idleListener" on-loaded="_changedListener" on-changed="_changedListener" on-exported="_exportedListener" on-error="_errorListener">
        </div>`;
  }
  /**
   * Fired when editor is idle.
   * @event idle
   */

  /**
   * Fired when editor is loaded.
   * @event loaded
   */

  /**
   * Fired when undo is triggered.
   * @event undo
   */

  /**
   * Fired when redo is triggered.
   * @event redo
   */

  /**
   * Fired when clear is triggered.
   * @event clear
   */

  /**
   * Fired when export is triggered.
   * @event export
   */

  /**
   * Fired when conversion is triggered.
   * @event convert
   */

  /**
   * Fired when editor state changed.
   * @event changed
   */

  /**
   * Fired when export is done.
   * @event exported
   */

  /**
   * Fired when conversion is done.
   * @event converted
   */

  /**
   * Fired on error.
   * @event error
   */


  static get is() {
    return 'myscript-common-element';
  }

  static get properties() {
    return {
      /**
       * The current recognition type (e.g. TEXT, SHAPE, MATH, MUSIC or ANALYZER)
       */
      type: {
        type: String,
        reflectToAttribute: true,
        value: 'TEXT'
      },

      /**
       * The current recognition protocol (WEBSOCKET or REST). We strongly recommend using WebSocket.
       */
      protocol: {
        type: String,
        reflectToAttribute: true,
        value: 'WEBSOCKET'
      },

      /**
       * Scheme to use to connect to MyScript Cloud or Server. (https or http)
       */
      scheme: {
        type: String,
        reflectToAttribute: true,
        value: 'https'
      },

      /**
       * The current recognition service host.
       */
      host: {
        type: String,
        reflectToAttribute: true,
        value: 'cloud.myscript.com'
      },

      /**
       * Use if host and scheme should be set using window.location
       */
      usewindowlocation: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Cloud API version to use.
       */
      apiversion: {
        type: String,
        reflectToAttribute: true,
        value: 'V4'
      },

      /**
       * Delay without any user input before asking for recognition, only use with REST protocol if not on-demand.
       */
      triggerdelay: {
        type: Number,
        reflectToAttribute: true,
        value: 2000
      },

      /**
       * Delay without any recognition exports received before processing the last one received, only use with WEBSOCKET protocol if not on-demand.
       */
      processdelay: {
        type: Number,
        reflectToAttribute: true,
        value: 1000
      },

      /**
       * True if export should be done on-demand, false otherwise
       */
      ondemand: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Application key to use for recognition on MyScript handwriting recognition server.
       * You have to create your own MyScript Developer account at http://dev.myscript.com and then generate your application key at http://cloud.myscript.com. See the Developer Guide to learn how to register.
       * Warning: This parameter is mandatory and its value should be a string.
       */
      applicationkey: {
        type: String,
        reflectToAttribute: true
      },

      /**
       * HMAC key to use for recognition on MyScript handwriting recognition server.
       * You have to create your own HMAC key corresponding to your own application key in your account at http://cloud.myscript.com.
       * Warning: This parameter may be mandatory if HMAC signature security is enabled for your application. The value should be a string.
       */
      hmackey: {
        type: String,
        reflectToAttribute: true
      },

      /**
       * Properties to set when you wish to set attributes in javascript. unloaded attributes should be removed once all properties are set.
       * (see examples/v4/programmatic_init.html for a better understanding)
       */
      unloaded: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_unloadedChanged'
      },

      /**
       * True if editor is initialized
       */
      initialized: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_initializedChanged'
      },

      /**
       * The underlying editor created with MyScriptJS. This could allow to access more advanced properties. Mostly used for automatic testing currently.
       */
      editor: {
        type: Object,
        notify: true
      },

      /**
       * Set the additional configuration used to feed MyScript editor (Structure of object as defined in MyScriptJS DefaultConfiguration.js file)
       * Configuration values are taken into account when myscript-common-element is attached to the dom and when unloaded is set to false.
       * Configuration values are not reflected to myscript-common-element attributes plus attributes values are always taken into account before configuration values (see demo/programmatic_init.html for a better understanding).
       */
      configuration: {
        type: Object,
        notify: true
      },

      /**
       * Pen color (supported formats rgb() rgba() hsl() hsla() #rgb #rgba #rrggbb #rrggbbaa)
       */
      pencolor: {
        type: String,
        reflectToAttribute: true
      },

      /**
       * Pen width in mm (no other unit is supported yet)
       */
      penwidth: {
        type: Number,
        reflectToAttribute: true
      },

      /**
       * Set the additional penStyle used to feed MyScript editor (Structure of object as defined in MyScriptJS DefaultPenStyle.js file)
       */
      penstyle: {
        type: Object,
        notify: true
      },

      /**
       * Pen style classes
       */
      penstyleclasses: {
        type: String,
        value: '',
        notify: true
      },

      /**
       * Main color used by theme  (supported formats rgb() rgba() hsl() hsla() #rgb #rgba #rrggbb #rrggbbaa)
       */
      themecolor: {
        type: String,
        value: '#1580CD',
        reflectToAttribute: true
      },

      /**
       * Width of strokes and primitives in mm (no other unit is supported yet)
       */
      themewidth: {
        type: Number,
        value: 1,
        reflectToAttribute: true
      },

      /**
       * Set the additional theme used to feed MyScript editor (Structure of object as defined in MyScriptJS DefaultTheme.js file)
       */
      theme: {
        type: Object,
        notify: true
      },

      /**
       * True if undo is available
       */
      canundo: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * True if redo is available
       */
      canredo: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * True if there is something to clear
       */
      canclear: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * True if export button could be displayed.
       */
      canexport: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * True if convert button could be displayed.
       */
      canconvert: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * Number of operations that it is currently possible to undo.
       */
      possibleUndoCount: {
        type: Number,
        value: 0
      },

      /**
       * The position of the cursor identifying the current state in the internal iink undo/redo stack.
       */
      undoStackIndex: {
        type: Number,
        value: 0
      },

      /**
       * If set to true, disable the autoReconnect.
       */
      disableautoreconnect: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        notify: true
      },

      /**
       * If set to true, remove the controls (undo/redo, clear...).
       */
      disablecontrols: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        notify: true
      },

      /**
       * If set to true, remove the undo/redo controls.
       */
      disableundoredocontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * If set to true, remove the clear control.
       */
      disableclearcontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * If set to true, remove the convert control.
       */
      disableconvertcontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Exports.
       * @type {Object<String, Object>} Attributes depends on configuration.
       */
      exports: {
        type: Object,
        notify: true
      },

      /**
       * True if component is idle
       */
      idle: {
        type: Boolean,
        value: true,
        notify: true
      },

      /**
       * True if pointer events listeners is used, false otherwise
       */
      usepointerlisteners: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * True to display console output, false otherwise.
       */
      debug: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      'touch-action': {
        type: String,
        value: 'initial'
      }
    };
  }

  static get observers() {
    return ['_updateTheme(editor, theme, themecolor, themewidth)', '_updatePenStyle(editor, penstyle, pencolor, penwidth)', '_updatePenStyleClasses(editor, penstyleclasses)'];
  }

  static _generateTheme(theme, themecolor, themewidth) {
    // FIXME: find a way to do a proper deep merge
    const stylesheet = Object.assign({}, theme);

    if (!stylesheet.ink) {
      stylesheet.ink = {};
    }

    if (themecolor) {
      stylesheet.ink.color = themecolor;
    }

    if (themewidth) {
      stylesheet.ink['-myscript-pen-width'] = themewidth;
    }

    return stylesheet;
  }

  static _generatePenStyle(penstyle, pencolor, penwidth) {
    // FIXME: find a way to do a proper deep merge
    const inlinestyle = Object.assign({}, penstyle);

    if (pencolor) {
      inlinestyle.color = pencolor;
    }

    if (penwidth) {
      inlinestyle['-myscript-pen-width'] = penwidth;
    }

    return inlinestyle;
  }

  static _generateConfiguration(configuration, triggerdelay, processdelay, ondemand, type, protocol, apiversion, scheme, host, usewindowlocation, applicationkey, hmackey, disableautoreconnect) {
    // FIXME: find a way to do a proper deep merge
    const conf = Object.assign({}, configuration);

    if (!conf.triggers) {
      conf.triggers = {};
    }

    if (!conf.recognitionParams) {
      conf.recognitionParams = {};
    }

    if (!conf.recognitionParams.server) {
      conf.recognitionParams.server = {};
    }

    if (!conf.recognitionParams.server.websocket) {
      conf.recognitionParams.server.websocket = {};
    }

    if (triggerdelay) {
      conf.triggerDelay = triggerdelay;
    }

    if (processdelay) {
      conf.processDelay = processdelay;
    }

    if (protocol) {
      conf.recognitionParams.protocol = protocol;
      conf.triggers.exportContent = protocol === 'REST' ? 'QUIET_PERIOD' : 'POINTER_UP';
    }

    if (ondemand) {
      conf.triggers.exportContent = 'DEMAND';
    }

    if (type) {
      conf.recognitionParams.type = type;
    }

    if (apiversion) {
      conf.recognitionParams.apiVersion = apiversion;
    }

    if (scheme) {
      conf.recognitionParams.server.scheme = scheme;
    }

    if (host) {
      conf.recognitionParams.server.host = host;
    }

    if (usewindowlocation) {
      conf.recognitionParams.server.scheme = window.location.protocol.slice(0, -1);
      conf.recognitionParams.server.host = window.location.host;
    }

    if (applicationkey) {
      conf.recognitionParams.server.applicationKey = applicationkey;
    }

    if (hmackey) {
      conf.recognitionParams.server.hmacKey = hmackey;
    }

    if (disableautoreconnect !== undefined) {
      conf.recognitionParams.server.websocket.autoReconnect = !disableautoreconnect;
    }

    return conf;
  }

  static _roundFloat(oneFloat, requestedFloatPrecision) {
    const floatPrecisionArray = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];

    if (requestedFloatPrecision || requestedFloatPrecision === 0) {
      let floatPrecision;

      if (requestedFloatPrecision > 10) {
        floatPrecision = floatPrecisionArray;
      } else {
        floatPrecision = floatPrecisionArray[requestedFloatPrecision];
      }

      return Math.round(oneFloat * floatPrecision) / floatPrecision;
    }

    return oneFloat;
  }

  static _extractPoint(event, element, configuration) {
    const rect = element.getBoundingClientRect();
    return {
      x: MyScriptCommonElement._roundFloat((event.detail.x || event.clientX) - rect.left - event.target.clientLeft, configuration.xyFloatPrecision),
      y: MyScriptCommonElement._roundFloat((event.detail.y || event.clientY) - rect.top - event.target.clientTop, configuration.xyFloatPrecision),
      t: MyScriptCommonElement._roundFloat(event.timeStamp || Date.now(), configuration.timestampFloatPrecision)
    };
  }

  _buildConfiguration() {
    return MyScriptCommonElement._generateConfiguration(this.configuration, this.triggerdelay, this.processdelay, this.ondemand, this.type, this.protocol, this.apiversion, this.scheme, this.host, this.usewindowlocation, this.applicationkey, this.hmackey, this.disableautoreconnect);
  }

  _resizeListener(event) {
    if (this.editor) {
      this.logger.trace('resizing', event);
      this.editor.resize();
    }
  }

  _changedListener(event) {
    if (event.detail) {
      this.initialized = event.detail.initialized;

      if (event.detail.isEmpty !== undefined) {
        this.canclear = !event.detail.isEmpty;
      } else {
        this.canclear = event.detail.canClear;
      }

      this.canundo = event.detail.canUndo;
      this.canredo = event.detail.canRedo;
      this.canexport = event.detail.canExport;
      this.canconvert = event.detail.canConvert;
      this.possibleUndoCount = event.detail.possibleUndoCount;
      this.undoStackIndex = event.detail.undoStackIndex;
    }
  }

  _idleListener(event) {
    if (event.detail) {
      this.idle = event.detail.idle;
    }
  }

  _exportedListener(event) {
    this.exports = event.detail ? event.detail.exports : {};
  }

  _errorListener(event) {
    this.logger.error('error', event);
  }

  _attachGrabber(element, editor) {
    let firstPointerDown = true;
    let mMaxDiffX = 0;
    let smartGuidePointerDown = false;
    let downSmartGuidePoint = null;

    const unFocus = () => {
      if (document.selection) {
        document.selection.empty();
      } else {
        window.getSelection().removeAllRanges();
      }
    };

    const patchPointerEvent = evt => {
      if (!evt.pointerId) {
        evt.pointerId = -1;
      }

      if (!evt.pointerType) {
        evt.pointerType = 'pen';
      }

      return evt;
    };

    const hideMenu = evt => {
      const moreMenuInDocument = this.shadowRoot.querySelector('#more-menu');

      if (!evt.target.classList.contains('ellipsis') && !evt.target.classList.contains('more-menu') && !evt.target.classList.contains('options-label-button') && moreMenuInDocument && moreMenuInDocument.style.display !== 'none') {
        moreMenuInDocument.style.display = 'none';
        return true;
      }

      return false;
    };

    const hideCandidates = evt => {
      const candidatesInDocument = this.shadowRoot.querySelector('.candidates');

      if (!evt.target.classList.contains('candidates') && !(evt.target.tagName === 'SPAN') && candidatesInDocument && candidatesInDocument.style.display !== 'none') {
        candidatesInDocument.style.display = 'none';
        return true;
      }

      return false;
    };

    const downText = () => {
      this.logger.debug('down on prompter text');
    };

    const pointerDownHandler = evt => {
      // Trigger a pointerDown
      if (firstPointerDown) {
        addListener(editor.smartGuide.elements.textContainer, 'down', downText);
      }

      firstPointerDown = false;
      patchPointerEvent(evt);
      const pointerDownOnEditor = evt.target.id === editor.domElement.id || evt.target.classList.contains('ms-canvas');

      if (this.activePointerId) {
        if (this.activePointerId === evt.pointerId) {
          this.logger.warn(`${evt.type} event with the same id without any pointer up`, evt.pointerId);
        }
      } else if (evt.button !== 2 && evt.buttons !== 2 && pointerDownOnEditor) {
        // Ignore right click
        if (!hideMenu(evt) && !hideCandidates(evt)) {
          this.activePointerId = evt.pointerId;
          unFocus();
          evt.preventDefault();
          evt.stopPropagation();
          editor.pointerDown(MyScriptCommonElement._extractPoint(evt, element, editor.configuration), evt.pointerType, evt.pointerId);
        }
      } else if (evt.target.classList.contains('ellipsis') || evt.target.classList.contains('tag-icon')) {
        hideMenu(evt);
        hideCandidates(evt);
      } else {
        // FIXME add more complete verification to pointer down on smart guide
        hideMenu(evt);
        hideCandidates(evt);
        smartGuidePointerDown = true;
        downSmartGuidePoint = MyScriptCommonElement._extractPoint(evt, element, editor.configuration);
      }
    };

    const pointerMoveHandler = evt => {
      // Trigger a pointerMove
      patchPointerEvent(evt); // Only considering the active pointer

      if (this.activePointerId && this.activePointerId === evt.pointerId) {
        editor.pointerMove(MyScriptCommonElement._extractPoint(evt, element, editor.configuration));
      } else if (smartGuidePointerDown) {
        const point = MyScriptCommonElement._extractPoint(evt, element, editor.configuration);

        const diffX = Math.abs(downSmartGuidePoint.x - point.x);
        const diffY = Math.abs(downSmartGuidePoint.y - point.y);
        mMaxDiffX = Math.max(diffX, mMaxDiffX);
        const cond1 = diffX < 5 && diffY > 5 && mMaxDiffX < 15;
        const cond2 = diffX > 5 && diffY > 5 && mMaxDiffX < 15;

        if (cond1 || cond2) {
          this.activePointerId = evt.pointerId; // Hack for iOS 9 Safari : pointerId has to be int so -1 if > max value

          const pointerId = evt.pointerId > 2147483647 ? -1 : evt.pointerId;
          unFocus();
          evt.preventDefault();
          editor.pointerDown(downSmartGuidePoint, evt.pointerType, pointerId);
        }
      }
    };

    const polymerPointerMoveHandler = evt => {
      // Trigger a pointerMove
      const checkHover = evt => {
        const smartGuideIds = ['smartguide', 'prompter-text-container', 'prompter-text', 'tag-icon', 'ellipsis'];
        const scrollbarClasses = ['ps__rail-x', 'ps__thumb-x'];

        if (evt.detail.hover()) {
          // Check if pointer entered into any smart guide elements or scrollbar
          const pointerEnteredSmartGuide = smartGuideIds.some(v => evt.detail.hover().className.indexOf(v) >= 0) || scrollbarClasses.some(v => evt.detail.hover().className.indexOf(v) >= 0); // Check if pointer moved between words in smart guide

          const pointerMovedWords = evt.detail.hover().tagName === 'SPAN' || evt.detail.hover().tagName === 'SPAN';
          return evt.detail.hover().id === 'editorDomElement' || evt.detail.hover().className.includes('ms-canvas') || pointerEnteredSmartGuide || pointerMovedWords;
        }

        return false;
      };

      patchPointerEvent(evt); // Only considering the active pointer

      if (checkHover(evt) && this.activePointerId && this.activePointerId === evt.pointerId) {
        evt.stopPropagation();
        editor.pointerMove(MyScriptCommonElement._extractPoint(evt, element, editor.configuration));
      } else if (smartGuidePointerDown) {
        const point = MyScriptCommonElement._extractPoint(evt, element, editor.configuration);

        const diffX = Math.abs(downSmartGuidePoint.x - point.x);
        const diffY = Math.abs(downSmartGuidePoint.y - point.y);
        mMaxDiffX = Math.max(diffX, mMaxDiffX);
        const cond1 = diffX < 5 && diffY > 5 && mMaxDiffX < 15;
        const cond2 = diffX > 5 && diffY > 5 && mMaxDiffX < 15;

        if (cond1 || cond2) {
          this.activePointerId = evt.pointerId; // Hack for iOS 9 Safari : pointerId has to be int so -1 if > max value

          const pointerId = evt.pointerId > 2147483647 ? -1 : evt.pointerId;
          unFocus();
          editor.pointerDown(downSmartGuidePoint, evt.pointerType, pointerId);
        }
      } else {
        evt.stopPropagation();
        this.activePointerId = undefined; // Managing the active pointer

        editor.pointerUp(MyScriptCommonElement._extractPoint(evt, element, editor.configuration));
      }
    };

    const pointerUpHandler = evt => {
      // Trigger a pointerUp
      patchPointerEvent(evt);
      mMaxDiffX = 0;
      smartGuidePointerDown = false;
      const smartGuideIds = ['smartguide', 'prompter-text-container', 'prompter-text', 'tag-icon', 'ellipsis'];
      const scrollbarClasses = ['ps__rail-x', 'ps__thumb-x']; // Check if pointer entered into any smartguide elements or scrollbar

      const pointerEnteredSmartGuide = evt.relatedTarget && (smartGuideIds.includes(evt.relatedTarget.className) || scrollbarClasses.includes(evt.relatedTarget.className)); // Check if pointer didn't stay in the smartguide and pointer exited the smartguide or scrollbar

      const pointerExitedSmartGuide = evt.relatedTarget && evt.target && (smartGuideIds.includes(evt.target.className) || scrollbarClasses.includes(evt.target.className)); // Check if pointer moved between words in smartguide

      const pointerMovedWords = evt.relatedTarget && evt.target && (evt.target.tagName === 'SPAN' || evt.relatedTarget.tagName === 'SPAN');

      if (pointerEnteredSmartGuide || pointerExitedSmartGuide || pointerMovedWords) {
        evt.stopPropagation();
      } else if (this.activePointerId && this.activePointerId === evt.pointerId) {
        // Only considering the active pointer
        this.activePointerId = undefined; // Managing the active pointer

        evt.stopPropagation();
        editor.pointerUp(MyScriptCommonElement._extractPoint(evt, element, editor.configuration));
      } else {
        this.logger.trace(`${evt.type} event from another pointerid (${evt.pointerId})`, this.activePointerId);
      }
    };

    const polymerPointerUpHandler = evt => {
      // Trigger a pointerUp
      patchPointerEvent(evt);
      mMaxDiffX = 0;
      smartGuidePointerDown = false;

      if (this.activePointerId && this.activePointerId === evt.pointerId) {
        // Only considering the active pointer
        this.activePointerId = undefined; // Managing the active pointer

        evt.stopPropagation();
        editor.pointerUp(MyScriptCommonElement._extractPoint(evt, element, editor.configuration));
      } else {
        this.logger.trace(`${evt.type} event from another pointerid (${evt.pointerId})`, this.activePointerId);
      }
    };

    const pointerListeners = [{
      types: ['pointerdown'],
      listener: pointerDownHandler
    }, {
      types: ['pointermove'],
      listener: pointerMoveHandler
    }, {
      types: ['pointerup', 'pointerout', 'pointerleave', 'pointercancel'],
      listener: pointerUpHandler
    }];
    const polymerGestureListeners = [{
      types: ['down'],
      listener: pointerDownHandler
    }, {
      types: ['track'],
      listener: polymerPointerMoveHandler
    }, {
      types: ['up'],
      listener: polymerPointerUpHandler
    }];
    const context = {
      options: editor.configuration.listenerOptions,
      listeners: this.usepointerlisteners ? pointerListeners : polymerGestureListeners
    };

    if (this.debug) {
      context.listeners.push();
    }

    this.logger.debug('attaching listeners', context);
    context.listeners.forEach(item => {
      item.types.forEach(type => {
        if (['down', 'track', 'up'].includes(type)) {
          addListener(element, type, item.listener);
        } else {
          element.addEventListener(type, item.listener, context.options);
        }
      });
    });
    return context;
  }

  _detachGrabber(element, context) {
    this.logger.debug('detaching listeners', context);
    context.listeners.forEach(item => {
      item.types.forEach(type => {
        if (['track', 'tap'].includes(type)) {
          removeListener(element, type, item.listener);
        } else {
          element.removeEventListener(type, item.listener, context.options);
        }
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.logger.setLevel(this.debug ? 'DEBUG' : 'ERROR', false);
    Object.keys(MyScript.Constants.Logger).forEach(key => {
      MyScript.LoggerConfig.getLogger(MyScript.Constants.Logger[key]).setLevel(this.debug ? 'DEBUG' : 'ERROR', false);
    });
    this.addEventListener('iron-resize', this._resizeListener);
    this.editorDomElement = this.shadowRoot.querySelector('#editorDomElement');

    this._unloadedChanged(this.unloaded);

    this.logger.info('common-element connected');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('iron-resize', this._resizeListener);
    this.logger.info('common-element disconnected');
  }
  /**
   * Clear all context
   */


  clear() {
    if (this.editor) {
      this.editor.clear();
    }
  }
  /**
   * Undo action
   */


  undo() {
    if (this.editor) {
      this.editor.undo();
    }
  }
  /**
   * Redo action
   */


  redo() {
    if (this.editor) {
      this.editor.redo();
    }
  }
  /**
   * Trigger export
   */


  export_() {
    if (this.editor) {
      this.editor.export_();
    }
  }
  /**
   * Import content
   * @param {Blob|*} data Data to import
   * @param {String} [mimetype] Mimetype of the data, needed if data is not a Blob
   */


  import_(data, mimetype) {
    if (this.editor) {
      this.editor.import_(data, mimetype);
    }
  }
  /**
   * Send multiple strokes at the same time also call batch mode.
   * @param {{ events: Array<{gesture: Boolean, pointerType: String, pointerId: Integer, x: Array<Floats>, y: Array<Floats>, t: Array<Floats>}>}} events to process (strokes)
   * Depending of of your users writes the strokes you may or may not activate the gestures. <code>t</code> attribute is optional in the set of strokes but it is highly recommended to pass it for better accuracy.
   *
   * Example of input :
   * ````{
   *      "events": [{
   *      "pointerType": "PEN",
   *      "pointerId": 1,
   *      "x": [273, 278, 281],
   *      "y": [121, 128, 133],
   *      "t": [3185.7900000000004, 3213.8150000000005, 3222.5350000000003]
   *      },{
   *      "pointerType": "PEN",
   *      "pointerId": 1,
   *      "x": [173, 178, 181],
   *      "y": [221, 228, 233],
   *      "t": [6185.7900000000004, 6213.8150000000005,6222.5350000000003]
   *      }]
   *     }
   * ````
   */


  pointerEvents(events) {
    if (this.editor) {
      this.editor.pointerEvents(events);
    }
  }
  /**
   * Trigger convert
   */


  convert() {
    if (this.editor) {
      this.editor.convert();
    }
  }
  /**
   * Return the stats allowing to monitor what ink size is send to the server.
   * Stats objects format {strokesCount : 0, pointsCount : 0, byteSize : 0, humanSize : 0, humanUnit : 'BYTE'} humanUnit could have the values BYTE, BYTES, KiB, MiB
   */


  getStats() {
    return this.editor.getStats();
  }

  _updateTheme(editor, theme, themecolor, themewidth) {
    if (editor) {
      editor.theme = MyScriptCommonElement._generateTheme(theme, themecolor, themewidth);
      this.logger.trace('theme changed', editor.theme);
    }
  }

  _updatePenStyle(editor, penstyle, pencolor, penwidth) {
    if (editor) {
      editor.penStyle = MyScriptCommonElement._generatePenStyle(penstyle, pencolor, penwidth);
      this.logger.trace('penStyle changed', editor.penStyle);
    }
  }

  _updatePenStyleClasses(editor, penstyleclasses) {
    if (editor && (editor.theme.hasOwnProperty(`.${penstyleclasses}`) || penstyleclasses === '')) {
      editor.penStyleClasses = penstyleclasses;
      this.logger.trace('penStyleClasses changed', editor.penStyleClasses);
    }
  }

  _initializedChanged(initialized) {
    if (initialized === true) {
      this.configuration = this.editor.configuration;
    }
  }

  _unloadedChanged(unloaded) {
    this.exports = undefined;
    this.logger.trace('unloaded changed', unloaded);

    if (unloaded === false && this.editorDomElement) {
      if (this.editor) {
        this.editor.configuration = this._buildConfiguration();
      } else {
        beforeNextRender(this, () => {
          this.editor = MyScript.register(this.editorDomElement, this._buildConfiguration(), MyScriptCommonElement._generatePenStyle(this.penstyle, this.pencolor, this.penwidth), MyScriptCommonElement._generateTheme(this.theme, this.themecolor, this.themewidth), {
            grabber: {
              attach: this._attachGrabber.bind(this),
              detach: this._detachGrabber.bind(this)
            }
          });
        });
      }
    }
  }

}

customElements.define(MyScriptCommonElement.is, MyScriptCommonElement);