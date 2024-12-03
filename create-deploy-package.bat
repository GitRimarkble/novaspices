@echo off
cd build
copy ..\.htaccess .
powershell Compress-Archive -Path * -DestinationPath ..\nova-spices-deploy.zip -Force
cd ..
echo Deployment package created: nova-spices-deploy.zip
