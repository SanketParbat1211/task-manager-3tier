##########################################################################################
****************************   make 3 tier Simple application  **************************
##########################################################################################



***************************** First Step  *************************************


1)  local project folder (3-tier-app) open on  VS Code   (File → Open Folder)

2)  Push this project folder (3-tier-app) to GitHub Repo

3)  make empty repo using name task-manager-3tier 

4) after creating repo copy repo url (https://github.com/SanketParbat1211/task-manager-3tier.git)

5)  open VS Code Terminal and run following command one by one

       -> git init
       -> git add .
       -> git commit -m "Initial commit"
       -> git branch -M main
       -> git remote add origin https://github.com/SanketParbat1211/task-manager-3tier.git
       -> git push -u origin main


6)    When you push your code to GitHub, Git may ask you to log in.

        Username: Enter your GitHub username. (SanketParbat1211)
        Password: Do not enter your GitHub account password. Instead, use a Personal Access Token (PAT).

             If you don't have a token:

                      Go to GitHub.
                      Click your profile photo → Settings.
                      Scroll down and click Developer settings.
                      Click Personal access tokens.
                      Select Tokens (classic).
                      Click Generate new token.
                      Select the repo checkbox.
                      Click Generate token.
                      Copy the token immediately and save it somewhere safe.
                      When Git asks for a password during git push, paste this token instead of your GitHub password. 



***************************** Second Step  *************************************


1)  Lunch EC2 Instance 
2)  Give name task-manager-server
3)  choose Ubuntu Server 22.04 LTS
4)  Instance type: t2.micro or t2.medium
5)  Network settings — "Edit inbound rule" :
            Type: SSH, Port: 22, Source: My IP
            Type: Custom TCP, Port: 4200, Source: Anywhere (0.0.0.0/0)
            Type: Custom TCP, Port: 5000, Source: Anywhere (0.0.0.0/0)
6)  Launch Instance.
7)  connect to terminal  using following command
      
     -> ssh -i "put .pem file access" ubuntu@EC2_public_ip
      
      my-exmple -->  ssh -i "C:\Users\LENOVO\OneDrive\aws-keys\awskey.pem" ubuntu@EC2_public_ip



***************************** Third Step (check app/website run locally) *************************************

                    ----  open 1 terminal  ----

1) update the System
     
       ->  sudo apt update

2) Install Node.js and  Git 
     
       -> sudo apt install -y nodejs npm git   

3) After complete please check versions
  
       -> node -v
       -> npm -v
       -> git --version

4) Install MongoDB

       -> wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
      
       -> sudo apt update
       -> sudo apt install -y mongodb-org

5) Start MongoDB 

       -> sudo systemctl start mongod
       -> sudo systemctl status mongod

6) Install Angular CLI

       -> sudo npm install -g @angular/cli



***************************** Fourth Step  *************************************


1)  code clone from GitHub Repo

       -> git clone https://github.com/SanketParbat1211/task-manager-3tier.git

2)  Check folder and files

       -> cd task-manager-3tier
       -> ls  (see frontend backend names) 


***************************** Fifth Step  *************************************


1)  Backend setup

        -> cd backend
        -> npm install
        -> cp .env.example .env

2)  Run Backend
  
        -> npm run dev

     Output --   MongoDB Connected: ...
                 Server running on port 5000       



***************************** sixth Step  *************************************

                    ----  open 2 another terminal  ----


1) connect to terminal  using following command
      
         -> ssh -i "put .pem file access" ubuntu@EC2_public_ip
      
         my-exmple -->  ssh -i "C:\Users\LENOVO\OneDrive\aws-keys\awskey.pem" ubuntu@EC2_public_ip 


2) Frontend Setup 
  
       -> cd task-manager-3tier/frontend
       -> npm install 


3) start Frontend 

       -> npm start -- --host 0.0.0.0

     output -- ✔ Compiled successfully.




***************************** Seventh Step  *************************************

1)  check website run on browser(chrome)

       -> http://<EC2-Public-IP>:4200


2)  if backend doent connect then do follow:
     
      -> nano ~/task-manager-3tier/frontend/src/environments/environment.ts 

     see code -- 

               export const environment = {
                    production: false,
                      apiUrl: 'http://localhost:5000/api'    ---chnge this localhost
                };

     changes -- change localhost into your ubutntu public ip

3)  retry again 




##########################################################################################
*********************************  Docker ****************************************
##########################################################################################








