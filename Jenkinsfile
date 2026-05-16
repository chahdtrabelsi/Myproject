pipeline {
    agent any
    environment {
        SONAR_URL       = "http://sonarqube:9000"
        REGISTRY        = "tabelsichahd"           // ← votre DockerHub username
        IMAGE_NAME      = "mon-image"              // ← votre image DockerHub
        IMAGE_TAG       = "latest"                 // ← correspond à votre yaml
        DEPLOYMENT_NAME = "mon-appli"              // ← metadata.name dans votre yaml
        CONTAINER_NAME  = "mon-conteneur"          // ← name du container dans votre yaml
        NAMESPACE       = "default"
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

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    sh """
                        kubectl rollout restart deployment/${DEPLOYMENT_NAME} \
                          --namespace=${NAMESPACE}

                        kubectl rollout status deployment/${DEPLOYMENT_NAME} \
                          --namespace=${NAMESPACE} --timeout=120s
                    """
                }
            }
        }
    }
}