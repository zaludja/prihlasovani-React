import InputField from "./InputField";
import React from "react";
import { Checkbox } from 'antd';

function CreateList() {


  return (
    <>
      <div className="Create-field">
        <InputField label="Titul" type="text" id="titul" placeholder="Zadejte titul"/>
        <InputField label="Jméno" type="text" id="jméno" placeholder="Zadejte jméno"/>
        <InputField label="Příjmení" type="text" id="příjmení" placeholder="Zadejte příjmení"/>
        <Checkbox>Muž</Checkbox><Checkbox>Žena</Checkbox>
        <InputField label="Příjmení" type="" id="příjmení" placeholder="Zadejte příjmení"/>
      </div>

    </>
  );
}

export default CreateList;