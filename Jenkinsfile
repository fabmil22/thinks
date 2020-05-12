pipeline {
    agent any
    tools{
      nodejs 'node-11.0.0'
    }
    options {
      timeout(time: 2 unit: 'MINUTES')
    }
    stages {
        stage('INSTALL DEPENDENCIES') {
            steps {
                sh 'npm i'
            }
        }
    }
    stages {
        stage('RUN TEST') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
