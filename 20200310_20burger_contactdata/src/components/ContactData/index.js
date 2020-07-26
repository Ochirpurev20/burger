import React from "react";

import css from "./style.module.css";
import Button from "../General/Button";

class ContactData extends React.Component {
  state = {
    hayag: {
      name: null,
      city: null,
      street: null
    }
  };
  render() {
    return (
      <div className={css.ContactData}>
        <input type="text" name="name" placeholder="Таны нэр" />
        <input type="text" name="street" placeholder="Таны гэрийн хаяг" />
        <input type="text" name="city" placeholder="Таны хот" />
        <Button text="ИЛГЭЭХ" btnType="Success" />
      </div>
    );
  }
}

export default ContactData;
