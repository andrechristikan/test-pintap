import { Request } from 'express';

export interface IRequestApp extends Request {
    id?: string;
    timezone: string;
    timestamp: number;
    customLang: string[];
    version: string;
    repoVersion: string;

    user?: Record<string, any>;
    __class: string;
    __function: string;
}
