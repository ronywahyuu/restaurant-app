class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .error-message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 2rem;
        width: 100%;
        height: 100vh;
        text-align: center;
      }
      .error-message img {
        width: 200px;
        height: 200px;
      }
      .error-message p {
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 1rem;
      }
      .error-message span {
        font-size: 1rem;
        font-weight: 400;
        margin-top: 0.5rem;
        color: #f44336;
      }
    </style>
      <div class="error-message">
        <img src="./images/serverdown.svg" alt="Server Down" />
        
        <p>Something went wrong</p>
        <span>
          Failed to load data from server
        </span>
      </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
