import ReactDOMServer from 'react-dom/server';
import { generateTailwindCSS } from '../utils/util';

const Resume = () => {
  const handleDownloadPDF = async () => {
    const htmlString = ReactDOMServer.renderToString(<Resume />);

    const css = await generateTailwindCSS();

    try {
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
      a.download = 'myfile.pdf';
      document.body.appendChild(a); // Required for this to work in Firefox
      a.click();
      a.remove();
    } catch (error) {
      console.error('There was an error:', error);
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
            'The legacy method of creating Extension County Highlights had become outdated and a new method was needed to make the lives easier for 94 MSU Extension agents.',
          action:
            'I collaborated with the Director of MSU Extension Communications to produce user stories and give suggestions as to how to streamline this process. All user stories were clearly defined and put into Jira as tasks/sub-tasks. I created an API written in Node/Express and implemented an endpoint to handle the automation of generating an Extension Highlight Page. I organized the repository in an industry-standard manner and wrote additional helper methods as well as utilized 3rd party libraries such as cheerio for XML manipulation. The process called the Omni Campus CMS API to pull source files, create site directories, update an Extension index page, and publish all files to the production server. Jest tests were written to achieve 90%+ test coverage.',
          result:
            'MSU Extension agents can now log into a password protected page (utilized .htaccess file) and fill out a form outlining county highlights pertaining to a specific program area - saving hours of time web editing. This new method will bring in more viewers to an Extension Highlight as the pages are now able to be read by search engine crawlers, ultimately leveraging SEO. This will be rolled out for use in September of 2023.',
        },
        {
          description: 'CMS Training Module Creation Automation',
          challenge:
            'The Montana State Web and Digital Team would receive on average 7-10 tickets a week tocreate new user accounts and training modules associated with these users. I needed to come up with a solution to automate this creation process using the Omni Campus CMS API.',
          action:
            'I game-planned with Web and Digital developers to precisely define all steps of the manual process and convert these steps into detailed Jira tickets. I utilized the same node/express API that was used to create the Extension Highlight Automation process (above) since this API already included a CMS API library for making RESTful calls – this greatly reduced code duplication. The process contained actions for creating a new user account, setting the correct permissions for the user, copying directories, updating source files, and publishing the training module for use.',
          result:
            'The time it takes to complete these tickets went from ~5 minutes, down to ~30 seconds, freeing up roughly 39 hours annually for our dev team.',
        },
        {
          description:
            'Single Page Application Single-Sign-On (SSO) Implementation',
          challenge:
            'Many 3rd party npm packages existed for server side SSO authentication and a single package written for React SPA’s, but nothing for VueJS. We needed to find a viable solution for integrating SSO in our VueJS single page application.',
          action:
            'I corresponded with our UIT department to better understand our Centralized Authentication System (CAS) and obtain a standardized method for implementing Single Sign On. I cross referenced many different code repositories including the CAS repository written in Java, server side packages written in javascript, and a React CAS Client package. After a better understanding of the process, I extracted code from the React CAS client into front-end logic and back-end logic that we could use on our API. After obtaining a successful login with a prototype Vue Single Page Application, I handed off the front-end code to our front-end dev’s and the backend-logic code our backend developer.',
          result:
            'We are now able to log in once and stay authenticated across all of our applications written in the MEVN stack. Additionally, we don’t have to store individual user accounts pertaining to each application – reducing data duplication and convoluting our database – the CAS handles the storage/retrieval of all this data.',
        },
        {
          description: 'Zendesk Help and Support',
          challenge:
            'Various tickets related to the Omni Campus CMS including user access, password protecting pages, styling pages, modifying XML, updating our existing applications written in PHP, and writing page redirects.',
          action:
            'I communicate with customers to clearly understand the problem at hand and collaborate with team members to solve the issues that various stakeholders around campus have.',
          result:
            '414 tickets solved (and counting) with an average Full Resolution Time of 17.6 hours.',
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
            'Accumulators repositories needed to be deployed on weekends at 7pm to limit user downtime. Environment variables and YAML files needed to be properly configured to ensure a smooth deployment.',
          action:
            'Led a development team of 3 to ensure production environment variables and CI/CD pipeline files were properly configured. I collaborated with cross functional teams to identify deployment issues by analyzing stack traces and logs.',
          result:
            '10+ deployment weekends worked resulting in the processing of 10,000+ claims in the production server.',
        },
        {
          description: 'CMS Training Module Creation Automation',
          challenge:
            'Multiple development teams were working on separate feature branches, which resulted in intricate merge conflicts and inconsistent unit tests.',
          action:
            'I meticulously resolved all merge conflicts arising from the integration of these branches. Additionally, I modified and enhanced Mocha unit tests to ensure not only that they passed consistently but also achieved a code coverage of 90% or higher.',
          result:
            'Ensured seamless integration of multiple feature branches, leading to a cohesive and error-free codebase with high-quality testing benchmarks exceeding 90% coverage.',
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
            'Amidst the escalating threat of chemical warfare at the North/South Korean border, Air Force Personnel needed refresher training in Chemical Biological Radiological and Nuclear (CBRN) Defense.',
          action:
            'I instructed intensive CBRN training for Air Force personnel. This encompassed practical exercises including donning the m50 gas mask and the chemical protective overgarments. Over the course of an hour-long exercise, trainees were equipped with tools such as the Joint Chemical Agent Detectors, M9 chemical detection paper, and Radiation detection devices. The exercises were made comprehensive with the simulation of post-attack reconnaissance routes.',
          result:
            'The rigorous trainings I conducted ultimately equipped 500+ Airmen with essential CBRN defense knowledge and skills, substantially enhancing their preparedness and safety during deployments in high-threat environments.',
        },
        {
          description: 'Inventory Tracking and Operational Checks',
          challenge:
            'The Emergency Management flight had over $2 million invested in equipment, yet lacked an efficient system to monitor and manage these assets, raising concerns about potential loss and readiness for emergencies.',
          action:
            'I took the lead in devising and implementing a comprehensive logistics program. I designed an interactive spreadsheet tailored to meticulously track every asset, organized the data logically, and ensured consistent operational checks on all equipment to monitor its condition and location.',
          result:
            'Over a span of 2 years, we recorded zero lost equipment, and all assets remained consistently ready for both exercises and real-world emergency responses.',
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
          className="w-full flex flex-row bg-gray-900 p-8 h-[250px]"
        >
          <div id="name-box" className="w-[60%]">
            <h1 className="text-white text-xl md:text-5xl font-bold ">
              Brian C. Foley
            </h1>
            <div id="contact-info" className="flex flex-col w-full mt-2">
              <ul className="text-sm md:text-base">
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
                className="border border-black rounded-full"
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
              I am a full-stack developer leveraging modern web frameworks such
              as VueJS and ReactJS, as well as writing clean and concise API’s.
              I’m seeking position with a high intensity startup and a team of
              go-getters. I’m a self-motivated and self-driven developer who can
              solve problems and overcome technical obstacles. I have an
              obsession with working on software as well as learning and
              growing.
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
