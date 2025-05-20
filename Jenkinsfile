pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo '📦 Installing dependencies...'
        bat 'npm install'
        echo '🏗 Building project...'
        bat 'npm run build'
      }
    }

    stage('Test') {
      steps {
        echo '🧪 Running tests...'
        bat 'npm test -- App.test.js --watchAll=false --passWithNoTests'
      }
    }

    stage('Code Quality - SonarQube') {
      steps {
        withSonarQubeEnv('LocalSonar') {
          bat 'sonar-scanner'
        }
      }
    }

    stage('Deploy') {
      steps {
        echo '🚀 Deploy step (Netlify CLI or Docker can go here)'
      }
    }
  }
}
