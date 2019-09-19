pipeline {
    agent { dockerfile true}
    stages{
        stage('checkout code') {
            sh 'git checkout master'
        }
        stage('Build Docker image') {
            steps {
                sh 'docker build -t gok-jenkins-test .'
            }
        }
        stage('Run test'){
            steps {
                sh 'docker run --name int-test -it gok-jenkins-test'
            }
        }
        stage('Copy test reports to workspace'){
            steps {
                sh 'docker cp int-test:/workdir/reports ./'
            }
        }
    }
}