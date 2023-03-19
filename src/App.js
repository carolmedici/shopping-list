import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';




function App() {


  const [itensList, setItensList] = useState([])

  const onItemAdd = (itemList) => {
    console.log(itemList)
    setItensList([...itensList, itemList])
  }

  return (
    <div className="App">
      <Banner/>
      <Form forRegisteredItem={itemList => onItemAdd(itemList) }/>
    </div>
  );
}

export default App;
