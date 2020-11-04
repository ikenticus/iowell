'use strict';

module.exports = {
    logger: {
        name: 'iowell',
        streams: [
            {
                path: '/tmp/iowell.log',
                level: 'error',
                type: 'rotating-file',
                rotateExisting: true,
                period: '1d',
                count: 7
            }
        ]
    },
    storage: 'storage.json',
};
