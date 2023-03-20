import './Type.css'

const Type = (props) => {
    return (

      
        <section className='type' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.firstColor}}>{props.nameType}</h3>
        </section>
    )

}

export default Type