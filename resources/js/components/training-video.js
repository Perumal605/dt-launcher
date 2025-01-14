import {LitElement, html, css} from 'lit';
import { property } from 'lit/decorators.js';

class VideoList extends LitElement {

  static get styles() {
    return css`
      video-container {
        max-width: 640px; /* Set the maximum width of the video */
        margin: auto; /* Center the video in its container */
      }
      iframe {
        width: 100%; /* Make the iframe responsive */
        height: auto; /* Maintain aspect ratio */
        border: none; /* Remove default border */
      }
    `;
  }

  @property({ type: Array })
  trainingData = [];

  connectedCallback() {
    debugger
    super.connectedCallback();
    const data = this.getAttribute('training-data');
    if (data) {
      try {
        this.trainingData = JSON.parse(data);
      } catch (e) {
        console.error('Error parsing training data:', e);
        this.trainingData = [];
      }
    }
  }

  handleVideoClick(training) {
    // Concatenate 'training' before the anchor value
    history.pushState({}, '', `training#${training.anchor}`);
  }


  render() {
    return html`
    <div>
      ${this.trainingData.map(training => html`
        <div id=${training.anchor}>
          ${training.name}<br>
          ${this.renderIframe(training.embed_video)}

          <br>
        </div>
      `)}
    </div>
  `;
  }

  renderIframe(embedCode) {
    // Use JavaScript's String replace method to remove backslashes
    embedCode = embedCode.replace(/\\+/g, '');
    const template = document.createElement('template');
    embedCode = embedCode.trim(); // Trim the string to remove any whitespace from the ends
    template.innerHTML = embedCode; // Set the innerHTML of the template to the embed code
    return html`${template.content}`; // Use the template's content for the HTML
  }


}

customElements.define('video-list', VideoList);
