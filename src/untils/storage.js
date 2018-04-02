import * as rquests from './ajax'

const url = 'http://192.168.1.5:8008';

export function BtnLogin ( api, options ){
    return rquests.postUrl(url, api, options);
}