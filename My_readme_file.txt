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


evry time if u stop your instance then restart the instance the new public ip created so after that u need to change following file and add public ip there


##)  if backend doent connect then do follow:
     
      -> nano ~/task-manager-3tier/frontend/src/environments/environment.ts 

     see code -- 

               export const environment = {
                    production: false,
                      apiUrl: 'http://localhost:5000/api'    ---chnge this localhost
                };

     changes -- change localhost into your ubutntu public ip

 ##)  after changing file do

    ctrl S --->  ctrl X


***********************  1st Step  *************************************

1)  Ubuntu update 

         -> sudo apt update
         -> sudo apt upgrade -y


2)  Docker Package Install
         
         -> sudo apt install -y ca-certificates curl


3)  Create Docker GPG key directory
 
         -> sudo install -m 0755 -d /etc/apt/keyrings


4)  Download Docker GPG key  
         
         -> sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
         
         -> sudo chmod a+r /etc/apt/keyrings/docker.asc 


5)  Add Docker repository  

         -> echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


6)  Repository update

         -> sudo apt update

7)  Docker Install 

         -> sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin


8)  Docker Version 
   
         -> docker --version


9)  Docker Compose version

         -> docker compose version


10)  Docker service start

         -> sudo systemctl start docker


11)  Docker automatically start after EC2 restart

         ->  sudo systemctl enable docker

       ** Status check  

         -> sudo systemctl status docker   (Active and running)

           ~q  --exit

12)  Docker use without Sudo

         -> sudo usermod -aG docker $USER
         -> newgrp docker


13)  check the containers

         -> docker ps

14)  Docker Test 

         -> docker run hello-world

         *** output  -->   docker run hello-world



***********************  2st Step  *************************************

1)  if you see the medium tier EC2 instance memory full then check the memory
          -> df -h

2)  Remove unwanted files
          -> rm -rf backend/node_modules
          -> rm -rf frontend/node_modules
          -> docker system prune -a -f
          -> sudo apt clean
          -> sudo apt autoremove -y

3)  After using above commands still getting error then 

      ++ check where exactly memory full                                 
           -> du -sh ~/task-manager-3tier/* 2>/dev/null                ------  Show the size of each item in the project folder
           -> du -sh /var/lib/docker 2>/dev/null                       ------  Check how much disk space Docker is using.
           -> du -sh /var/lib/containerd 2>/dev/null                   ------  Check how much disk space Docker is using.
           -> sudo du -sh /* 2>/dev/null | sort -rh | head -15         ------  This displays a list of the largest directories in the entire system



***********************  3st Step  *************************************

1)  If storage memory full then Increase EC2 Instance EBS volume size 8GB to 20 GB

2)  Once done increase size then follow command in terminal
            -> lsblk                           ------  Show the disk partitions and their sizes.
            -> sudo growpart /dev/xvda 1       ------  Resize partition 1 on disk /dev/xvda to use the available space.
            -> sudo resize2fs /dev/root        ------  Resize the filesystem to match the expanded partition size.
            -> df -h                           ------  Verify if the disk resize was done properly.

3)  After successfully Added space then rerun Docker file and check the output
            -> cd ~/task-manager-3tier
            -> docker compose up --build
         
     --- after you can copy public ip and check on browser using ( ex. http://13.201.100.207:4200/ )




##########################################################################################
*********************************  Jenkins ****************************************
##########################################################################################

evry time if u stop your instance then restart the instance the new public ip created so after that u need to change following file and add public ip there


##)  if backend doent connect then do follow:
     
      -> nano ~/task-manager-3tier/frontend/src/environments/environment.ts 

     see code -- 

               export const environment = {
                    production: false,
                      apiUrl: 'http://localhost:5000/api'    ---chnge this localhost
                };

     changes -- change localhost into your ubutntu public ip




***********************  1st Step  *************************************


b42a7a9260cb46c892503ba4c8daf322  ----jenkin password while installing 
  
username --sanketlp
pass -- sanketlp@123
email -- sanketparbat8@gmail.com



***********************  2nd Step  *************************************


1) System update
     -> sudo apt update

2) Java install
     -> sudo apt install -y fontconfig openjdk-17-jre
     -> java -version

3) MAke folder for Jenkins keyring
     -> sudo mkdir -p /etc/apt/keyrings

4) Download Valid Jenkins signing key
     -> sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian/jenkins.io-2026.key

5) Add Jenkins repository
     -> echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

6) Update Package List Again 
     -> sudo apt update

7) Run Jenkins Manually
     -> sudo -u jenkins java -jar /usr/share/java/jenkins.war --httpPort=8080

8) choose browser , put ip add and then use port jenkin for dashboard
       example -- 




#####################################################################################################################
*******  if stop instance and after u want to relogin to project then do folloing steps ******************************
#####################################################################################################################


1) If relogin then take public IP from EC2 Instance

2) use terminal and login via ssh  
       -> ssh -i "C:\Users\LENOVO\OneDrive\aws-keys\awskey.pem" ubuntu@65.2.142.227

3) Then change in environment.ts file
       -> nano ~/task-manager-3tier/frontend/src/environments/environment.ts 

     see code -- 

               export const environment = {
                    production: false,
                      apiUrl: 'http://localhost:5000/api'    ---chnge this localhost
                };

     changes -- change localhost into your ubutntu public ip

4) then go to project folder and run Docker
       -> cd ~/task-manager-3tier
       -> docker compose up --build -d
       -> docker ps  

5) go to browser and check the app is running or not
        example -- http://13.201.100.207:4200/

6) Check Jenkins Service is status start or not 
       -> sudo systemctl status Jenkins

7) 











