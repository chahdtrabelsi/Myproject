pipeline {
    agent any
    environment {
        SONAR_URL       = "http://sonarqube:9000"
        REGISTRY        = "tabelsichahd"
        IMAGE_NAME      = "mon-image"
        IMAGE_TAG       = "latest"
        DEPLOYMENT_NAME = "mon-appli"
        CONTAINER_NAME  = "mon-conteneur"
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

    post {
        success {
            echo "Deploiement reussi"
        }
        failure {
            echo "Pipeline echoue"
        }
    }
}