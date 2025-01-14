import "@disciple.tools/web-components";

/**
 * Import Spectrum Web Components
 */
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';
import '@spectrum-web-components/overlay/sp-overlay.js';
import '@spectrum-web-components/icon/sp-icon.js';
import '@spectrum-web-components/icons-ui/icons/sp-icon-triple-gripper.js';
import '@spectrum-web-components/action-group/sp-action-group.js';
import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/button/sp-close-button.js';
import "@spectrum-web-components/progress-circle/sp-progress-circle.js";

/**
 * Imports
 */
import {loaded} from "./helpers.js";

import "./components/app-grid.js";
import "./components/hidden-app-grid.js";
import "./components/home-footer.js";
import "./components/menu.js";
import "./components/training-video.js"

/**
 * CSS
 */
import "../css/plugin.css";

/**
 * Bootstrap the application
 */
loaded(() => {
    document.body.classList.add("dom-loaded");
});