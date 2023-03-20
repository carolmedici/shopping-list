import './Item.css'

const Item = ({ nameType, amount, backColor}) =>{
return(
    <div className='item'>
        <div className='header' style={{backgroundColor: backColor}}>
        <h4>{nameType}</h4>
        </div>
        <div className='footer'> 
            
            <h5>{amount}</h5>
        </div>
    </div>

)
}

export default Item