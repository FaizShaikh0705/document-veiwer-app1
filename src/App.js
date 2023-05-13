import './App.css';
import View from './components/View/View';
import Convertor from './components/convertor/Convertor';
import Editor from './components/editor/Editor';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
    <Nav/>
    <View/>
    <Editor/>
    <Convertor/>
    </>
  );
}

export default App;
