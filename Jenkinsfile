pipeline {
    agent any
    environment {
        SONAR_URL       = "http://sonarqube:9000"
        // ── AJOUT ──────────────────────────────────────
        REGISTRY        = "votre-registry"        // ex: docker.io/monuser
        IMAGE_NAME      = "mon-app"
        IMAGE_TAG       = "${BUILD_NUMBER}"
        DEPLOYMENT_NAME = "mon-deployment"
        CONTAINER_NAME  = "mon-container"
        NAMESPACE       = "default"
        // ───────────────────────────────────────────────
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

        // ── AJOUT : BUILD ──────────────────────────────
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        // ── AJOUT : PUSH ───────────────────────────────
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login ${REGISTRY} -u "$DOCKER_USER" --password-stdin
                        docker push ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                    """
                }
            }
        }

        // ── AJOUT : DEPLOY ─────────────────────────────
        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    sh """
                        kubectl set image deployment/${DEPLOYMENT_NAME} \
                          ${CONTAINER_NAME}=${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} \
                          --namespace=${NAMESPACE}

                        kubectl rollout status deployment/${DEPLOYMENT_NAME} \
                          --namespace=${NAMESPACE} --timeout=120s
                    """
                }
            }
        }
        // ───────────────────────────────────────────────
    }
}