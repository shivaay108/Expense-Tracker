import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';
function App() {
  const expenses = [
  {
    id  : "e1",
    title:'Car Insurance' , 
    amount:76323 , 
    date:new Date(2023,3,8)
  },
  {
    id  : "e2",
    title:'Bike Insurance' , 
    amount:76323 , 
    date:new Date(2023,1,8)
  },
  {
    id  : "e3",
    title:'Marital Insurance' , 
    amount:76323 , 
    date:new Date(2023,2,8)
  }
  ]
  const addExpenseHandler = (expense) => {
        console.log('in app.js')
        console.log(expense)
  }
  return (
    <div className="App">
    <NewExpense addExpense = {addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}
// props -> properties 
export default App;