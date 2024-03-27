class ListComponent extends HTMLElement {
  constructor() {
    super();
    this.title = `Hello from list component`;
    this.countriesList = [{
      "name": "India"
    }, {
      "name": "USA"
    }];
  }

  mycustomMethod() {
    console.log('mycustomMethod: ', this.title);
  }

  connectedCallback() {
    const myTitle = this.title;
    let myinnerHTML = ``;

    myinnerHTML += `<h2>Welcome to ${this.title}</h2>`;

    this.countriesList.forEach(function (country) {
      myinnerHTML += `<div>${country.name}</div>`;

      // for (let key in country) {
      //   myinnerHTML += `<div>${key} : ${country[key]}</div>`;
      // }
    });

    this.innerHTML = myinnerHTML;
  }
  disconnectedCallback() {

  }
  adoptedCallback() {

  }
  attributeChangedCallback() {

  }
}

customElements.define('list-component', ListComponent);