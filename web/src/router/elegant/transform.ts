/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { RouteRecordRaw, RouteComponent } from 'vue-router';
import type { ElegantConstRoute } from '@elegant-router/vue';
import type { RouteMap, RouteKey, RoutePath } from '@elegant-router/types';

/**
 * transform elegant const routes to vue routes
 * @param routes elegant const routes
 * @param layouts layout components
 * @param views view components
 */
export function transformElegantRoutesToVueRoutes(
  routes: ElegantConstRoute[],
  layouts: Record<string, RouteComponent | (() => Promise<RouteComponent>)>,
  views: Record<string, RouteComponent | (() => Promise<RouteComponent>)>
) {
  return routes.flatMap(route => transformElegantRouteToVueRoute(route, layouts, views));
}

/**
 * transform elegant route to vue route
 * @param route elegant const route
 * @param layouts layout components
 * @param views view components
 */
function transformElegantRouteToVueRoute(
  route: ElegantConstRoute,
  layouts: Record<string, RouteComponent | (() => Promise<RouteComponent>)>,
  views: Record<string, RouteComponent | (() => Promise<RouteComponent>)>
) {
  const LAYOUT_PREFIX = 'layout.';
  const VIEW_PREFIX = 'view.';
  const ROUTE_DEGREE_SPLITTER = '_';
  const FIRST_LEVEL_ROUTE_COMPONENT_SPLIT = '$';

  function isLayout(component: string) {
    return component.startsWith(LAYOUT_PREFIX);
  }

  function getLayoutName(component: string) {
    const layout = component.replace(LAYOUT_PREFIX, '');

    if(!layouts[layout]) {
      throw new Error(`Layout component "${layout}" not found`);
    }

    return layout;
  }

  function isView(component: string) {
    return component.startsWith(VIEW_PREFIX);
  }

  function getViewName(component: string) {
    const view = component.replace(VIEW_PREFIX, '');

    if(!views[view]) {
      throw new Error(`View component "${view}" not found`);
    }

    return view;
  }

  function isFirstLevelRoute(item: ElegantConstRoute) {
    return !item.name.includes(ROUTE_DEGREE_SPLITTER);
  }

  function isSingleLevelRoute(item: ElegantConstRoute) {
    return isFirstLevelRoute(item) && !item.children?.length;
  }

  function getSingleLevelRouteComponent(component: string) {
    const [layout, view] = component.split(FIRST_LEVEL_ROUTE_COMPONENT_SPLIT);

    return {
      layout: getLayoutName(layout),
      view: getViewName(view)
    };
  }

  const vueRoutes: RouteRecordRaw[] = [];

  // add props: true to route
  if (route.path.includes(':') && !route.props) {
    route.props = true;
  }

  const { name, path, component, children, ...rest } = route;

  const vueRoute = { name, path, ...rest } as RouteRecordRaw;

  try {
    if (component) {
      if (isSingleLevelRoute(route)) {
        const { layout, view } = getSingleLevelRouteComponent(component);
  
        const singleLevelRoute: RouteRecordRaw = {
          path,
          component: layouts[layout],
          children: [
            {
              name,
              path: '',
              component: views[view],
              ...rest
            } as RouteRecordRaw
          ]
        };
  
        return [singleLevelRoute];
      }
  
      if (isLayout(component)) {
        const layoutName = getLayoutName(component);
  
        vueRoute.component = layouts[layoutName];
      }
  
      if (isView(component)) {
        const viewName = getViewName(component);
  
        vueRoute.component = views[viewName];
      }
  
    }
  } catch (error: any) {
    console.error(`Error transforming route "${route.name}": ${error.toString()}`);
    return [];
  }

  
  // add redirect to child
  if (children?.length && !vueRoute.redirect) {
    vueRoute.redirect = {
      name: children[0].name
    };
  }
  
  if (children?.length) {
    const childRoutes = children.flatMap(child => transformElegantRouteToVueRoute(child, layouts, views));

    if(isFirstLevelRoute(route)) {
      vueRoute.children = childRoutes;
    } else {
      vueRoutes.push(...childRoutes);
    }
  }

  vueRoutes.unshift(vueRoute);

  return vueRoutes;
}

/**
 * map of route name and route path
 */
const routeMap: RouteMap = {
  "root": "/",
  "not-found": "/:pathMatch(.*)*",
  "403": "/403",
  "404": "/404",
  "500": "/500",
  "about": "/about",
  "administrative": "/administrative",
  "administrative_framework": "/administrative/framework",
  "administrative_message": "/administrative/message",
  "administrative_message-detail": "/administrative/message-detail/:id",
  "administrative_organization": "/administrative/organization",
  "administrative_post-manage": "/administrative/post-manage",
  "features": "/features",
  "features_captcha": "/features/captcha",
  "features_colorthief": "/features/colorthief",
  "features_draggable": "/features/draggable",
  "features_eye-dropper": "/features/eye-dropper",
  "features_flow": "/features/flow",
  "features_gantt": "/features/gantt",
  "features_lazyload": "/features/lazyload",
  "features_pickr": "/features/pickr",
  "features_print": "/features/print",
  "features_swiper": "/features/swiper",
  "features_viewer": "/features/viewer",
  "features_vue-directive": "/features/vue-directive",
  "features_vue-office": "/features/vue-office",
  "features_waterfall": "/features/waterfall",
  "home": "/home",
  "iframe-page": "/iframe-page/:url",
  "login": "/login",
  "system-manage": "/system-manage",
  "system-manage_internalization": "/system-manage/internalization",
  "system-manage_menu-manage": "/system-manage/menu-manage",
  "system-manage_operation-log": "/system-manage/operation-log",
  "system-manage_role-manage": "/system-manage/role-manage",
  "system-manage_user-manage": "/system-manage/user-manage",
  "user-center": "/user-center"
};

/**
 * get route path by route name
 * @param name route name
 */
export function getRoutePath<T extends RouteKey>(name: T) {
  return routeMap[name];
}

/**
 * get route name by route path
 * @param path route path
 */
export function getRouteName(path: RoutePath) {
  const routeEntries = Object.entries(routeMap) as [RouteKey, RoutePath][];

  const routeName: RouteKey | null = routeEntries.find(([, routePath]) => routePath === path)?.[0] || null;

  return routeName;
}