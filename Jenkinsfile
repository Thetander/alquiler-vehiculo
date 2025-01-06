pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Asegúrate de que el nombre coincida con tu configuración en Jenkins
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
                // Instala las dependencias definidas en package.json
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Ejecuta las pruebas definidas en tu proyecto
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                // Construye el proyecto
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            // Opcional: Archiva los artefactos o registros después del pipeline
            archiveArtifacts artifacts: '**/dist/**', allowEmptyArchive: true
            echo 'Pipeline completado'
        }
        failure {
            echo 'La construcción ha fallado'
        }
    }
}
