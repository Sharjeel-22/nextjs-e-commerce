import Counter from "./counter";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Footer () {
    return ( 
        <div className="wrapper">
            <h2>Footer</h2>
            <Provider store={store}>
              <Counter />
            </Provider>
        </div>
     );
}