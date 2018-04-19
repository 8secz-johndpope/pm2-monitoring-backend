const REQUEST_PROTOCOL = Symbol('REQUEST_PROTOCOL'),
    REQUEST_METHOD = Symbol('REQUEST_METHOD'),
    REQUEST_ROUTE = Symbol('REQUEST_ROUTE'),

    RequestProtocol = {
        HTTP: 'http',
        WEBSOCKET: 'ws'
    },

    RequestMethod = {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete'
    };

function descriptorHandler(descriptor, {protocol, method, route}) {
    descriptor.value[REQUEST_PROTOCOL] = protocol;
    descriptor.value[REQUEST_METHOD] = method;
    descriptor.value[REQUEST_ROUTE] = route;
    return descriptor;
}

const RequestMapping = ({protocol, method, route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.HTTP, method, route});
};

const GetMapping = ({route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.HTTP, method: RequestMethod.GET, route});
};

const PostMapping = ({route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.HTTP, method: RequestMethod.POST, route});
};

const PutMapping = ({route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.HTTP, method: RequestMethod.PUT, route});
};

const DeleteMapping = ({route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.HTTP, method: RequestMethod.DELETE, route});
};

const WsRequestMapping = ({protocol, method, route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.WEBSOCKET, method, route});
};

const WsGetMapping = ({route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.WEBSOCKET, method: RequestMethod.GET, route});
};

const WsPostMapping = ({route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.WEBSOCKET, method: RequestMethod.POST, route});
};

const WsPutMapping = ({route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.WEBSOCKET, method: RequestMethod.PUT, route});
};

const WsDeleteMapping = ({route}) => (target, name, descriptor) => {
    return descriptorHandler(descriptor, {protocol: RequestProtocol.WEBSOCKET, method: RequestMethod.DELETE, route});
};

export {

    REQUEST_METHOD,
    REQUEST_ROUTE,

    RequestProtocol,
    RequestMethod,

    RequestMapping,
    GetMapping,
    PostMapping,
    PutMapping,
    DeleteMapping,

    WsRequestMapping,
    WsGetMapping,
    WsPostMapping,
    WsPutMapping,
    WsDeleteMapping

};