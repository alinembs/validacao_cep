import React from "react";
import Rotas from "../src/app/rotas"
import 'toastr/build/toastr.min'
import 'bootswatch/dist/pulse/bootstrap.css'
import 'toastr/build/toastr.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
function App() {
  return (
    <div className="container">
      <Rotas />
    </div>
  );
}

export default App;
