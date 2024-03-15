# SSH File Transfer
Easy way to transfer files and folder to remote server without manulally doing it by terminal or github, and executing specific command like reloading and restarting server.

## Transfer Over SFTP Protocol
### How it works?
```transfer.js``` checks the path of Input Folder to transfer as ```INPUTLOCATIONPATH``` is mentioned in ```.env``` file, if not mentioned then the data inside the ```folder-to-transfer``` get transfer to server destination path.

### Installation & Execution
To run SSH File Transfer locally, follow these steps:
1. Fork the repository using the ```fork``` button on the top right
2. Clone the repository using : ```git clone https://github.com/your-username/ssh-file-transfer.git```. Change ```your-username``` as your github username.
3. Install the required dependencies as : ```npm install```. A ```node_modules``` folder will be created.
4. Check the ```.env``` file, you have to replace your ```SERVERIP``` and ```PASSWORD``` of your server (anywhere like VPS or cloud instance).
5. If your username ```ID``` is other then ```root```, then mention your ```ID``` as well otherwise comment it out.
6. If your local folder destination is other then ```folder-to-transfer``` inside this project, then mention your ```INPUTLOCATIONPATH``` otherwise don't mention it.
7. Mention your absolute destination path of your server where folder or file has to be transfer as ```REMOTELOCATIONPATH```.
8. Now you are about to transfer your first data my running the ```npm transfer``` command on your terminal.

>**Note**: To find your absolute destination path, just enter ```pwd``` on your terminal, it shows your current directory absolute path.

***

Show some love by giving star to this repo.
