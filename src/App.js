import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Animals} from "./pages/Animals";
import {Contact} from "./pages/Contact";
import {BrandAnimals} from "./pages/BrandAnimals";

function App() {

    return (
        <HashRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                    {/*<Home title={"tytuł"}/>*/}
                </Route>
                <Route exact path={"/about"}>
                    <About/>
                </Route>
                <Route exact path={"/animals"}>
                    <Animals/>
                </Route>
                <Route exact path={"/contact"}>
                    <Contact/>
                </Route>
                <Route exact path={"/animals/:brand"}>
                    <BrandAnimals/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
