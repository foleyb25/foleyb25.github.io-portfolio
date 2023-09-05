import ReactDOMServer from 'react-dom/server';
import { generateTailwindCSS } from '../utils/util';
import { useState } from 'react';

const Resume = () => {
  var [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    const htmlString = ReactDOMServer.renderToString(<Resume />);

    const css = await generateTailwindCSS();

    try {
      setIsDownloading(true);
      const response = await fetch(
        'https://allthingsgreat-api-staging-53e3067142a5.herokuapp.com/api/v2/utility/downloadPDF',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ html: htmlString, css: css }),
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'brian_foley_resume.pdf';
      document.body.appendChild(a); // Required for this to work in Firefox
      a.click();
      a.remove();
      setIsDownloading(false);
    } catch (error) {
      console.error('There was an error:', error);
      setIsDownloading(false);
    }
  };

  const information = [
    {
      text: 'Date of Birth',
      info: '08/04/1992',
    },
    {
      text: 'Email',
      info: 'foleyb25@gmail.com',
    },
    {
      text: 'Phone',
      info: '406-422-8803',
    },
    {
      text: 'Current Location',
      info: 'Helena, Montana',
    },
    {
      text: 'Web',
      info: 'https://brianfoley.dev',
    },
  ];

  const workExperience = [
    {
      companyName: 'Montana State University',
      dateRange: 'Oct 2022 - Present',
      positionTitle: 'Web Engineer',
      jobLocation: 'Bozeman, MT',
      actionItems: [
        {
          description: 'Montana State Extension Highlight Page Automation',
          challenge:
            'The legacy method for creating Extension County Highlights had become outdated. A new method was needed to simplify the process for the 94 MSU Extension agents.',
          action:
            'I collaborated with the Director of MSU Extension Communications to produce user stories and offered suggestions to streamline the process. All user stories were clearly defined and added to Jira as tasks/sub-tasks. I developed an API using Node/Express and introduced an endpoint for the automated generation of an Extension Highlight Page. The repository was organized following industry standards, and I introduced additional helper methods. I also utilized 3rd-party libraries, such as cheerio, for XML manipulation. The system accessed the Omni Campus CMS API to retrieve source files, create site directories, update web page contents, and upload all files to the production server. Jest tests were crafted to achieve over 90% test coverage.',
          result:
            'MSU Extension agents can now access a password-protected page (using a .htaccess file) and complete a form detailing county highlights for specific program areas. This approach saves them hours previously spent on web editing. Additionally, these new pages are searchable by search engine crawlers, enhancing SEO. The method will be launched in September 2023.',
          skillsUsed:
            'Communication, NodeJS, ExpressJS, Backend Development, Content Management System, XML, HTML, CSS, Debugging, API',
        },
        {
          description: 'CMS Training Module Creation Automation',
          challenge:
            'The Montana State Web and Digital Team received an average of 7-10 tickets per week to create new user accounts and training modules associated with these users. I was tasked with developing a solution to automate this creation process using the Omni Campus CMS API.',
          action:
            'I collaborated with Web and Digital developers to precisely define all steps of the manual process and translated these steps into detailed Jira tickets. I employed the same Node/Express API that was used for the Extension Highlight Automation process (mentioned above). This API already incorporated a CMS API library for making RESTful calls, which greatly minimized code duplication. The automated process included actions for creating a new user account, assigning the appropriate permissions to the user, duplicating directories, updating source files, and launching the training module for use.',
          result:
            'The time required to address each ticket was reduced from approximately 5 minutes to about 30 seconds. This change results in a savings of roughly 39 hours annually for our development team.',
          skillsUsed:
            'Communication, NodeJS, ExpressJS, Backend Development, Content Management System (CMS), XML, HTML, CSS, Debugging, API',
        },
        {
          description:
            'Single Page Application Single-Sign-On (SSO) Implementation',
          challenge: `Many 3rd party npm packages existed for server-side SSO authentication and one package was available for React SPAs. However, there wasn't a package tailored for VueJS. Our challenge was to find a suitable solution for integrating SSO into our VueJS single page application.`,
          action:
            'I collaborated with our UIT department to gain a deeper understanding of our Centralized Authentication System (CAS) and to determine a standardized method for implementing Single Sign-On. I cross-referenced several code repositories, including the CAS repository written in Java, server-side packages in JavaScript, and a React CAS Client package. With this enhanced understanding, I adapted code from the React CAS client, dividing it into front-end and back-end logic suitable for our API. Once a successful login was achieved with a prototype Vue Single Page Application, I passed the front-end code to our front-end developers and the back-end logic to our backend developer.',
          result: `We can now log in once and maintain authentication across all of our applications built on the MEVN stack. Additionally, there's no need to store individual user accounts specific to each application. This reduces data duplication and prevents our database from becoming overly complex. The CAS manages the storage and retrieval of all user data.`,
          skillsUsed:
            'Communication, VueJS, Debugging, 3rd-party package research, Code reviews',
        },
        {
          description: 'Zendesk Help and Support',
          challenge:
            'We received various tickets related to the Omni Campus CMS. These tickets addressed issues such as user access, password-protecting pages, styling pages, modifying XML, updating our pre-existing applications developed in PHP, and creating page redirects.',
          action:
            'I communicate with customers to understand their problems clearly and collaborate with team members to address the concerns of various stakeholders across the campus.',
          result: `I've resolved 414 tickets (and counting) with an average Full Resolution Time of 17.6 hours.`,
          skillsUsed: 'Customer service',
        },
      ],
    },
    {
      companyName: 'Blue Cross Blue Shield',
      dateRange: 'Feb 2021 – Apr 2022',
      positionTitle: 'Associate Developer',
      jobLocation: 'Helena, MT',
      actionItems: [
        {
          description: 'DevOps Deployments',
          challenge:
            'Accumulator repositories needed to be deployed on weekends at 7 pm to minimize user downtime. It was essential that environment variables and YAML files were correctly configured to guarantee a seamless deployment.',
          action:
            'I led a development team of three to ensure that production environment variables and CI/CD pipeline files were correctly set up. Collaborating with cross-functional teams, we identified deployment issues by analyzing stack traces and logs.',
          result:
            'Over 10 deployment weekends, we successfully processed more than 10,000 claims on the production server.',
          skillsUsed:
            'Java, Cross-functional team coordination, Jenkins, Pivotal Cloud Foundry, Urban Code Deploy',
        },
        {
          description: 'Merge Conflict Resolution and Unit Testing',
          challenge:
            'Multiple development teams were working on separate feature branches, leading to complex merge conflicts and inconsistent unit tests.',
          action:
            'I meticulously resolved all merge conflicts resulting from the integration of these branches. Additionally, I refined and enhanced Mocha unit tests, ensuring they not only passed consistently but also achieved code coverage of 90% or higher.',
          result:
            'I ensured the smooth integration of multiple feature branches, culminating in a cohesive and error-free codebase. Our testing benchmarks consistently exceeded 90% coverage.',
          skillsUsed:
            'Git, Github, Merge conflict resolution, Mocha testing, Maven, Cross-functional team coordination, ',
        },
      ],
    },
    {
      companyName: 'United States Air Force',
      dateRange: 'Aug 2011 – Aug 2015',
      positionTitle: 'Emergency Manager, Senior Airman, E-4',
      jobLocation: 'Barksdale, LA',
      actionItems: [
        {
          description:
            'Chemical Biological Radiological and Nuclear (CBRN) Training',
          challenge:
            'Amid the escalating threat of chemical warfare at the North/South Korean border, Air Force Personnel required refresher training in Chemical Biological Radiological and Nuclear (CBRN) Defense.',
          action:
            'I led intensive CBRN training sessions for Air Force personnel, covering practical exercises such as donning the M50 gas mask and chemical protective overgarments. During these hour-long exercises, trainees utilized tools like the Joint Chemical Agent Detectors, M9 chemical detection paper, and radiation detection devices. Additionally, I integrated post-attack reconnaissance route simulations to ensure comprehensive training.',
          result:
            'Through the rigorous training sessions I conducted, over 500 Airmen were endowed with essential CBRN defense knowledge and skills. This significantly bolstered their preparedness and safety for deployments in high-threat environments.',
          skillsUsed: 'Public speaking, Preparedness',
        },
        {
          description: 'Inventory Tracking and Operational Checks',
          challenge:
            'The Emergency Management flight had invested over $2 million in equipment but lacked an efficient system to monitor and manage these assets. This shortfall raised concerns about potential loss and readiness for emergencies.',
          action:
            'I took the lead in devising and implementing a comprehensive logistics program. Using an interactive spreadsheet, I meticulously tracked every asset, organized the data in a logical manner, and ensured consistent operational checks on all equipment to monitor its condition and location.',
          result:
            'Over a span of 2 years, we recorded zero lost equipment. All assets remained consistently prepared for both exercises and real-world emergencies.',
          skillsUsed: 'Attention to detail, Data entry, Organization',
        },
      ],
    },
  ];

  const education = [
    {
      schoolName: 'Montana State University',
      dateRange: 'Aug 2015 - May 2020',
      degree: 'Computer Science',
      location: 'Bozeman, MT',
      gpa: '3.49',
    },
  ];
  const skills = [
    { name: 'NuxtJS', proficiency: 3 },
    { name: 'VueJS', proficiency: 5 },
    { name: 'NodeJS', proficiency: 5 },
    { name: 'ExpressJS', proficiency: 5 },
    { name: 'MongoDB', proficiency: 3 },
    { name: 'Git & Version Control', proficiency: 5 },
    { name: 'Jira', proficiency: 3 },
    { name: 'Tailwind', proficiency: 5 },
    { name: 'HTML', proficiency: 5 },
    { name: 'ReactJS', proficiency: 3 },
    { name: 'Java', proficiency: 2 },
    { name: 'Python', proficiency: 2 },
  ];
  const additionalSkills = [
    'Javascript',
    'Object Document Mapping',
    'Object Relational Mapping',
    'State Management',
    'JSON Web Tokens',
    'Jest',
    'Server-Side Rendering',
    'Page Hydration',
    'Continuous Integration',
    'Continuous Development',
    'Jenkins',
    'Urban Code Deploy',
    'Pivotal Cloud Foundry',
    'Maven',
    'Spring Boot',
    'Microservices Architecture',
    'Swift',
    'Flask',
    'PHP',
    'Auth0',
    'Amazon S3',
    'Heroku',
    'Page Analytics',
    'RESTful API Development',
    'Cross-Functional Team Collaboration',
    'Debugging',
    'Node Package Manager',
    'Agile Methodology',
  ];
  const projects = [
    {
      name: 'Barguments',
      description:
        'iOS application built in swift currently on the Apple App Store.',
      url: 'https://apps.apple.com/us/app/barguments/id6450323880',
    },
    {
      name: 'All Things Great',
      description: 'Blogging site built in NuxtJs and deployed on Vercel.',
      url: 'https://apps.apple.com/us/app/barguments/id6450323880',
    },
    {
      name: 'All Things Great Writer',
      description:
        'Writer side platform for All Things Great with features including Auth0 authentication, image uploading, content management, and deployments with Github Actions',
      url: 'https://apps.apple.com/us/app/barguments/id6450323880',
    },
    {
      name: 'All Things Great API',
      description:
        'RESTful API deployed on Heroku for interacting with a Mongo Database, OpenAI Chat completion calls, and Amazon S3 bucket management',
      url: '',
    },
  ];
  const interests = [
    'Long Distance Running',
    'Weight Training',
    'Golf',
    'Hockey',
    'Dirtbike Riding',
    'Happy Hour',
  ];

  const sections = [
    {
      workExperience: workExperience,
      workExperienceHeader: 'WORK EXPERIENCE',
      education: education,
      educationHeader: 'EDUCATION',
      skills: skills,
      skillsHeader: 'SKILLS',
      additionalSkills: additionalSkills,
      additionalSkillsHeader: 'ADDITIONAL SKILLS',
      projects: projects,
      projectsHeader: 'PROJECTS',
      interests: interests,
      interestsHeader: 'HOBBIES',
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen flex flex-row">
      <div
        id="main-content"
        className="w-full flex flex-col items-center bg-gray-200"
      >
        <div
          id="name-image-combobox"
          className="w-full flex flex-row bg-gray-900 p-8"
        >
          <div id="name-box" className="w-[60%]">
            <h1 className="text-white text-[5vw] font-bold ">Brian C. Foley</h1>
            <div id="contact-info" className="flex flex-col w-full mt-2">
              <ul className="text-[2vw]">
                {information.map((item, i) => (
                  <li key={i} className="text-white">
                    <span className="font-bold text-gray-400">
                      {item.text}:{' '}
                    </span>
                    {item.info}
                  </li>
                ))}
                <li>
                  <button
                    disabled={isDownloading}
                    id="downloadButton"
                    className="rounded p-1 border text-sm border-black bg-gray-400"
                    onClick={handleDownloadPDF}
                  >
                    Download
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div id="image-box" className="w-[40%] flex flex-col items-end">
            <div className="h-full aspect-square rounded-full ">
              <img
                id="selfPortrait"
                src="https://allthingsgreat.s3.us-west-2.amazonaws.com/Self-Portrait.webp"
                alt="Brian Foley Self Portrait"
                className="border border-black rounded-full h-[24vw]"
              />
            </div>
          </div>
        </div>

        <div id="content-container" className="w-[90%] py-8">
          <div
            id="introduction-box"
            className="w-full m-auto flex flex-row justify-center items-center"
          >
            <p>
              I am a full-stack developer specializing in the MEVN (MongoDB,
              ExpressJS, VueJS, NodeJS) Stack, writing clean and concise APIs. I
              am seeking a position with a small to medium size company and a
              team of go-getters.
            </p>
          </div>
          <hr className="border border-gray-400 w-full m-auto my-4" />
          {sections.map((section, i) => (
            <div key={i} className="w-full">
              <div id="work-experience" className="w-full">
                <h3 className="text-black font-bold border-b text-2xl border-gray-400 inline-flex">
                  {section.workExperienceHeader}
                </h3>
                {section.workExperience.map((workplace, i) => (
                  <div key={i} className="mt-4">
                    <div className="flex flex-row justify-between">
                      <h4 className="text-black text-xl font-bold">
                        {workplace.companyName}
                      </h4>
                      <div>{workplace.dateRange}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="italic">{workplace.positionTitle}</div>
                      <div className="italic">{workplace.jobLocation}</div>
                    </div>

                    {workplace.actionItems.map((item, i) => (
                      <div key={i}>
                        <ul className="list-disc pl-5">
                          <li>
                            <p className="font-bold">{item.description}</p>
                            <div className="pl-5">
                              <span className="font-bold">Challenge: </span>
                              {item.challenge}
                            </div>
                            <div className="pl-5">
                              <span className="font-bold">Action: </span>
                              {item.action}
                            </div>
                            <div className="pl-5">
                              <span className="font-bold">Result: </span>
                              {item.result}
                            </div>
                            <div className="pl-5">
                              <span className="font-bold">Skills: </span>
                              {item.skillsUsed}
                            </div>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div id="education" className="mt-2">
                <h3 className="text-black font-bold border-b text-2xl border-gray-400 inline-flex">
                  {section.educationHeader}
                </h3>
                {section.education.map((educationInfo, i) => (
                  <div key={i} className="mt-4">
                    <div className="flex flex-row justify-between">
                      <h4 className="text-black text-xl font-bold">
                        {educationInfo.schoolName}
                      </h4>
                      <div>{educationInfo.dateRange}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="italic">{educationInfo.degree}</div>
                      <div className="italic">{educationInfo.location}</div>
                    </div>
                    <ul className="list-disc pl-5">
                      <li>
                        <div>{educationInfo.gpa} GPA</div>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              <div id="skills">
                <h3 className="text-black font-bold border-b text-2xl border-gray-400 inline-flex my-4">
                  {section.skillsHeader}
                </h3>

                <div
                  key={i}
                  className="w-full grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {section.skills.map((skill, i) => (
                    <div key={i} className="p-4 border rounded shadow">
                      <p className="mb-2 font-bold">{skill.name}</p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(dotIndex => (
                          <div key={dotIndex}>
                            <div
                              className={`w-4 h-4 rounded-full mr-1 ${
                                dotIndex <= skill.proficiency
                                  ? 'bg-blue-800'
                                  : 'bg-gray-300'
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div id="additional-skills" className="mt-4">
                <h3 className="text-black font-bold border-b text-2xl border-gray-400 inline-flex mb-4">
                  {section.additionalSkillsHeader}
                </h3>

                <div key={i} className="w-full">
                  {section.additionalSkills.map((skill, i) => (
                    <div
                      key={i}
                      className="p-2 border rounded-full inline-flex shadow bg-gray-900 text-white text-xs"
                    >
                      <span className="font-bold text-white">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div id="projects">
                <h3 className="text-black font-bold border-b text-2xl border-gray-400 inline-flex my-4">
                  {section.projectsHeader}
                </h3>

                <div className="w-full">
                  <ul className="list-disc pl-5">
                    {section.projects.map((project, i) => (
                      <li key={i}>
                        <strong>
                          <i>{project.name}</i>
                        </strong>{' '}
                        {project.description}{' '}
                        {project.url ? (
                          <span>
                            |{' '}
                            <a
                              className="underline text-blue-600"
                              href={project.url}
                            >
                              Demo
                            </a>
                          </span>
                        ) : (
                          ''
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div id="interests">
                <h3 className="text-black font-bold border-b text-2xl border-gray-400 inline-flex my-4">
                  {section.interestsHeader}
                </h3>
                <div className="w-full">
                  {section.interests.map((interest, i) => (
                    <span key={i}>{interest}; </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
