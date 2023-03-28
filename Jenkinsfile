pipeline {
    agent any
//     triggers {
//         cron('* * * * *')
//     }
    stages {
        stage('clone'){
            steps{
            git branch:'dev' , url:'https://github.com/mansijain1knoldus/node-hello.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Hello World!'
                sh 'npm start'
            }
        }
//         stage('Test') {
//             steps {
//                 echo "testing is successful"
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 echo "deploying is successful"
//             }
//         }
    }
}
