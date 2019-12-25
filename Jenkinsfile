pipeline {
    agent { dockerfile true}
    stages{
        stage('checkout code') {
            steps {
                sh 'git checkout master'
            }
        }
        stage('Build Docker image') {
            steps {
                sh 'docker build -t gok-jenkins-test .'
            }
        }
        stage('Start selenium grid') {
            steps {
                  sh 'docker-compose up -d hub chrome firefox'
            }
        }
        stage('Run tests') {
            steps {
                sh 'docker-compose up gok-jenkins-test'
            }
        }
        stage('Shut down grid') {
            steps {
                sh 'docker-compose down'
            }
        }
    }
}