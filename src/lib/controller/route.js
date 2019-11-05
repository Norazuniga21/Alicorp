import Home from '../view/home.js';
// import Login from '../view/login.js';

//Creando objeto de los componentes
const components = {
    // login: Login,
    home: Home,
    login: Login,
};
export const changeView = (route) => {
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch (route) {
        // case '#/':
        //     container.appendChild(components.login());
        //     break;
        case '#/home':
            container.appendChild(components.home());
            break;
    } switch (route) {
      case '#/login':
          container.appendChild(components.login());
          break;
  }  
};