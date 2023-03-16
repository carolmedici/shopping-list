import "./Form.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";

const Form = () => {

const types = [
  'Fruits',
  'Vegetables',
  'Meat and Fish',
  'Snacks',
  'Beverages',
  'Frozen',
  'Dairy and Eggs',
  'Bakery',
  'Personal Care',
  'Household Essencials',
]


  return (
    <section className="form">
      <form>
        <h2>Fill in the data to create an item in the list</h2>
        <TextField label="Item" placeholder="Add item" />
        <TextField label="Amount" placeholder="Add the amount" />
        <DropdownList label="Type" itens={types}/>
      </form>
    </section>
  );
};

export default Form;
