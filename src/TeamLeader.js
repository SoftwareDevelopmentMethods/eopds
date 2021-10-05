import React, { Component } from "react";

class TeamLeader extends Component {

        constructor(props) {
          super(props);
          this.state = {value: ''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }
      
        render() {
          return (
            <form>
                
  <div class="form-group">
      <label><h2>Organisational Information Form</h2></label><br/><br/>
    <label for="Manager">1. Who is the Manager that the team manager reports to?</label>
    <input type="question" class="form-control" id="Manager"  placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="OrganisationalChart">2. Where is an organisational chart available?</label>
    <input type="question" class="form-control" id="OrganisationalChart" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="InductionProgram">3. Is there an Induction program for new employees? If so how/when can this be accessed?</label>
    <input type="question" class="form-control" id="InductionProgram"  placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="Funds">4. What funds are available for the onboarder to attend formal courses?</label>
    <input type="question" class="form-control" id="Funds" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="QualifiedMentor">5. Is there a qualified suitable mentor available for the new employee?</label>
    <input type="question" class="form-control" id="QualifiedMentor"  placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="Vision">6. How can the organisational vision best be understood? </label>
    <input type="question" class="form-control" id="Vision" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="ProductService">7. How can the product/service offered by the organisation best be understood by a new employee (video, marketing material, market segments etc)</label>
    <input type="question" class="form-control" id="ProductService"  placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="Tools">8. What tools are used for company wide communications?</label>
    <input type="question" class="form-control" id="Tools" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="CompanyKnowledge">9. Is there a company wide knowledge base?</label>
    <input type="question" class="form-control" id="CompanyKnowledge" placeholder="Enter Here"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>

  <br/><label><h2>Team Information Form</h2></label><br/><br/>

  <div class="form-group">
    <label for="TeamLead">1. Who is the team leader?</label>
    <input type="question" class="form-control" id="TeamLead" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="MainTask">2. What are the main tasks expected of the new team member?</label>
    <input type="question" class="form-control" id="MainTask" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="MainProgrammingLanguage">3. What are the main programming languages the team uses?</label>
    <input type="question" class="form-control" id="MainProgrammingLanguage" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="Framework">4. What frameworks are mainly used by the team?</label>
    <input type="question" class="form-control" id="Framework" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="VersionControl">5. What version control and code sharing mechanism is used by the team to get access to the source code?</label>
    <input type="question" class="form-control" id="VersionControl" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="Documentation+Access">6. What documentation about the source code design and structure is available and how can it be accessed and added to?</label>
    <input type="question" class="form-control" id="Documentation+Access" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="DocumentationTools">a. What tools are used by the team for this?</label>
    <input type="question" class="form-control" id="DocumentationTools" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="Database">7. What database is used by the team?</label>
    <input type="question" class="form-control" id="Database" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="CodeTestTechniques">8. What are the main coding and testing techniques regularly used by the team</label>
    <select class="form-control" id="CodeTestTechniques">
      <option>Continuous Integration</option>
      <option>Continuous Deployment</option>
      <option>DevOps</option>
      <option>Test-driven Development</option>
      <option>Behaviour Driven Development</option>
      <option>Pair programming</option>
      <option>Mob programming</option>
      <option>Feature flags</option>
      <option>Infrastructure as code</option>
      <option>Static code analysis</option>
      <option>Other…</option>
    </select>
  </div>
  <div class="form-group">
    <label for="CodeTestTools">9. What tools are used by the team to support coding and testing?</label>
    <input type="question" class="form-control" id="CodeTestTools" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="IDETool">a. What IDE? (eg Visual Studio) </label>
    <input type="question" class="form-control" id="IDETool" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="VersionControlTool">b. What version control? (eg GitHub)</label>
    <input type="question" class="form-control" id="VersionControlTool" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="TestRunnerTool">c. What test runners? (e.g. Jest, Cypress)</label>
    <input type="question" class="form-control" id="TestRunnerTool" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="CITool">d. What continuous integration servers (e.g. CircleCI)</label>
    <input type="question" class="form-control" id="CITool" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="DeploymentTool">e. What Deployment tools (eg Octopus, Terraform, Kubernetes, feature flags)</label>
    <input type="question" class="form-control" id="DeploymentTool" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="ArchitecturalStyle">10.	What are the main architectural styles used in the code base?</label>
    <select class="form-control" id="ArchitecturalStyle">
      <option>Layered</option>
      <option>Event Driven</option>
      <option>Microservices</option>
      <option>Other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="TestingStandards">11. What unit testing and other testing and quality assurance standards (e.g. code reviews) are expected by the team?</label>
    <input type="question" class="form-control" id="TestingStandards" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="DevelopmentProcess">12.	What Agile development process is adopted by the team?</label>
    <select class="form-control" id="DevelopmentProcess">
      <option>Scrum</option>
      <option>Kanban</option>
      <option>Other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="PlanningTechniques">13. What planning techniques are used by the team?</label>
    <input type="question" class="form-control" id="PlanningTechniques" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="ProgressMonitored">14. How is progress monitored?</label>
    <input type="question" class="form-control" id="ProgressMonitored" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="PlanningProcessTools">15. What tools are used by the team to support the planning and monitoring process? (eg Jira)</label>
    <input type="question" class="form-control" id="PlanningProcessTools" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="TeamCommunication">16. How do the team keep in touch and communicate</label>
    <input type="question" class="form-control" id="TeamCommunication" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="TeamCommunicationTool">a. What tools are used to support team communication (e.g. Slack, Discord, MS teams)</label>
    <input type="question" class="form-control" id="TeamCommunicationTool" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="Autonomous">17. How autonomous is the team?</label>
    <input type="question" class="form-control" id="Autonomous" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="VirtualEnvironment">18.	How much of the team work is done in a virtual environment?</label>
    <input type="question" class="form-control" id="VirtualEnvironment" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="VirtualEnvironmentTools">a.	What tools are used to keep in touch virtually?</label>
    <input type="question" class="form-control" id="VirtualEnvironmentTools" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="DocumentationAspects">19. What aspects of requirements, design, coding and testing are documented?</label>
    <input type="question" class="form-control" id="DocumentationAspects" placeholder="Enter Here"/>
  </div>
  <div class="form-group">
    <label for="DocumentationAspectsTools">a. What tools are used for this? (e.g. Confluence)</label>
    <input type="question" class="form-control" id="DocumentationAspectsTools" placeholder="Enter Here"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>

  <br/><label><h2>Onboarder Information Form</h2></label><br/>
  <br/><label><h3>Rate your skill areas from 1-5 in the dropdown menus below</h3></label><br/><br/>

  <div class="form-group">
    <label for="OnboarderProgrammingLanguage">Programming Language</label>
    <select class="form-control" id="OnboarderProgrammingLanguage">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderVersionControl">Version Control</label>
    <select class="form-control" id="OnboarderVersionControl">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderCI/CD">CI/CD</label>
    <select class="form-control" id="OnboarderCI/CD">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderTDD">TDD</label>
    <select class="form-control" id="OnboarderTDD">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderDevOps">DevOps</label>
    <select class="form-control" id="OnboarderDevOps">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderPair/MobProgramming">Pair/Mob Programming</label>
    <select class="form-control" id="OnboarderPair/MobProgramming">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderIDEs">IDEs</label>
    <select class="form-control" id="OnboarderIDEs">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderSoftwareArchitecture">Software Architecture</label>
    <select class="form-control" id="OnboarderSoftwareArchitecture">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderUnitTesting">Unit Testing</label>
    <select class="form-control" id="OnboarderUnitTesting">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderAgileSoftwareDev">Agile Software Development</label>
    <select class="form-control" id="OnboarderAgileSoftwareDev">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="OnboarderDocumentation">Documentation</label>
    <select class="form-control" id="OnboarderDocumentation">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  
</form>

          );
        }
        

}
export default TeamLeader;