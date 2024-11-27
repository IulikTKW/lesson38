import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />      
    </div>
  );
}

export default App;


//1. de create o forma
//2. buttonul submit din forma seteaza statu de reducer
//3. obiectul din reducer trebuie sa aiba cate o cheie pentru fiecare input din forma
//4. dupa submit, afisam pe pagina datele