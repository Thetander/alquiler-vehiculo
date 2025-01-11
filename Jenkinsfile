pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Usa el nombre configurado en Jenkins para NodeJS
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'respaldo', url: 'https://github.com/Thetander/alquiler-vehiculo.git'
            }
        }
        stage('Verify Yarn') {
            steps {
                // Verifica que Yarn está instalado y accesible
                bat 'yarn --version'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instala las dependencias
                bat 'yarn install'
            }
        }
        stage('Run Tests') {
            steps {
                // Ejecuta las pruebas
                bat 'yarn test'
            }
        }
        stage('Build') {
            steps {
                // Construye el proyecto
                bat 'yarn build'
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
