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
        bat 'npm test -- --watchAll=false'
      }
    }

    stage('Deploy') {
      steps {
        echo '🚀 Deploy step (Netlify CLI or Docker can go here)'
      }
    }
  }
}
