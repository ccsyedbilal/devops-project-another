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

        
   
        // Add more stages as needed
    }
}
