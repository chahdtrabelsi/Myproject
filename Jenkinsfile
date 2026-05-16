pipeline {
    agent any

    environment {
        SONAR_URL = "http://sonarqube:9000"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {

                    def scannerHome = tool 'MySonarScanner'

                    withCredentials([string(credentialsId: 'sonarqube', variable: 'TOKEN')]) {

                        sh """
                        ${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=Myproject \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=${SONAR_URL} \
                        -Dsonar.login=${TOKEN}
                        """
                    }
                }
            }
        }
    }
}