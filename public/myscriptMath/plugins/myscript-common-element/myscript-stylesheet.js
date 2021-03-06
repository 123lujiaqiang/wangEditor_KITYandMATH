/* eslint-disable no-undef */
import "../@polymer/polymer/polymer-element.js";
const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');
documentContainer.innerHTML = `<dom-module id="myscript-stylesheet">
    <template>
        <style>
            :host {
                --myscript-editor-background: none;
                --myscript-editor-color: #1A9FFF;
                --myscript-editor-hover-color: #0177CB;
                --myscript-editor-focus-color: #0798FF;
                --myscript-editor-disabled-color: #F5F6F7;
                --myscript-editor-line-pattern: {
                    background-image: linear-gradient(to right, #F5F6F7 1px, transparent 1px),
                    linear-gradient(to bottom, #F5F6F7 1px, transparent 1px);
                    background-size: 18px 18px;
                };
                --myscript-editor-capture-background: none;
                --myscript-editor-error-background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCA3Ni41IDYxMiA0NTkiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiPgogICAgPHBhdGggZmlsbD0iIzFBOUZGRiIgZD0iTTQ5NC43LDIyOS41Yy0xNy44NTEtODYuNy05NC4zNTEtMTUzLTE4OC43LTE1M2MtMzguMjUsMC03My45NSwxMC4yLTEwMiwzMC42bDM4LjI1LDM4LjI1IGMxNy44NS0xMi43NSw0MC44LTE3Ljg1LDYzLjc1LTE3Ljg1Yzc2LjUsMCwxNDAuMjUsNjMuNzUsMTQwLjI1LDE0MC4yNXYxMi43NWgzOC4yNWM0My4zNSwwLDc2LjUsMzMuMTUsNzYuNSw3Ni41IGMwLDI4LjA1LTE1LjMsNTMuNTUtNDAuOCw2Ni4zbDM4LjI1LDM4LjI1QzU5MS42LDQzOC42LDYxMiw0MDAuMzUsNjEyLDM1N0M2MTIsMjkwLjcsNTU4LjQ1LDIzNC42LDQ5NC43LDIyOS41eiBNNzYuNSwxMDkuNjUgbDcxLjQsNjguODVDNjYuMywxODMuNiwwLDI0OS45LDAsMzMxLjVjMCw4NC4xNSw2OC44NSwxNTMsMTUzLDE1M2gyOTguMzVsNTEsNTFsMzMuMTUtMzMuMTVMMTA5LjY1LDc2LjVMNzYuNSwxMDkuNjV6IE0xOTYuMzUsMjI5LjVsMjA0LDIwNEgxNTNjLTU2LjEsMC0xMDItNDUuOS0xMDItMTAyYzAtNTYuMSw0NS45LTEwMiwxMDItMTAySDE5Ni4zNXoiIC8+Cjwvc3ZnPgo=);

                --myscript-editor-loader: {
                    width: 120px;
                    height: 120px;
                    top: calc(50% - 60px);
                    left: calc(50% - 60px);
                    border: 16px solid #F5F6F7;
                    border-radius: 50%;
                    border-top-color: #1A9FFF;
                    -webkit-animation: spin 2s linear infinite;
                    animation: spin 2s linear infinite;
                };

                --myscript-editor-error: {
                    width: 200px;
                    height: 200px;
                    top: calc(50% - 100px);
                    left: calc(50% - 100px);
                    font-size: 16px;
                    text-align: center;
                    word-wrap: break-word;
                };

                --myscript-button: {
                    cursor: pointer;
                    box-sizing: border-box;
                    border: none;
                    padding: 8px;
                    margin: 6px;
                    height: 40px;
                    outline: none;
                };

                --myscript-icon-button: {
                    @apply --myscript-button;
                    border-radius: 50%;
                    width: 40px;
                };

            }

            .spacer {
                flex-grow: 2;
            }

            [hidden] {
                display: none !important;
            }

            nav {
                display: flex;
                display: -webkit-flex;
                height: 52px;
                padding-right: 6px;
                align-items: center;
                border-bottom: 1px solid #D7DDE3; /*#A9B7C5*/
            }

            nav[hidden] + .ms-editor {
                height: 100%;
            }

            .ms-editor {
                position: relative;
                z-index: 20;
                height: calc(100% - 52px);
                width: 100%;
            }

            .ms-editor canvas,
            .ms-editor svg {
                z-index: 15;
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
            }

            .ms-editor canvas.ms-rendering-canvas {
                z-index: 10;
                pointer-events: none;
            }

            .ms-editor svg {
                z-index: 10;
                pointer-events: none;
            }

            .ms-editor svg[data-layer="BACKGROUND"] {
                z-index: 9;
            }

            .error-msg {
                z-index: 30;
                position: absolute;
            }

            .loader {
                z-index: 35;
                position: absolute;
            }

            .classic-btn {
                height: 36px;
                line-height: 30px;
                padding: 0 .75em 2px;
                font-weight: 700;
                font-size: 18px;
                color: #fff;
                background: #1a9fff;
                box-shadow: 0 2px 8px -2px rgba(0,0,0,.2);
                cursor: pointer;
                display: inline-block;
                text-align: center;
                white-space: nowrap;
                text-decoration: none;
                border: 2px solid transparent;
                border-radius: 3px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -ms-touch-action: manipulation;
                touch-action: manipulation;
                transition: all 125ms;
            }

            .classic-btn:active {
                color: #fff;
                text-decoration: none;
                background: #0065b8;
                box-shadow: 0 2px 8px -2px rgba(0, 0, 0, .5);
            }

            .classic-btn:disabled {
                pointer-events: none;
                cursor: default;
                background-color: #ececec;
                -webkit-box-shadow: none;
                box-shadow: none;
            }

            .smartguide {
                position: absolute;
                z-index: 40;
                font-size: 16px;
            }

            .smartguide-in {
                visibility: visible !important;
                transition: opacity 0.5s;
                opacity: 1;
            }

            .smartguide-out {
                transition: opacity 1s, visibility 1s;
                visibility: hidden !important;
                opacity: 0;
            }

            .prompter-text-container {
                background-color: rgba(255, 255, 255, 0.9);
                height: 48px;
                line-height: 48px;
                overflow: hidden;
                white-space: nowrap;
                display: block;
                text-align: left;
                border-bottom: 1px solid #959DA6;
                position: absolute;
                z-index: 30;
                color: #bfbfbf;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -webkit-tap-highlight-color: transparent;
            }

            .prompter-text-container > div > span {
                cursor: pointer;
                display: inline-block;
            }

            .prompter-text {
                margin-left: 12px;
            }

            .added-word {
                animation: 0.1s linear word-added,
                3s ease-in-out color-input;
            }

            .modified-word {
                animation: 0.1s linear word-modified,
                3s ease-in-out color-input;
            }

            @keyframes color-input {
                0% {
                    color: black;
                }
                100% {
                    color: #bfbfbf;
                }
            }

            @keyframes word-added {
                0% {
                    transform: translate(5px, 0);
                }
                100% {
                    transform: none;
                }
            }

            @keyframes word-modified {
                0% {
                    transform: translate(0, 5px);
                }
                100% {
                    transform: none;
                }
            }

            .candidates {
                color: black;
                flex-direction: column;
                text-align: center;
                line-height: 30px;
                border-radius: 3px;
                position: absolute;
                box-shadow: 2px 2px 12px #BDBDBD, -2px 2px 12px #BDBDBD;
                background-color: #F5F5F5;
                z-index: 100;
                -webkit-tap-highlight-color: transparent;
            }

            .candidates > span {
                cursor: pointer;
                padding: 2px 20px;
            }

            .candidates > span:hover {
                background-color: #EEEEEE;
            }

            .candidates > span:active {
                background-color: #E0E0E0;
            }

            .selected-word {
                font-weight: bold;
                background-color: #E0E0E0;
            }

            .tag-icon {
                padding: 0 18px;
                border: 1px solid #959DA6;
                font-weight: bold;
                font-size: large;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                user-select: none;
                position: absolute;
                z-index: 31;
                height: 48px;
                line-height: 48px;
                background-color: rgba(255, 255, 255, 0.9);
                color: #959DA6;
            }

            .ellipsis {
                cursor: pointer;
                border-bottom: 1px solid #959DA6;
                position: absolute;
                z-index: 31;
                height: 48px;
                line-height: 38px;
                padding: 0 8px;
                font-weight: bold;
                font-size: x-large;
                background-color: rgba(255, 255, 255, 0.9);
                color: #959DA6;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -webkit-tap-highlight-color: transparent;
            }

            .ellipsis:active {
                background-color: #e0e0e0;
            }

            .more-menu {
                flex-direction: column;
                margin-right: 12px;
                line-height: 30px;
                border-radius: 3px;
                position: absolute;
                z-index: 100;
                box-shadow: 2px 2px 12px #BDBDBD;
                background-color: #F5F5F5;
            }

            .options-label-button {
                color: black;
                font-size: 16px;
                cursor: pointer;
                box-sizing: border-box;
                background: transparent;
                border: none;
                padding: 0 24px;
                margin: 0;
                height: 40px;
                outline: none;
                -webkit-tap-highlight-color: transparent;
            }

            .options-label-button:hover {
                background-color: #EEEEEE;
            }

            .options-label-button:active {
                background-color: #E0E0E0;
            }

            .ps__rail-x {
                top: 32px !important;
            }

            /*
             * Container style
             */
            .ps {
                overflow: hidden !important;
                overflow-anchor: none;
                -ms-overflow-style: none;
                touch-action: auto;
                -ms-touch-action: auto;
            }

            /*
             * Scrollbar rail styles
             */
            .ps__rail-x {
                display: none;
                opacity: 0;
                transition: background-color .2s linear, opacity .2s linear;
                -webkit-transition: background-color .2s linear, opacity .2s linear;
                height: 15px;
                /* there must be 'bottom' or 'top' for ps__rail-x */
                bottom: 0px;
                /* please don't change 'position' */
                position: absolute;
            }

            .ps__rail-y {
                display: none;
                opacity: 0;
                transition: background-color .2s linear, opacity .2s linear;
                -webkit-transition: background-color .2s linear, opacity .2s linear;
                width: 15px;
                /* there must be 'right' or 'left' for ps__rail-y */
                right: 0;
                /* please don't change 'position' */
                position: absolute;
            }

            .ps--active-x > .ps__rail-x,
            .ps--active-y > .ps__rail-y {
                display: block;
                background-color: transparent;
            }

            .ps:hover > .ps__rail-x,
            .ps:hover > .ps__rail-y,
            .ps--focus > .ps__rail-x,
            .ps--focus > .ps__rail-y,
            .ps--scrolling-x > .ps__rail-x,
            .ps--scrolling-y > .ps__rail-y {
                opacity: 0.6;
            }

            .ps__rail-x:hover,
            .ps__rail-y:hover,
            .ps__rail-x:focus,
            .ps__rail-y:focus {
                background-color: #eee;
                opacity: 0.9;
            }

            /*
             * Scrollbar thumb styles
             */
            .ps__thumb-x {
                background-color: #aaa;
                border-radius: 6px;
                transition: background-color .2s linear, height .2s ease-in-out;
                -webkit-transition: background-color .2s linear, height .2s ease-in-out;
                height: 6px;
                /* there must be 'bottom' for ps__thumb-x */
                bottom: 2px;
                /* please don't change 'position' */
                position: absolute;
            }

            .ps__thumb-y {
                background-color: #aaa;
                border-radius: 6px;
                transition: background-color .2s linear, width .2s ease-in-out;
                -webkit-transition: background-color .2s linear, width .2s ease-in-out;
                width: 6px;
                /* there must be 'right' for ps__thumb-y */
                right: 2px;
                /* please don't change 'position' */
                position: absolute;
            }

            .ps__rail-x:hover > .ps__thumb-x,
            .ps__rail-x:focus > .ps__thumb-x {
                background-color: #999;
                height: 11px;
            }

            .ps__rail-y:hover > .ps__thumb-y,
            .ps__rail-y:focus > .ps__thumb-y {
                background-color: #999;
                width: 11px;
            }

            /* MS supports */
            @supports (-ms-overflow-style: none) {
                .ps {
                    overflow: auto !important;
                }
            }

            @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
                .ps {
                    overflow: auto !important;
                }
            }


            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes rotate-plan {
                0% {
                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                }
                25% {
                    transform: perspective(120px) rotateX(0deg) rotateY(-180deg);
                }
                50% {
                    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
                }
                75% {
                    transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
                }
                100% {
                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                }
            }

            @-webkit-keyframes rotate-plan {
                0% {
                    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
                }
                25% {
                    -webkit-transform: perspective(120px) rotateX(180deg) rotateY(0deg)
                }
                50% {
                    -webkit-transform: perspective(120px) rotateX(180deg) rotateY(180deg)
                }
                75% {
                    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(180deg)
                }
                100% {
                    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
                }
            }

            @-webkit-keyframes spin {
                0% {
                    -webkit-transform: rotate(0deg);
                }
                100% {
                    -webkit-transform: rotate(360deg);
                }
            }

        </style>
    </template>
</dom-module>`;
document.head.appendChild(documentContainer);
/*
`myscript-stylesheet` is the default stylesheet applied the the editor.

CSS variable | Default
-------------|--------
`--myscript-editor-background` | none
`--myscript-editor-color` | #FFFFFF
`--myscript-editor-line-pattern` | Classic notebook square pattern
`--myscript-editor-capture-background` | none;
`--myscript-editor-button-background` | #1A9FFF
`--myscript-editor-button-focus-background` | #1A9FFF
`--myscript-editor-button-disabled-background` | #F5F6F7
`--myscript-editor-error-background` | Error image
`--myscript-editor-loader` | Spinner
*/