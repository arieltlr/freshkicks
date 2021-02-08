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
  -HTML elements for the outfit and pattern options (always on the screen)
  -Vanilla js for the conditionally rendered buttons
  -html 5 and canvas for the pattern animation and eventual dance move and drag and drop feature
  -CSS for the html elements and general dom layout
  
  ## wireframe
  <p align="center">
  <img src="https://github.com/arieltlr/freshkicks/blob/main/wireframe/Homepage.png" />
  </p>
  
  ## Implementation Timeline
  
  ### Day 1-2
  Phase 1: Rendering
  - Create a person object with a blank white outfit (Day 1)
  - Create a static pattern and render it on the screen (Day 2)
  - CSS style the "stage" area (Day 1)
  
  ### Day 3
  Phase 2: Drag and drop
  - Add functionality to drag and drop the pattern onto the clothing item target (Day 3)
  - Pattern takes the shape of the clothing item (Day 3)
  
  ### Day 4-5
  Phase 3: Animation
  - The pattern on the clothing item is animated and moves when it is dropped onto the clothing item (Day 4-5)
  - The person does a dance move when all of their clothing items are animated (Possibly day 5. Possibly later)
  