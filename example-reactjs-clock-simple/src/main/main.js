'use strict';

import electron from 'electron';
const app = electron.app;
const Menu = electron.Menu;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
import CrashReporter from 'crash-reporter';

let mainWindow;
let mainMenu;

app.on('ready', () => {
	// width: 800, height: 600 are the default values if opmitted during creation
	mainWindow = new BrowserWindow({
		title: `${app.getName()} - ${app.getVersion()}`
	});

	mainWindow.loadURL(`file://${__dirname}/../app/index.html`);

	mainWindow.on('close', () => {
		mainWindow = null;
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
