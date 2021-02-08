## Background

Fresh kicks is a workout data visualization project. User will be able to scroll between graphs of different workout types. Each workout will show stats for that workout type. 
Example stats: 
- Average workout time
- Average workout times / week
- Average elevation gain
- number of races / year (some sports have this data and some do not)
The user can breakdown the data for each sport by: 
- gender
- state
- workouts recorded with a device versus self reported

## MVPs
This is a workout data visualization project. 
Features: 
  - Connect into strava api
  - Render a graph
  - Graph has animation
  - allow user to drill into data with different dropdown selectors
  - scroll to see stats for different sports
  - Each sport includes a visually appealing icon / picture

  
  ## Technologies
  -Vanilla JS DOM manipulation to insert graphs
  -D3 data visualation library
  -HTML for static elements on the page
  -CSS for the html elements and general dom layout
  
  ## wireframe
  <p align="center">
  <img src="https://github.com/arieltlr/freshkicks/blob/main/wireframe/Homepage.png" />
  </p>
  
  ## Implementation Timeline
  
  Phase 1: Rendering
  - Get connected to the Strava api and parse 1 piece of data
  - Render a graph 
  
  Phase 2: Build out basic data
  - Add multiple data fields to the graph by sport
  - Include 4 different sport types with their own graph (running, biking, swimming, rowing)
  
  Phase 3: Drill down data
  - Allow a user to slice and dice the data with drop downs for gender, location, devide used
  
 
