import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from   './components/ViewStudent';
import { BrowserRouter } from 'react-router-dom';
function App()
 {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddStudent/>}/>
    <Route path='/search' element={<SearchStudent/>}/>
    <Route path='/delete' element={<DeleteStudent/>}/>
    <Route path='/viewAll' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}
export default App;
