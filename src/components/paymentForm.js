import React, { Component } from "react";

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Mr.",
      name: "",
      email: "",
      password: "",
      cardNumber: "080-2222-4537",
      cardType: "visa",
      expirationDate: "yyyy-MM-dd",
    };
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCardDetailsChange = this.handleCardDetailsChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ selectedOption: e.target.value });
  }

  handleContactChange(e) {
    this.setState({
      name: e.target.name,
      email: e.target.email,
      password: e.target.password,
    });
  }

  handleCardDetailsChange(e) {
    this.setState({
      cardType: e.target.value,
      cardNumber: e.target.cardnumber,
      expirationDate: e.target.expirationdate,
    });
  }

  handleSubmit(e) {
    alert(
      `Your payment form has been submitted, ${this.state.selectedOption} ${this.state.name}`
    );
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Payment Form</h1>
          <p>
            Required fields are followed by
            <abbr title="required" aria-label="required">
              *
            </abbr>
          </p>
          <section>
            <h2>Contact Information</h2>
            <fieldset>
              <legend>Title</legend>
              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Mr."
                      name="title"
                      checked={this.state.selectedOption === "Mr."}
                      onChange={this.handleTitleChange}
                    />
                    Mr.
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Mrs."
                      name="title"
                      checked={this.state.selectedOption === "Mrs."}
                      onChange={this.handleTitleChange}
                    />
                    Mrs.
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Ms."
                      name="title"
                      checked={this.state.selectedOption === "Ms."}
                      onChange={this.handleTitleChange}
                    />
                    Ms.
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Non-Binary"
                      name="title"
                      checked={this.state.selectedOption === "Non-Binary"}
                      onChange={this.handleTitleChange}
                    />
                    Non-Binary
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Do not want to be identified"
                      name="title"
                      checked={
                        this.state.selectedOption ===
                        "Do not want to be identified"
                      }
                      onChange={this.handleTitleChange}
                    />
                    Do not want to be Identified
                  </label>
                </li>
              </ul>
            </fieldset>
            <p>
              <label>
                <span>Name:</span>
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                id="name"
                name={this.state.name}
                onChange={this.handleContactChange}
              />
            </p>
            <p>
              <label>
                <span>Email:</span>
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
              <input
                type="email"
                id="email"
                email={this.state.email}
                onChange={this.handleContactChange}
              />
            </p>
            <p>
              <label>
                <span>Password:</span>
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
              <input
                type="password"
                id="pwd"
                password={this.state.password}
                onChange={this.handleContactChange}
              />
            </p>
          </section>
          <section>
            <h2>Payment Information</h2>
            <p>
              <label>
                <span>Card Type:</span>
                <abbr title="required" aria-label="required">
                  *
                </abbr>

                <select
                  value={this.state.cardType}
                  onChange={this.handleCardDetailsChange}
                >
                  <option value="visa">Visa</option>
                  <option value="amex">American Express</option>
                  <option value="mc">Master Card</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                <span>Card Number:</span>
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
              <input
                type="tel"
                name="user_cardnumber"
                cardnumber={this.state.cardNumber}
                onChange={this.handleCardDetailsChange}
              />
            </p>
            <p>
              <label>
                <span>Expiration Date:</span>
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
              <input
                type="date"
                name="user_expirationDate"
                expirationdate={this.state.expirationDate}
                onChange={this.handleCardDetailsChange}
              />
            </p>
            <p>
              <button type="submit">Validate Payment</button>
            </p>
          </section>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
