
import './App.css';

import Customer from './components/Customer';

const customers =[
  {
  'id':1,
  'image':'http://placeimg.com/64/64/any',
  'name': '박규진',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'},

  {
    'id':2,
    'image':'http://placeimg.com/64/64/any',
    'name': '박세진',
    'birthday':'900215',
    'gender':'여자',
    'job':'직장인'},

    {
      'id':3,
      'image':'http://placeimg.com/64/64/any',
      'name': '박은진',
      'birthday':'860603',
      'gender':'여자',
      'job':'직장인'}


]

function App() {
  return (
    <div>
  {
    customers.map(c =>{
      return(
      <Customer
      key={c.id}
      id={c.id}
      name={c.name}
      birthday={c.birthday}
      gender={c.gender}
      job={c.job}
      image={c.image}

      
      />
      );
    })
  }
</div>

  );
}

export default App;
