import Response from '../utils/Response.js';
import {getProcessesConfig} from '../utils/ProcessUtil.js';
import PMUtil from '../utils/PMUtil.js';

async function getProcesses() {

    const data = getProcessesConfig();

    if (!data) {
        return Response.buildSuccess([]);
    }

    try {

        // get pm2 list data
        const processList = await PMUtil.list();

        return Response.buildSuccess(data.filter(item => item).map(item => {
            const index = processList.findIndex(p => p && p.name === item.name);
            return index === -1 ? item : {
                ...item,
                pid: processList[index].pid,
                pm_id: processList[index].pm_id,
                status: processList[index].pm2_env.status,
                monit: processList[index].monit
            };
        }));

    } catch (e) {
        return Response.buildError(e);
    }

};

async function start(options) {
    try {
        const proc = await PMUtil.start(options);
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

async function startByName(processName) {

    const data = getProcessesConfig();
    let index;

    if (!data || data.length < 1
        || (index = data.findIndex(item => item.name === processName) === -1)) {
        return Response.buildParamError('Process Name Not Found');
    }

    return start(data[index]);

};

async function stopById(processId) {
    try {
        const proc = await PMUtil.stopById(processId);
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

async function stopAll() {
    try {
        const proc = await PMUtil.stopAll();
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

async function restartById(processId) {
    try {
        const proc = await PMUtil.restartById(processId);
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

async function restartAll() {
    try {
        const proc = await PMUtil.restartAll();
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

async function delById(processId) {
    try {
        const proc = await PMUtil.delById(processId);
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

async function delAll() {
    try {
        const proc = await PMUtil.delAll();
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

async function reloadById(processId) {
    try {
        const proc = await PMUtil.reloadById(processId);
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

async function reloadAll() {
    try {
        const proc = await PMUtil.reloadAll();
        return Response.buildSuccess(proc);
    } catch (e) {
        return Response.buildError(e);
    }
};

export default {
    getProcesses,
    start,
    startByName,
    stopById,
    stopAll,
    restartById,
    restartAll,
    delById,
    delAll,
    reloadById,
    reloadAll
};
