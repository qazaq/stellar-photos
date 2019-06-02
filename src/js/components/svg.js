import { html } from 'lit-html';

const svgDefs = () => html`
  <svg class="hidden">
    <defs>
      <symbol id="icon-location" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </symbol>

      <symbol id="icon-image" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </symbol>

      <symbol id="icon-search" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <title>Search</title>
        <circle cx="10.5" cy="10.5" r="7.5"></circle>
        <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
      </symbol>

      <symbol id="icon-temperature" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
      </symbol>

      <symbol id="icon-heart" viewBox="0 0 24 24" stroke="#DD2424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path style="fill: #DD2424;" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </symbol>

      <symbol id="icon-cross" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <title>Close</title>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </symbol>

      <symbol id="icon-download" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <title>Download Photo</title>
        <path d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path>
        <polyline points="8 12 12 16 16 12"></polyline>
        <line x1="12" y1="2" x2="12" y2="16"></line>
      </symbol>

      <symbol id="icon-dropbox" fill="#fff" viewBox="0 0 32 32">
        <title>Save to Dropbox</title>
        <path d="M23 1l-7 6 9 6 7-6z"></path>
        <path d="M16 7l-7-6-9 6 7 6z"></path>
        <path d="M25 13l7 6-9 5-7-6z"></path>
        <path d="M16 18l-9-5-7 6 9 5z"></path>
        <path d="M22.755 26.424l-6.755-5.79-6.755 5.79-4.245-2.358v2.934l11 5 11-5v-2.934z"></path>
      </symbol>

      <symbol id="icon-anchor" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <title>View on Unsplash</title>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </symbol>

      <symbol id="icon-settings" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <title>Options</title>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </symbol>

      <symbol id="icon-info" viewBox="0 0 24 24" fill="none"
        stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <title>Info</title>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="8"></line>
      </symbol>

      <symbol id="icon-facebook" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-facebook">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1
        1 0 0 1 1-1h3z"></path>
      </symbol>

      <symbol id="icon-twitter" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" class="feather feather-twitter">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>

      <symbol id="icon-cloud" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></symbol>

      <symbol id="icon-umbrella" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" class="feather feather-umbrella"><path d="M23
        12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path></symbol>

      <symbol id="icon-camera"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="feather
        feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0
        1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13"
        r="4"></circle></symbol>

      <symbol id="icon-eye"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="feather
        feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11
        8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></symbol>

      <symbol id="icon-onedrive" viewBox="0 0 32 32">
      <title>onedrive</title>
      <path d="M10.965 25.887c-1.884-0.471-2.933-1.968-2.936-4.189-0.001-0.71 0.050-1.051 0.228-1.507 0.435-1.12 1.585-1.965 3.099-2.276 0.753-0.155 0.986-0.321 0.986-0.705 0-0.121 0.090-0.48 0.199-0.799 0.498-1.447 1.42-2.653 2.405-3.147 1.031-0.516 1.551-0.633 2.798-0.626 1.771 0.009 2.655 0.394 3.89 1.691l0.68 0.714 0.609-0.211c2.947-1.020 5.885 0.716 6.122 3.617l0.065 0.794 0.58 0.208c1.657 0.594 2.436 1.841 2.295 3.674-0.092 1.199-0.653 2.156-1.541 2.631l-0.417 0.223-9.276 0.018c-7.128 0.014-9.394-0.012-9.785-0.109v0zM3.226 24.561c-1.131-0.284-2.328-1.339-2.89-2.546-0.319-0.685-0.336-0.785-0.336-1.996 0-1.152 0.027-1.337 0.281-1.909 0.535-1.206 1.559-2.077 2.845-2.419 0.271-0.072 0.526-0.188 0.567-0.256s0.085-0.443 0.099-0.831c0.090-2.412 1.587-4.538 3.678-5.221 1.13-0.369 2.612-0.403 3.841 0.116 0.39 0.165 0.346 0.2 1.17-0.942 0.487-0.675 1.41-1.39 2.216-1.818 0.87-0.462 1.775-0.675 2.857-0.672 3.024 0.008 5.63 2.007 6.594 5.058 0.308 0.975 0.293 1.248-0.071 1.256-0.159 0.004-0.613 0.096-1.009 0.205l-0.721 0.199-0.658-0.695c-1.855-1.96-4.882-2.384-7.456-1.044-1.028 0.536-1.854 1.305-2.478 2.307-0.445 0.714-1.012 2.047-1.012 2.378 0 0.235-0.18 0.352-0.948 0.618-2.378 0.824-3.766 2.728-3.765 5.163 0 0.887 0.216 1.971 0.516 2.592 0.113 0.234 0.176 0.457 0.14 0.495-0.092 0.097-3.050 0.064-3.459-0.038v0z"></path>
      </symbol>

      <symbol id="icon-google-drive" viewBox="0 0 32 32">
        <title>google-drive</title>
        <path d="M13.688 20l-5.769 10h18.144l5.769-10z"></path>
        <path d="M31.012 18l-9.238-16h-11.55l9.238 16z"></path>
        <path d="M9.069 4l-9.069 15.712 5.775 10 9.069-15.713z"></path>
      </symbol>

    </defs>
  </svg>
`;

export default svgDefs;
