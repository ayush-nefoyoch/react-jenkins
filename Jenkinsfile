pipeline {
    agent any
    tools { nodejs "node" }
    environment{
        imageName = "ayush8771/react-jenkins-react-app"
        registryCredential = "ayush8771"
        dockerImage = ""
    }
    stages {
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
                    docker.withRegistry("https://registry.hub.docker.com", 'dockerhub-creds') {
                        dockerImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }

        stage("Run"){
            steps {
                script {
                    bat 'docker-compose down && docker-compose up -d'
                }
            }
        }
    }
}
