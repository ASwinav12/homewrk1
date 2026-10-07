pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/ASwinav12/homewrk1.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r homewrk1/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
