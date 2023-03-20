import './Item.css'

const Item = ({image, nameType, amount, backColor}) =>{
return(
    <div className='item'>
        <div className='header' style={{backgroundColor: backColor}}>
        <img src={image} alt={nameType}/>
        </div>
        <div className='footer'> 
            <h4>{nameType}</h4>
            <h5>{amount}</h5>
        </div>
    </div>

)
}

export default Item