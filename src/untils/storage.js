import * as rquests from './ajax'

const url = 'http://127.0.0.1:8008';

export function BtnLogin ( args ){
    return rquests.postUrl(url, args);
}