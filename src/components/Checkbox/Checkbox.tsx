import React from "react"
import { CheckboxType } from "./Checkbox.types"
import "./Checkbox.css"


const Button = ({label, size="md", bgColor, onClick, classes="", rounded="hard", isDisabled}:CheckboxType) => {

	return (
		<form action="">
  <label className="form-control">
    <input type="checkbox" name="checkbox" />
    Checkbox
  </label>

  <label className="form-control">
    <input type="checkbox" name="checkbox-checked" checked />
    Checkbox - checked
  </label>

  <label className="form-control form-control--disabled">
    <input type="checkbox" name="checkbox-disabled" disabled />
    Checkbox Disabled
  </label>

  <label className="form-control form-control--disabled">
    <input type="checkbox" name="checkbox-disabled-checked" checked disabled />
    Checkbox Disabled - checked
  </label>
</form>
	)
}



export default Button
