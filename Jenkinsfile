pipeline {
    agent any
//     triggers {
//         cron('* * * * *')
//     }
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

   
//         stage('clone'){
//             steps{
//             git branch:'main' , url:'https://github.com/mansijain1knoldus/node-hello.git'
//             }
//         }
//         stage('First') {
//             steps {
// //                 sh 'npm start'
//             }
//         }
