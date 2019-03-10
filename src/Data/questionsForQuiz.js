const testQuestions = {
    "The state of Indiana requires _________ to wear safety belts or suitable child restraints" : {A : "The driver", B : "The driver and all passengers", C: "rear-seat passengers", D: "only the passenger in the middle rear seat", correct : "B", type: "general question"},
    "The likilihood of an accident increases if a driver is under the influence of" : {A : "a cup of coffee" ,B : "alcohol, some illicit drugs, or some prescription medications" ,C: "a cup of tea",D: "softly playing music" ,correct : "B", type: "general question"},
   "If you fail a chemical test for drugs or alcohol, your license may be suspended by the Buereau of Motor Vehicles for up to" : {A : "90 days" ,B : "60 days" ,C: "30 days" ,D: "180 days" ,correct :"D", type: "general question"},
    "Restriction B on your drivers license means that you ": {A : "must have a vehicle equipped with outside mirrors" ,B : "may only drive during daylight hours" ,C: "must use a prosthetic aid" ,D: "must wear corrective lenses" ,correct : "D", type: "general question"},
   "According to Indiana's points system, which of the following is the most severe traffic violation?" : {A : "Driving without brake lights" ,B : "Tailgating" ,C: "A speed constest on the road" ,D: "Disregarding a stop sign" ,correct : "C", type: "general question"},
   "To enter a roundabout, you must proceed" : {A : "in a clockwise direction" ,B : "in a counterclockwise" ,C: "toward the left" ,D: "in the opposite direction of traffic",correct : "B", type: "general question"},
  "Three cars arrive at an intersection at about the same time. A Pedestrian has started crossing the road. Who has the right-of-way here? Pedistrain crossing in front of car C   car b going in the same direction as pedistrian,  A going towards pedistrian. " : {A : "Car B" ,B : "The pedistrain" ,C: "Car C" ,D: "Car A" ,correct :"B", type: "general question"},
  "This sign is a"  : {A : "highway exit sign",B : "Divided Highway Begins sign" ,C: "freeway interchance sign" ,D: "Right Lane Ends sign" ,correct : "C", image : "https://s.driving-tests.org/wp-content/uploads/autotest/37.svg", type: "general question"},
  "The maximum speed limit in a highway work zone is at least _____) below the maximum established speed limit for the area."  : {A : "5 mph",B : "15 mph" ,C: "10 mph" ,D: "20 mph" ,correct : "C", type: "general question"},
  "Which of the following will NOT result in a two-point addition to an Indiana driving record? "  : {A :"Driving without brake lights" ,B : "Making an improper U-turn" ,C: "Failure to use headlights" ,D: "Speeding 8 mph over the posted limit" ,correct : "B", explanation : "Improver U-turn will actually result in a 4 point pentalty", type: "general question"},
  "Here are two flashing boards(panels) that you may find in a road work zone. Sign a tells drivers to merge or pass right ----> . What odes  :  :  sign B mean?"  : {A : "Road ends; turn around and go back",B : "Merge or pass to either side" ,C: "You must stop ahead" ,D: "Proceed with caution" ,correct : "D", type: "general question"},
  "If you are convicted of creating graffti, your license may be suspended for up to"   : {A : "15 days" ,B : "6 months" ,C: "30 days" ,D: "1 year" ,correct : "D", type: "general question"},
  "It is dangerous and illegal to try to pass other vehicles when you are within ______ of an intersection, railroad crossing, bridge, viaduct, or tunnerl"  : {A : "100 feet" ,B : "600 feet" ,C: "500 feet" ,D: "200 feet" ,correct : "A", type: "general question"},
  "What is the minimum additional suspension period for driving with a suspended license in the state of Indiana"   : {A : "1 year",B : "18 months" ,C: "90 days" ,D: "30 days" ,correct : "C", type: "general question"},
  "If you get a blowout or flat tire, what should you do first?"   : {A : "Pull off the road",B : "Maintain your speed" ,C: "Hold the steering wheel firmly",D: "Apply the brakes" ,correct :"C", type: "general question"},
  "if you are driving on a steep downgrade, you should"   : {A :"turn on head lights" ,B :"shift to lower gear" ,C: "press gass" ,D:"apply brakes" ,correct :"B", type: "general question"},
  "In the Indiana points system, each moving traffic violation is assigned _____ points"   : {A : "between 4 and 10 " ,B : "between 3 and 9" ,C: "between 1 and 5" ,D: "between 2 and 8" ,correct : D, type: "general question"},
  "Which car is NOT using the roundabout correctly"   : {A : "None",B : "Car A" ,C: "Car C" ,D: "Car B" ,correct :"Car C", image: "https://s.driving-tests.org/wp-content/uploads/autotest/1365461298_t1q40.svg", type: "general question"},
  "Before pulling out from a parallel parking space on the right side of the street, you must"  : {A : "check for approaching traffic and signal a left turn" ,B : "turn on your emergency flashers" ,C: "check for approaching traffic but not give any turn signal" ,D: "check for approaching traffic and signal a right turn" ,correct : "A", type: "general question"},
    "If you are being passed by another vehicle, you should"   : {A : "move into the left lane" ,B : "stay in your lane and not increase your speed" ,C: "increase your speed" ,D: "move into the right lane and not increase your speed" ,correct :"B", type: "general question"},
    "This road has a central area that is marked with solid and broken yellow lines. What is the purpose of this area?"   : {A : "This is a central divider, which can only be used for emergency stopping" ,B : "This is a central passing lane" ,C: "This is a central parallel parking area" ,D: "This is a center turning lane" ,correct : "D", image : "https://s.driving-tests.org/wp-content/uploads/autotest/1365866221_t1q39.svg", type: "general question"},
    "What does this sign indicate?"  : {A : "Drive at a speed of 45 mph.",B : "Vehicles merging ahead; do not increase your speed to 45mph" ,C: "Construction ahead; reduce your speed to 45mph" ,D: "A speed zone is ahead; be prepared to reduce your speed to 45 mph.",correct : "D" , image: "https://s.driving-tests.org/wp-content/uploads/autotest/23.svg", type: "general question"},
    "Which of the following statements about following distance is true?"  : {A : "You should remain 40 feet behind the vehicle ahead at all times" ,B : "You should remain at least six seconds behind the vehicle ahead" ,C: "You should remain at least two to three seconds behind the vehicle ahead" ,D: "You should follow a vechicle close enough to make polite conversation with the driver",correct : "C", image: "https://s.driving-tests.org/wp-content/uploads/autotest/1366574040_t1q45.svg", type: "general question"},
    "To leave yourself adequate room to stop, you should stay at least ______ behind the vehicle ahead of you."  : {A : "nine to ten seconds" ,B : "four seconds" ,C: "five seconds" ,D: "two to three seconds",correct : "D", type: "general question"},
    "You have parked next to the curb facing uphill. Which way should you point your front wheels to stop your car from rolling if your brakes should fail?"  : {A :"steer towards the cub" ,B : "It makes no difference" ,C: "Keep your wheels straight",D: "Steer away from the curb" ,correct : "D", type: "general question"},
    "You are turning right on a red signal. Just as you are about to turn, a pedestrian starts to cross the road you want to enter. What should you do?"  : {A : "Turn into the far lane to avoid the pedstiran" ,B : "Sound your horn to alert the pedestrian to your presence" ,C: "Speed up and pass the pedestrian",D: "Stop and let the pedestrian cross." ,correct : "D", type: "general question"},
    "If you fail to yield to an emergency vehicle when required to do so, how many points will be added to your driving record?"  : {A : "2" ,B : "8" ,C: "6" ,D: "4" ,correct : "C", type: "general question"},
    "When passing a truck or other large commerical vehicle, you must watch out for ______ of the vehicle."  : {A : "the length" ,B : "the side, rear, and front No-Zones" ,C: "the weight" ,D: "the large mirros" ,correct : "B", type: "general question"},
    "Indiana drivers licenses for drivers who are under the age of 21" : {A : "are black and white" ,B : "have a vertical orientation" ,C: "have a horizontal orientation" ,D: "glow in the dark" ,correct : "B", type: "general question"},
    "If another vehicle is passing you on the left, allow the other vehicle to pass safely, and " : {A : "do not increase your speed" ,B : "move into the left lane" ,C: "increase your speed to follow the vehicle" ,D: "move to the right edge of the road" ,correct : "A", type: "general question"},
    "Indiana law requires the driver and all passengers to use seat belts whenever a vehicle is" : {A : "traveling on highways" ,B : "in operation" ,C: "traveling at a speed greater than 35 mph" ,D: "traveling at a speed greater than 50 mph",correct : "B", type: "general question"},
    "You are traveling on a four-lane road. You see an emergency vehicle stopped ahead with its lights flashing. What must you do? " : {A : "Leave an empty lane between your vehicle and the emergency vehicle and reduce your speed by 20 mph",B : "Leave an empty lane between your vehicle and the emergency vehicle if you can do so safely, Otherwise, slow down and proceed with caution",C: "Maintain your speed but proceed with caution",D: "slow down and prepare to stop" ,correct : "B", image: "https://s.driving-tests.org/wp-content/uploads/autotest/1367604090_t1q50.svg", type: "general question"},
    "_______ are the most frequent type of crashes on interstates"  : {A : "Rear-end collisions" ,B : "Head-on collisions" ,C: "truck collisions" ,D: "Side collisions" ,correct : "A", type: "general question"},
    "This sign indicates"  : {A : "the interstate highway number." ,B : "the distance to the nearest exit" ,C: "the exit number" ,D: "the interstate highway speed limit" ,correct :"A", image: "https://s.driving-tests.org/wp-content/uploads/autotest/MUTCD_M1-1_(2_digits).svg", type: "general question"},
    "If your disc or drum brakes suddenly fail, you should"  : {A : "shift to a lower gear if possible, and pump the brake pedal fast and hard several times" ,B : "shift to a higher gear if possible and pump the brake pedal fast and hard several times." ,C: "shift to a higher gear if possible and coast" ,D: "pull off the road and stop " ,correct : "A", type: "general question"},
    "You want to turn, and you don't see any other vehicles around. Do you still need to signal?"  : {A : "yes, you must signal, but there is no set minimum time" ,B : "Yes, you must signal for at least 200 feet under 50mph or at least 3000 feet at 50 mph or higher" ,C:"No, you are only required to signal when other vehicles are present" ,D: "Yes, you must signal for at least 200 feet" ,correct :"B", type: "general question"},
    "You drive up to an intersection and you see this sign. What should you do? "  : {A : "maintain your speed since all traffic ahead must yield to you." ,B : "Come to a complete stop, yield if necessary, and then proceed" ,C: "Slow down and prepare to yield to pedestrians and traffic ahead" ,D: "slow down and prepare to line up behind traffic already in the intersection" ,correct : "C", image: "https://s.driving-tests.org/wp-content/uploads/autotest/MUTCD_R1-2.svg", type: "general question"},
    "When a vehicle turns, its rear wheels will follow a _____  than its front wheels"  : {A : "shorter path" ,B : "longer path",C: "slower path",D: "faster path" ,correct :"A", type: "general question"},
    "This figure indicates"  : {A : "vehicles must not cross the dashed white line under any circumstances" ,B : "vehicles must not cross the solid yellow line, except to pass." ,C: "vehicles must not cross the solid yellow line, except to turn.",D: "none of the above",correct : "C", image: "https://s.driving-tests.org/wp-content/uploads/autotest/27.svg", type: "general question"},
    "What should you do if fog closes in completely while you are driving, and visibility is reduced to near zero?"  : {A :"slow down and take a detour" ,B : "use your low beams",C: "Carefully pull as far off the road as possible and stop",D: "Use your high beams" ,correct : "C", type: "general question"},
    "What is the first rule of a safe and legal turn? "  : {A : "Move into the proper lane well before the turn" ,B : "Cut corners while turning" ,C: "Increase your speed" ,D: "Reduce your speed" ,correct : "A", type: "general question"},
    "When you enter an interstate on-ramp, stay to the right and ______ to allow your car to merge with traffic"  : {A : "increase your speed in the deceleration lane" ,B : "increase your speed in the acceleration lane" ,C: "decrease your speed in the deceleration lane",D: "decrease your speed in the acceleration lane",correct : "B", type: "general question"},
    "In most urban residentail areas you may not exceed"  : {A : "60 mph or the posted speed limit" ,B : "30 mph or the posted speed limit" ,C: "50 mph" ,D: "45 mph or the posted speed limit",correct : "B", type: "general question"},
    "If you are approaching an intersection with a non-operating signal, you should"  : {A : "make a right turn at the intersection",B : "stop after entering the intersection" ,C: "stop before entering the intersection yield right of way to cross traffic",D: "slow down at the intersection and proceed with caution",correct : "C", type: "general question"},
    "What does this sign indicate?"  : {A : "speed advisory at roundabout" ,B : "speed advisory on ramp" ,C: "speed limit ahead",D: "speed advisory at exit" ,correct : "A", image: "https://s.driving-tests.org/wp-content/uploads/autotest/28.svg", type: "general question"},
    "If a tornado is nearby, you must"  : {A : "stop, exit your vehicle immediately, and go to a low-lying area" ,B : "close all the doors and turn on your headlights" ,C: "take a detour to the top of a bridge",D: "drive as fast as possible to avoid it",correct : "A", type: "general question"},
    "Flashing arrow boards (panels) are often used to indicate"  : {A : "a detour ahead" ,B : "a yield sign ahead" ,C: "a stop sign ahead",D: "no entry ahead" ,correct :"A", type: "general question"},
    "When making a U-turn, you must NOT"  : {A : "give a turn signal" ,B : "make it on a curve of the road or near a hill" ,C: "yiled the right of way to pedestrians",D: "yield the right of way to oncoming vehicles" ,correct : "B", type: "general question"},
    "When visbility is diminished, you must use low beams when you are"  : {A : "within 200 feet of an oncoming vehicle" ,B : "approaching an intersection or traffic island at night" ,C: "within 500 feet of an oncoming vehicle",D: "approaching a railroad crossing at night" ,correct : "C", type: "general question"},
    "When visbility is diminished, you must use low beams when you are"  : {A : "within 200 feet of an oncoming vehicle" ,B : "approaching an intersection or traffic island at night" ,C: "within 500 feet of an oncoming vehicle",D: "approaching a railroad crossing at night" ,correct : "C", type: "general question"},
    "If you are approaching a stop sign you must"  : {A : "stop at at the broken yellow stop line" ,B : "stop at the solid white stop line" ,C: "stop at the broken white stop line" ,D: "stop at the edge of the road" ,correct : "B", type: "general question"},
    "On a multilane roadway with a speed limit of 50 mph or greater, you must signal your intention to change lanes ___ in advance"  : {A : "at least 50 feet",B : "at least 300 feet" ,C: "at least 100 feet",D: "at least 200 feet",correct : "B" , type: "general question"},
    ""  : {A :"On a multilane roadway with a speed limit under 50 mph, you must signal your intention to change lanes at least 200 feet in advance. If the speed limit is 50 mph or greater, you must signal your intention at least 300 feet in advance. Note that at 50 mph, your vehicle will travel 300 feet in about 4 seconds." ,B : "never" ,C: "100 feet" ,D: "50 feet" ,correct : "A", type: "general question"},
    "This sign indicates"  : {A : "a roundabout ahead",B : "a stop sign ahead" ,C: "a traffic signal ahead",D: "a yield sign ahead Be ready to slow down and yield to other vehicles already on the road." ,correct : "D", image: "https://s.driving-tests.org/wp-content/uploads/autotest/Ontario_Wb-1A.svg", type: "general question"},
    "What does this signal mean?"  : {A : "A train station is ahead",B : "an abandoned railroad track is ahead" ,C: "a railroad crossing is ahead" ,D: "a railroad track parallel to the roadway is ahead",correct : "C", image: "https://s.driving-tests.org/wp-content/uploads/autotest/1293175946_IndianaQ4.svg", type: "general question"},
    "A flashing red light at an intersection is equivalent to "  : {A : "a stop sign" ,B : "a yield sign" ,C: "a flashing yellow light" ,D: "a do not enter sign",correct :"A", type: "general question"},
    "It is dangerous and illegal to try to pass other vehicles when you are within _____ of an intersection, railroad crossing bridge viaduct or tunnel"  : {A : "600 feet" ,B : "500 feet" ,C: "200 feet",D:"100 feet" ,correct : "D", type: "general question"},
    "It is dangerous and illegal to try to pass other vehicles when you are within _____ of an intersection, railroad crossing bridge viaduct or tunnel"  : {A : "600 feet" ,B : "500 feet" ,C: "200 feet",D:"You are prohibited from passing other vehicles when you are within 100 feet of an intersection, railroad crossing, bridge, viaduct, or tunnel." ,correct : "D", type: "general question"},
    "Which of the following statements about driving on highways is true?"  : {A : "Faster vehicles must enter the highway through a deceleration lane" ,B : "slower vehicles should use the left lane, and faster vehicles should use the right lane" ,C: "Faster vechiles should pass slower vehicles on the right",D: "Slower vechicles should use the right lane and fster vechiles should use the left lane",correct : "D", type: "general question"},
    "If you are driving near a school, you must slow down to _____  for the school zone"  : {A : "10 mph below the established speed limit",B : "35 mph" ,C: "45 mph",D: "the posted speed limit" ,correct : "D", type: "general question"},
    "To avoid the effects of glare of oncoming headlights, do not look directly into the lights of the approaching vehicle instead"  : {A : "focus on the right side of the road",B : "focus on the speed of the vehcile",C: "focus on the center of the road" ,D: "focus on the left side of the road",correct : "A", type: "general question"},
    "What does this sign mean?"  : {A : "Merge with the traffic on the left",B : "you may either turn left or go straight regulatory sign" ,C: "merge with the traffic on the right" ,D: "Yield to the traffic on the left" ,correct : "B", image: "https://s.driving-tests.org/wp-content/uploads/autotest/MUTCD_R3-6L.svg", type: "general question"},
    "When a vehicle turns, its rear wheels will follow a  _____ than its front wheels"  : {A : "longer path",B : "faster path" ,C: "shorter path",D: "slower path" ,correct : "C", type: "general question"},
    "A yield sign indicates that you must slow down when approaching an intersection and be prepared to ______ if a vehicle or pedestrian with the right - of way is approaching from another direction"  : {A :"make a U-turn" ,B : "stop" ,C: "increase your speed" ,D: "turn" ,correct : "B", type: "general question"},
    "If you are involved in an accident you must"  : {A : "leave the scene of the accidnt" ,B : "stop other vehciles on the road" ,C: "not provide information to others involved in the accident" ,D: "stop and provide information to others involved in the accident" ,correct : "D", type: "general question"},
    "When operating a vehicle with a steering wheel interlock system, never turn _______ while the vehicle is in motion"  : {A : "the gearshift into a higher position" ,B : "the headlights on" ,C: "the ignition to the lock position",D: "the headlights off",correct : "C", type: "general question"},
    "This service sign indicates that"  : {A :"hospital service is available" ,B : "lodging is available" ,C: "parking is available" ,D: "a service area is available",correct :"B", image: "https://s.driving-tests.org/wp-content/uploads/autotest/MUTCD_D9-9.svg", type: "general question"},
    "The maximum speed limit in a highway work zone is at least _______ below the maximum established speed limit for the area"  : {A : "15 mph" ,B : "5 mph" ,C: "20 mph" ,D: "10 mph" ,correct : "D", type: "general question"},
    "You must avoid ____  while crossing railroad tracks"  : {A : "using brakes" ,B : "using low-beam headlights" ,C: "stopping or shifting gears" ,D: "using high-beam headlights",correct :"C", type: "general question"},
    "If you get a blowout or flat tire, what should you do first? "  : {A : "hold the steering wheel firmly" ,B : "Maintain your speed." ,C: "Apply the brakes" ,D: "Pull off the road" ,correct :"A", type: "general question"},
    "This sign indicates"  : {A : "the closing of the lane in 1000 feet" ,B : "road work in 1000 feet" ,C: "a detour in 1000 feet" ,D: "a stop sign in 1000 feet" ,correct : "C", image: "https://s.driving-tests.org/wp-content/uploads/autotest/MUTCD_W20-2_(temporary).svg", type: "general question"},
    "Red traffic Signs signify what?"  : {A : "road conditions",B : "schools" ,C: "directions" ,D: "traffic regulations that require immediate action such as stop or yeild" ,correct : "D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\red traffic sign.PNG", type : "general sign"},
    "White traffice signs signify what?"  : {A :"rail road ahead" ,B : "traffic regulations such as speed limits or no turn on red" ,C: "School zone" ,D: "construction" ,correct :"B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\white traffic sign.PNG", type : "general sign"},
    "White traffice signs signify what?"  : {A :"rail road ahead" ,B : "traffic regulations such as speed limits or no turn on red" ,C: "School zone" ,D: "construction" ,correct :"B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\white traffic sign.PNG", type : "general sign"},
    "White traffice signs signify what?"  : {A :"rail road ahead" ,B : "traffic regulations such as speed limits or no turn on red" ,C: "School zone" ,D: "construction" ,correct :"B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\white traffic sign.PNG", type : "general sign"},
    "Yellow or Fluorescent Yellow-gree traffic signs signify what?"  : {A : "prepare for road conditions" ,B : "schools" ,C: "ice cream" ,D: "rain" ,correct : "A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\yellow or fluorescent yellow-green traffic sign.PNG", type : "general sign"},
    "White traffice signs signify what?"  : {A :"rail road ahead" ,B : "traffic regulations such as speed limits or no turn on red" ,C: "School zone" ,D: "construction" ,correct :"B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\white traffic sign.PNG", type : "general sign"},
    "Orange Traffic Signs Signify what?"  : {A : "conditions ahead due to construction" ,B : "regulations such as speed limits" ,C: "rail road ahead",D: "school zone",correct : "A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\orange traffic sign.PNG", type : "general sign"},
    "Green Traffic signs signify what?"  : {A :"recreational interests" ,B : "construction" ,C: "rail road tracks" ,D: "directions or guidance entrace and exits for high ways" ,correct : "D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\green traffic sign.PNG", type : "general sign"},
    "Blue traffic Signs signify what?"  : {A :"road services and evacuation route information, amenities etc" ,B : "high way entrances and exits" ,C: " museums",D:"parks" ,correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\blue traffic sign.PNG", type : "general sign"},
    "Brown traffic signs signify what?"  : {A : "nearby recreational and cultural interest sites",B : "food services" ,C: "regulatory messages" ,D: "rail road ahead" ,correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\brown traffic sign.PNG", type : "general sign"},
    "Cicular Traffic Signs signify what?"  : {A : "dear crossing" ,B :"recreational interest" ,C:"School zone" ,D: "upcoming railroad crossings" ,correct : "D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\circular traffic sign.PNG", type : "general sign"},
    "Equilateral Traffic Signs signify what?"  : {A : "school zone" ,B : "railroad crossing" ,C:"slow down when approaching intersection be prepared to stop" ,D: "exits" ,correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Equilateral traffic sign.PNG", type : "general sign"},
    "Pennant Shapped Traffic Signs signify what?"  : {A : "placed on the left had side of two way roads warn do not pass" ,B : "exits and entrances",C: "food services",D: "yield",correct : "A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Pennant-shapped traffic sign.PNG", type : "general sign"},
    "Rectangular Traffic Signs signify what?"  : {A :"one of three types  speed limits turn momvent may identify a state high way or direction to next town" ,B : "no passing" ,C: "yield" ,D: "railroad crossing" ,correct : "A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\rectangular traffic signs.PNG", type : "general sign"},
    "Diamond-Shaped traffic Signs signify what?"  : {A :"school zone" ,B :"upcoming road conditions and hazards" ,C: "hosptial exit" ,D: "food services",correct : "B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\diamond shapped traffic signs.PNG", type : "general sign"},
    "Five-Sided Traffic Signs signify what?"  : {A : "yeild" ,B :"speed limit",C:"School zone" ,D:"stop" ,correct : "C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\five sided traffic signs.PNG", type : "general sign"},
    "Eight Sided Traffic Signs  signify what?"  : {A :"Stop" ,B : "Yeild" ,C:"go faster" ,D: "wrong way" ,correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\eight sided traffic sign.PNG", type : "general sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Cattle Crossing" ,B :"Added Lane" ,C:"Winding Road" ,D:"Narrow Bridge" ,correct : "B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Added Lane.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Divided Highway Begins" ,B :"Narrow Bridge" ,C:"Two-Way Traffic" ,D: "Bicylce Crossing" ,correct : "D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Bicycle Crossing.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Buggy Warning" ,B :"Narrow Bridge" ,C: "Two-Way Traffic",D:"Merging Traffic" ,correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Buggy Warning.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Divided Highway Begins" ,B :"Cattle Crossing" ,C:"Two-Way Traffic" ,D:"Merging Traffic" ,correct :"B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Cattle Crossing.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Divided Highway Begins" ,B :"Winding Road" ,C: "Intersection Ahead",D: "Merging Traffic",correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Intersection Ahead.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Winding Road" ,B :"Curve Ahead" ,C:"Narrow Bridge" ,D:"Merging Traffic" ,correct :"B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Curve Ahead.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Deer Crossing" ,B :"Winding Road" ,C: "Merging Traffic",D:"Two-Way Traffic" ,correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Deer Crossing.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Cattle Crossing" ,B :"Two-Way Traffic" ,C:"Detour in 1,000 Feet" ,D:"Merging Traffic" ,correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Detour in 1000 Feet.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "Winding Road",B : "Narrow Bridge",C:"Merging Traffic" ,D:"Divided Highway Begins" ,correct :"D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Divided Highway Begins.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Farm Machinery" ,B :"Divided Highway Begins" ,C: "",D:"Merging Traffic" ,correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Farm Machinery.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Sharp Turn Slow down" ,B :"Winding Road" ,C:"Fire Station" ,D: "",correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Fire Station.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Sharp Turn Slow down" ,B : "",C:"Lane Ends" ,D:"Merging Traffic" ,correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Lane Ends.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B :"",C:"Lanes Shifting" ,D: "",correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Lanes Shifting.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B :"Low Clearance" ,C: "Low Shoulder",D: "Merging Traffic",correct :"B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Low Clearance.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Low Clearance" ,B : "Low Shoulder" ,C: "",D: "",correct : "B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Low Shoulder.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Cattle Crossing" ,B : "Merging Traffic" ,C: "",D: "",correct :"B", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Merging Traffic.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"" ,B : "",C: "",D: "Narrow Bridge",correct :"D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Narrow Bridge.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B :"" ,C:"" ,D: "Object Markers",correct :"D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Narrow Bridge.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"" ,B :"" ,C: "",D:"Pedestrian Crossing" ,correct :"D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Pedestrian Crossing.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C:"" ,D:"Playground Warning" ,correct :"D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Playground Warning.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C: "",D:"Perpare To Stop" ,correct :"D", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Prepare To Stop.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Sharp Turn Slow down" ,B : "",C: "",D: "",correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Sharp Turn Slow down.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Side Road" ,B : "",C: "",D: "",correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Side Road.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Slippery When Wet" ,B : "",C: "",D: "",correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Slippery When Wet.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Steep Downgrade" ,B : "",C: "",D: "",correct :"A", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Steep Downgrade.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C:"Stop Ahead" ,D: "",correct : "C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Stop Ahead.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C:"T Intersection" ,D: "",correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\T Intersection.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"Cattle Crossing" ,B : "",C:"Traffic Signal" ,D: "",correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Traffic Signal.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C: "Two-Way Traffic" ,D: "",correct : "C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Two-Way traffic.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C:"Winding Road" ,D: "",correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Winding Road.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"" ,B : "",C:"Watch for Ice On Bridges" ,D: "",correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Watch for Ice On Bridges.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"" ,B :"" ,C:"Yield Ahead" ,D:"" ,correct :"C", image: "C:\Users\Jonathan\LambdaSchoolProjects\driving-quiz\src\Images\Warning Signs\Yield Ahead.PNG", type: "construction sign"},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C: "",D: "",correct :"", image: ""},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A :"" ,B : "",C: "",D: "",correct :"", image: ""},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C: "",D: "",correct :"", image: ""},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C: "",D: "",correct :"", image: ""},
    "Warning Sign prepare for upcoming road conditions and hazards what is this sign?"  : {A : "",B : "",C: "",D: "",correct :"", image: ""},
};
