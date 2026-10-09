pipeline {
    agent any

    environment {
        SCANNER_HOME = tool 'sonar-scanner'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh "${SCANNER_HOME}/bin/sonar-scanner"
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t task-manager-backend:${BUILD_NUMBER} ./backend'
                sh 'docker build -t task-manager-frontend:${BUILD_NUMBER} ./frontend'
            }
        }
    }
}