import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Article from "./pages/article";
import Project from "./pages/project";
import Member from "./pages/member";
import Recruit from "./pages/recruit";
import PageCTA from "./pages/PageCTA";


function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/article">
                    <Article />
                </Route>
                <Route path="/project">
                    <Project />
                </Route>
                <Route path="/member">
                    <Member />
                </Route>
                <Route path="/recruit">
                    <Recruit />
                </Route>
                <Route path="/page-cta">
                    <PageCTA />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
