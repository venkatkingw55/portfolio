export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    title: "DevOps Engineer",
    company: "Impact Analytics",
    duration: "October 2022 - Present",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Leading DevOps initiatives and infrastructure management",
      "Implementing and maintaining CI/CD pipelines",
      "Managing cloud infrastructure and deployment strategies",
      "Optimizing development workflows and automation processes"
    ],
    achievements: [
      "Streamlined JupyterHub on Kubernetes (GKE) using helm charts, saving 15 hours/month in admin time",
      "Implemented fully automated infrastructure as code using Terraform, Terragrunt, Atlantis and Bitbucket in both GCP and AWS",
      "Implemented Customised AMI and Docker Image Build Creation using Packer",
      "Reduced GCP BigQuery costs by $22k through optimization of slot usage and storage",
      "Enforced controlled VPN access to dev/test sites with Cloudflare WAF, reducing unauthorized access by 10%"
    ]
  },
  {
    title: "AWS DevOps Engineer",
    company: "CG-VAK Software & Exports Ltd",
    duration: "February 2022 - September 2022",
    location: "Coimbatore, Tamil Nadu, India",
    description: [
      "Managed AWS cloud infrastructure and services",
      "Implemented automated deployment pipelines",
      "Maintained and optimized cloud resources",
      "Collaborated with development teams for efficient delivery"
    ]
  },
  {
    title: "Network Engineer",
    company: "Trimax IT Infrastructure & Services Ltd",
    duration: "January 2021 - August 2021",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Managed network infrastructure and security",
      "Implemented network solutions and optimizations",
      "Monitored network performance and resolved issues",
      "Maintained network documentation and procedures"
    ]
  },
  {
    title: "System Administrator",
    company: "KMC Aluminium Private Limited",
    duration: "October 2020 - January 2021",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Administered system infrastructure and security",
      "Managed user access and system permissions",
      "Maintained system backups and disaster recovery",
      "Provided technical support and troubleshooting"
    ]
  }
];