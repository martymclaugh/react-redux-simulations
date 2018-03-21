# Rescale Front End Technical Challenge

This is the take home front end challenge for Rescale. This project should take around 3 hours to complete.

The intention of this project is to get a better understanding of your coding ability, your design sense, ux chops & your creativity. It's also intended to give you a better understanding of what we do at Rescale. The application that you will build is a simple version of Rescale's platform. Users should be able to select software simulations & hardware, to run jobs and get back results. 

Maybe an easier way to understand the application is to break it into two parts 1. displaying existing jobs/simulations and 2. creating a new job/simulation. 

To display existing jobs/simulations you will want to use the jobs endpoint & the individual jobs endpoint. These endpoints will allow you to get existing jobs/simulations, their names, ids, and results (for this exercise all results will be images). So for example if there was a Structural Analysis (the software) job dealing with strength analysis (the application) the results might be an image of the engineered item and additional images of graphs of data from the simulation.

To create a new job/simulation you will want to use the software and hardware endpoints to retrieve the possible selections so that your end user can name their new job, select the software & application of the job/simulations they would like to run and then choose hardware and the amount of cores they would like to use. This information can then be passed back to the server to create a new job/simulation.

If you are invited for an in person interview we will use your project as a starting point for further discussion & we might ask you to add more functionality to what you have already built. Due to time constraints, no testing is required at this stage. At this point there is no endpoint for deleting jobs, the database is in memory so if you'd like to delete jobs you can just stop and restart the server.

tldr:

Please create an application that uses the endpoints provided. Your application should be able to show the current jobs and their results and should be able to create a new job and show its results.  Please email any questions you may have to davidl at rescale.com.

Jobs Endpoint:

http://localhost:3000/api/jobs

This endpoint (GET) returns a JSON object with all of the current jobs in the application, there are 3 jobs each has a name an id, their software and hardware selections and their results

Individual Job Endpoint:

http://localhost:3000/api/jobs/:jobId

This endpoint (GET) returns a JSON object with the information for a particular job.

Software Endpoint:

http://localhost:3000/api/software

This endpoint (GET) returns a JSON object with options for software/simulation. There are three top level choices of Computational Fluid Dynamics, Structural Analysis & Electromagnetics. Each selection includes several applications such as Aircraft Icing, Turbulence Modeling or Thermal Analysis.

Hardware Endpoint:

http://localhost:3000/api/hardware

This endpoint (GET) returns a JSON object with options for hardware. There are three hardware selections and each shows the options of how many cores are available.

Create New Job Endpoint:

http://localhost:3000/api/create

This endpoint (POST) allows you to create a new job. To create a new job you should post with data in the following format:

{
  'name': 'New Job Name',
  'softwareId': 'cfd',
  'applicationId': 'icing',
  'hardwareId': 'e4',
  'cores': 32,
}

After cloning the repository on your local machine run: 'npm install'

To get the api server and the dev server running at the same time please run:

'npm run api-server'

&

'npm run dev-server'

The api server runs on http://localhost:3000/api/

& the dev server runs on http://localhost:8080/

I've provided a basic boilerplate for React, but feel free to use whatever framework you feel comfortable with.

When you are finished, please compress your project and send it to me at davidl at rescale.com. Please do not share your code for this exercise publicly on github or other sites.

Good Luck!

-David
