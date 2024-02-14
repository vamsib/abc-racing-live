import { Route } from "./routes";

type PageTitles = {
    [key: string]: string;
}

export function getTitles(routes: Route[]): PageTitles {
    const titles: PageTitles = {};

    function getTitlesFromRoute(route: Route, prefix = "") {
        titles[`${prefix}${route.path}`] = route.title;
        (route?.children||[]).forEach(childRoute => {
            getTitlesFromRoute(childRoute, route.path === '/' ? '' : route.path);
        })
    }

    routes.forEach(route => getTitlesFromRoute(route))
    return titles;
}