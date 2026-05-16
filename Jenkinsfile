Skip to content

Jenkins
sonar_multibranch
main
#23
Search
Manage Jenkins
admin
Status
Changes
Console Output
Edit Build Information
Delete build ‘#23’
Timings
Git Build Data
Restart from Stage
Replay
Pipeline Steps
Workspaces
Previous Build
Console
Download

Copy
View as plain text
Branch indexing
16:57:19 Connecting to https://api.github.com using git_tocken/******
Obtained Jenkinsfile from 283417eaad71d52421d033aa60a9d597353b06c9
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/sonar_multibranch_main
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
The recommended git tool is: git
using credential github_token
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/sonar_multibranch_main/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/chahdtrabelsi/Myproject.git # timeout=10
Fetching without tags
Fetching upstream changes from https://github.com/chahdtrabelsi/Myproject.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_ASKPASS to set credentials 
 > git fetch --no-tags --force --progress -- https://github.com/chahdtrabelsi/Myproject.git +refs/heads/main:refs/remotes/origin/main # timeout=10
Checking out Revision 283417eaad71d52421d033aa60a9d597353b06c9 (main)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 283417eaad71d52421d033aa60a9d597353b06c9 # timeout=10
Commit message: "le testingg"
 > git rev-list --no-walk 10f0aebb81c7294b5fe662cb417a1b562738ca61 # timeout=10

Could not update commit status. Message: {"message":"Resource not accessible by personal access token","documentation_url":"https://docs.github.com/rest/commits/statuses#create-a-commit-status","status":"403"}

[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] checkout
The recommended git tool is: git
using credential github_token
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/sonar_multibranch_main/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/chahdtrabelsi/Myproject.git # timeout=10
Fetching without tags
Fetching upstream changes from https://github.com/chahdtrabelsi/Myproject.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_ASKPASS to set credentials 
 > git fetch --no-tags --force --progress -- https://github.com/chahdtrabelsi/Myproject.git +refs/heads/main:refs/remotes/origin/main # timeout=10
Checking out Revision 283417eaad71d52421d033aa60a9d597353b06c9 (main)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 283417eaad71d52421d033aa60a9d597353b06c9 # timeout=10
Commit message: "le testingg"

Could not update commit status. Message: {"message":"Resource not accessible by personal access token","documentation_url":"https://docs.github.com/rest/commits/statuses#create-a-commit-status","status":"403"}

