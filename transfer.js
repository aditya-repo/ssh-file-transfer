const path = require('path')
const sftpCient = require('ssh2-sftp-client')
const dotenv = require('dotenv').config()

// 
const USERIDS = process.env.ID
const PASSWORD = process.env.PASSWORD
const SERVERIP = process.env.SERVERIP
const REMOTELOCATION = process.env.REMOTELOCATION


const config = {
    host : SERVERIP,
    port : '22',
    username : USERIDS,
    password : PASSWORD,
}

const inputFolderPath = path.join(__dirname, 'folder-to-transfer')

const remoteDirectory = REMOTELOCATION

// Create a sftp client instance
const sftp = new sftpCient()


const  uploadFolder = async ()=>{
    try {
        // Connection to the VPS via SFTP
        await sftp.connect(config)
        await sftp.uploadDir(inputFolderPath, remoteDirectory);

        console.log("Folder uploaded Successful");
    } catch (error) {
        console.error("Error uploading Files", error);
    } finally {
        await sftp.end();
    }
}

// uploadFolder()