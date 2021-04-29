import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import {createWindow} from "./window";

app.on('ready', createWindow);
