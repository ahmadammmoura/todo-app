import ListContext from './context/list';
import ToDo from './components/todo.js';

export default function App(){
  
    return (
    <ListContext>
      <ToDo />
    </ListContext>
    );
  
}
