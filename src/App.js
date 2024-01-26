import logo from './logo.svg';
import './App.css';

function App() {
  const learn_reactjs = "Xin chào các bạn";
  const student = {
    firstName: 'Nguyễn Viết',
    lastName: 'Đạt'
  }
  function getFullName() {
    return student.firstName + ' ' + student.lastName;
  }
  return (
    <div className="App">
      <h2>{learn_reactjs}</h2>
      <p>Xin chào bạn {student.firstName} {student.lastName}</p>
      <p>Rikkei chào bạn {getFullName()}</p>
    </div>
  );
}

export default App;
