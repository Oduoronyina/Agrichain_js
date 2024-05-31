import Product1 from "./Product1";
import PropTypes from "prop-types";
import styles from "./ContentWrapper.module.css";

const ContentWrapper = ({ className = "" }) => {
  return (
    <div className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.formFields}>
          <div className={styles.billingInformationParent}>
            <h2 className={styles.billingInformation}>Billing Information</h2>
            <div className={styles.nameFields}>
              <div className={styles.nameInputs}>
                <div className={styles.firstNameField}>
                  <div className={styles.firstName}>First name</div>
                  <div className={styles.firstNameInput}>
                    <div className={styles.inputField}>
                      <input
                        className={styles.filledgmailcom}
                        placeholder="Your first name"
                        type="text"
                      />
                    </div>
                    <div className={styles.streetAddress}>Street Address</div>
                  </div>
                </div>
                <div className={styles.nameLabels}>
                  <div className={styles.lastName}>Last name</div>
                  <div className={styles.inputField1}>
                    <input
                      className={styles.filledgmailcom1}
                      placeholder="Your last name"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.nameLabels1}>
                  <div className={styles.companyNameOptionalContainer}>
                    <span>{`Company Name `}</span>
                    <span className={styles.optional}>(optional)</span>
                  </div>
                  <div className={styles.inputField2}>
                    <input
                      className={styles.filledgmailcom2}
                      placeholder="Company name"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.inputField3}>
                <input
                  className={styles.email}
                  placeholder="Email"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.locationFields}>
              <div className={styles.locationInputs}>
                <div className={styles.locationSelects}>
                  <div className={styles.countryRegionField}>
                    <div className={styles.countryRegionSelect}>
                      <div className={styles.countryRegion}>
                        Country / Region
                      </div>
                      <div className={styles.countryDropdown}>
                        <div className={styles.inputField4}>
                          <div className={styles.select}>Select</div>
                          <div className={styles.chevronDownWrapper}>
                            <img
                              className={styles.chevronDownIcon}
                              alt=""
                              src="/chevron-down-3.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.email1}>Email</div>
                      </div>
                    </div>
                    <div className={styles.stateDropdown}>
                      <div className={styles.states}>States</div>
                      <div className={styles.inputField5}>
                        <div className={styles.selects}>Selects</div>
                        <div className={styles.chevronDownContainer}>
                          <img
                            className={styles.chevronDownIcon1}
                            alt=""
                            src="/chevron-down-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputField6}>
                    <input
                      className={styles.email2}
                      placeholder="Email Address"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.shippingAddress}>
                  <input className={styles.checkbox} type="checkbox" />
                  <div className={styles.shipToA}>
                    Ship to a different address
                  </div>
                </div>
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.zipCodeField}>
                  <div className={styles.zipCode}>Zip Code</div>
                </div>
                <div className={styles.zipCodeInput}>
                  <div className={styles.inputField7}>
                    <div className={styles.zipCode1}>Zip Code</div>
                  </div>
                </div>
                <div className={styles.phoneField}>
                  <div className={styles.phone}>Phone</div>
                  <div className={styles.inputField8}>
                    <input
                      className={styles.email3}
                      placeholder="Phone number"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formFieldsChild} />
          <div className={styles.additionalInfoParent}>
            <h2 className={styles.additionalInfo}>Additional Info</h2>
            <div className={styles.orderNotesField}>
              <div className={styles.orderNotesOptional}>
                Order Notes (Optional)
              </div>
              <div className={styles.inputField9}>
                <input
                  className={styles.filledgmailcom3}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orderSummery}>
          <div className={styles.orderSummeryChild} />
          <div className={styles.orderSummeryItem} />
          <div className={styles.summaryContent}>
            <h3 className={styles.orderSummery1}>Order Summery</h3>
            <div className={styles.product}>
              <Product1
                image="/image2@2x.png"
                greenCapsicum="Green Capsicum"
                x5="x5"
                separator="70.00"
              />
              <Product1
                image="/image-13@2x.png"
                greenCapsicum="Red Capsicum"
                x5="x1"
                separator="14.00"
                propMinWidth="103px"
                propMinWidth1="12px"
              />
            </div>
            <div className={styles.pricing}>
              <div className={styles.subtotal}>
                <div className={styles.subtotal1}>Subtotal:</div>
                <div className={styles.priceValue}>84.00</div>
              </div>
              <div className={styles.shipping}>
                <div className={styles.shipping1}>Shipping:</div>
                <div className={styles.free}>Free</div>
              </div>
              <div className={styles.total}>
                <div className={styles.total1}>Total:</div>
                <div className={styles.totalValue}>
                  <b className={styles.totalAmount}>84.00</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.payment}>
            <h3 className={styles.paymentMethod}>Payment Method</h3>
            <div className={styles.paymentOptions}>
              <div className={styles.radio}>
                <div className={styles.normal} />
                <div className={styles.normal1} />
              </div>
              <div className={styles.cashOnDelivery}>Cash on Delivery</div>
            </div>
          </div>
          <button className={styles.button}>
            <b className={styles.normal2}>Place Order</b>
          </button>
        </div>
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper;
