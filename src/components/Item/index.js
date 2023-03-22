import './Item.css'

const Item = ({ nameType, amount, backColor, onDelete, id }) => {
    return (
      <div className='item'>
        <div className='header' style={{ backgroundColor: backColor }}>
          <h4>{nameType}</h4>
        </div>
        <div className='footer'>
          <h5>{amount}</h5>
          <button onClick={() => onDelete(id)}> <img src="/images/trash-icon.png" alt="Delete" className='trash-icon'/>
      </button>
        </div>
      </div>
    );
};

export default Item;
