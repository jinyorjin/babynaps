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
          // sonar-scanner 절대 경로 사용
          bat '"C:\\Users\\lqye9\\Downloads\\sonar-scanner-cli-7.1.0.4889-windows-x64\\sonar-scanner-7.1.0.4889-windows-x64\\bin\\sonar-scanner.bat"'
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