[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (SonarQube Analysis)
[Pipeline] script
[Pipeline] {
[Pipeline] tool
[Pipeline] withCredentials
Masking supported pattern matches of $TOKEN
[Pipeline] {
[Pipeline] sh
Warning: A secret was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [TOKEN]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ /var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/MySonarScanner/bin/sonar-scanner -Dsonar.projectKey=Myproject -Dsonar.sources=. -Dsonar.host.url=http://sonarqube:9000 -Dsonar.login=****
16:57:24.351 INFO  Scanner configuration file: /var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/MySonarScanner/conf/sonar-scanner.properties
16:57:24.354 INFO  Project root configuration file: NONE
16:57:24.370 INFO  SonarScanner CLI 8.1.0.6389
16:57:24.375 INFO  Linux 6.6.87.2-microsoft-standard-WSL2 amd64
16:57:26.342 INFO  Communicating with SonarQube Server 9.9.8.100196
16:57:26.635 INFO  Load global settings
16:57:26.687 INFO  Load global settings (done) | time=53ms
16:57:26.689 INFO  Server id: 147B411E-AZ4sHHVAVHLMeky8GbnB
16:57:26.694 INFO  User cache: /var/jenkins_home/.sonar/cache
16:57:26.697 INFO  Load/download plugins
16:57:26.697 INFO  Load plugins index
16:57:26.722 INFO  Load plugins index (done) | time=25ms
16:57:26.755 INFO  Load/download plugins (done) | time=58ms
16:57:27.021 INFO  Process project properties
16:57:27.026 INFO  Process project properties (done) | time=5ms
16:57:27.029 INFO  Execute project builders
16:57:27.030 INFO  Execute project builders (done) | time=1ms
16:57:27.034 INFO  Project key: Myproject
16:57:27.034 INFO  Base dir: /var/jenkins_home/workspace/sonar_multibranch_main
16:57:27.034 INFO  Working dir: /var/jenkins_home/workspace/sonar_multibranch_main/.scannerwork
16:57:27.040 INFO  Load project settings for component key: 'Myproject'
16:57:27.053 INFO  Load project settings for component key: 'Myproject' (done) | time=13ms
16:57:27.121 INFO  Auto-configuring with CI 'Jenkins'
16:57:27.124 INFO  Load quality profiles
16:57:27.153 INFO  Load quality profiles (done) | time=29ms
16:57:27.162 INFO  Load active rules
16:57:28.087 INFO  Load active rules (done) | time=925ms
16:57:28.091 INFO  Load analysis cache
16:57:28.096 INFO  Load analysis cache (404) | time=5ms
16:57:28.131 INFO  Load project repositories
16:57:28.143 INFO  Load project repositories (done) | time=12ms
16:57:28.164 INFO  Indexing files...
16:57:28.165 INFO  Project configuration:
16:57:28.275 INFO  37 files indexed
16:57:28.275 INFO  0 files ignored because of scm ignore settings
16:57:28.276 INFO  Quality profile for css: Sonar way
16:57:28.276 INFO  Quality profile for js: Sonar way
16:57:28.276 INFO  Quality profile for json: Sonar way
16:57:28.276 INFO  Quality profile for terraform: Sonar way
16:57:28.276 INFO  Quality profile for web: Sonar way
16:57:28.276 INFO  Quality profile for yaml: Sonar way
16:57:28.276 INFO  ------------- Run sensors on module Myproject
16:57:28.325 INFO  Load metrics repository
16:57:28.340 INFO  Load metrics repository (done) | time=15ms
16:57:29.100 INFO  Sensor JaCoCo XML Report Importer [jacoco]
16:57:29.101 INFO  'sonar.coverage.jacoco.xmlReportPaths' is not defined. Using default locations: target/site/jacoco/jacoco.xml,target/site/jacoco-it/jacoco.xml,build/reports/jacoco/test/jacocoTestReport.xml
16:57:29.102 INFO  No report imported, no coverage information will be imported by JaCoCo XML Report Importer
16:57:29.102 INFO  Sensor JaCoCo XML Report Importer [jacoco] (done) | time=2ms
16:57:29.102 INFO  Sensor IaC Terraform Sensor [iac]
16:57:29.105 INFO  2 source files to be analyzed
16:57:29.187 INFO  2/2 source files have been analyzed
16:57:29.187 INFO  Sensor IaC Terraform Sensor [iac] (done) | time=85ms
16:57:29.187 INFO  Sensor IaC CloudFormation Sensor [iac]
16:57:29.247 INFO  0 source files to be analyzed
16:57:29.269 INFO  0/0 source files have been analyzed
16:57:29.269 INFO  Sensor IaC CloudFormation Sensor [iac] (done) | time=82ms
16:57:29.269 INFO  Sensor IaC Kubernetes Sensor [iac]
16:57:29.293 INFO  3 source files to be analyzed
16:57:29.345 INFO  3/3 source files have been analyzed
16:57:29.345 INFO  Sensor IaC Kubernetes Sensor [iac] (done) | time=76ms
16:57:29.345 INFO  Sensor JavaScript analysis [javascript]
16:57:30.514 ERROR Error when running: 'node -v'. Is Node.js available during analysis?
org.sonarsource.nodejs.NodeCommandException: Error when running: 'node -v'. Is Node.js available during analysis?
	at org.sonarsource.nodejs.NodeCommand.start(NodeCommand.java:79)
	at org.sonarsource.nodejs.NodeCommandBuilderImpl.getVersion(NodeCommandBuilderImpl.java:203)
	at org.sonarsource.nodejs.NodeCommandBuilderImpl.checkNodeCompatibility(NodeCommandBuilderImpl.java:169)
	at org.sonarsource.nodejs.NodeCommandBuilderImpl.build(NodeCommandBuilderImpl.java:143)
	at org.sonar.plugins.javascript.eslint.EslintBridgeServerImpl.initNodeCommand(EslintBridgeServerImpl.java:201)
	at org.sonar.plugins.javascript.eslint.EslintBridgeServerImpl.startServer(EslintBridgeServerImpl.java:142)
	at org.sonar.plugins.javascript.eslint.EslintBridgeServerImpl.startServerLazily(EslintBridgeServerImpl.java:233)
	at org.sonar.plugins.javascript.eslint.AbstractEslintSensor.execute(AbstractEslintSensor.java:68)
	at org.sonar.scanner.sensor.AbstractSensorWrapper.analyse(AbstractSensorWrapper.java:64)
	at org.sonar.scanner.sensor.ModuleSensorsExecutor.execute(ModuleSensorsExecutor.java:88)
	at org.sonar.scanner.sensor.ModuleSensorsExecutor.lambda$execute$1(ModuleSensorsExecutor.java:61)
	at org.sonar.scanner.sensor.ModuleSensorsExecutor.withModuleStrategy(ModuleSensorsExecutor.java:79)
	at org.sonar.scanner.sensor.ModuleSensorsExecutor.execute(ModuleSensorsExecutor.java:61)
	at org.sonar.scanner.scan.SpringModuleScanContainer.doAfterStart(SpringModuleScanContainer.java:82)
	at org.sonar.core.platform.SpringComponentContainer.startComponents(SpringComponentContainer.java:188)
	at org.sonar.core.platform.SpringComponentContainer.execute(SpringComponentContainer.java:167)
	at org.sonar.scanner.scan.SpringProjectScanContainer.scan(SpringProjectScanContainer.java:403)
	at org.sonar.scanner.scan.SpringProjectScanContainer.scanRecursively(SpringProjectScanContainer.java:399)
	at org.sonar.scanner.scan.SpringProjectScanContainer.doAfterStart(SpringProjectScanContainer.java:368)
	at org.sonar.core.platform.SpringComponentContainer.startComponents(SpringComponentContainer.java:188)
	at org.sonar.core.platform.SpringComponentContainer.execute(SpringComponentContainer.java:167)
	at org.sonar.scanner.bootstrap.SpringGlobalContainer.doAfterStart(SpringGlobalContainer.java:137)
	at org.sonar.core.platform.SpringComponentContainer.startComponents(SpringComponentContainer.java:188)
	at org.sonar.core.platform.SpringComponentContainer.execute(SpringComponentContainer.java:167)
	at org.sonar.batch.bootstrapper.Batch.doExecute(Batch.java:72)
	at org.sonar.batch.bootstrapper.Batch.execute(Batch.java:66)
	at org.sonarsource.scanner.lib.internal.batch.BatchIsolatedLauncher.execute(BatchIsolatedLauncher.java:41)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(Unknown Source)
	at java.base/java.lang.reflect.Method.invoke(Unknown Source)
	at org.sonarsource.scanner.lib.internal.facade.inprocess.IsolatedLauncherProxy.invoke(IsolatedLauncherProxy.java:62)
	at jdk.proxy3/jdk.proxy3.$Proxy2.execute(Unknown Source)
	at org.sonarsource.scanner.lib.internal.facade.inprocess.InProcessScannerEngineFacade.doAnalyze(InProcessScannerEngineFacade.java:38)
	at org.sonarsource.scanner.lib.internal.facade.AbstractScannerEngineFacade.analyze(AbstractScannerEngineFacade.java:65)
	at org.sonarsource.scanner.cli.Main.analyze(Main.java:79)
	at org.sonarsource.scanner.cli.Main.main(Main.java:64)
Caused by: java.io.IOException: Cannot run program "node": Exec failed, error: 2 (No such file or directory) 
	at java.base/java.lang.ProcessBuilder.start(Unknown Source)
	at java.base/java.lang.ProcessBuilder.start(Unknown Source)
	at org.sonarsource.nodejs.ProcessWrapperImpl.startProcess(ProcessWrapperImpl.java:39)
	at org.sonarsource.nodejs.NodeCommand.start(NodeCommand.java:77)
	... 34 common frames omitted
Caused by: java.io.IOException: Exec failed, error: 2 (No such file or directory) 
	at java.base/java.lang.ProcessImpl.forkAndExec(Native Method)
	at java.base/java.lang.ProcessImpl.<init>(Unknown Source)
	at java.base/java.lang.ProcessImpl.start(Unknown Source)
	... 38 common frames omitted

16:57:30.515 INFO  Hit the cache for 0 out of 0
16:57:30.516 INFO  Miss the cache for 0 out of 0
16:57:30.516 INFO  Sensor JavaScript analysis [javascript] (done) | time=1171ms
16:57:30.516 INFO  Sensor TypeScript analysis [javascript]
16:57:30.516 INFO  No input files found for analysis
16:57:30.516 INFO  Hit the cache for 0 out of 0
16:57:30.516 INFO  Miss the cache for 0 out of 0
16:57:30.516 INFO  Sensor TypeScript analysis [javascript] (done) | time=0ms
16:57:30.516 INFO  Sensor JavaScript inside YAML analysis [javascript]
16:57:30.518 INFO  No input files found for analysis
16:57:30.518 INFO  Hit the cache for 0 out of 0
16:57:30.518 INFO  Miss the cache for 0 out of 0
16:57:30.518 INFO  Sensor JavaScript inside YAML analysis [javascript] (done) | time=2ms
16:57:30.518 INFO  Sensor CSS Rules [javascript]
16:57:30.518 INFO  Hit the cache for 0 out of 0
16:57:30.518 INFO  Miss the cache for 0 out of 0
16:57:30.518 INFO  Sensor CSS Rules [javascript] (done) | time=0ms
16:57:30.518 INFO  Sensor CSS Metrics [javascript]
16:57:30.540 INFO  Sensor CSS Metrics [javascript] (done) | time=22ms
16:57:30.540 INFO  Sensor C# Project Type Information [csharp]
16:57:30.541 INFO  Sensor C# Project Type Information [csharp] (done) | time=1ms
16:57:30.541 INFO  Sensor C# Analysis Log [csharp]
16:57:30.547 INFO  Sensor C# Analysis Log [csharp] (done) | time=6ms
16:57:30.547 INFO  Sensor C# Properties [csharp]
16:57:30.548 INFO  Sensor C# Properties [csharp] (done) | time=1ms
16:57:30.548 INFO  Sensor HTML [web]
16:57:30.565 INFO  Sensor HTML [web] (done) | time=17ms
16:57:30.565 INFO  Sensor TextAndSecretsSensor [text]
16:57:30.573 INFO  26 source files to be analyzed
16:57:30.692 INFO  26/26 source files have been analyzed
16:57:30.692 INFO  Sensor TextAndSecretsSensor [text] (done) | time=127ms
16:57:30.692 INFO  Sensor VB.NET Project Type Information [vbnet]
16:57:30.693 INFO  Sensor VB.NET Project Type Information [vbnet] (done) | time=1ms
16:57:30.693 INFO  Sensor VB.NET Analysis Log [vbnet]
16:57:30.706 INFO  Sensor VB.NET Analysis Log [vbnet] (done) | time=13ms
16:57:30.706 INFO  Sensor VB.NET Properties [vbnet]
16:57:30.706 INFO  Sensor VB.NET Properties [vbnet] (done) | time=0ms
16:57:30.706 INFO  Sensor IaC Docker Sensor [iac]
16:57:30.707 INFO  2 source files to be analyzed
16:57:30.743 INFO  2/2 source files have been analyzed
16:57:30.743 INFO  Sensor IaC Docker Sensor [iac] (done) | time=37ms
16:57:30.746 INFO  ------------- Run sensors on project
16:57:30.778 INFO  Sensor Analysis Warnings import [csharp]
16:57:30.778 INFO  Sensor Analysis Warnings import [csharp] (done) | time=0ms
16:57:30.778 INFO  Sensor Zero Coverage Sensor
16:57:30.779 INFO  Sensor Zero Coverage Sensor (done) | time=1ms
16:57:30.785 INFO  CPD Executor Calculating CPD for 1 file
16:57:30.790 INFO  CPD Executor CPD calculation finished (done) | time=3ms
16:57:30.826 INFO  Analysis report generated in 35ms, dir size=183.0 kB
16:57:30.844 INFO  Analysis report compressed in 17ms, zip size=57.0 kB
16:57:30.862 INFO  Analysis report uploaded in 18ms
16:57:30.864 INFO  ANALYSIS SUCCESSFUL, you can find the results at: http://sonarqube:9000/dashboard?id=Myproject
16:57:30.864 INFO  Note that you will be able to access the updated dashboard once the server has processed the submitted analysis report
16:57:30.864 INFO  More about the report processing at http://sonarqube:9000/api/ce/task?id=AZ4xuLvllWdzz3A5Xjbr
16:57:31.172 INFO  Analysis total time: 4.367 s
16:57:31.174 INFO  EXECUTION SUCCESS
16:57:31.174 INFO  Total time: 6.827s
[Pipeline] }
[Pipeline] // withCredentials
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build Docker Image)
[Pipeline] sh
+ docker build -t tabelsichahd/mon-image:latest .
/var/jenkins_home/workspace/sonar_multibranch_main@tmp/durable-b22edd59/script.sh.copy: 1: docker: not found
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Push Docker Image)
Stage "Push Docker Image" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy to Kubernetes)
Stage "Deploy to Kubernetes" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 127

Could not update commit status. Message: {"message":"Resource not accessible by personal access token","documentation_url":"https://docs.github.com/rest/commits/statuses#create-a-commit-status","status":"403"}

Finished: FAILURE
Jenkins 2.555.1