const { desktopCapturer , app, BrowserWindow } = require('electron');
const path = require('path');
const {ipcMain} = require('electron')
 


const ejse = require('ejs-electron')

 
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}
const a =[];
var b =[] ;
var comp=0;


function reloadsource()
{
  desktopCapturer.getSources({ types: ['window', 'screen'] }).then(  sources => {
  
    const tempa =[];
b =[] ;
    for (const source of sources) {
      //console.log(source.name);
      tempa.push(source.name);
      b.push(source.id);
    
      
    
      
       
    }

    
         
      
    //mainWindow.webContents.send('SET_SOURCE', tempb[0]);
    mainWindow.webContents.send('screens', tempa);   
     
    //mainWindow.webContents.send('screens', a);
    
   
    mainWindow.webContents.send('focusstat', 0);
    
     
    //comp = 1;

  })

}

const createWindow = () => {
  // Create the browser window.
    mainWindow = new BrowserWindow({
    
    width: 800,
    height: 570,
    icon: __dirname + '/milky.ico' ,
    frame: false,
    alwaysOnTop:  true ,
   
     minimizable: false,
      title: 'Picture-In-Picture', 
       
      titleBarStyle: 'hidden', 
      
  titleBarOverlay: false,
       type: 'desktop',
       acceptFirstMouse: true ,
    webPreferences:{
      nodeIntegration: true ,
      contextIsolation: false,
      enableRemoteModule: true,
      devTools: false
      
    }
  })

  
  //mainWindow.titleBarOverlay=true;

  // and load the index.html of the app.
 
  //mainWindow.setIgnoreMouseEvents(true)
  //win.setWindowButtonVisibility(true)
  
  mainWindow.loadFile(path.join(__dirname, 'index.ejs'));

  //mainWindow.setTitleBarOverlay(true)
  
   
  // Open the DevTools.
  mainWindow.webContents.closeDevTools();
  mainWindow.webContents.send('screens', 34);

  desktopCapturer.getSources({ types: ['window', 'screen'] }).then(  sources => {
    
    for (const source of sources) {
      //console.log(source.name);
      a.push(source.name);
      b.push(source.id);
    
      
    
      
       
    }

    
         
      
    mainWindow.webContents.send('SET_SOURCE', b[0]);
    mainWindow.webContents.send('screens', a);   
      mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.send('SET_SOURCE', b[0]);
      console.log("hellooooo");
      mainWindow.webContents.send('screens', a);

      
      mainWindow.webContents.send('focusstat', 0);
     
      
    })
    //mainWindow.webContents.send('screens', a);
    
   
    mainWindow.webContents.send('focusstat', 0);
    
     
    //comp = 1;

  })
  
  

  
  //the code to send  after age loads
  // mainWindow.webContents.on('did-finish-load', () => {
  //   a.forEach(element => {
  //     mainWindow.webContents.send('cpu', element);
  //   });
    
  // })

  //yuppppppppppppppppppppp
  
 
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

ipcMain.on("changescreen", (event, arg) => {
  console.log(b[arg]);
  event.sender.send('SET_SOURCE', b[arg]);
  
   

  // Event emitter for sending asynchronous messages
  //event.sender.send('asynchronous-reply', 'async pong')
})


//trafic

ipcMain.on("trafic", (event, arg) => {


  if(arg)
  {
    console.log("we shutting down");
  mainWindow.destroy();
  }
   else
   {
  mainWindow.minimize();
  
   }
   
  
   

  // Event emitter for sending asynchronous messages
  //event.sender.send('asynchronous-reply', 'async pong')
})


ipcMain.on("reloads", (event, arg) => {


  if(arg)
  {
    console.log("we reloadin");
    reloadsource();
  }
   
   
  
   

  // Event emitter for sending asynchronous messages
  //event.sender.send('asynchronous-reply', 'async pong')
})
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


app.on('browser-window-focus', (event, win) => {
  console.log('browser-window-focusd' );
  mainWindow.webContents.send('focusstat', 1);
});

app.on('browser-window-blur', (event, win) => {
  console.log('browser-window-blured' );
  mainWindow.webContents.send('focusstat', 0);
});




//npm run build-installer