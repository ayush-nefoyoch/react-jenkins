pipeline {
    agent any
    tools { nodejs "node" }
    environment{
        imageName = "react-jenkins/react-app"
        registryCredential = "ayush8771"
        dockerImage = ""
    }
    stages {
        stage("Install Dependencies"){
            steps{
                bat 'npm install'
            }
        }

        // stage("Tests"){
        //     steps {
        //         bat 'npm test'
        //     }
        // }

         stage("Building Image"){
            steps {
                script {
                    dockerImage = docker.build imageName
                }
            }
        }

        stage("Deploy Image"){
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", 'dockerhub-creds')
                        dockerImage.push("${env.BUILD_NUMBER}")
                }
            }
        }
    }
}
