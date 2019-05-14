import React from "react";
import CodePush from "react-native-code-push";
import { Provider } from "react-redux";
import Routes from "~/routes";

import "~/config/ReactotronConfig";
import store from "~/store";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME;
})(App);

/**
 * Existe três opções de update:
 * MANUAL - faz uma tela checando se tem update e faz o update manual
 * ON_APP_RESUME - ele atualiza se o app ficar em background por mais de 10 segundos
 *                 ou se o usuário fechar e abrir o aplicativo
 * ON_APP_START - quando o app inicializa, em background ele faz o download do update,
 *                mas depois de baixado o usuário é voltado no começo perdendo o estado
 */
