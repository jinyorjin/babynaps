![image](https://github.com/user-attachments/assets/57cb5afa-50fe-4e25-af96-c88b1a724587)
# BabyNaps – Baby Sleep Tracker

BabyNaps is a simple web app that helps parents keep track of their baby’s sleep times. It’s built with React, and uses Firebase to store data and sync it across devices in real time.

## Features

- Record sleep and wake times
- View sleep history
- Lightweight, mobile-friendly UI
- Real-time syncing via Firestore
- Optional Firebase Authentication
- Deployed on Netlify

## Tech Stack

- React
- Firebase Firestore
- Firebase Auth (optional)
- Netlify

## DevOps & Automation

I used this project to explore practical CI/CD workflows.  
The Jenkins pipeline currently includes:

- Build
- Basic test execution
- Code quality scan (SonarQube)
- Dependency security checks (`npm audit`)
- Deployment via Netlify CLI
- Automatic Git release tagging

Whenever I push changes, the pipeline runs these checks and updates the live site.

### CI/CD Screenshots

#### Jenkins – Build History  
<img src="./pipeline1.png" width="600"/>

#### Jenkins – Git Release Tagging  
<img src="./pipeline2.png" width="600"/>

#### SonarQube – Code Quality  
<img src="./sonar.png" width="600"/>

### CI/CD Release Versioning

Each successful build generates a release tag such as:

`v1.0.31`

This helps maintain a clear release history and makes it easier to track and troubleshoot builds.

## Demo Video (assessment submission)

https://deakin.au.panopto.com/Panopto/Pages/Viewer.aspx?id=c217c2e8-b244-4140-9661-b2e4006917b9

## Running Locally

```bash
git clone https://github.com/jinyorjin/babynaps.git
cd babynaps
npm install
npm start
