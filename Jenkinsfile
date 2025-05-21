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
          withCredentials([string(credentialsId: 'SONAR_TOKEN', variable: 'SONAR_TOKEN')]) {
            bat 'set SONAR_TOKEN=%SONAR_TOKEN% && "C:\\Users\\lqye9\\Downloads\\sonar-scanner-cli-7.1.0.4889-windows-x64\\sonar-scanner-7.1.0.4889-windows-x64\\bin\\sonar-scanner.bat"'
          }
        }
      }
    }

    stage('Security') {
      steps {
        echo '🔒 Running security audit...'
        script {
          try {
            bat 'npm audit --audit-level=high'
          } catch (err) {
            echo '⚠️ Vulnerabilities detected but continuing pipeline anyway.'
          }
        }
      }
    }

    stage('Deploy') {
      steps {
        echo '🚀 Deploying to Netlify...'
        withCredentials([
          string(credentialsId: 'NETLIFY_SITE_ID', variable: 'SITE_ID'),
          string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'AUTH_TOKEN')
        ]) {
          bat 'netlify deploy --dir=build --prod --auth=%AUTH_TOKEN% --site=%SITE_ID%'
        }
      }
    }

    stage('Release') {
      steps {
        echo '🏷 Creating Git release tag...'
        bat '''
          git config user.email "jenkins@example.com"
          git config user.name "Jenkins CI"
          git tag -a v1.0.%BUILD_NUMBER% -m "Release v1.0.%BUILD_NUMBER%"
          git push origin v1.0.%BUILD_NUMBER%
        '''
      }
    }

    stage('Monitoring') {
      steps {
        echo '📊 Monitoring placeholder'
      }
    }
  }
}
