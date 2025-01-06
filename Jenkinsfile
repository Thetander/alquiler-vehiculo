pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Asegúrate de que el nombre coincida con la configuración en Jenkins
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
                // Instala las dependencias usando Yarn
                sh 'yarn install'
            }
        }
        stage('Run Tests') {
            steps {
                // Ejecuta las pruebas definidas en el proyecto
                sh 'yarn test'
            }
        }
        stage('Build') {
            steps {
                // Construye el proyecto
                sh 'yarn build'
            }
        }
    }
    post {
        always {
            // Archiva los artefactos (opcional)
            archiveArtifacts artifacts: '**/dist/**', allowEmptyArchive: true
            echo 'Pipeline completado'
        }
        failure {
            // Mensaje en caso de fallo
            echo 'La construcción ha fallado'
        }
    }
}
