import React from "react";
import FormBox from "./FormBox";
import Button from "./Button";

class LocalizationsPanel extends React.Component {
  render() {
    return (
        <div className="wide-div">
          <FormBox title="Lokalizacja" description="Gdzie chcesz coś zorganizować?"/>
          <FormBox title="Data początku" description="Dodaj daty"/>
          <FormBox title="Data końca" description="Dodaj daty"/>
          <FormBox title="Ilość osób" description="Jak wiele osób chciał(a)byś zaprosić?"/>
          <Button>Szukaj</Button>
        </div>
    );
  }
}

export default LocalizationsPanel;