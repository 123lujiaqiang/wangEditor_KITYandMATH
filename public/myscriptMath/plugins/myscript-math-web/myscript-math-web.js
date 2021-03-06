import { html, PolymerElement } from "../@polymer/polymer/polymer-element.js";
import * as MyScript from "../myscript/dist/myscript.esm.js";
import "../myscript-common-element/myscript-common-element.js";
import "../myscript-common-element/myscript-stylesheet.js";
import "./myscript-math-exports.js";
/**
The `myscript-math-web` is a turnkey solution for those who need to quickly implement MyScript Math recognition.

    <myscript-math-web
        applicationkey="YOUR MYSCRIPT DEVELOPER APPLICATION KEY"
        hmackey="YOUR MYSCRIPT DEVELOPER HMAC KEY">
    </myscript-math-web>

| CSS variable | Default|
|----------------|----------|
|`--myscript-math-web-background`  | none|
|`--myscript-math-web-color` | #FFFFFF|
|`--myscript-math-web-line-pattern` | _Classic notebook pattern_|
|`--myscript-math-web-loader-background`  | #1A9FFF|
|`--myscript-math-web-loader-color`  | #F5F6F7|
|`--myscript-math-web-button-background`  | #1A9FFF|
|`--myscript-math-web-button-focus-background`  | #1A9FFF|
|`--myscript-math-web-button-disabled-background`  | #F5F6F7|
|`--myscript-math-web-exports-color` | #1580CD|

@demo src/demo-app/examples/non-version-specific/get_started.html Get started [V4]
@demo src/demo-app/examples/non-version-specific/customize_style.html Customize style [V4]
@demo src/demo-app/examples/v4/custom_resources.html Use a custom grammar [V4]
@demo src/demo-app/examples/non-version-specific/custom_controls.html Redefining the controls [V4]
@demo src/demo-app/examples/non-version-specific/interact_with_your_app.html Answering a math question [V4]
@demo src/demo-app/examples/v4/solver_tuned.html Tuning the solver [V4]
@demo src/demo-app/examples/index.html Other examples
*/

class MyScriptMathWeb extends PolymerElement {
  static get template() {
    return html` <style include="myscript-stylesheet">
        :host {
          --myscript-math-web-background: var(--myscript-editor-background);
          --myscript-math-web-color: var(--myscript-editor-color);
          --myscript-math-web-hover-color: var(--myscript-editor-hover-color);
          --myscript-math-web-focus-color: var(--myscript-editor-focus-color);
          --myscript-math-web-disabled-color: var(
            --myscript-editor-disabled-color
          );
          --myscript-math-web-line-pattern: var(--myscript-editor-line-pattern);
          --myscript-math-web-capture-background: var(
            --myscript-editor-capture-background
          );
          --myscript-math-web-button-background: var(
            --myscript-editor-button-background
          );
          --myscript-math-web-button-focus-background: var(
            --myscript-editor-button-focus-background
          );
          --myscript-math-web-button-disabled-background: var(
            --myscript-editor-button-disabled-background
          );
          --myscript-math-web-error-background: var(
            --myscript-editor-error-background
          );
          --myscript-math-web-loader: var(--myscript-editor-loader);
          --myscript-math-web-error: var(--myscript-editor-error);
          --myscript-math-web-exports-color: #1a9fff;

          box-sizing: border-box;
          touch-action: none;
          display: block;
        }

        [hidden] {
          display: none;
        }

        myscript-math-exports {
          --myscript-math-exports-color: var(--myscript-math-web-exports-color);

          height: 100px;
          font-size: larger;
          overflow: auto;
        }

        myscript-common-element {
          --myscript-common-element-background: var(
            --myscript-math-web-background
          );
          --myscript-common-element-color: var(--myscript-math-web-color);
          --myscript-common-element-hover-color: var(
            --myscript-math-web-hover-color
          );
          --myscript-common-element-focus-color: var(
            --myscript-math-web-focus-color
          );
          --myscript-common-element-disabled-color: var(
            --myscript-math-web-disabled-color
          );
          --myscript-common-element-line-pattern: var(
            --myscript-math-web-line-pattern
          );
          --myscript-common-element-capture-background: var(
            --myscript-math-web-capture-background
          );
          --myscript-common-element-button-background: var(
            --myscript-math-web-button-background
          );
          --myscript-common-element-button-focus-background: var(
            --myscript-math-web-button-focus-background
          );
          --myscript-common-element-button-disabled-background: var(
            --myscript-math-web-button-disabled-background
          );
          --myscript-common-element-error-background: var(
            --myscript-math-web-error-background
          );
          --myscript-common-element-error: var(--myscript-math-web-error);
          --myscript-common-element-loader: var(--myscript-math-web-loader);

          height: calc(100% - 100px);
        }

        myscript-math-exports[hidden] + myscript-common-element {
          height: 100%;
        }
      </style>

      <myscript-math-exports
        hidden="[[ !_displayExports(hideexportzone, unloaded) ]]"
        exports="[[ exports ]]"
        debug="[[ debug ]]"
      >
      </myscript-math-exports>
      <myscript-common-element
        type="MATH"
        protocol="[[ protocol ]]"
        apiversion="[[ apiversion ]]"
        host="[[ host ]]"
        usewindowlocation="[[ usewindowlocation ]]"
        scheme="[[ scheme ]]"
        applicationkey="[[ applicationkey ]]"
        hmackey="[[ hmackey ]]"
        triggerdelay="[[ triggerdelay ]]"
        processdelay="[[ processdelay ]]"
        ondemand="[[ ondemand ]]"
        debug="[[ debug ]]"
        configuration="{{ configuration }}"
        editor="{{ editor }}"
        exports="{{ exports }}"
        initialized="{{ initialized }}"
        unloaded="{{ commonunloaded }}"
        pencolor="[[ pencolor ]]"
        penwidth="[[ penwidth ]]"
        penstyle="[[ penstyle ]]"
        penstyleclasses="[[ penstyleclasses ]]"
        themecolor="[[ themecolor ]]"
        themewidth="[[ themewidth ]]"
        theme="[[ commontheme ]]"
        canclear="[[ canclear ]]"
        canredo="[[ canredo ]]"
        canundo="[[ canundo ]]"
        idle="[[ idle ]]"
        disableautoreconnect="[[ disableautoreconnect ]]"
        disablecontrols="[[ disablecontrols ]]"
        disableclearcontrol="[[ disableclearcontrol ]]"
        disableundoredocontrol="[[ disableundoredocontrol ]]"
        disableconvertcontrol="[[ disableconvertcontrol ]]"
        usepointerlisteners="[[ usepointerlisteners ]]"
        touch-action="[[ touch-action ]]"
      >
      </myscript-common-element>`;
  }

