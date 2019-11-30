import express from 'express';

const baseGetRouteAndHandler = (app: express.Application) => {
    app.get('/', (request, response) => {
        console.log(`${ request.url }: Base get requested`);
        response.send('This is a base URL. Use proper requests URL');
    });
};

export default baseGetRouteAndHandler;
