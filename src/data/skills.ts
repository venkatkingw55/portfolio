export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'CI/CD',
    skills: ['Jenkins', 'Azure DevOps', 'Bitbucket pipelines'],
  },
  {
    category: 'Configuration Management',
    skills: ['Ansible (AWX)'],
  },
  {
    category: 'Containerization',
    skills: ['Docker', 'AWS ECS', 'EKS', 'GKE'],
  },
  {
    category: 'SCM',
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    category: 'Build Tools',
    skills: ['Maven', 'Gradle', 'NPM', 'Packer'],
  },
  {
    category: 'Monitoring',
    skills: ['Grafana', 'Splunk', 'AWS CloudWatch'],
  },
  {
    category: 'Code Quality',
    skills: ['SonarCloud', 'AWS CodeGuru'],
  },
  {
    category: 'IaC',
    skills: ['Terraform', 'Terragrunt', 'Atlantis'],
  },
  {
    category: 'Web Server',
    skills: ['Nginx'],
  },
  {
    category: 'Artifactory Tools',
    skills: ['JFrog', 'AWS ECR', 'GCP Artifacts'],
  },
  {
    category: 'Scripting Languages',
    skills: ['Python 3', 'Shell Script'],
  },
];
