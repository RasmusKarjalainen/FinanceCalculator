const SelectMenu = ({language, object, name, reference}) => {
    return (
        <select name={name} ref={reference}>
            {Object.entries(object).map(function (value) {
                return <option value={value[1][language]}>{value[1][language]}</option>
            })}
        </select>
    )
}

export default SelectMenu