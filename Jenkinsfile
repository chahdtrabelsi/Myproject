pipeline {
    agent any
    environment {
        SONAR_URL      = "http://sonarqube:9000"
        REGISTRY        = "votre-registry"          // ex: docker.io/monuser
        IMAGE_NAME      = "mon-app"
        IMAGE_TAG       = "${BUILD_NUMBER}"          // tag unique à chaque build
        DEPLOYMENT_NAME = "mon-deployment"           // nom dans kubernetes
        CONTAINER_NAME  = "mon-container"            // nom du container dans le yaml
        NAMESPACE       = "default"                  // namespace kubernetes
    }
    stages {

        // ─── 1. RÉCUPÉRER LE CODE ───────────────────────────────────────
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // ─── 2. ANALYSE SONARQUBE ───────────────────────────────────────
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

        // ─── 3. BUILD DOCKER IMAGE ──────────────────────────────────────
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        // ─── 4. PUSH VERS LE REGISTRY ───────────────────────────────────
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-registry-credentials',  // à créer dans Jenkins
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

        // ─── 5. DÉPLOYER SUR KUBERNETES ─────────────────────────────────
        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    sh """
                        kubectl set image deployment/${DEPLOYMENT_NAME} \
                          ${CONTAINER_NAME}=${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} \
                          --namespace=${NAMESPACE}

                        kubectl rollout status deployment/${DEPLOYMENT_NAME} \
                          --namespace=${NAMESPACE} \
                          --timeout=120s
                    """
                }
            }
        }
    }

    // ─── NOTIFICATIONS 
    post {
        success {
            echo "✅ Déploiement réussi : ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
        }
        failure {
            echo "❌ Pipeline échoué — vérifiez les logs"
        }
    }
}