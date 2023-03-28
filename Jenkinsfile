pipeline {
    agent any
    triggers{
        cron('* * * * *')
    }
    stages {
        stage('Build') {
            steps {
                echo 'Hello World!'
            }
        }
        stage('Test') {
            steps {
                echo "testing is successful"
            }
        }
        stage('Deploy') {
            steps {
                echo "deploying is successful"
            }
        }
    }
}
