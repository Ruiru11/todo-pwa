import { useState } from "react"
import { CheckboxContainer } from "./styles"

export default function Checkbox({ checked, onChecked, uniqueID }) {    
    return (
        <CheckboxContainer checked={checked} onClick={() => onChecked(uniqueID)}>
            <section className="checked__span" />
        </CheckboxContainer>
    )
}
