import * as https from 'https';

const baseURL = 'https://www.breakingbadapi.com/api/characters?name=Walter';

async function requestPromise(path) {
    return new Promise((resolve, reject) => {
        https.get(path, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (error) => {
            reject(error);
        });
    });
}

(async function () {
    try {
        const result = await requestPromise(baseURL);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();