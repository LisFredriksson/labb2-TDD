
import express, { Request, Response } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: any): void => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
};
