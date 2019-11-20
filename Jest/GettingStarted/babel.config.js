module.exports = api => {
    const isAPI = api.env('test');
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current'
                    }
                }
            ]
        ]
    }
}
