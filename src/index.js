import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Component/App';



const container = document.getElementById("root");

const root = createRoot(container);

class Application extends React.Component{
  render(){
    return(
      <div>
        <App/>
      </div>
    );
  }
}
root.render(
<React.StrictMode>
  
  <Application/>
  
</React.StrictMode>

  );

