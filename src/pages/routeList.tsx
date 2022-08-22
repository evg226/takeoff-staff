import {PageLayout} from "./PageLayout";
import {PageMain} from "./PageMain";
import {PageContacts} from "./PageContacts";
import {PageLogin} from "./PageLogin";
import {RouteProtected} from "./RouteProtected";

export const routeList = [
    {
        path: "/", name: "Root", element: <PageLayout/>, children: [
            {index: true, name: "Главная", element: <PageMain/>},
            {path: "contacts", name: "Контакты", element: <RouteProtected><PageContacts/></RouteProtected>},
            {path: "login", name: "Login", element: <PageLogin/>},
            {path: "*", name: "Страница не найдена", element: <h2>404 Not Found</h2>},
        ]
    }];
