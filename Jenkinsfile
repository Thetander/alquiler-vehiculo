pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Asegúrate de usar el nombre que configuraste en Jenkins
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
