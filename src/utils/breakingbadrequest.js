import * as https from 'https';

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

export async function BreakingBadData(characterName) {
    try {
        const baseURL = 'https://www.breakingbadapi.com/api/characters?name=' + characterName;
        const data = await requestPromise(baseURL);
        return JSON.parse(data.toString());

    } catch (error) {
        console.error(error);
    }
}
