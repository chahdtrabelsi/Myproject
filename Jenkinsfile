pipeline {
    agent any

    environment {
        SONAR_URL = "http://host.docker.internal:9000"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withCredentials([string(credentialsId: 'sonarqube', variable: 'TOKEN')]) {
                    sh """
                    sonar-scanner \
                    -Dsonar.projectKey=Myproject \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=$SONAR_URL \
                    -Dsonar.login=$TOKEN
                    """
                }
            }
        }
    }
}