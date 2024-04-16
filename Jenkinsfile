pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        
    stage('Check Dependencies') {
    steps {
        script {
            def missingDependencies = []

            // Check if Node.js is installed
            def nodejsInstalled = sh(script: 'which nodejs', returnStatus: true) == 0
            if (!nodejsInstalled) {
                missingDependencies.add('Node.js')
            }

            // Check if npm is installed
            def npmInstalled = sh(script: 'which npm', returnStatus: true) == 0
            if (!npmInstalled) {
                missingDependencies.add('npm')
            }

            // Check if unzip is installed
            def unzipInstalled = sh(script: 'which unzip', returnStatus: true) == 0
            if (!unzipInstalled) {
                missingDependencies.add('unzip')
            }

            // Check if bun is installed
            def bunInstalled = sh(script: 'which bun', returnStatus: true) == 0
            if (!bunInstalled) {
                missingDependencies.add('bun')
            }

            if (missingDependencies) {
                echo "Missing dependencies: ${missingDependencies.join(', ')}"
                currentBuild.result = 'FAILURE'
            } else {
                echo 'All dependencies are installed.'
            }
        }
    }
}

        stage('Testing') {
    steps {
        // Assuming you're using npm to run tests, replace with your actual testing commands
        sh 'bun test'
        
        // If you have additional tests or commands, you can add them here
    }
}


        stage('Install Dependencies for next-app') {
    steps {
        dir('/var/lib/jenkins/workspace/my_nextjs_app_second') {
            sh 'bun install'
        }
    }
}

        stage('Deploy MongoDB Container') {
            steps {
                script {
                    // Change directory to where docker-compose.yml is located
                    dir('/var/lib/jenkins/workspace/my_nextjs_app_second') {
                        // Run docker-compose up to deploy MongoDB container
                     sh 'docker compose up -d'

                    }
                }
            }
        }

        stage('Copy .env.sample to .env') {
    steps {
        script {
            sh 'cp .env.sample .env'
        }
    }
}

        stage('development testing') {
    steps {
         dir('/var/lib/jenkins/workspace/my_nextjs_app_second') {
                        // Run docker-compose up to deploy MongoDB container
                     sh 'bun run dev'

                    }
    }
}
        

        // Add more stages as needed
    }
}
