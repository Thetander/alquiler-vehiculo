pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Usa el nombre configurado en Jenkins (en este caso "NodeJS")
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'respaldo', url: 'https://github.com/Thetander/alquiler-vehiculo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/dist/**', allowEmptyArchive: true
            echo 'Pipeline completado'
        }
        failure {
            echo 'La construcción ha fallado'
        }
    }
}