  static get is() {
    return "myscript-math-web";
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


  static get properties() {
    return {
      // ----------------------------------------------------------------------------------------------
      // The following section is a recopy of myscript-common-element attributes
      // Polymer documentation generation prevent from reusing attributes from another element.
      // ----------------------------------------------------------------------------------------------

      /**
       * The current recognition protocol (WebSocket or REST). We strongly recommend using WebSocket.
       */
      protocol: {
        type: String,
        reflectToAttribute: true,
        value: "WEBSOCKET"
      },

      /**
       * Scheme to use to connect to MyScript Cloud or Server. (https or http)
       */
      scheme: {
        type: String,
        reflectToAttribute: true,
        value: "https"
      },

      /**
       * The current recognition service host.
       */
      host: {
        type: String,
        reflectToAttribute: true,
        value: "cloud.myscript.com"
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
        value: "V4"
      },

      /**
       * Delay without any user input before asking for recognition, only use in REST mode.
       */
      triggerdelay: {
        type: Number,
        reflectToAttribute: true,
        value: 2000
      },

      /**
       * Delay without any export received before processing the last one received, only use in WEBSOCKET mode.
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
       * The recognition timeout, only use in REST mode.
       */
      timeout: {
        type: Number,
        reflectToAttribute: true,
        value: 2000
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
       * (see demo/programmatic_init.html for a better understanding)
       */
      unloaded: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },

      /**
       * @private
       */
      commonunloaded: {
        type: Boolean,
        computed: "_computeCommonUnloaded(unloaded)"
      },

      /**
       * True if editor is initialized
       */
      initialized: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },

      /**
       * The underlying editor created with MyScriptJS. This could allow to access more advanced properties. Mostly used for automatic testing currently.
       */
      editor: {
        type: Object,
        notify: true
      },

      /**
       * Set the additional configuration used to feed MyScript Editor (Structure of object as defined in MyScriptJS DefaultConfiguration.js file)
       * Configuration values are taken into account when myscript-common-element is attached to the dom and when detached is set to false.
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
        value: "",
        notify: true
      },

      /**
       * Main color used by theme  (supported formats rgb() rgba() hsl() hsla() #rgb #rgba #rrggbb #rrggbbaa)
       */
      themecolor: {
        type: String,
        value: "#1580CD",
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
       * Generated items color used by theme  (supported formats rgb() rgba() hsl() hsla() #rgb #rgba #rrggbb #rrggbbaa)
       */
      solvercolor: {
        type: String,
        value: "#A8A8A8",
        reflectToAttribute: true
      },

      /**
       * font-family used to render text conversion
       */
      fontfamily: {
        type: String,
        value: "STIXGeneral",
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
       * @private
       */
      commontheme: {
        type: Object,
        computed: "_computeCommonTheme(theme, fontfamily, solvercolor)"
      },

      /**
       * True if undo is available
       * @private
       */
      canundo: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * True if redo is available
       * @private
       */
      canredo: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * True if there is something to clear
       * @private
       */
      canclear: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
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
       * If set to true, hide the buttons (Trash, Undo, Redo).
       */
      disablecontrols: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        notify: true
      },

      /**
       * True if the undo/redo feature is disabled, false otherwise
       */
      disableundoredocontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * True if the clear feature is disabled, false otherwise
       */
      disableclearcontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * True if the typeset feature is disabled, false otherwise
       */
      disableconvertcontrol: {
        type: Boolean,
        reflectToAttribute: true,
        value: true
      },

      /**
       * True if pointer events listeners is used, false otherwise
       */
      usepointerlisteners: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      //------------------------------------------------------------------------------
      //                 End of recopy
      // -----------------------------------------------------------------------------

      /**
       * True if we want to use always connected mode, false otherwise
       */
      alwaysconnected: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Use a custom grammar
       */
      customgrammar: {
        type: String,
        reflectToAttribute: true,
        value: ""
      },

      /**
       * Hide the export zone when set to true.
       */
      hideexportzone: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Math export types (LATEX, MATHML or SYMBOLTREE).
       * Warning: v3 only, for v4, use mimetypes instead
       */
      resulttypes: {
        type: Array,
        value: ["LATEX", "MATHML"]
      },

      /**
       * Math export types (application/x-latex, application/mathml+xml, application/mathofficeXML).
       */
      mimetypes: {
        type: Array,
        value: ["application/x-latex"]
      },

      /**
       * True if the solver feature is disabled, false otherwise
       */
      disablesolver: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Number of digits displayed in the fractional part of the solver. For example 1/3 will be solved with 0.33333... if solverfractionalpartdigit is set to 5. By default set to 3.
       */
      solverfractionalpartdigit: {
        type: Number,
        value: 3
      },
      solverdecimalseparator: {
        type: String,
        value: "."
      },

      /** 'truncate' or 'half up'. By default 'half up' * */
      solverroundingmode: {
        type: String,
        value: "half up"
      },
      solverangleunit: {
        type: String,
        value: "deg"
      },

      /**
       * If attribute is set activate the recognition of columnar operations. V3 only.
       */
      columnaroperation: {
        type: Boolean,
        value: false
      },

      /**
       * List of user resources to use for recognitions. Theses user resources have to be attached to the user account where application is declare. V3 only.
       */
      userresources: {
        type: Array
      },

      /* V3 only. */
      scratchoutdetectionsensitivity: {
        type: Number,
        value: 1
      },

      /**
       * Exports.
       * @attribute exports
       * @type {Object<String, Object>} Attributes depends on recognition type already configured.
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
       * True to display console output, false otherwise.
       */
      debug: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      "touch-action": {
        type: String,
        value: "initial"
      }
    };
  }

  static _generateMathTheme(theme, fontfamily, solvercolor) {
    // FIXME: find a way to do a proper deep merge
    const stylesheet = Object.assign({}, theme);

    if (!stylesheet[".math"]) {
      stylesheet[".math"] = {};
    }

    if (!stylesheet[".math-solved"]) {
      stylesheet[".math-solved"] = {};
    }

    if (fontfamily !== undefined) {
      stylesheet[".math"]["font-family"] = fontfamily;
      stylesheet[".math-solved"]["font-family"] = fontfamily;
    }

    if (solvercolor !== undefined) {
      stylesheet[".math-solved"].color = solvercolor;
    }

    return stylesheet;
  }

  static _generateMathConfiguration(configuration, mimetypes, disablesolver, solverfractionalpartdigit, solverdecimalseparator, solverroundingmode, solverangleunit, resulttypes, columnaroperation, userresources, scratchoutdetectionsensitivity, customgrammar, alwaysconnected) {
    // FIXME: find a way to do a proper deep merge
    const conf = Object.assign({}, configuration);

    if (!conf.recognitionParams) {
      conf.recognitionParams = {};
    }

    if (!conf.recognitionParams.v3) {
      conf.recognitionParams.v3 = {};
    }

    if (!conf.recognitionParams.v3.mathParameter) {
      conf.recognitionParams.v3.mathParameter = {};
    }

    if (!conf.recognitionParams.v4) {
      conf.recognitionParams.v4 = {};
    }

    if (!conf.recognitionParams.v4.math) {
      conf.recognitionParams.v4.math = {};
    }

    if (!conf.recognitionParams.v4.math.solver) {
      conf.recognitionParams.v4.math.solver = {};
    }

    if (resulttypes !== undefined) {
      conf.recognitionParams.v3.mathParameter.resultTypes = resulttypes;
    }

    if (columnaroperation !== undefined) {
      conf.recognitionParams.v3.mathParameter.columnarOperation = columnaroperation;
    }

    if (userresources !== undefined) {
      conf.recognitionParams.v3.mathParameter.userResources = userresources;
    }

    if (scratchoutdetectionsensitivity !== undefined) {
      conf.recognitionParams.v3.mathParameter.scratchOutDetectionSensitivity = scratchoutdetectionsensitivity;
    }

    if (mimetypes !== undefined) {
      conf.recognitionParams.v4.math.mimeTypes = mimetypes;
    }

    if (disablesolver !== undefined) {
      conf.recognitionParams.v4.math.solver.enable = !disablesolver;
    }

    if (solverfractionalpartdigit) {
      conf.recognitionParams.v4.math.solver["fractional-part-digits"] = solverfractionalpartdigit;
    }

    if (solverdecimalseparator !== undefined) {
      conf.recognitionParams.v4.math.solver["decimal-separator"] = solverdecimalseparator;
    }

    if (solverroundingmode !== undefined) {
      conf.recognitionParams.v4.math.solver["rounding-mode"] = solverroundingmode;
    }

    if (solverangleunit !== undefined) {
      conf.recognitionParams.v4.math.solver["angle-unit"] = solverangleunit;
    }

    if (customgrammar) {
      conf.recognitionParams.v4.math.customGrammar = customgrammar;
    }

    if (alwaysconnected !== undefined) {
      conf.recognitionParams.v4.alwaysConnected = alwaysconnected;
    }

    return conf;
  }

  _buildConfiguration() {
    if (this.apiversion === "V3" || this.protocol === "REST") {
      this.disableconvertcontrol = true;
    }

    return MyScriptMathWeb._generateMathConfiguration(this.configuration, this.mimetypes, this.disablesolver, this.solverfractionalpartdigit, this.solverdecimalseparator, this.solverroundingmode, this.solverangleunit, this.resulttypes, this.columnaroperation, this.userresources, this.scratchoutdetectionsensitivity, this.customgrammar, this.alwaysconnected);
  }

  constructor() {
    super();
    this.logger = MyScript.LoggerConfig.getLogger("math-web");
  }

  connectedCallback() {
    super.connectedCallback();
    this.logger.setLevel(this.debug ? "DEBUG" : "ERROR", false);
    this.configuration = this._buildConfiguration(); // Build default configuration to use in common element
  } //-----------------------------------------------------------------------
  // ---------  Wrapping of myscript-common-element  methods    ------------
  //-----------------------------------------------------------------------

  /**
   * Clear all context
   */


  clear() {
    if (this.editor) {
      this.editor.clear();
    }
  }
  /**
   * Undo action, and launch recognition if timeout is set
   */


  undo() {
    if (this.editor) {
      this.editor.undo();
    }
  }
  /**
   * Redo action, and launch recognition if timeout is set
   */


  redo() {
    if (this.editor) {
      this.editor.redo();
    }
  }
  /**
   * Launch export
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
   * @param {{events: Array<{gesture: Boolean, pointerType: String, pointerId: Integer, x: Array<Floats>, y: Array<Floats>, t: Array<Floats>}>}} events to process (strokes)
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
    if (this.editor) {
      return this.editor.getStats();
    }
  } //-----------------------------------------------------------------------
  // ---------  Wrapping END                                    ------------
  //-----------------------------------------------------------------------


  _computeCommonUnloaded(unloaded) {
    this.logger.trace("unloaded changed", unloaded);

    if (unloaded === false) {
      this.configuration = this._buildConfiguration();
    }

    return unloaded;
  }

  _computeCommonTheme(theme, fontfamily, solvercolor) {
    return MyScriptMathWeb._generateMathTheme(theme, fontfamily, solvercolor);
  }

  connectedCallback() {
    super.connectedCallback();
    this.logger.info("attached");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.logger.info("detached");
  }

  _displayExports(hideExports, unloaded) {
    // Common element should not be attached if the unload attribute of myscript-math-web element is set to true and if he is not already connected to the dom.
    return !hideExports && (!unloaded || unloaded === true);
  }

}

customElements.define(MyScriptMathWeb.is, MyScriptMathWeb);