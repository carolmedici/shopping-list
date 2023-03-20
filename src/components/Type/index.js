import Item from '../Item'
import './Type.css'

const Type = (props) => {
    return (

      
        (props.itensList.length > 0) ? <section className='type' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.firstColor}}>{props.nameType}</h3>
            <div className='itensList'>
                {props.itensList.map(itemList => <Item backColor={props.firstColor} key={itemList.nameType} nameType={itemList.nameType} amount={itemList.amount} image={itemList.image}/>)}
                </div>
          
        </section>
        :''
    )

}

export default Type