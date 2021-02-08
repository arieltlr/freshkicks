## Background

Fresh kicks is an interactive animation project. It is most similar to the kids toy, paper doll. When you open the project there is set of drawn "dolls" to choose from wearing various all white outfits. The user can choose a pattern from a predetermined set and drag them onto the "doll's" clothes. When the pattern is dropped onto the doll, the pattern becomes animated. for instance, if one pattern consisted of palm trees, the tree trunks might start swaying. 

Eventually I'd like the doll to do a dance move when all the blank white of their original outfit is covered in patterns. 

## MVPs
This is an animation project where you can choose the patterns for a persons outfit. 
Features: 
  - Render a person figure with all white outfit
  - render at least one pattern option that has animation built in after it has been dropped onto the person target
  - render a visually appealing area for the person to be center state
  - add additional outfit options
  - add additional pattern options
  - add animation to the figure/person/doll
  
  ## Technologies
  To be totally honest I am not sure how this is all going to play out, but here's my initial idea for architecture
  -HTML elements for the outfit and pattern options (always on the screen)
  -Vanilla js for the conditionally rendered buttons
  -html 5 and canvas for the pattern animation and eventual dance move and drag and drop feature
  -CSS for the html elements and general dom layout
  
  ## wireframe
  <p align="center">
  <img src="https://github.com/arieltlr/freshkicks/blob/main/wireframe/Homepage.png" />
  </p>
  
  ## Implementation Timeline
  
  Phase 1: Rendering
  - Create a person object with a blank white outfit
  - Create a static pattern and render it on the screen 
  - CSS style the "stage" area
  
  Phase 2: Drag and drop
  - Add functionality to drag and drop the pattern onto the clothing item target
  - Pattern takes the shape of the clothing item
  
  Phase 3: Animation
  - The pattern on the clothing item is animated and moves when it is dropped onto the clothing item
  - The person does a dance move when all of their clothing items are animated
  
  
  
  
  A Note to the TA reviewing this - I am really torn about doing this project or doing a data visualization. I am really interested in the strava/ fitbit API. My other project idea was to look at the days people work out and show human tendencies to workout depending on if the miss monday, then miss monday and tuesday, then monday, tuesday and wednesday etc. I could build off that project by looking at how activity wanes throughout the month and then throughout the year. I chose this "paper doll" project because I thought it might be more unique, but I am still on the fence. Can you help me decide, having seen a lot more projects than I have? 
  
