pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Usa el nombre configurado en Jenkins para la herramienta NodeJS
    }
    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde la rama respaldo
                git branch: 'respaldo', url: 'https://github.com/Thetander/alquiler-vehiculo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Ejecuta el comando para instalar dependencias usando Yarn en Windows
                bat 'yarn install'
            }
        }
        stage('Run Tests') {
            steps {
                // Ejecuta las pruebas configuradas
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
            // Archiva los artefactos generados (opcional)
            archiveArtifacts artifacts: '**/dist/**', allowEmptyArchive: true
            echo 'Pipeline completado'
        }
        failure {
            // Mensaje en caso de fallo
            echo 'La construcción ha fallado'
        }
    }
}
