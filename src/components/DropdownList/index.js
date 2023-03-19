import './DropdownList.css'


const DropdownList = (props) => {
    return(
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={event => props.toChange(event.target.value)} required={props.obligatory} value={props.result}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList