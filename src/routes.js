import App from "./App";
import { GoogleBooks } from "./pages/GoogleBooks";
import { Home } from "./pages/Home";
import Product from "./pages/Product";

const routes=[
    {
      path: "/",
      element: <App />,
      children: [
        {
            path:"home",
            element:<Home/>
        },
        {
            path:"product",
            element:<Product/>
        },
        {
            path:"books",
            element:<GoogleBooks/>
        },

        

       
    ]
}
    ]

    export default routes