import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <body>
     <div className='container'>
       <div className='kotak'>
         <div className='login'>
           <h1>login</h1>
           <ul><li><a href="">sign up</a></li></ul>
           <div className='input'>
             <input type="text"  placeholder='enter your email'/>
           </div>
           <div className='input'>
             <input type="text" placeholder='enter your password' />
           </div>
           <div className='sumbit'>
             <input type="sumbit" value={'login'} />
           </div>
         </div>
       </div>
     </div>
   </body>
  );
}

export default App;
