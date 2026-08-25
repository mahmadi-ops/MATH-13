var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  These pages aim to design and implement a series of interactive, accessible web-based modules that strengthen students’ conceptual understanding of foundational mathematical ideas through explicit connections to physical phenomena. The project responds to a persistent challenge observed across STEM disciplines at SCU: students often demonstrate procedural competence in Mathematics while lacking the ability to transfer their mathematical knowledge across courses, particularly when mathematical ideas are applied in physical contexts.  Two of the main goals of this project are to:   Enhance students’ conceptual understanding of mathematics through physically motivated examples and problems    Develop accessible instructional materials that support diverse learners, including those using screen readers or tactile graphics     "
},
{
  "id": "sec-parametric-equations",
  "level": "1",
  "url": "sec-parametric-equations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Parametric Equations",
  "body": " Parametric Equations  Imagine that you would like to describe the motion of an object whose motion is confined to a plane. If you know how its Cartesian coordinates, and , change as time passes, you will be able to draw a curve that represents the trajectory of its motion, as shown in . Mathematically, we will need two equations to demonstrate how the - and -coordinates evolve in time , which are known as the parametric equations .   Parametric Equations   If and are given as functions of a third variable , called a parameter , by then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.     A point moves in the plane. As time passes, its coordinates and change, and the point traces out the trajectory of the motion.     The trajectory of a moving point whose coordinates are given by the parametric equations , .     f(t)=(0.62*t*cos(t), 0.62*t*sin(t))        (x,y)=(f(t),\\,g(t))                 As an example, consider and . Let us calculate some of the points .   Points on the curve ,                 Plotting these points and connecting them, we recognize the parabola , traced from left to right as increases from to . See and .   The parametric curve , : the points from the table appear first, and then the moving point traces out the parabola in the direction of increasing .     The curve , is the parabola . The marked points correspond to the integer values from the table, and the arrows show the direction of increasing .     g(t)=(t, t^2)               t=-3    t=3                       As our second example, consider the equation of the circle centered at with unit radius,   Here, we would like to parametrize and in terms of a single parameter in such a way that by varying the value of , we can reconstruct the circle . Remember that , so one way to achieve our goal is to write where . The parametrization is illustrated in and .   Parametrizing the unit circle: as increases from to , the point travels counterclockwise around the circle, passing through the marked points at , , , and .     Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .     c(t)=(cos(t), sin(t))            t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}    (x,y)=(\\cos(t_0),\\,\\sin(t_0))    t_0                      Question   Can you think of another way to write a parametric form of the circle ?    "
},
{
  "id": "sec-parametric-equations-2",
  "level": "2",
  "url": "sec-parametric-equations.html#sec-parametric-equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric equations "
},
{
  "id": "def-parametric-equations",
  "level": "2",
  "url": "sec-parametric-equations.html#def-parametric-equations",
  "type": "Definition",
  "number": "1.1",
  "title": "Parametric Equations.",
  "body": " Parametric Equations   If and are given as functions of a third variable , called a parameter , by then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.   "
},
{
  "id": "fig-parametric-motion-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parametric-motion-video",
  "type": "Figure",
  "number": "1.2",
  "title": "",
  "body": " A point moves in the plane. As time passes, its coordinates and change, and the point traces out the trajectory of the motion.   "
},
{
  "id": "fig-parametric-motion",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parametric-motion",
  "type": "Figure",
  "number": "1.3",
  "title": "",
  "body": " The trajectory of a moving point whose coordinates are given by the parametric equations , .     f(t)=(0.62*t*cos(t), 0.62*t*sin(t))        (x,y)=(f(t),\\,g(t))                "
},
{
  "id": "table-parabola-points",
  "level": "2",
  "url": "sec-parametric-equations.html#table-parabola-points",
  "type": "Table",
  "number": "1.4",
  "title": "Points on the curve <span class=\"process-math\">\\(x=t\\text{,}\\)<\/span> <span class=\"process-math\">\\(y=t^2\\)<\/span>",
  "body": " Points on the curve ,                "
},
{
  "id": "fig-parabola-param-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parabola-param-video",
  "type": "Figure",
  "number": "1.5",
  "title": "",
  "body": " The parametric curve , : the points from the table appear first, and then the moving point traces out the parabola in the direction of increasing .   "
},
{
  "id": "fig-parabola-param",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parabola-param",
  "type": "Figure",
  "number": "1.6",
  "title": "",
  "body": " The curve , is the parabola . The marked points correspond to the integer values from the table, and the arrows show the direction of increasing .     g(t)=(t, t^2)               t=-3    t=3                      "
},
{
  "id": "fig-unit-circle-param-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-unit-circle-param-video",
  "type": "Figure",
  "number": "1.7",
  "title": "",
  "body": " Parametrizing the unit circle: as increases from to , the point travels counterclockwise around the circle, passing through the marked points at , , , and .   "
},
{
  "id": "fig-unit-circle-param",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-unit-circle-param",
  "type": "Figure",
  "number": "1.8",
  "title": "",
  "body": " Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .     c(t)=(cos(t), sin(t))            t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}    (x,y)=(\\cos(t_0),\\,\\sin(t_0))    t_0                    "
},
{
  "id": "question-another-parametrization",
  "level": "2",
  "url": "sec-parametric-equations.html#question-another-parametrization",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "Question.",
  "body": " Question   Can you think of another way to write a parametric form of the circle ?   "
},
{
  "id": "sec-parametrizing-examples",
  "level": "1",
  "url": "sec-parametrizing-examples.html",
  "type": "Section",
  "number": "1.2",
  "title": "Some Examples of Parametrizing Curves",
  "body": " Some Examples of Parametrizing Curves   Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .  The ellipse .  The circle of radius centered at .       Solution   Part A. The segment lies on the line , so we may take   At we are at the point , and at we arrive at the point . See and .   The line segment from to , traced by , as increases from to .     Part A: the segment , , , which starts at when and ends at when .           t=0    t=1                 Part B. Guided by the unit circle, we take   To verify, note that   See and .   The ellipse , traced counterclockwise by , , with the points at , , , and marked.     Part B: the ellipse , , .     e(t)=(2*cos(t), 3*sin(t))          t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}                   Part C. The equation of such a circle in Cartesian coordinates is , so we shift the standard parametrization of a circle of radius by units in the -direction:   To verify, note that   See and .   The circle of radius centered at , traced by , .     Part C: the circle , , , of radius centered at .     s(t)=(2*cos(t)+2, 2*sin(t))           (2,0)                    "
},
{
  "id": "ex-parametrizing-curves",
  "level": "2",
  "url": "sec-parametrizing-examples.html#ex-parametrizing-curves",
  "type": "Example",
  "number": "1.10",
  "title": "Parametrizing Curves.",
  "body": " Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .  The ellipse .  The circle of radius centered at .     "
},
{
  "id": "fig-segment-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-segment-param-video",
  "type": "Figure",
  "number": "1.11",
  "title": "",
  "body": " The line segment from to , traced by , as increases from to .   "
},
{
  "id": "fig-segment-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-segment-param",
  "type": "Figure",
  "number": "1.12",
  "title": "",
  "body": " Part A: the segment , , , which starts at when and ends at when .           t=0    t=1               "
},
{
  "id": "fig-ellipse-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-ellipse-param-video",
  "type": "Figure",
  "number": "1.13",
  "title": "",
  "body": " The ellipse , traced counterclockwise by , , with the points at , , , and marked.   "
},
{
  "id": "fig-ellipse-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-ellipse-param",
  "type": "Figure",
  "number": "1.14",
  "title": "",
  "body": " Part B: the ellipse , , .     e(t)=(2*cos(t), 3*sin(t))          t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}                 "
},
{
  "id": "fig-shifted-circle-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-shifted-circle-param-video",
  "type": "Figure",
  "number": "1.15",
  "title": "",
  "body": " The circle of radius centered at , traced by , .   "
},
{
  "id": "fig-shifted-circle-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-shifted-circle-param",
  "type": "Figure",
  "number": "1.16",
  "title": "",
  "body": " Part C: the circle , , , of radius centered at .     s(t)=(2*cos(t)+2, 2*sin(t))           (2,0)                  "
},
{
  "id": "sec-projectile-motion",
  "level": "1",
  "url": "sec-projectile-motion.html",
  "type": "Section",
  "number": "1.3",
  "title": "Projectile Motion",
  "body": " Projectile Motion  A type of parametric equation you may have already seen is the equation of motion for a projectile. Here the parameter is time, and gives the position of the projectile at time .  Recall two basic facts about motion in one dimension from your introductory physics course. For motion along a straight line at constant speed , the position is For motion with uniform acceleration , the position is   Now consider an object moving under the influence of gravity alone, ignoring air resistance. No horizontal force acts on it, so it moves at constant speed in the -direction; in the -direction it moves with constant acceleration , directed downward. Resolving the initial velocity into its horizontal component and vertical component , and applying the two facts above, gives the equations of motion for a projectile: where is the initial speed, is the launch angle, and is the acceleration due to gravity. For simplicity, we take the initial position to be the origin .  To find the trajectory of the projectile, we can solve for and substitute into the equation . Solving for in the equation gives   Substituting into the equation gives   As expected, the trajectory equation shows that the trajectory of a projectile is a parabola. Also, note that differentiating the equations of motion gives the velocity of the projectile: the horizontal component stays constant, since nothing accelerates the projectile horizontally, while the vertical component decreases steadily under gravity, so it is positive while the projectile rises, zero at the apex, and negative as it falls. shows these components at five instants along the path.   The velocity of a projectile at five instants along its parabolic path. The horizontal component stays constant while the vertical component changes under the constant downward acceleration ; at the apex the vertical component is zero.     f(x) = 0.14*x*(10 - x)    0      \\vec{a} = \\vec{g} = -g\\hat{\\jmath}        \\theta  \\vec{v}_0  \\vec{v}_{x0}  \\vec{v}_{y0}      \\vec{v}  \\vec{v}_x  \\vec{v}_y    \\vec{v}   \\vec{v}_y = 0 \\text{ at this point}      \\vec{v}_x  \\vec{v}_y  \\vec{v}      \\vec{v}_x  \\vec{v}_y  \\vec{v}                              animates this motion: the projectile follows the parabolic path while its horizontal velocity stays constant and its vertical velocity is steadily turned around by gravity.   A projectile launched from the origin traces out its parabolic trajectory. The horizontal velocity component is constant, while the vertical component shrinks to zero at the apex and then grows in the downward direction as the projectile falls.     Projectiles on an Inclined Plane   A particle is launched from a point on an inclined plane and travels in the vertical plane that contains the line of greatest slope through . The plane makes an angle with the horizontal, and the particle leaves with initial speed at an elevation to the horizontal. Taking the origin at with horizontal and vertical axes and neglecting air resistance, the trajectory is the projectile parabola Let be the point where the particle meets the plane again, and let be the range measured along the plane , so that . Work through the tasks below to find the range on the plane, the maximum range for a given , and the time of flight, and then to read off the corresponding results when the particle is fired down the plane.   A particle projected up the plane with speed at elevation , striking the incline (angle ) at after travelling a range along the slope.      f(x) = 1.2*x - 0.1*x^2               \\beta  \\theta     O  P  M  v_0  R  R\\sin\\beta  R\\cos\\beta  \\text{inclined plane}                        Since lies on the trajectory, substitute these coordinates into the parabola and cancel a factor of to show that     Putting and into gives Dividing through by (the particle is not at ) yields the stated relation.      Rearrange the relation from the previous task to isolate , and use to obtain the range up the plane      Collect the -term: Solving for ,       Using the identity , rewrite the range as For a fixed launch speed , deduce the elevation that maximizes , and show that the maximum range up the plane is     With , , and held constant, only varies, and it is largest when it equals . Afterwards use .     is greatest when , i.e. when , giving the optimal elevation At this value,       The horizontal distance to the foot of is covered at the constant horizontal speed . Using , show that the time of flight is     From ,       When the particle is projected down the plane, the geometry is the same with replaced by . Write down the range, maximum range, and time of flight down the inclined plane.    Replacing :       The maximum range up the plane occurs when , which rearranges to . The left side is the angle the launch direction makes above the incline , and the right side is the angle it makes below the vertical . Since they are equal, the direction of projection for maximum range up an inclined plane bisects the angle between the upward vertical through and the line of greatest slope.    "
},
{
  "id": "fig-projectile-velocity",
  "level": "2",
  "url": "sec-projectile-motion.html#fig-projectile-velocity",
  "type": "Figure",
  "number": "1.17",
  "title": "",
  "body": " The velocity of a projectile at five instants along its parabolic path. The horizontal component stays constant while the vertical component changes under the constant downward acceleration ; at the apex the vertical component is zero.     f(x) = 0.14*x*(10 - x)    0      \\vec{a} = \\vec{g} = -g\\hat{\\jmath}        \\theta  \\vec{v}_0  \\vec{v}_{x0}  \\vec{v}_{y0}      \\vec{v}  \\vec{v}_x  \\vec{v}_y    \\vec{v}   \\vec{v}_y = 0 \\text{ at this point}      \\vec{v}_x  \\vec{v}_y  \\vec{v}      \\vec{v}_x  \\vec{v}_y  \\vec{v}                            "
},
{
  "id": "fig-projectile-motion-video",
  "level": "2",
  "url": "sec-projectile-motion.html#fig-projectile-motion-video",
  "type": "Figure",
  "number": "1.18",
  "title": "",
  "body": " A projectile launched from the origin traces out its parabolic trajectory. The horizontal velocity component is constant, while the vertical component shrinks to zero at the apex and then grows in the downward direction as the projectile falls.   "
},
{
  "id": "activity-projectile-incline",
  "level": "2",
  "url": "sec-projectile-motion.html#activity-projectile-incline",
  "type": "Activity",
  "number": "1.3.1",
  "title": "Projectiles on an Inclined Plane.",
  "body": " Projectiles on an Inclined Plane   A particle is launched from a point on an inclined plane and travels in the vertical plane that contains the line of greatest slope through . The plane makes an angle with the horizontal, and the particle leaves with initial speed at an elevation to the horizontal. Taking the origin at with horizontal and vertical axes and neglecting air resistance, the trajectory is the projectile parabola Let be the point where the particle meets the plane again, and let be the range measured along the plane , so that . Work through the tasks below to find the range on the plane, the maximum range for a given , and the time of flight, and then to read off the corresponding results when the particle is fired down the plane.   A particle projected up the plane with speed at elevation , striking the incline (angle ) at after travelling a range along the slope.      f(x) = 1.2*x - 0.1*x^2               \\beta  \\theta     O  P  M  v_0  R  R\\sin\\beta  R\\cos\\beta  \\text{inclined plane}                        Since lies on the trajectory, substitute these coordinates into the parabola and cancel a factor of to show that     Putting and into gives Dividing through by (the particle is not at ) yields the stated relation.      Rearrange the relation from the previous task to isolate , and use to obtain the range up the plane      Collect the -term: Solving for ,       Using the identity , rewrite the range as For a fixed launch speed , deduce the elevation that maximizes , and show that the maximum range up the plane is     With , , and held constant, only varies, and it is largest when it equals . Afterwards use .     is greatest when , i.e. when , giving the optimal elevation At this value,       The horizontal distance to the foot of is covered at the constant horizontal speed . Using , show that the time of flight is     From ,       When the particle is projected down the plane, the geometry is the same with replaced by . Write down the range, maximum range, and time of flight down the inclined plane.    Replacing :       The maximum range up the plane occurs when , which rearranges to . The left side is the angle the launch direction makes above the incline , and the right side is the angle it makes below the vertical . Since they are equal, the direction of projection for maximum range up an inclined plane bisects the angle between the upward vertical through and the line of greatest slope.   "
},
{
  "id": "sec-intersection-collision",
  "level": "1",
  "url": "sec-intersection-collision.html",
  "type": "Section",
  "number": "1.4",
  "title": "Intersection Points versus Collision Points",
  "body": " Intersection Points versus Collision Points  A parametrization carries more information than the curve it traces: it also records when the moving point visits each place on the curve. Because of this, there are two different questions we can ask about two parametric curves thought of as the trajectories of two particles.   Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal , with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with     An intersection point is a statement about the two paths : they cross, like two roads on a map. A collision point is a statement about the two motions : the cars are at the crossroads at the same instant. Every collision point is automatically an intersection point, but, as the next two examples show, an intersection point need not be a collision point.  In practice this dictates how we set up the equations.   To find intersection points, give the two curves different parameter names and solve , for the pair . Equivalently, eliminate the parameters and intersect the two Cartesian curves.    To find collision points, use the same parameter in both curves and solve , for .     In the next two examples the two paths are always the same: the parabola and the line . Setting gives , so the paths meet at the two points Only the schedule of the second particle will change.   The paths cross, but the particles never meet   Two particles move in the plane with position vectors Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . As computed above, the two paths intersect at and .   Collisions. A collision requires a single with The first equation forces , but then while . There is no solution, so the particles never collide .  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See and .     The particles and move simultaneously. Their paths cross at and , but the clock shows that the two particles are never at either crossing at the same time.     The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.    The parabola and the line drawn on the same axes, crossing at the points and . Each crossing is labeled with the two different parameter values at which the two particles pass through it.     r1(t) = (t, t^2)  r2(t) = (-t, 2 - t)       C_1    C_2      (-1,1)        (2,4)                     The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one: Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at and .   Collisions. Now a collision requires a single with The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See and .     With the second particle follows the same line as before, but on a different schedule. It misses the first particle at and collides with it at when .     The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.    The parabola and the line crossing at and . The point is highlighted as a collision point, reached by both particles at time , while the particles pass through at the different times and .     r1(t) = (t, t^2)  r2(t) = (2*t - 2, 2*t)       C_1    C_2      (-1,1)        (2,4)   collision at  t=2                    Every Collision Is an Intersection, but Not Conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.     Keep . Find a parametrization of the line for which the two particles collide at both intersection points.    Try to arrange that the second particle has the same -coordinate as the first one at every time .     .    With the collision equations become and , i.e. . Thus gives the collision at and gives the collision at : both intersection points are now collision points.    "
},
{
  "id": "def-intersection-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#def-intersection-collision",
  "type": "Definition",
  "number": "1.20",
  "title": "Intersection Points and Collision Points.",
  "body": " Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal , with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with    "
},
{
  "id": "ex-no-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#ex-no-collision",
  "type": "Example",
  "number": "1.21",
  "title": "The paths cross, but the particles never meet.",
  "body": " The paths cross, but the particles never meet   Two particles move in the plane with position vectors Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . As computed above, the two paths intersect at and .   Collisions. A collision requires a single with The first equation forces , but then while . There is no solution, so the particles never collide .  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See and .   "
},
{
  "id": "fig-no-collision-video",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-no-collision-video",
  "type": "Figure",
  "number": "1.22",
  "title": "",
  "body": " The particles and move simultaneously. Their paths cross at and , but the clock shows that the two particles are never at either crossing at the same time.   "
},
{
  "id": "fig-no-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-no-collision",
  "type": "Figure",
  "number": "1.23",
  "title": "",
  "body": " The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.    The parabola and the line drawn on the same axes, crossing at the points and . Each crossing is labeled with the two different parameter values at which the two particles pass through it.     r1(t) = (t, t^2)  r2(t) = (-t, 2 - t)       C_1    C_2      (-1,1)        (2,4)                   "
},
{
  "id": "ex-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#ex-collision",
  "type": "Example",
  "number": "1.24",
  "title": "The same paths, a different schedule—now they collide.",
  "body": " The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one: Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at and .   Collisions. Now a collision requires a single with The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See and .   "
},
{
  "id": "fig-collision-video",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-collision-video",
  "type": "Figure",
  "number": "1.25",
  "title": "",
  "body": " With the second particle follows the same line as before, but on a different schedule. It misses the first particle at and collides with it at when .   "
},
{
  "id": "fig-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-collision",
  "type": "Figure",
  "number": "1.26",
  "title": "",
  "body": " The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.    The parabola and the line crossing at and . The point is highlighted as a collision point, reached by both particles at time , while the particles pass through at the different times and .     r1(t) = (t, t^2)  r2(t) = (2*t - 2, 2*t)       C_1    C_2      (-1,1)        (2,4)   collision at  t=2                  "
},
{
  "id": "insight-collision-vs-intersection",
  "level": "2",
  "url": "sec-intersection-collision.html#insight-collision-vs-intersection",
  "type": "Insight",
  "number": "1.27",
  "title": "Every Collision Is an Intersection, but Not Conversely.",
  "body": " Every Collision Is an Intersection, but Not Conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.  "
},
{
  "id": "checkpoint-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#checkpoint-collision",
  "type": "Checkpoint",
  "number": "1.28",
  "title": "",
  "body": "  Keep . Find a parametrization of the line for which the two particles collide at both intersection points.    Try to arrange that the second particle has the same -coordinate as the first one at every time .     .    With the collision equations become and , i.e. . Thus gives the collision at and gives the collision at : both intersection points are now collision points.   "
},
{
  "id": "subsection-1",
  "level": "1",
  "url": "subsection-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Taylor’s Formula and The Remainder Estimation Theorem",
  "body": " Taylor's Formula and The Remainder Estimation Theorem   Taylor's Formula   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where and     To see a visual representation of Taylor's formula, watch the following animation.   Taylor's Formula Animation     Taylor's Formula: . The Taylor polynomial agrees with at ; away from , the vertical gap between them is the remainder .      a = 1  f(x) = 0.9 + 0.55*sin(1.15*(x - 0.4)) + 0.09*x  pn(x) = f(a) + 0.5778*(x - a) - 0.379*(x - a)^2  xt = 3.1         a     x      R_n(x)     f(x)    p_n(x)                 The proof of the remainder theorem is based on the mean value theorem and Taylor's theorem and we have included the proof in . The proof is postponed to the end of this section because it requires some technical details that are not necessary for understanding the main ideas of this section. The students are not expected to know the proof, however, they should understand the statement and its implications. Interested students are encouraged to read the proof.     Finding an upper bound for the error term without knowing the value of  Usually the value of is not explicitly known. However, we may manage to find an upper bound for the error term without knowing the exact value of . This is achieved by finding an upper bound for , where is between and , and then using this upper bound to estimate the error term.  This is the idea behind every error estimate in this chapter. It is used in to bound the error in approximating and , in to show that the Newtonian kinetic energy formula is accurate for everyday speeds, in to justify the small-angle approximation , and in to control the error in approximating . It is also used in to prove that the Taylor series of converges to for every .    The Remainder Estimation Theorem   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where is an upper bound for on the interval between and .     The proof of the remainder estimation theorem is based on the Taylor's formula . Suppose that we can find an upper bound for on the interval between and , i.e., , then:    "
},
{
  "id": "Taylor-Formula",
  "level": "2",
  "url": "subsection-1.html#Taylor-Formula",
  "type": "Theorem",
  "number": "2.1",
  "title": "Taylor’s Formula.",
  "body": " Taylor's Formula   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where and    "
},
{
  "id": "vid-taylor-formula",
  "level": "2",
  "url": "subsection-1.html#vid-taylor-formula",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": " Taylor's Formula Animation   "
},
{
  "id": "fig-taylor-formula",
  "level": "2",
  "url": "subsection-1.html#fig-taylor-formula",
  "type": "Figure",
  "number": "2.3",
  "title": "",
  "body": " Taylor's Formula: . The Taylor polynomial agrees with at ; away from , the vertical gap between them is the remainder .      a = 1  f(x) = 0.9 + 0.55*sin(1.15*(x - 0.4)) + 0.09*x  pn(x) = f(a) + 0.5778*(x - a) - 0.379*(x - a)^2  xt = 3.1         a     x      R_n(x)     f(x)    p_n(x)               "
},
{
  "id": "subsection-1-6",
  "level": "2",
  "url": "subsection-1.html#subsection-1-6",
  "type": "Proof",
  "number": "2.1.1",
  "title": "",
  "body": " The proof of the remainder theorem is based on the mean value theorem and Taylor's theorem and we have included the proof in . The proof is postponed to the end of this section because it requires some technical details that are not necessary for understanding the main ideas of this section. The students are not expected to know the proof, however, they should understand the statement and its implications. Interested students are encouraged to read the proof.   "
},
{
  "id": "rmk-error-upper-bound",
  "level": "2",
  "url": "subsection-1.html#rmk-error-upper-bound",
  "type": "Remark",
  "number": "2.4",
  "title": "Finding an upper bound for the error term without knowing the value of <span class=\"process-math\">\\(c\\)<\/span>.",
  "body": " Finding an upper bound for the error term without knowing the value of  Usually the value of is not explicitly known. However, we may manage to find an upper bound for the error term without knowing the exact value of . This is achieved by finding an upper bound for , where is between and , and then using this upper bound to estimate the error term.  This is the idea behind every error estimate in this chapter. It is used in to bound the error in approximating and , in to show that the Newtonian kinetic energy formula is accurate for everyday speeds, in to justify the small-angle approximation , and in to control the error in approximating . It is also used in to prove that the Taylor series of converges to for every .  "
},
{
  "id": "thm-remainder-theorem",
  "level": "2",
  "url": "subsection-1.html#thm-remainder-theorem",
  "type": "Theorem",
  "number": "2.5",
  "title": "The Remainder Estimation Theorem.",
  "body": " The Remainder Estimation Theorem   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where is an upper bound for on the interval between and .   "
},
{
  "id": "subsection-1-9",
  "level": "2",
  "url": "subsection-1.html#subsection-1-9",
  "type": "Proof",
  "number": "2.1.2",
  "title": "",
  "body": " The proof of the remainder estimation theorem is based on the Taylor's formula . Suppose that we can find an upper bound for on the interval between and , i.e., , then:   "
},
{
  "id": "subsection-2",
  "level": "1",
  "url": "subsection-2.html",
  "type": "Section",
  "number": "2.2",
  "title": "An example of a Taylor series that converges",
  "body": " An example of a Taylor series that converges  Consider the function . We know that for all . Therefore, the Taylor series generated by at is given by:   We will show that this series converges to for all . To do this, we will use the remainder theorem. We have:   First, we consider the case when . As in , we do not need the exact value of , only an upper bound for . Since is between and , we have , so works; see . Therefore, we can bound the remainder term as follows:   Now we can compute the limit of the remainder term as , keeping in mind that is fixed and only is changing Why is for every fixed ? Write the quotient as a product of factors, . The numerators never change, but the denominators keep growing, so eventually every new factor is small. Precisely, fix an integer with . The first factors contribute the fixed number , and each factor after that satisfies for . Hence for we get , and the right-hand side tends to as , so the squeeze theorem gives the limit . In short, the factorial in the denominator eventually outgrows any fixed power in the numerator, no matter how large is. :   This shows that the Taylor series converges to for all .   Schematic graph of and its Taylor polynomials about . For a positive the remainder uses some with , giving ; for a negative it uses some with , giving .      f(x) = exp(x)  p1(x) = 1 + x  p2(x) = 1 + x + x^2\/2  p3(x) = 1 + x + x^2\/2 + x^3\/6  p4(x) = 1 + x + x^2\/2 + x^3\/6 + x^4\/24          f(x) = e^x      x \\gt 0     c    e^c \\mathrel{\\unicode{x3C}} e^x      x \\mathrel{\\unicode{x3C}} 0     c    e^c \\mathrel{\\unicode{x3C}} 1     e^x  p_4  p_3  p_2  p_1                      The second case is when . In this case, since is between and , we have , so this time is an upper bound for ; see again. Hence, we can bound the remainder term as follows:   Now we can compute the limit of the remainder term as :   This shows that the Taylor series converges to for all . Therefore, we conclude that the Taylor series converges to for all .  The animation below illustrates this convergence geometrically. As the degree increases, the Taylor polynomials hug the graph of over a wider and wider interval, matching the fact that the remainder for every .   The Taylor polynomials of about converging to , followed by the remainder-theorem argument.    "
},
{
  "id": "fig-exp-taylor",
  "level": "2",
  "url": "subsection-2.html#fig-exp-taylor",
  "type": "Figure",
  "number": "2.6",
  "title": "",
  "body": " Schematic graph of and its Taylor polynomials about . For a positive the remainder uses some with , giving ; for a negative it uses some with , giving .      f(x) = exp(x)  p1(x) = 1 + x  p2(x) = 1 + x + x^2\/2  p3(x) = 1 + x + x^2\/2 + x^3\/6  p4(x) = 1 + x + x^2\/2 + x^3\/6 + x^4\/24          f(x) = e^x      x \\gt 0     c    e^c \\mathrel{\\unicode{x3C}} e^x      x \\mathrel{\\unicode{x3C}} 0     c    e^c \\mathrel{\\unicode{x3C}} 1     e^x  p_4  p_3  p_2  p_1                     "
},
{
  "id": "fig-exp-taylor-video",
  "level": "2",
  "url": "subsection-2.html#fig-exp-taylor-video",
  "type": "Figure",
  "number": "2.7",
  "title": "",
  "body": " The Taylor polynomials of about converging to , followed by the remainder-theorem argument.   "
},
{
  "id": "subsection-3",
  "level": "1",
  "url": "subsection-3.html",
  "type": "Section",
  "number": "2.3",
  "title": "The error in using a Taylor polynomial",
  "body": " The error in using a Taylor polynomial  In this subsection, we will discuss how to estimate the error in using a Taylor polynomial to approximate a function. We will use the remainder theorem to bound the error term .  Suppose we want to approximate using the Taylor polynomial of degree at . The error in this approximation is given by . By the remainder theorem, we have:   To bound the error term, we need to find an upper bound for on the interval between and , as explained in . The examples below carry out this step in several different settings.   Approximating using a Taylor polynomial   Approximate using the Taylor polynomial of degree 2 at . Find an upper bound for the error in this approximation.    We will approximate using the Taylor polynomial of degree 2 at :   We want to approximate . The error term is given by:   We do not know the value of , so we use the idea of and bound instead. Since is increasing and lies between and , we may take , and therefore:   Therefore, the error in approximating using the Taylor polynomial of degree 2 is bounded by:   In fact, if we compute the actual value of and compare it with the approximation given by , we find that the actual error is , which is indeed less than the upper bound we calculated.   The red curve is the graph of and the blue curve is the graph of the Taylor polynomial . The exact value of is represented by the red point and the approximation given by is represented by the blue point. The vertical distance between the two points represents the error in the approximation. Note that the error is less than the upper bound we calculated, i.e., .     Given a desired error bound, find values of for which the approximation is guaranteed to be valid   Assume that we use the Taylor polynomial of degree 3 at to approximate . For approximately what values of can you replace by such a Taylor polynomial with an error of magnitude no greater than ?    The Taylor polynomial of degree 3 at for is given by:   Since , the error term is given by:   Again the value of is unknown, so we follow : since , we have for every , so we may take and obtain:   We want to find the values of such that:   This gives us:   Taking the fifth root, we get:   Therefore, we can safely replace by the Taylor polynomial of degree 3 at with an error of magnitude no greater than for .       Finding the value of such that the error is less than a given tolerance   Find the smallest value of for which the polynomial approximation for is accurate to for values of in the interval .    The Taylor polynomial of degree at for is given by:   The error term is given by:   As in , we bound the unknown derivative rather than locating . Since is either or , up to a sign, we have for every , so works and:   We want to find the smallest value of such that:   Since for , and approximating , we have:   Therefore, we want to find the smallest value of such that:   We can check the values of starting from until we find the smallest value of that satisfies the inequality. After checking, we find that the smallest value of that satisfies the inequality is .     "
},
{
  "id": "ex-error-bound-exp",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-exp",
  "type": "Example",
  "number": "2.8",
  "title": "Approximating <span class=\"process-math\">\\(e^x\\)<\/span> using a Taylor polynomial.",
  "body": " Approximating using a Taylor polynomial   Approximate using the Taylor polynomial of degree 2 at . Find an upper bound for the error in this approximation.    We will approximate using the Taylor polynomial of degree 2 at :   We want to approximate . The error term is given by:   We do not know the value of , so we use the idea of and bound instead. Since is increasing and lies between and , we may take , and therefore:   Therefore, the error in approximating using the Taylor polynomial of degree 2 is bounded by:   In fact, if we compute the actual value of and compare it with the approximation given by , we find that the actual error is , which is indeed less than the upper bound we calculated.   The red curve is the graph of and the blue curve is the graph of the Taylor polynomial . The exact value of is represented by the red point and the approximation given by is represented by the blue point. The vertical distance between the two points represents the error in the approximation. Note that the error is less than the upper bound we calculated, i.e., .   "
},
{
  "id": "ex-error-bound-sin-range",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-sin-range",
  "type": "Example",
  "number": "2.9",
  "title": "Given a desired error bound, find values of <span class=\"process-math\">\\(x\\)<\/span> for which the approximation is guaranteed to be valid.",
  "body": " Given a desired error bound, find values of for which the approximation is guaranteed to be valid   Assume that we use the Taylor polynomial of degree 3 at to approximate . For approximately what values of can you replace by such a Taylor polynomial with an error of magnitude no greater than ?    The Taylor polynomial of degree 3 at for is given by:   Since , the error term is given by:   Again the value of is unknown, so we follow : since , we have for every , so we may take and obtain:   We want to find the values of such that:   This gives us:   Taking the fifth root, we get:   Therefore, we can safely replace by the Taylor polynomial of degree 3 at with an error of magnitude no greater than for .     "
},
{
  "id": "ex-error-bound-sin-degree",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-sin-degree",
  "type": "Example",
  "number": "2.10",
  "title": "Finding the value of <span class=\"process-math\">\\(n\\)<\/span> such that the error is less than a given tolerance.",
  "body": " Finding the value of such that the error is less than a given tolerance   Find the smallest value of for which the polynomial approximation for is accurate to for values of in the interval .    The Taylor polynomial of degree at for is given by:   The error term is given by:   As in , we bound the unknown derivative rather than locating . Since is either or , up to a sign, we have for every , so works and:   We want to find the smallest value of such that:   Since for , and approximating , we have:   Therefore, we want to find the smallest value of such that:   We can check the values of starting from until we find the smallest value of that satisfies the inequality. After checking, we find that the smallest value of that satisfies the inequality is .    "
},
{
  "id": "section-taylor-7",
  "level": "1",
  "url": "section-taylor-7.html",
  "type": "Section",
  "number": "2.4",
  "title": "Applications of Taylor Series and Remainder Theorem",
  "body": " Applications of Taylor Series and Remainder Theorem   Physicists often use Taylor series to approximate functions in order to simplify calculations. The first example is the kinetic energy of an object in relativistic mechanics. The second example is the approximation of the period of a pendulum. We will discuss the error in using these approximations and when it is valid to use them. Additionally, we will discuss how to use the taylor series to estimate value of in the last example.    Approximating Relativistic Kinetic Energy  In relativistic mechanics, the mass of an object moving with velocity is given by: where is the rest mass of the object and is the speed of light. Then the kinetic energy of an object of mass moving with velocity is:   In the case when , we can use the Taylor series to approximate the kinetic energy. In example we will show that the kinetic energy can be approximated by the formula when . See for a comparison of the relativistic kinetic energy and its Newtonian approximation.   Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}                  Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .    We can use the Taylor series for at to approximate . Use .    We can rewrite the kinetic energy as follows:   Let . Then we have:   Now we can use the Taylor series for at to approximate . The Taylor series for at is given by:   Therefore, we have:   Substituting , we get:   When , the higher order terms in the series become negligible, and we can approximate the kinetic energy as:      Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car a moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .    Note that when using the Newtonian kinetic energy formula, we are using the Taylor polynomial of degree 1 at to approximate . Therefore, the error term is given by:   Following , we bound the second derivative on the interval between and instead of trying to find the unknown intermediate point. Since is increasing on that interval, its largest value there is at the right endpoint, so we have:   Since , we have:   Substituting and , we get:   This shows that the error is extremely small, and the Newtonian kinetic energy formula is a very good approximation to the relativistic kinetic energy for a car moving at .      Small-Angle Approximation for a Pendulum  We begin this section by briefly reviewing the forces acting on a simple pendulum and how the small-angle approximation allows us to treat its motion as simple harmonic motion.  The bob moves along the arc, so only the component of gravity tangent to that arc drives the motion. Resolving the weight into a component along the string ( , balanced by the string tension ) and a component tangent to the arc, as shown in , gives the restoring force   The minus sign indicates that the force always points back toward the equilibrium (straight-down) position. This is not Hooke's law: the force is proportional to , not to the displacement itself, so the motion is not exactly simple harmonic. Writing the arc displacement as , we would need to be proportional to that is, to for the motion to be simple harmonic.  The small-angle approximation bridges this gap. From the Taylor series when is small (in radians) the higher-order terms are negligible and . The restoring force then becomes which is Hooke's law with effective spring constant .  This is exactly what fixes the period. Newton's second law turns Hooke's law into the equation of motion Notice that the mass cancels. The equation says that is a function whose second derivative is a negative multiple of itself, and the functions with that property are the sines and cosines: writing , every solution has the form which you can verify by differentiating twice. The number is the angular frequency, and and repeat when increases by . So the motion repeats after a time with , giving   Thus, for small swings the pendulum behaves as a simple harmonic oscillator, with period independent of both the amplitude and the mass. Taylor's Remainder Theorem (see ) enables us to quantify how small must be for this approximation .   Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\vec{\\mathbf{F}}_T   m\\vec{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m                 Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .     Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .       In deriving simple harmonic motion for a pendulum, the restoring force is , which is proportional to rather than to the angular displacement itself. The motion is therefore not exactly simple harmonic. Giancoli resolves this by appealing to the smallness of the angle: for angles below , he states that the difference between (in radians) and is less than  He notes that this can be seen by looking at the series expansion of , namely   We can turn this observation into a quantitative statement using Taylor's Remainder Theorem. Let , expanded about . Replacing by amounts to using the first-degree Taylor polynomial . Since the coefficient of in the series above is zero, we have , so the error is controlled by the third derivative: for some with ,   The point is not known, but as in we do not need it: because , we may take , and the absolute error satisfies and dividing by bounds the relative error:   This confirms Giancoli's claim and even sharpens it. The relative error stays below precisely when , that is, when radians, or about . At Giancoli's stated cutoff of radians, the bound gives i.e. about . So is exactly the round-number boundary of the less than regime, and Taylor's Remainder Theorem locates the true threshold at . This is precisely the range in which the pendulum behaves as a simple harmonic oscillator with period .   The relative error rises above the threshold at radians (about ), the root of .      g(t) = (t - sin(t))\/sin(t)  tstar = 0.244097      y = 0.01\\ (1\\%)     \\dfrac{|\\theta - \\sin\\theta|}{\\sin\\theta}      \\theta^* \\approx 0.244                A pendulum swinging through decreasing amplitudes while the relative error of the approximation is computed at each angle, followed by the Taylor remainder bound and the graph locating the threshold at .        Approximating the value of using Taylor series  In this subsection, we will discuss how to approximate the value of using Taylor series. We will use the Taylor series for arctan(x) to approximate .   Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.    The Taylor series for centered at is Since , evaluating the series at gives Therefore, if denotes the Taylor polynomial of order for centered at , we obtain the approximation   To bound the error, we apply Taylor's Remainder Theorem: if for all between and , then For , the derivatives satisfy the closed form which can be verified by induction on . As in , the bound is found without locating the intermediate point: since and , it follows that so we may take . With , Taylor's Remainder Theorem gives   Multiplying by , the error in the approximation of satisfies Since as , the error decreases to zero as the order of the Taylor polynomial increases. However, the convergence is very slow. For instance, with we get with guaranteed error at most , and to guarantee an error of at most one needs to take .   The approximation converging to , and the error decreasing below the upper bound from Taylor's Remainder Theorem as increases.        As we saw in the previous example, Taylor series approached very slowly. In the project below, we will see how to use the so-called Euler's formula to approximate much faster. As you may know, there are many other methods to approximate , which we will not cover here.   Computing with Euler's identity   In we approximated by evaluating the Taylor series for at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .    Compute first. Then explain why must lie in the interval , and why this pins down its value.    Since and , Moreover implies , so . The only angle in this interval whose tangent equals is , so . (Without the interval check we could only conclude for some integer .)     The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .    Multiply Euler's identity by and replace each arctangent by its Taylor polynomial.    By Euler's identity, . Replacing by at and gives the stated approximation. For , , so      Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy for all . Use Taylor's Remainder Theorem to show that for  and conclude that     Apply Taylor's Remainder Theorem with exactly as in , but keep the factor . Then use the triangle inequality on the two remainders.    Taylor's Remainder Theorem with gives Writing and using the triangle inequality, Unlike the bound at , this bound decays geometrically : each increase of by one cuts it by better than half.     How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .    For the second part, the term dominates; try increasing odd values of .    For , roughly a thousand times smaller than the bound at ; the approximation itself is . For an error of at most , testing odd values gives, at , a bound of about , while at  so suffices. By contrast, the bound from would require for the same guarantee.     The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .   The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .        "
},
{
  "id": "fig-ke-cartoon",
  "level": "2",
  "url": "section-taylor-7.html#fig-ke-cartoon",
  "type": "Figure",
  "number": "2.11",
  "title": "",
  "body": " Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}               "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-taylor-7.html#example-1",
  "type": "Example",
  "number": "2.12",
  "title": "Newtonian kinetic energy as an approximation to relativistic kinetic energy when <span class=\"process-math\">\\(v \\ll c\\)<\/span>.",
  "body": " Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .    We can use the Taylor series for at to approximate . Use .    We can rewrite the kinetic energy as follows:   Let . Then we have:   Now we can use the Taylor series for at to approximate . The Taylor series for at is given by:   Therefore, we have:   Substituting , we get:   When , the higher order terms in the series become negligible, and we can approximate the kinetic energy as:    "
},
{
  "id": "ex-error-newtonian-ke",
  "level": "2",
  "url": "section-taylor-7.html#ex-error-newtonian-ke",
  "type": "Example",
  "number": "2.13",
  "title": "Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy.",
  "body": " Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car a moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .    Note that when using the Newtonian kinetic energy formula, we are using the Taylor polynomial of degree 1 at to approximate . Therefore, the error term is given by:   Following , we bound the second derivative on the interval between and instead of trying to find the unknown intermediate point. Since is increasing on that interval, its largest value there is at the right endpoint, so we have:   Since , we have:   Substituting and , we get:   This shows that the error is extremely small, and the Newtonian kinetic energy formula is a very good approximation to the relativistic kinetic energy for a car moving at .   "
},
{
  "id": "fig-pendulum-forces",
  "level": "2",
  "url": "section-taylor-7.html#fig-pendulum-forces",
  "type": "Figure",
  "number": "2.14",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\vec{\\mathbf{F}}_T   m\\vec{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m               "
},
{
  "id": "fig-pendulum-forces-video",
  "level": "2",
  "url": "section-taylor-7.html#fig-pendulum-forces-video",
  "type": "Figure",
  "number": "2.15",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .   "
},
{
  "id": "ex-small-angle-pendulum",
  "level": "2",
  "url": "section-taylor-7.html#ex-small-angle-pendulum",
  "type": "Example",
  "number": "2.16",
  "title": "Simple Harmonic Motion of a Pendulum as an Approximation.",
  "body": " Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .       In deriving simple harmonic motion for a pendulum, the restoring force is , which is proportional to rather than to the angular displacement itself. The motion is therefore not exactly simple harmonic. Giancoli resolves this by appealing to the smallness of the angle: for angles below , he states that the difference between (in radians) and is less than  He notes that this can be seen by looking at the series expansion of , namely   We can turn this observation into a quantitative statement using Taylor's Remainder Theorem. Let , expanded about . Replacing by amounts to using the first-degree Taylor polynomial . Since the coefficient of in the series above is zero, we have , so the error is controlled by the third derivative: for some with ,   The point is not known, but as in we do not need it: because , we may take , and the absolute error satisfies and dividing by bounds the relative error:   This confirms Giancoli's claim and even sharpens it. The relative error stays below precisely when , that is, when radians, or about . At Giancoli's stated cutoff of radians, the bound gives i.e. about . So is exactly the round-number boundary of the less than regime, and Taylor's Remainder Theorem locates the true threshold at . This is precisely the range in which the pendulum behaves as a simple harmonic oscillator with period .   The relative error rises above the threshold at radians (about ), the root of .      g(t) = (t - sin(t))\/sin(t)  tstar = 0.244097      y = 0.01\\ (1\\%)     \\dfrac{|\\theta - \\sin\\theta|}{\\sin\\theta}      \\theta^* \\approx 0.244                A pendulum swinging through decreasing amplitudes while the relative error of the approximation is computed at each angle, followed by the Taylor remainder bound and the graph locating the threshold at .     "
},
{
  "id": "ex-approx-pi-arctan",
  "level": "2",
  "url": "section-taylor-7.html#ex-approx-pi-arctan",
  "type": "Example",
  "number": "2.19",
  "title": "Approximating <span class=\"process-math\">\\(\\pi\\)<\/span> using the Taylor series for <span class=\"process-math\">\\(\\arctan(x)\\)<\/span>.",
  "body": " Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.    The Taylor series for centered at is Since , evaluating the series at gives Therefore, if denotes the Taylor polynomial of order for centered at , we obtain the approximation   To bound the error, we apply Taylor's Remainder Theorem: if for all between and , then For , the derivatives satisfy the closed form which can be verified by induction on . As in , the bound is found without locating the intermediate point: since and , it follows that so we may take . With , Taylor's Remainder Theorem gives   Multiplying by , the error in the approximation of satisfies Since as , the error decreases to zero as the order of the Taylor polynomial increases. However, the convergence is very slow. For instance, with we get with guaranteed error at most , and to guarantee an error of at most one needs to take .   The approximation converging to , and the error decreasing below the upper bound from Taylor's Remainder Theorem as increases.     "
},
{
  "id": "proj-euler-pi",
  "level": "2",
  "url": "section-taylor-7.html#proj-euler-pi",
  "type": "Project",
  "number": "2.4.1",
  "title": "Computing <span class=\"process-math\">\\(\\pi\\)<\/span> with Euler’s identity.",
  "body": " Computing with Euler's identity   In we approximated by evaluating the Taylor series for at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .    Compute first. Then explain why must lie in the interval , and why this pins down its value.    Since and , Moreover implies , so . The only angle in this interval whose tangent equals is , so . (Without the interval check we could only conclude for some integer .)     The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .    Multiply Euler's identity by and replace each arctangent by its Taylor polynomial.    By Euler's identity, . Replacing by at and gives the stated approximation. For , , so      Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy for all . Use Taylor's Remainder Theorem to show that for  and conclude that     Apply Taylor's Remainder Theorem with exactly as in , but keep the factor . Then use the triangle inequality on the two remainders.    Taylor's Remainder Theorem with gives Writing and using the triangle inequality, Unlike the bound at , this bound decays geometrically : each increase of by one cuts it by better than half.     How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .    For the second part, the term dominates; try increasing odd values of .    For , roughly a thousand times smaller than the bound at ; the approximation itself is . For an error of at most , testing odd values gives, at , a bound of about , while at  so suffices. By contrast, the bound from would require for the same guarantee.     The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .   The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .     "
},
{
  "id": "subsection-5",
  "level": "1",
  "url": "subsection-5.html",
  "type": "Section",
  "number": "2.5",
  "title": "Proof of the remainder theorem",
  "body": " Proof of the remainder theorem  In this subsection, we will provide a proof of the remainder theorem.  Let be a function that has continuous derivatives on an open interval containing . We want to show that for each and for each positive integer , there exists a number between and such that where and   To prove this, we will first prove the following lemma:    Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .     The proof of this lemma is based on the mean value theorem. Since , we can apply the mean value theorem repeatedly to show that there exists a number between and such that . Below we will do so step by step.  First, since , by the mean value theorem, there exists a number between and such that   Second, since , by the mean value theorem, there exists a number between and such that   Then by continuing this process, we can show that there exists a number between and such that   Since , by the mean value theorem, there exists a number between and such that   Therefore, we have shown that there exists a number between and such that .    The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .   Now, assume that . We can construct the function such that and for . Therefore, by the lemma and considering , there exists a number between and such that . After computing , we have . Since , we have . This completes the proof of the remainder theorem.  "
},
{
  "id": "lemma-1",
  "level": "2",
  "url": "subsection-5.html#lemma-1",
  "type": "Lemma",
  "number": "2.22",
  "title": "",
  "body": "  Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .   "
},
{
  "id": "subsection-5-6",
  "level": "2",
  "url": "subsection-5.html#subsection-5-6",
  "type": "Proof",
  "number": "2.5.1",
  "title": "",
  "body": " The proof of this lemma is based on the mean value theorem. Since , we can apply the mean value theorem repeatedly to show that there exists a number between and such that . Below we will do so step by step.  First, since , by the mean value theorem, there exists a number between and such that   Second, since , by the mean value theorem, there exists a number between and such that   Then by continuing this process, we can show that there exists a number between and such that   Since , by the mean value theorem, there exists a number between and such that   Therefore, we have shown that there exists a number between and such that .  "
},
{
  "id": "rmk-zero-error-function",
  "level": "2",
  "url": "subsection-5.html#rmk-zero-error-function",
  "type": "Remark",
  "number": "2.23",
  "title": "The error function and its derivatives are zero at the point of expansion.",
  "body": " The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .  "
},
{
  "id": "sec-dot-product",
  "level": "1",
  "url": "sec-dot-product.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Dot Product and the Angle between Two Vectors",
  "body": " The Dot Product and the Angle between Two Vectors  Consider two vectors and , and let , as shown in . By the law of cosines,    The vectors , , and , together with the angle between and .     u=(1.5,4)  v=(4,1)  w=u-v       \\mathbf u    \\mathbf v    \\mathbf w    \\theta                 Watch the video below for a proof of the law of cosines using vectors.   Proving the law of cosines: drop a perpendicular from the tip of and apply the Pythagorean theorem to the right triangle whose hypotenuse is .     Writing and , note that , and hence   Also, from the law of cosines in we have   From and , it follows that , and therefore the angle between the two vectors and can be evaluated using the following equation.   Angle between Two Vectors   Let and be two nonzero vectors, and let , with , be the angle between them. Then      Dot Product   The term in the numerator of is known as the dot product of the two vectors and , and is denoted .        Computing a dot product   Let and . Compute , and use it to find the angle between and .    Multiply the corresponding components and add:   Since the dot product is positive, the angle between the two vectors is acute. To find it, use :      Orthogonal vectors  If the two vectors and are orthogonal, then , which means . Conversely, if and are two vectors such that , then and are orthogonal.       A right triangle detected with the dot product   Consider the triangle with vertices , , and . Show that this is a right triangle using the dot product.        The triangle with vertices , , , together with the vectors and meeting at a right angle at .     A=(1,-1)  B=(1,1)  C=(2,0)      \\vec{CA}    \\vec{CB}                     The remaining angles of the triangle   For the triangle of (shown again in ), calculate the remaining angles.    For the angle between the sides and , we have      Properties of the Dot Product    If , , and are any vectors and is a scalar, then             Write , , and . Each property follows from together with the corresponding property of real numbers.    Multiplication of real numbers is commutative, so     Since , and the same computation applied to gives .    Adding componentwise and then distributing,     Taking in , and recalling that ,     Every component of is zero, so .       "
},
{
  "id": "fig-law-of-cosines",
  "level": "2",
  "url": "sec-dot-product.html#fig-law-of-cosines",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " The vectors , , and , together with the angle between and .     u=(1.5,4)  v=(4,1)  w=u-v       \\mathbf u    \\mathbf v    \\mathbf w    \\theta               "
},
{
  "id": "sec-dot-product-4",
  "level": "2",
  "url": "sec-dot-product.html#sec-dot-product-4",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " Watch the video below for a proof of the law of cosines using vectors.   Proving the law of cosines: drop a perpendicular from the tip of and apply the Pythagorean theorem to the right triangle whose hypotenuse is .    "
},
{
  "id": "thm-angle-formula",
  "level": "2",
  "url": "sec-dot-product.html#thm-angle-formula",
  "type": "Theorem",
  "number": "3.3",
  "title": "Angle between Two Vectors.",
  "body": " Angle between Two Vectors   Let and be two nonzero vectors, and let , with , be the angle between them. Then    "
},
{
  "id": "def-dot-product",
  "level": "2",
  "url": "sec-dot-product.html#def-dot-product",
  "type": "Definition",
  "number": "3.4",
  "title": "Dot Product.",
  "body": " Dot Product   The term in the numerator of is known as the dot product of the two vectors and , and is denoted .      "
},
{
  "id": "example-dot-product-compute",
  "level": "2",
  "url": "sec-dot-product.html#example-dot-product-compute",
  "type": "Example",
  "number": "3.5",
  "title": "Computing a dot product.",
  "body": " Computing a dot product   Let and . Compute , and use it to find the angle between and .    Multiply the corresponding components and add:   Since the dot product is positive, the angle between the two vectors is acute. To find it, use :    "
},
{
  "id": "remark-orthogonal",
  "level": "2",
  "url": "sec-dot-product.html#remark-orthogonal",
  "type": "Remark",
  "number": "3.6",
  "title": "Orthogonal vectors.",
  "body": " Orthogonal vectors  If the two vectors and are orthogonal, then , which means . Conversely, if and are two vectors such that , then and are orthogonal.     "
},
{
  "id": "example-right-triangle",
  "level": "2",
  "url": "sec-dot-product.html#example-right-triangle",
  "type": "Example",
  "number": "3.7",
  "title": "A right triangle detected with the dot product.",
  "body": " A right triangle detected with the dot product   Consider the triangle with vertices , , and . Show that this is a right triangle using the dot product.        The triangle with vertices , , , together with the vectors and meeting at a right angle at .     A=(1,-1)  B=(1,1)  C=(2,0)      \\vec{CA}    \\vec{CB}                   "
},
{
  "id": "example-remaining-angles",
  "level": "2",
  "url": "sec-dot-product.html#example-remaining-angles",
  "type": "Example",
  "number": "3.9",
  "title": "The remaining angles of the triangle.",
  "body": " The remaining angles of the triangle   For the triangle of (shown again in ), calculate the remaining angles.    For the angle between the sides and , we have    "
},
{
  "id": "fact-properties",
  "level": "2",
  "url": "sec-dot-product.html#fact-properties",
  "type": "Fact",
  "number": "3.10",
  "title": "",
  "body": "  If , , and are any vectors and is a scalar, then             Write , , and . Each property follows from together with the corresponding property of real numbers.    Multiplication of real numbers is commutative, so     Since , and the same computation applied to gives .    Adding componentwise and then distributing,     Taking in , and recalling that ,     Every component of is zero, so .     "
},
{
  "id": "sec-projection",
  "level": "1",
  "url": "sec-projection.html",
  "type": "Section",
  "number": "3.2",
  "title": "Projection of <span class=\"process-math\">\\(\\mathbf u\\)<\/span> in the Direction of <span class=\"process-math\">\\(\\mathbf v\\)<\/span>",
  "body": " Projection of in the Direction of  The dot product measures how much two vectors point in the same direction. This section turns that measurement into a vector: given and , we ask how much of lies along . The answer is the projection of onto , and it lets us split any vector into a part that points along and a part perpendicular to it. That decomposition is what makes the dot product useful in practice—it is how we find the component of a force along a direction of motion, as in , or the component of gravity down a slope.  The projection of in the direction of is denoted , and is shown in .   The projection of in the direction of , together with the perpendicular component .           \\mathbf v    \\mathbf u    \\mathbf u_{\\parallel} = \\text{proj}_{\\mathbf v}\\mathbf u    \\mathbf u_{\\perp} = \\mathbf u - \\mathbf u_{\\parallel}    \\theta                   The length of is , and since its direction is the same as , we have    Projection Formula         Writing as Two Vectors, One Parallel and One Perpendicular to  As can be seen in , is parallel to , and the vector is perpendicular to it. Also, the sum of these two vectors equals . This means we can write as    The projection of onto as a shadow cast by light from above.     Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.    Since the projection of in the direction of is parallel to , we have   For the perpendicular component of to , we have   To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.       Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     For the parallel half, look at the formula for in and say what kind of expression it is. Why does that observation alone settle the question?    For the perpendicular half, compute . Justify each step by naming the property of the dot product from that you used, and then say what the value you obtain tells you about the two vectors.       In (b), write where is a scalar. In that form properties 2 and 3 of apply directly, and property 4 will simplify .    (a) By , so the projection is simply a number times . A scalar multiple of points along when and opposite to when ; either way it is parallel to . Nothing further needs to be checked.  (b) With as above,   The first line distributes the dot product over the difference, which is properties 1 and 3 of ; the second pulls the scalar out, which is property 2; the third replaces by , which is property 4. The last line just substitutes the value of .  So the dot product is zero, and by that is exactly what it means for to be perpendicular to .     "
},
{
  "id": "sec-projection-2",
  "level": "2",
  "url": "sec-projection.html#sec-projection-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection "
},
{
  "id": "fig-projection",
  "level": "2",
  "url": "sec-projection.html#fig-projection",
  "type": "Figure",
  "number": "3.11",
  "title": "",
  "body": " The projection of in the direction of , together with the perpendicular component .           \\mathbf v    \\mathbf u    \\mathbf u_{\\parallel} = \\text{proj}_{\\mathbf v}\\mathbf u    \\mathbf u_{\\perp} = \\mathbf u - \\mathbf u_{\\parallel}    \\theta                  "
},
{
  "id": "fact-projection-formula",
  "level": "2",
  "url": "sec-projection.html#fact-projection-formula",
  "type": "Fact",
  "number": "3.12",
  "title": "Projection Formula.",
  "body": " Projection Formula       "
},
{
  "id": "fig-projection-shadow",
  "level": "2",
  "url": "sec-projection.html#fig-projection-shadow",
  "type": "Figure",
  "number": "3.13",
  "title": "",
  "body": " The projection of onto as a shadow cast by light from above.   "
},
{
  "id": "example-decomposition",
  "level": "2",
  "url": "sec-projection.html#example-decomposition",
  "type": "Example",
  "number": "3.14",
  "title": "Decomposing a vector into parallel and perpendicular parts.",
  "body": " Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.    Since the projection of in the direction of is parallel to , we have   For the perpendicular component of to , we have   To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.     "
},
{
  "id": "check-projection-decomposition",
  "level": "2",
  "url": "sec-projection.html#check-projection-decomposition",
  "type": "Checkpoint",
  "number": "3.16",
  "title": "Concept Check.",
  "body": " Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     For the parallel half, look at the formula for in and say what kind of expression it is. Why does that observation alone settle the question?    For the perpendicular half, compute . Justify each step by naming the property of the dot product from that you used, and then say what the value you obtain tells you about the two vectors.       In (b), write where is a scalar. In that form properties 2 and 3 of apply directly, and property 4 will simplify .    (a) By , so the projection is simply a number times . A scalar multiple of points along when and opposite to when ; either way it is parallel to . Nothing further needs to be checked.  (b) With as above,   The first line distributes the dot product over the difference, which is properties 1 and 3 of ; the second pulls the scalar out, which is property 2; the third replaces by , which is property 4. The last line just substitutes the value of .  So the dot product is zero, and by that is exactly what it means for to be perpendicular to .   "
},
{
  "id": "sec-work",
  "level": "1",
  "url": "sec-work.html",
  "type": "Section",
  "number": "3.3",
  "title": "Application in Physics: Work",
  "body": " Application in Physics: Work  Consider the scenario in which a constant force causes an object to move from point to point , as shown in . The vector is often denoted and is referred to as the displacement vector . The work done by the force is then   Work    where is the magnitude of the force in the direction of motion, as computed in .     A constant force acting on an object causing a displacement from to .     A force displaces an object from to along the displacement vector . The reference segment shows the magnitude of the force in the direction of motion, .     P=(0,0)  Q=(4,0)  Fv=(2,1.5)  R=(6,0)   P  Q   \\mathbf D    \\mathbf F     \\theta    \\|\\mathbf F\\|\\cos\\theta                    Computing work done by a force   A force is given by the vector and moves a particle from the point to the point . Find the work done.    Consider using , evaluating with the component formula . For more help, watch the video below.   Set up the work computation: build the displacement vector first, then take the dot product. What do you get?      The displacement vector is , so by , evaluated with , the work done is       Suppose a mass of is resting on an inclined plane. Gravity exerts a force equivalent to on the object, where is the gravitational acceleration. Suppose the incline is tilted at a angle. Compute the components of the force that are parallel and perpendicular to the inclined plane.     Decomposing gravity on a incline: the parallel component pulls the mass down the slope, and the perpendicular component presses it into the surface.    First, we determine the total gravitational force vector acting on the mass. Using : Acting entirely in the negative vertical direction, this gives:     Forces acting on a mass on a incline: the weight resolves into a component down the slope and a component into the surface, with .          30^{\\circ}      \\vec{F}   \\vec{F}_{\\parallel}   \\vec{F}_{\\perp}                Next, we define a unit vector pointing down the surface of the inclined plane. Since the plane is tilted at (or radians), a unit vector pointing down the slope is directed at an angle of relative to the horizontal: where .  The component of the force parallel to the incline, , is the projection of onto , given by : Computing the dot product with : Thus, the parallel force vector is:   Since by , the perpendicular force component is found by subtraction:     "
},
{
  "id": "sec-work-2",
  "level": "2",
  "url": "sec-work.html#sec-work-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "displacement vector "
},
{
  "id": "def-work",
  "level": "2",
  "url": "sec-work.html#def-work",
  "type": "Definition",
  "number": "3.17",
  "title": "Work.",
  "body": " Work    where is the magnitude of the force in the direction of motion, as computed in .   "
},
{
  "id": "fig-work-force",
  "level": "2",
  "url": "sec-work.html#fig-work-force",
  "type": "Figure",
  "number": "3.18",
  "title": "",
  "body": " A constant force acting on an object causing a displacement from to .   "
},
{
  "id": "fig-work",
  "level": "2",
  "url": "sec-work.html#fig-work",
  "type": "Figure",
  "number": "3.19",
  "title": "",
  "body": " A force displaces an object from to along the displacement vector . The reference segment shows the magnitude of the force in the direction of motion, .     P=(0,0)  Q=(4,0)  Fv=(2,1.5)  R=(6,0)   P  Q   \\mathbf D    \\mathbf F     \\theta    \\|\\mathbf F\\|\\cos\\theta                  "
},
{
  "id": "example-work",
  "level": "2",
  "url": "sec-work.html#example-work",
  "type": "Example",
  "number": "3.20",
  "title": "Computing work done by a force.",
  "body": " Computing work done by a force   A force is given by the vector and moves a particle from the point to the point . Find the work done.    Consider using , evaluating with the component formula . For more help, watch the video below.   Set up the work computation: build the displacement vector first, then take the dot product. What do you get?      The displacement vector is , so by , evaluated with , the work done is    "
},
{
  "id": "ex-inclined-plane",
  "level": "2",
  "url": "sec-work.html#ex-inclined-plane",
  "type": "Example",
  "number": "3.22",
  "title": "",
  "body": "  Suppose a mass of is resting on an inclined plane. Gravity exerts a force equivalent to on the object, where is the gravitational acceleration. Suppose the incline is tilted at a angle. Compute the components of the force that are parallel and perpendicular to the inclined plane.     Decomposing gravity on a incline: the parallel component pulls the mass down the slope, and the perpendicular component presses it into the surface.    First, we determine the total gravitational force vector acting on the mass. Using : Acting entirely in the negative vertical direction, this gives:     Forces acting on a mass on a incline: the weight resolves into a component down the slope and a component into the surface, with .          30^{\\circ}      \\vec{F}   \\vec{F}_{\\parallel}   \\vec{F}_{\\perp}                Next, we define a unit vector pointing down the surface of the inclined plane. Since the plane is tilted at (or radians), a unit vector pointing down the slope is directed at an angle of relative to the horizontal: where .  The component of the force parallel to the incline, , is the projection of onto , given by : Computing the dot product with : Thus, the parallel force vector is:   Since by , the perpendicular force component is found by subtraction:    "
},
{
  "id": "sec-data-science",
  "level": "1",
  "url": "sec-data-science.html",
  "type": "Section",
  "number": "3.4",
  "title": "Application in Data Science: Measuring Similarity in Tastes",
  "body": " Application in Data Science: Measuring Similarity in Tastes  Every time a streaming service tells you because you watched Sinners … , some piece of software has decided that your taste resembles the taste of other people in its database. Deciding whose taste resembles whose can be framed as a geometry problem, and one tool that can help us decide is the dot product.  The first step is to turn taste into a vector. Fix a list of movies and ask each person to rate every one of them on a scale from to , where means loved it , means I want those two hours back , and means indifference. Reading the ratings off in the same order for everybody turns each person into a vector, and the question do these two people have similar taste? becomes a question about the angle between two vectors, which by is exactly what the dot product measures.   Angular Distance and Cosine Similarity   Let and be two nonzero vectors. Their angular distance is the angle between them, obtained from , The quantity appearing inside is called the cosine similarity of and . The smaller the angular distance, the more similar the two vectors.    Angular distance asks how nearly do these two vectors point the same way? Notice that it is completely blind to the lengths of and : multiplying either vector by a positive number leaves untouched. We will come back to what that means for moviegoers.   Two Movies at a Time  Two movies give vectors in , which we can draw. Take two of the ten films nominated for Best Picture at the 2026 Academy Awards, Sinners and Hamnet , and record each person's rating of Sinners as the first component and of Hamnet as the second. Mehdi, Norm, and Popcorn rate them as follows: Mehdi and Norm both enjoyed the two films; Popcorn sat through both of them and regretted it. shows the three taste vectors.   The taste vectors (Mehdi), (Norm), and (Popcorn). The angle is the angular distance between and .     m=(4,5)  n=(5,3)  d=(-4,-2)        \\theta   🤓  😎  🤪  Mehdi  Norm  Popcorn                 Who should watch a movie together?   Using the taste vectors above, rank the three pairs by angular distance.    The three dot products are and the lengths are , , and . Then, by , Taking of each of these gives the three angular distances.   Angular distance between the three taste vectors.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are the movie buddies. The sign of the dot product already told us most of the story: means an acute angle and broadly shared taste, while means an obtuse angle, and here an angle of nearly — Norm and Popcorn are as close to being opposites as two moviegoers can be.      Angular Distance Ignores Enthusiasm  Suppose Ray, Vera, and Gus rate the same two films as in . Since , the vectors and point in exactly the same direction, so : as far as angular distance is concerned, Ray and Gus have identical taste. Vera sits about away from that shared direction, since    Ray, Vera, and Gus. Ray's vector lies along Gus's vector , so their angular distance is , even though Gus handed out far more generous ratings.     r=(2,2)  v=(5,4)  g=(5,5)       😐  🤩  🥳  Ray  Vera  Gus               This is the scale invariance noted after , seen from the moviegoers' side. Ray is a cautious rater and Gus is an enthusiastic one, but they ranked the two films the same way and in the same proportion, and angular distance sees only that shared direction. If you regard a lukewarm reviewer and a euphoric one who agree about every film as having the same taste, this is exactly the behavior you want.    More Movies, More Dimensions  Nothing above depended on there being exactly two movies. With movies, a person's taste vector is in , the dot product of becomes a sum of products, , and the length of a vector becomes . The angular distance of carries over verbatim:   We can no longer draw the picture, but every formula still applies, and the language of still means something: two taste vectors with are orthogonal, an angular distance of , which here says that knowing one person's ratings tells you nothing about the other's. This is what makes the dot product useful in practice. A streaming service with titles works in , and finding the users nearest to you is still nothing more than the arithmetic in .   All ten nominees   List the ten 2026 Best Picture nominees alphabetically— Bugonia , F1 , Frankenstein , Hamnet , Marty Supreme , One Battle After Another , The Secret Agent , Sentimental Value , Sinners , Train Dreams —and suppose Mehdi, Norm, and Popcorn rate all ten: (The fourth and ninth entries are the Hamnet and Sinners ratings from before.) Which pair has the most similar taste?    The dot products are , , and , and the lengths are , , and . Applying to each pair gives the following.   Angular distance across all ten nominees.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are again the closest pair, though the extra eight films have pulled them apart: their angular distance grew from to once we stopped judging them on Sinners and Hamnet alone. Norm and Popcorn are nearly orthogonal, with an angle of ; their tastes are essentially unrelated rather than opposed, which is precisely the distinction the two-movie picture was too small to make.    Ten components are a lot to handle by hand, and a real recommender system deals with thousands. The cell below carries out the computation of . Press Evaluate to run it, then edit the ratings and run it again to see whose taste your own vector is closest to.    "
},
{
  "id": "def-angular-distance",
  "level": "2",
  "url": "sec-data-science.html#def-angular-distance",
  "type": "Definition",
  "number": "3.25",
  "title": "Angular Distance and Cosine Similarity.",
  "body": " Angular Distance and Cosine Similarity   Let and be two nonzero vectors. Their angular distance is the angle between them, obtained from , The quantity appearing inside is called the cosine similarity of and . The smaller the angular distance, the more similar the two vectors.   "
},
{
  "id": "fig-taste-vectors-2d",
  "level": "2",
  "url": "sec-data-science.html#fig-taste-vectors-2d",
  "type": "Figure",
  "number": "3.26",
  "title": "",
  "body": " The taste vectors (Mehdi), (Norm), and (Popcorn). The angle is the angular distance between and .     m=(4,5)  n=(5,3)  d=(-4,-2)        \\theta   🤓  😎  🤪  Mehdi  Norm  Popcorn               "
},
{
  "id": "example-taste-2d",
  "level": "2",
  "url": "sec-data-science.html#example-taste-2d",
  "type": "Example",
  "number": "3.27",
  "title": "Who should watch a movie together?",
  "body": " Who should watch a movie together?   Using the taste vectors above, rank the three pairs by angular distance.    The three dot products are and the lengths are , , and . Then, by , Taking of each of these gives the three angular distances.   Angular distance between the three taste vectors.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are the movie buddies. The sign of the dot product already told us most of the story: means an acute angle and broadly shared taste, while means an obtuse angle, and here an angle of nearly — Norm and Popcorn are as close to being opposites as two moviegoers can be.   "
},
{
  "id": "fig-taste-disagree",
  "level": "2",
  "url": "sec-data-science.html#fig-taste-disagree",
  "type": "Figure",
  "number": "3.29",
  "title": "",
  "body": " Ray, Vera, and Gus. Ray's vector lies along Gus's vector , so their angular distance is , even though Gus handed out far more generous ratings.     r=(2,2)  v=(5,4)  g=(5,5)       😐  🤩  🥳  Ray  Vera  Gus              "
},
{
  "id": "example-taste-10d",
  "level": "2",
  "url": "sec-data-science.html#example-taste-10d",
  "type": "Example",
  "number": "3.30",
  "title": "All ten nominees.",
  "body": " All ten nominees   List the ten 2026 Best Picture nominees alphabetically— Bugonia , F1 , Frankenstein , Hamnet , Marty Supreme , One Battle After Another , The Secret Agent , Sentimental Value , Sinners , Train Dreams —and suppose Mehdi, Norm, and Popcorn rate all ten: (The fourth and ninth entries are the Hamnet and Sinners ratings from before.) Which pair has the most similar taste?    The dot products are , , and , and the lengths are , , and . Applying to each pair gives the following.   Angular distance across all ten nominees.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are again the closest pair, though the extra eight films have pulled them apart: their angular distance grew from to once we stopped judging them on Sinners and Hamnet alone. Norm and Popcorn are nearly orthogonal, with an angle of ; their tastes are essentially unrelated rather than opposed, which is precisely the distinction the two-movie picture was too small to make.   "
},
{
  "id": "sec-cross-definition",
  "level": "1",
  "url": "sec-cross-definition.html",
  "type": "Section",
  "number": "4.1",
  "title": "Definition and Properties of the Cross Product",
  "body": " Definition and Properties of the Cross Product   The Cross Product (First Definition)   Given two vectors and in , the cross product  is the vector defined by where , with , is the angle between and , and is the unit vector orthogonal to both and whose direction is given by the right-hand rule.    The magnitude of is equal to the area of the parallelogram built on the two vectors and , as shown in .   The parallelogram built on the vectors and , with base and height .     u=(2,3)  v=(5,0)         \\mathbf u    \\mathbf v    \\|\\mathbf u\\|\\sin(\\theta)    \\theta                 Area of the Parallelogram        Note that is the length of the cross product . Since can be negative, we need to include its absolute value.  The vector is the unit vector that determines the direction of using the right-hand rule. Note that is orthogonal (perpendicular) to both vectors, as shown in .   The cross product points in the direction of the unit vector , given by the right-hand rule, and is orthogonal to both and ; its length is .     Two equivalent right-hand rules for .    Index–Middle–Thumb method.   Index finger along u, middle finger along v, thumb along u cross v.     Rotating-fingers method.   Fingers curl from u toward v, thumb points along u cross v.       Parallel Vectors   From , it follows that the cross product of two parallel vectors is zero.        Properties of the Cross Product   If , , and are any vectors and , are scalars, then              Although the cross product was defined geometrically above, all five properties are most easily checked using the equivalent component formula established in the next section: if and , then . Write , , and .   (1) Each component of has the form , which is times the corresponding component of . Hence .   (2) The first component of is which is the sum of the first components of and . The same holds for the other two components, so .   (3) By the same computation with the roles of the two factors exchanged, the first component of is , the sum of the first components of and ; likewise for the other two components, so .   (4) The first component of is , the negative of the first component of ; likewise for the other two components, so .   (5) Since , every component of is a difference of products each containing a factor of , so .     Show that .    Using the distributive properties of the cross product from , Since a vector is parallel to itself, and by . Also by , so      Computing a cross product using the first definition   Use to compute    , and also ;    , where and is a vector of length lying in the -plane, making an angle of with measured counterclockwise.        Part 1. The vectors and are unit vectors, so , and they are perpendicular, so and . Both lie in the -plane, so the unit vector orthogonal to both is either or ; curling the fingers of the right hand from toward points the thumb along , so and For the two lengths and the angle are unchanged, but the right-hand rule now runs from toward , which points the thumb along . Hence , in agreement with property 4 of .   Part 2. Here , , and , so the length of the cross product is Both vectors lie in the -plane, and turning from to is counterclockwise, so the right-hand rule again gives and   As a check on the magnitude, says is the area of the parallelogram built on and : its base is and its height is , giving an area of .    "
},
{
  "id": "def-cross-product",
  "level": "2",
  "url": "sec-cross-definition.html#def-cross-product",
  "type": "Definition",
  "number": "4.1",
  "title": "The Cross Product (First Definition).",
  "body": " The Cross Product (First Definition)   Given two vectors and in , the cross product  is the vector defined by where , with , is the angle between and , and is the unit vector orthogonal to both and whose direction is given by the right-hand rule.   "
},
{
  "id": "fig-parallelogram-area",
  "level": "2",
  "url": "sec-cross-definition.html#fig-parallelogram-area",
  "type": "Figure",
  "number": "4.2",
  "title": "",
  "body": " The parallelogram built on the vectors and , with base and height .     u=(2,3)  v=(5,0)         \\mathbf u    \\mathbf v    \\|\\mathbf u\\|\\sin(\\theta)    \\theta               "
},
{
  "id": "fact-parallelogram-area",
  "level": "2",
  "url": "sec-cross-definition.html#fact-parallelogram-area",
  "type": "Fact",
  "number": "4.3",
  "title": "Area of the Parallelogram.",
  "body": " Area of the Parallelogram       "
},
{
  "id": "fig-cross-product-video",
  "level": "2",
  "url": "sec-cross-definition.html#fig-cross-product-video",
  "type": "Figure",
  "number": "4.4",
  "title": "",
  "body": " The cross product points in the direction of the unit vector , given by the right-hand rule, and is orthogonal to both and ; its length is .   "
},
{
  "id": "fig-right-hand-rule-illustration",
  "level": "2",
  "url": "sec-cross-definition.html#fig-right-hand-rule-illustration",
  "type": "Figure",
  "number": "4.5",
  "title": "",
  "body": " Two equivalent right-hand rules for .    Index–Middle–Thumb method.   Index finger along u, middle finger along v, thumb along u cross v.     Rotating-fingers method.   Fingers curl from u toward v, thumb points along u cross v.     "
},
{
  "id": "fact-parallel-vectors",
  "level": "2",
  "url": "sec-cross-definition.html#fact-parallel-vectors",
  "type": "Fact",
  "number": "4.6",
  "title": "Parallel Vectors.",
  "body": " Parallel Vectors   From , it follows that the cross product of two parallel vectors is zero.      "
},
{
  "id": "thm-cross-properties",
  "level": "2",
  "url": "sec-cross-definition.html#thm-cross-properties",
  "type": "Theorem",
  "number": "4.7",
  "title": "Properties of the Cross Product.",
  "body": " Properties of the Cross Product   If , , and are any vectors and , are scalars, then            "
},
{
  "id": "sec-cross-definition-12",
  "level": "2",
  "url": "sec-cross-definition.html#sec-cross-definition-12",
  "type": "Proof",
  "number": "4.1.1",
  "title": "",
  "body": " Although the cross product was defined geometrically above, all five properties are most easily checked using the equivalent component formula established in the next section: if and , then . Write , , and .   (1) Each component of has the form , which is times the corresponding component of . Hence .   (2) The first component of is which is the sum of the first components of and . The same holds for the other two components, so .   (3) By the same computation with the roles of the two factors exchanged, the first component of is , the sum of the first components of and ; likewise for the other two components, so .   (4) The first component of is , the negative of the first component of ; likewise for the other two components, so .   (5) Since , every component of is a difference of products each containing a factor of , so .  "
},
{
  "id": "exercise-cross-identity",
  "level": "2",
  "url": "sec-cross-definition.html#exercise-cross-identity",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "",
  "body": "  Show that .    Using the distributive properties of the cross product from , Since a vector is parallel to itself, and by . Also by , so    "
},
{
  "id": "example-cross-geometric",
  "level": "2",
  "url": "sec-cross-definition.html#example-cross-geometric",
  "type": "Example",
  "number": "4.9",
  "title": "Computing a cross product using the first definition.",
  "body": " Computing a cross product using the first definition   Use to compute    , and also ;    , where and is a vector of length lying in the -plane, making an angle of with measured counterclockwise.        Part 1. The vectors and are unit vectors, so , and they are perpendicular, so and . Both lie in the -plane, so the unit vector orthogonal to both is either or ; curling the fingers of the right hand from toward points the thumb along , so and For the two lengths and the angle are unchanged, but the right-hand rule now runs from toward , which points the thumb along . Hence , in agreement with property 4 of .   Part 2. Here , , and , so the length of the cross product is Both vectors lie in the -plane, and turning from to is counterclockwise, so the right-hand rule again gives and   As a check on the magnitude, says is the area of the parallelogram built on and : its base is and its height is , giving an area of .   "
},
{
  "id": "sec-cross-components",
  "level": "1",
  "url": "sec-cross-components.html",
  "type": "Section",
  "number": "4.2",
  "title": "Second Definition of the Cross Product",
  "body": " Second Definition of the Cross Product  Writing the vectors in components gives another definition for the cross product.   The Cross Product (Second Definition)   If and , then     One way to remember the second definition of the cross product is to write it as a determinant: where    Computing a cross product   Calculate the cross product if and .          Computing a vector perpendicular to two other vectors   Consider the points , , and . Find a unit vector which is orthogonal to both and .    We first compute the two vectors:   The cross product is orthogonal to both vectors and :   The unit vector in question is then computed as follows:    The unit vector is orthogonal to both and , and hence to the plane through the points , , and .       Computing the area of a triangle   Find the area of the triangle with the vertices , , and . Note that these are the same points that we had in the previous example.    To find the area of the triangle, we first compute the area of the parallelogram built on and , shown in , and then divide by :    The triangle built on the vectors and is half of the corresponding parallelogram.     b=(4,0)  c=(1.5,3)         \\vec{AC}    \\vec{AB}                 "
},
{
  "id": "def-cross-components",
  "level": "2",
  "url": "sec-cross-components.html#def-cross-components",
  "type": "Definition",
  "number": "4.10",
  "title": "The Cross Product (Second Definition).",
  "body": " The Cross Product (Second Definition)   If and , then    "
},
{
  "id": "example-cross-compute",
  "level": "2",
  "url": "sec-cross-components.html#example-cross-compute",
  "type": "Example",
  "number": "4.11",
  "title": "Computing a cross product.",
  "body": " Computing a cross product   Calculate the cross product if and .        "
},
{
  "id": "example-perpendicular-vector",
  "level": "2",
  "url": "sec-cross-components.html#example-perpendicular-vector",
  "type": "Example",
  "number": "4.12",
  "title": "Computing a vector perpendicular to two other vectors.",
  "body": " Computing a vector perpendicular to two other vectors   Consider the points , , and . Find a unit vector which is orthogonal to both and .    We first compute the two vectors:   The cross product is orthogonal to both vectors and :   The unit vector in question is then computed as follows:    The unit vector is orthogonal to both and , and hence to the plane through the points , , and .     "
},
{
  "id": "example-triangle-area",
  "level": "2",
  "url": "sec-cross-components.html#example-triangle-area",
  "type": "Example",
  "number": "4.14",
  "title": "Computing the area of a triangle.",
  "body": " Computing the area of a triangle   Find the area of the triangle with the vertices , , and . Note that these are the same points that we had in the previous example.    To find the area of the triangle, we first compute the area of the parallelogram built on and , shown in , and then divide by :    The triangle built on the vectors and is half of the corresponding parallelogram.     b=(4,0)  c=(1.5,3)         \\vec{AC}    \\vec{AB}                "
},
{
  "id": "sec-true-false",
  "level": "1",
  "url": "sec-true-false.html",
  "type": "Section",
  "number": "4.3",
  "title": "True or False?",
  "body": " True or False?   True or False   Let and be two vectors in . Then, is perpendicular to .    Note that is perpendicular to both and , which gives: and therefore is perpendicular to .     True or False   Let and be two standard unit vectors in . Then, .    Note that:   Now, since and are standard unit vectors, we have , which means:     "
},
{
  "id": "exercise-true-false-1",
  "level": "2",
  "url": "sec-true-false.html#exercise-true-false-1",
  "type": "Checkpoint",
  "number": "4.16",
  "title": "True or False.",
  "body": " True or False   Let and be two vectors in . Then, is perpendicular to .    Note that is perpendicular to both and , which gives: and therefore is perpendicular to .   "
},
{
  "id": "exercise-true-false-2",
  "level": "2",
  "url": "sec-true-false.html#exercise-true-false-2",
  "type": "Checkpoint",
  "number": "4.17",
  "title": "True or False.",
  "body": " True or False   Let and be two standard unit vectors in . Then, .    Note that:   Now, since and are standard unit vectors, we have , which means:    "
},
{
  "id": "sec-torque",
  "level": "1",
  "url": "sec-torque.html",
  "type": "Section",
  "number": "4.4",
  "title": "Application: Torque",
  "body": " Application: Torque  One of the well known physical applications of the cross product is torque , the rotational analog of force. A force makes an object accelerate; a torque makes it rotate . How effective a force is at producing rotation depends not only on its magnitude, but also on where it is applied and in what direction . Think of pushing a door: pushing hard near the hinge barely moves it, while a light push at the doorknob swings it open easily. Pushing at the doorknob but toward the hinge does nothing at all. The cross product captures all three scenarios and more.   Torque   Suppose a force is applied at a point whose position vector relative to the axis of rotation is . The torque produced by is the vector       Everything we know about the cross product now translates into physics. By , the magnitude of the torque is where is the angle between and , and the direction of is given by the right-hand rule: points along the axis of rotation, and curling the fingers of the right hand from toward gives the sense of the rotation. Torque has units of meter-newtons ( ) in SI.  The quantity in can be grouped in two useful ways:    The two groupings of . In both pictures the axis of rotation passes through , perpendicular to the page, the force is applied at , and is the angle between and ; the two products are equal because each is .    Force times lever arm: .           \\theta      O  P   \\vec r    \\vec F    r_\\perp    r_\\perp = \\|\\vec r\\|\\sin\\theta    \\|\\vec\\tau\\| = r_\\perp\\|\\vec F\\|                   Distance times perpendicular force: .            \\theta     O  P   \\vec r    \\vec F    F_\\perp    F_\\parallel    F_\\parallel \\text{ produces no rotation}    F_\\perp = \\|\\vec F\\|\\sin\\theta    \\|\\vec\\tau\\| = \\|\\vec r\\|F_\\perp                    The first grouping, shown in , says the torque is the force times the lever arm  , the perpendicular distance from the axis to the line along which the force acts. The second, shown in , says it is the distance times , the component of the force perpendicular to ; the parallel component points straight at the axis and produces no rotation.   Zero Torque   By , if is parallel to then : a force directed straight at (or away from) the axis produces no rotation. This is why you cannot open a door by pushing toward its hinge.     Biceps torque   The biceps muscle exerts a vertical force of N on the lower arm, attached at a point cm from the elbow joint (the axis of rotation). Calculate the torque about the elbow when    the forearm is horizontal, and  the forearm makes a angle below the horizontal.      The biceps exerts a 700 N force on the forearm: (a) forearm horizontal, with the muscle attached 5.0 cm from the elbow axis; (b) forearm at 30° below horizontal, with lever arm .    Side-by-side diagrams of an arm. In (a), the forearm is horizontal and a 700 N biceps force acts 5.0 cm from the elbow axis. In (b), the forearm is angled 30 degrees below horizontal, making a 60 degree angle with the vertical, with lever arm R.       Place the elbow at the origin and let the force act in the plane , with pointing straight up.   Part 1. The forearm is horizontal, so and the angle between and is . Then so . Equivalently, . The torque points in the direction (out of the page), which by the right-hand rule corresponds to a counterclockwise rotation of the forearm about the elbow.   Part 2. Now the forearm points below the horizontal, so while is unchanged. The cross product gives   So , again counterclockwise. To check with : the vector sits at and at , so the angle between them is , and   Note that , so this agrees with the lever-arm point of view: the lever arm has shortened to m. The arm exerts less torque at this angle than when the forearm is horizontal — weight machines at gyms are often designed to account for exactly this variation.    "
},
{
  "id": "sec-torque-2",
  "level": "2",
  "url": "sec-torque.html#sec-torque-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "torque "
},
{
  "id": "def-torque",
  "level": "2",
  "url": "sec-torque.html#def-torque",
  "type": "Definition",
  "number": "4.18",
  "title": "Torque.",
  "body": " Torque   Suppose a force is applied at a point whose position vector relative to the axis of rotation is . The torque produced by is the vector    "
},
{
  "id": "fig-torque-two-groupings",
  "level": "2",
  "url": "sec-torque.html#fig-torque-two-groupings",
  "type": "Figure",
  "number": "4.19",
  "title": "",
  "body": " The two groupings of . In both pictures the axis of rotation passes through , perpendicular to the page, the force is applied at , and is the angle between and ; the two products are equal because each is .    Force times lever arm: .           \\theta      O  P   \\vec r    \\vec F    r_\\perp    r_\\perp = \\|\\vec r\\|\\sin\\theta    \\|\\vec\\tau\\| = r_\\perp\\|\\vec F\\|                   Distance times perpendicular force: .            \\theta     O  P   \\vec r    \\vec F    F_\\perp    F_\\parallel    F_\\parallel \\text{ produces no rotation}    F_\\perp = \\|\\vec F\\|\\sin\\theta    \\|\\vec\\tau\\| = \\|\\vec r\\|F_\\perp                   "
},
{
  "id": "sec-torque-7",
  "level": "2",
  "url": "sec-torque.html#sec-torque-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lever arm "
},
{
  "id": "fact-zero-torque",
  "level": "2",
  "url": "sec-torque.html#fact-zero-torque",
  "type": "Fact",
  "number": "4.20",
  "title": "Zero Torque.",
  "body": " Zero Torque   By , if is parallel to then : a force directed straight at (or away from) the axis produces no rotation. This is why you cannot open a door by pushing toward its hinge.   "
},
{
  "id": "example-biceps-torque",
  "level": "2",
  "url": "sec-torque.html#example-biceps-torque",
  "type": "Example",
  "number": "4.21",
  "title": "Biceps torque.",
  "body": " Biceps torque   The biceps muscle exerts a vertical force of N on the lower arm, attached at a point cm from the elbow joint (the axis of rotation). Calculate the torque about the elbow when    the forearm is horizontal, and  the forearm makes a angle below the horizontal.      The biceps exerts a 700 N force on the forearm: (a) forearm horizontal, with the muscle attached 5.0 cm from the elbow axis; (b) forearm at 30° below horizontal, with lever arm .    Side-by-side diagrams of an arm. In (a), the forearm is horizontal and a 700 N biceps force acts 5.0 cm from the elbow axis. In (b), the forearm is angled 30 degrees below horizontal, making a 60 degree angle with the vertical, with lever arm R.       Place the elbow at the origin and let the force act in the plane , with pointing straight up.   Part 1. The forearm is horizontal, so and the angle between and is . Then so . Equivalently, . The torque points in the direction (out of the page), which by the right-hand rule corresponds to a counterclockwise rotation of the forearm about the elbow.   Part 2. Now the forearm points below the horizontal, so while is unchanged. The cross product gives   So , again counterclockwise. To check with : the vector sits at and at , so the angle between them is , and   Note that , so this agrees with the lever-arm point of view: the lever arm has shortened to m. The arm exerts less torque at this angle than when the forearm is horizontal — weight machines at gyms are often designed to account for exactly this variation.   "
},
{
  "id": "sec-circular-motion",
  "level": "1",
  "url": "sec-circular-motion.html",
  "type": "Section",
  "number": "4.5",
  "title": "Application: Circular Motion: Velocity and Angular Velocity",
  "body": " Application: Circular Motion: Velocity and Angular Velocity   A second physical application of the cross product describes the motion of an object travelling in a circle: a rider on a circular track, a ball whirled on a string, a point on a spinning wheel, or the moon on its (nearly circular) orbit. In each case the object turns about a fixed centre, and the natural way to keep track of where it is at time is not by its coordinates and but by the single angle it has swung through. Our goal is to study how the velocity and the rate of change of that angle are related.  Throughout this section we write unit vectors with hats, so that , and are the usual fixed unit vectors , and along the coordinate axes.    A Frame that Turns with the Particle  Let an object move on a circle of radius centred at the origin of the -plane, and let be the angle its position makes with the positive -axis at time , as in . At the point where the particle sits we attach two unit vectors:    , pointing radially outward, away from the centre, and     , perpendicular to and tangent to the circle, pointing in the direction of increasing .   Reading their components off the figure, The position of the particle is then simply   The pair , is fixed once and for all, while the pair , rides along with the particle and turns as it goes; this is exactly what makes the second pair convenient. Note that together with the moving pair forms a right-handed frame, since    The moving frame at the point : points radially outward and is tangent to the circle. The fixed vectors and are drawn at for comparison; unlike and , they do not turn as the particle moves.    A circle of radius r centred at the origin. A particle sits at a point P on the circle, its position vector making an angle theta of t with the positive x-axis. At P the unit vector r hat points radially outward along the position vector, and the unit vector theta hat is perpendicular to it, tangent to the circle in the counterclockwise direction. The fixed unit vectors i and j are also drawn at P for comparison.              \\theta(t)    P  r   \\hat r(t)    \\hat\\theta(t)   \\hat i  \\hat j  +x  +y                  The Velocity in Circular Motion  Because the particle moves, the angle depends on , and so do the two moving unit vectors. Differentiating and with the chain rule gives Each unit vector has constant length, so it can only turn; and turning a unit vector moves its tip perpendicular to itself, which is exactly what and say.  Now differentiate the position . The radius is constant on a circle, so only the unit vector needs differentiating: The velocity has no -component at all: it points purely along , tangent to the circle. Its -component is called the tangential component of the velocity . It is positive when the particle turns counterclockwise and negative when it turns clockwise.   Angular Speed   The angular speed of the particle is the magnitude of the rate of change of its angle, measured in radians per second. By , the speed of the particle and its angular speed are related by     It is worth seeing where comes from geometrically, without any differentiation of unit vectors. In a short time interval the particle moves from to , turning through a small angle , as in . The two position vectors have the same length , so they form an isosceles triangle whose third side is the displacement . Splitting that triangle down the middle gives   For a small angle the power series is dominated by its first term, so and the chord is very nearly the arc it cuts off: . Dividing by and letting , which is again. The direction comes out of the same picture: as the chord lines up with the tangent line to the circle, so is perpendicular to , in agreement with .   The displacement is the chord subtending the angle . For small the chord is nearly the arc, , and its direction approaches that of the tangent line, along which points.    Two position vectors of equal length r are drawn from the centre of a dashed circle, separated by a small angle delta theta. The chord delta r joins the tip of the first to the tip of the second. A dashed tangent line touches the circle at the first point, and the velocity arrow at that point lies along it.            \\Delta\\theta      \\vec r(t)    \\vec r(t+\\Delta t)    \\Delta\\vec r    \\vec v(t)    \\text{tangent line}     \\|\\Delta\\vec r\\| = 2r\\sin\\tfrac{\\Delta\\theta}{2} \\approx r\\,\\Delta\\theta    \\Rightarrow\\;\\; v = \\lim\\limits_{\\Delta t\\to 0}\\dfrac{\\|\\Delta\\vec r\\|}{\\Delta t} = r\\,\\omega                    Angular Velocity as a Vector  So far the rate of turning has been a number, . But a rotation has a direction as well as a rate: the plane of the circle can be tilted any which way, and the particle can go around it either way. Both pieces of information can be carried by a single vector, provided we point it along the axis of rotation rather than along the motion.  We always choose a right-handed coordinate system, with increasing in the counterclockwise direction when viewed from the positive -axis.   Angular Velocity Vector   For an object moving in a circle in the -plane about the origin, the angular velocity vector is directed along the axis of rotation. Its SI units are , and the angular speed of is its magnitude, .    The sign of records which way the object goes around, and the right-hand rule turns that sign into a direction in space: curl the fingers of your right hand in the direction of the motion and your thumb points along . If the particle circulates counterclockwise as seen from above, then and points in the -direction; if it circulates clockwise, then and points in the -direction. The two cases are shown in .   The angular velocity vector points along the axis of rotation, in the direction given by the right-hand rule: up the -axis for counterclockwise motion (left), down it for clockwise motion (right). Note that is not tangent to the orbit — the velocity is.    Two panels showing a particle on a circular orbit in the horizontal plane, drawn in an oblique view with the z-axis vertical. In the left panel the particle circulates counterclockwise as seen from above and the angular velocity vector points up along the positive z-direction. In the right panel the particle circulates clockwise and the angular velocity vector points down along the negative z-direction. In both panels the velocity is tangent to the orbit.     orbA(t) = (2.2*cos(t), 0.75*sin(t))  orbB(t) = (7.4 + 2.2*cos(t), 0.75*sin(t))             \\vec\\omega   +z  O   \\vec r    \\vec v    \\omega_z = \\dfrac{d\\theta}{dt} > 0    \\text{counterclockwise:}\\;\\; \\vec\\omega \\text{ points along } +\\hat k             \\vec\\omega   +z  O   \\vec r    \\vec v    \\omega_z = \\dfrac{d\\theta}{dt} < 0    \\text{clockwise:}\\;\\; \\vec\\omega \\text{ points along } -\\hat k                      Velocity as a Cross Product  We now have two vectors attached to the motion: the angular velocity , along the axis, and the position , in the plane of the circle. The velocity is perpendicular to both, which is precisely the job of the cross product.   Velocity and Angular Velocity   For an object in circular motion about the origin,     To verify this, first compute using : Therefore, using and , by . See .  The geometry of the cross product delivers all three features of the velocity at once, with no computation:    Magnitude. Since is perpendicular to the plane of the circle, it is perpendicular to , so , recovering .     Direction. The cross product is perpendicular to , so the velocity is tangent to the circle; and it is perpendicular to , so the motion stays in the plane of the orbit.     Sense. The right-hand rule applied to automatically sends the particle counterclockwise when and clockwise when , since reversing reverses the cross product.     There is a bonus. A piece of running along the axis is parallel to and so contributes nothing to the cross product, since . Consequently remains true when is measured from any point on the axis of rotation, not just from the centre of the circle.   The velocity of a particle in circular motion is . Because and are perpendicular, the speed is , and the right-hand rule places tangent to the orbit in the direction of travel.    A circular orbit in the horizontal plane drawn in an oblique view, with the z-axis vertical. The angular velocity vector points straight up along the z-axis from the centre O. The position vector runs from O out to the particle on the orbit, and the velocity vector at the particle is tangent to the orbit, equal to the cross product of the angular velocity with the position vector.     orb(t) = (2.6*cos(t), 0.9*sin(t))            \\vec\\omega = \\dfrac{d\\theta}{dt}\\,\\hat k   +z  O   \\vec r = r\\,\\hat r    \\vec v = \\vec\\omega\\times\\vec r    \\vec v = \\vec\\omega\\times\\vec r = \\dfrac{d\\theta}{dt}\\,\\hat k \\times r\\,\\hat r = r\\dfrac{d\\theta}{dt}\\,\\hat\\theta     \\|\\vec v\\| = \\omega r \\sin 90^\\circ = \\omega r                   Examples   Angular velocity from an angle function   A particle moves in a circle of radius centred at the origin of the -plane; at it is on the positive -axis. The angle it makes with the positive -axis is , where and are positive constants.    Find the angular velocity vector.  Find the velocity vector, in polar coordinates.  At what time is the angular velocity zero?   In which direction does the angular velocity point for , and for ?       The rate of change of the angle is    Part 1. By ,    Part 2. By , Equivalently, one can obtain this from : , using .   Part 3. The angular velocity vanishes when At that instant the particle is momentarily at rest.   Part 4. For we have , so points in the -direction and the particle travels counterclockwise. For we have , so points in the -direction and the particle has reversed and travels clockwise.     A turntable   A record turntable spins at revolutions per minute, counterclockwise when viewed from above. Take the axis of rotation to be the -axis, with the turntable lying in the -plane, distances in meters.    Find the angular velocity vector .   Find the velocity of the point of the record at , and its speed.        Part 1. One revolution is radians, so the frequency rev\/min rev\/s corresponds to an angular speed The rotation is counterclockwise seen from the -axis, so and (For comparison, the period of one revolution is s.)   Part 2. By , The point in question is on the positive -axis, and its velocity points in the -direction — tangent to its circle and consistent with counterclockwise motion, as it should be. Its speed is , which agrees with : .     A carousel   A carousel turns clockwise when viewed from above, making one complete turn every seconds. Taking the axis of rotation as the -axis, find the angular velocity vector, and the velocity of a horse located at meters.    The angular speed is . The motion is clockwise as seen from above, so and the angular velocity points along : Then The horse is on the positive -axis and moves in the -direction, which is indeed clockwise seen from above. Its speed is .     "
},
{
  "id": "fig-polar-frame",
  "level": "2",
  "url": "sec-circular-motion.html#fig-polar-frame",
  "type": "Figure",
  "number": "4.23",
  "title": "",
  "body": " The moving frame at the point : points radially outward and is tangent to the circle. The fixed vectors and are drawn at for comparison; unlike and , they do not turn as the particle moves.    A circle of radius r centred at the origin. A particle sits at a point P on the circle, its position vector making an angle theta of t with the positive x-axis. At P the unit vector r hat points radially outward along the position vector, and the unit vector theta hat is perpendicular to it, tangent to the circle in the counterclockwise direction. The fixed unit vectors i and j are also drawn at P for comparison.              \\theta(t)    P  r   \\hat r(t)    \\hat\\theta(t)   \\hat i  \\hat j  +x  +y               "
},
{
  "id": "subsec-circular-velocity-3",
  "level": "2",
  "url": "sec-circular-motion.html#subsec-circular-velocity-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangential component of the velocity "
},
{
  "id": "def-angular-speed",
  "level": "2",
  "url": "sec-circular-motion.html#def-angular-speed",
  "type": "Definition",
  "number": "4.24",
  "title": "Angular Speed.",
  "body": " Angular Speed   The angular speed of the particle is the magnitude of the rate of change of its angle, measured in radians per second. By , the speed of the particle and its angular speed are related by    "
},
{
  "id": "fig-circular-chord",
  "level": "2",
  "url": "sec-circular-motion.html#fig-circular-chord",
  "type": "Figure",
  "number": "4.25",
  "title": "",
  "body": " The displacement is the chord subtending the angle . For small the chord is nearly the arc, , and its direction approaches that of the tangent line, along which points.    Two position vectors of equal length r are drawn from the centre of a dashed circle, separated by a small angle delta theta. The chord delta r joins the tip of the first to the tip of the second. A dashed tangent line touches the circle at the first point, and the velocity arrow at that point lies along it.            \\Delta\\theta      \\vec r(t)    \\vec r(t+\\Delta t)    \\Delta\\vec r    \\vec v(t)    \\text{tangent line}     \\|\\Delta\\vec r\\| = 2r\\sin\\tfrac{\\Delta\\theta}{2} \\approx r\\,\\Delta\\theta    \\Rightarrow\\;\\; v = \\lim\\limits_{\\Delta t\\to 0}\\dfrac{\\|\\Delta\\vec r\\|}{\\Delta t} = r\\,\\omega                 "
},
{
  "id": "def-angular-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#def-angular-velocity",
  "type": "Definition",
  "number": "4.26",
  "title": "Angular Velocity Vector.",
  "body": " Angular Velocity Vector   For an object moving in a circle in the -plane about the origin, the angular velocity vector is directed along the axis of rotation. Its SI units are , and the angular speed of is its magnitude, .   "
},
{
  "id": "fig-angular-velocity-sign",
  "level": "2",
  "url": "sec-circular-motion.html#fig-angular-velocity-sign",
  "type": "Figure",
  "number": "4.27",
  "title": "",
  "body": " The angular velocity vector points along the axis of rotation, in the direction given by the right-hand rule: up the -axis for counterclockwise motion (left), down it for clockwise motion (right). Note that is not tangent to the orbit — the velocity is.    Two panels showing a particle on a circular orbit in the horizontal plane, drawn in an oblique view with the z-axis vertical. In the left panel the particle circulates counterclockwise as seen from above and the angular velocity vector points up along the positive z-direction. In the right panel the particle circulates clockwise and the angular velocity vector points down along the negative z-direction. In both panels the velocity is tangent to the orbit.     orbA(t) = (2.2*cos(t), 0.75*sin(t))  orbB(t) = (7.4 + 2.2*cos(t), 0.75*sin(t))             \\vec\\omega   +z  O   \\vec r    \\vec v    \\omega_z = \\dfrac{d\\theta}{dt} > 0    \\text{counterclockwise:}\\;\\; \\vec\\omega \\text{ points along } +\\hat k             \\vec\\omega   +z  O   \\vec r    \\vec v    \\omega_z = \\dfrac{d\\theta}{dt} < 0    \\text{clockwise:}\\;\\; \\vec\\omega \\text{ points along } -\\hat k                   "
},
{
  "id": "fact-velocity-cross-product",
  "level": "2",
  "url": "sec-circular-motion.html#fact-velocity-cross-product",
  "type": "Fact",
  "number": "4.28",
  "title": "Velocity and Angular Velocity.",
  "body": " Velocity and Angular Velocity   For an object in circular motion about the origin,    "
},
{
  "id": "fig-omega-cross-r",
  "level": "2",
  "url": "sec-circular-motion.html#fig-omega-cross-r",
  "type": "Figure",
  "number": "4.29",
  "title": "",
  "body": " The velocity of a particle in circular motion is . Because and are perpendicular, the speed is , and the right-hand rule places tangent to the orbit in the direction of travel.    A circular orbit in the horizontal plane drawn in an oblique view, with the z-axis vertical. The angular velocity vector points straight up along the z-axis from the centre O. The position vector runs from O out to the particle on the orbit, and the velocity vector at the particle is tangent to the orbit, equal to the cross product of the angular velocity with the position vector.     orb(t) = (2.6*cos(t), 0.9*sin(t))            \\vec\\omega = \\dfrac{d\\theta}{dt}\\,\\hat k   +z  O   \\vec r = r\\,\\hat r    \\vec v = \\vec\\omega\\times\\vec r    \\vec v = \\vec\\omega\\times\\vec r = \\dfrac{d\\theta}{dt}\\,\\hat k \\times r\\,\\hat r = r\\dfrac{d\\theta}{dt}\\,\\hat\\theta     \\|\\vec v\\| = \\omega r \\sin 90^\\circ = \\omega r                "
},
{
  "id": "example-angular-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#example-angular-velocity",
  "type": "Example",
  "number": "4.30",
  "title": "Angular velocity from an angle function.",
  "body": " Angular velocity from an angle function   A particle moves in a circle of radius centred at the origin of the -plane; at it is on the positive -axis. The angle it makes with the positive -axis is , where and are positive constants.    Find the angular velocity vector.  Find the velocity vector, in polar coordinates.  At what time is the angular velocity zero?   In which direction does the angular velocity point for , and for ?       The rate of change of the angle is    Part 1. By ,    Part 2. By , Equivalently, one can obtain this from : , using .   Part 3. The angular velocity vanishes when At that instant the particle is momentarily at rest.   Part 4. For we have , so points in the -direction and the particle travels counterclockwise. For we have , so points in the -direction and the particle has reversed and travels clockwise.   "
},
{
  "id": "example-turntable",
  "level": "2",
  "url": "sec-circular-motion.html#example-turntable",
  "type": "Example",
  "number": "4.31",
  "title": "A turntable.",
  "body": " A turntable   A record turntable spins at revolutions per minute, counterclockwise when viewed from above. Take the axis of rotation to be the -axis, with the turntable lying in the -plane, distances in meters.    Find the angular velocity vector .   Find the velocity of the point of the record at , and its speed.        Part 1. One revolution is radians, so the frequency rev\/min rev\/s corresponds to an angular speed The rotation is counterclockwise seen from the -axis, so and (For comparison, the period of one revolution is s.)   Part 2. By , The point in question is on the positive -axis, and its velocity points in the -direction — tangent to its circle and consistent with counterclockwise motion, as it should be. Its speed is , which agrees with : .   "
},
{
  "id": "exercise-carousel-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#exercise-carousel-velocity",
  "type": "Checkpoint",
  "number": "4.32",
  "title": "A carousel.",
  "body": " A carousel   A carousel turns clockwise when viewed from above, making one complete turn every seconds. Taking the axis of rotation as the -axis, find the angular velocity vector, and the velocity of a horse located at meters.    The angular speed is . The motion is clockwise as seen from above, so and the angular velocity points along : Then The horse is on the positive -axis and moves in the -direction, which is indeed clockwise seen from above. Its speed is .   "
},
{
  "id": "subsec-parabola",
  "level": "1",
  "url": "subsec-parabola.html",
  "type": "Section",
  "number": "5.1",
  "title": "Parabola",
  "body": " Parabola    A parabola is the set of points in a plane that are equidistant from a fixed point (the focus ) and a fixed line (the directrix ).    The standard equation follows from that definition and nothing else. Choose coordinates that make the picture symmetric: put the focus at and the directrix at , so the two sit on opposite sides of the origin at equal distances. A point lies on the parabola exactly when its distance to equals its distance to the directrix, and that second distance is measured straight down to the foot :   Both sides are non-negative, so squaring loses nothing:   The and terms cancel from both sides, leaving .  So for the standard parabola the vertex is at the origin, the focus is at , and the directrix is the line . The vertex sits halfway between focus and directrix, which is why both are a distance from it. If the same algebra applies unchanged and the curve opens downward; interchanging the roles of and gives the sideways parabola .   The parabola . The point is equidistant from the focus and the directrix .     pval = 0.6  f(x) = x^2\/(4*pval)  xP = 1.9       \\text{directrix: } y=-p   \\text{Focus }(0,p)   \\text{vertex}    P      x^2 = 4py                 Animation: as moves along the parabola, its distance to the focus always equals its distance to the directrix.     From equation to focus and directrix   Find the focus and the directrix of .    We begin by completing the square:   Comparing with gives , so . The graph is the standard parabola shifted right by one unit, so the vertex is at . Therefore the focus is at and the directrix is the horizontal line .   The parabola , opening downward with focus and directrix .     g(x) = -0.5*(x-1)^2      \\text{directrix } y=\\tfrac12   \\text{Focus }\\left(1,-\\tfrac12\\right)   (x-1)^2=-2y                  From focus and directrix to equation (a sideways parabola)   Find the equation of the parabola whose focus is and whose directrix is the vertical line . In which direction does it open?    Here we run in reverse. A point lies on the parabola exactly when its distance to the focus equals its distance to the directrix:   Squaring both sides and expanding,   The and constant terms cancel, leaving   Because the directrix is vertical and the focus lies to its right, the parabola opens to the right . Comparing with gives , so , consistent with the focus at . This is the same equidistance idea as the previous example, but with a horizontal axis of symmetry.   The parabola opens to the right; is equidistant from the focus and the directrix .     P(x,y) = y^2 - 8*x  yP = 4      x=-2   \\text{Focus }(2,0)   \\text{vertex}    P      y^2 = 8x                  "
},
{
  "id": "def-parabola",
  "level": "2",
  "url": "subsec-parabola.html#def-parabola",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": "  A parabola is the set of points in a plane that are equidistant from a fixed point (the focus ) and a fixed line (the directrix ).   "
},
{
  "id": "fig-parabola-def",
  "level": "2",
  "url": "subsec-parabola.html#fig-parabola-def",
  "type": "Figure",
  "number": "5.2",
  "title": "",
  "body": " The parabola . The point is equidistant from the focus and the directrix .     pval = 0.6  f(x) = x^2\/(4*pval)  xP = 1.9       \\text{directrix: } y=-p   \\text{Focus }(0,p)   \\text{vertex}    P      x^2 = 4py               "
},
{
  "id": "vid-parabola-focus",
  "level": "2",
  "url": "subsec-parabola.html#vid-parabola-focus",
  "type": "Figure",
  "number": "5.3",
  "title": "",
  "body": " Animation: as moves along the parabola, its distance to the focus always equals its distance to the directrix.   "
},
{
  "id": "ex-parabola-1",
  "level": "2",
  "url": "subsec-parabola.html#ex-parabola-1",
  "type": "Example",
  "number": "5.4",
  "title": "From equation to focus and directrix.",
  "body": " From equation to focus and directrix   Find the focus and the directrix of .    We begin by completing the square:   Comparing with gives , so . The graph is the standard parabola shifted right by one unit, so the vertex is at . Therefore the focus is at and the directrix is the horizontal line .   The parabola , opening downward with focus and directrix .     g(x) = -0.5*(x-1)^2      \\text{directrix } y=\\tfrac12   \\text{Focus }\\left(1,-\\tfrac12\\right)   (x-1)^2=-2y                "
},
{
  "id": "ex-parabola-2",
  "level": "2",
  "url": "subsec-parabola.html#ex-parabola-2",
  "type": "Example",
  "number": "5.6",
  "title": "From focus and directrix to equation (a sideways parabola).",
  "body": " From focus and directrix to equation (a sideways parabola)   Find the equation of the parabola whose focus is and whose directrix is the vertical line . In which direction does it open?    Here we run in reverse. A point lies on the parabola exactly when its distance to the focus equals its distance to the directrix:   Squaring both sides and expanding,   The and constant terms cancel, leaving   Because the directrix is vertical and the focus lies to its right, the parabola opens to the right . Comparing with gives , so , consistent with the focus at . This is the same equidistance idea as the previous example, but with a horizontal axis of symmetry.   The parabola opens to the right; is equidistant from the focus and the directrix .     P(x,y) = y^2 - 8*x  yP = 4      x=-2   \\text{Focus }(2,0)   \\text{vertex}    P      y^2 = 8x                 "
},
{
  "id": "subsec-ellipse",
  "level": "1",
  "url": "subsec-ellipse.html",
  "type": "Section",
  "number": "5.2",
  "title": "Ellipse",
  "body": " Ellipse    An ellipse is the set of points in a plane the sum of whose distances from two fixed points and (the foci ) is constant.    For with , the segment joining and is the semi-major axis , the segment joining and is the semi-minor axis , and the foci satisfy .   An ellipse with foci and . Each slanted segment from to a focus has length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2         a  a      F_1(c,0)  F_2(-c,0)   (0,b)  (0,-b)  (a,0)  (-a,0)  \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1                Animation: as travels around the ellipse, the sum of its distances to the two foci stays fixed at .    Where do the formulas for come from? Two facts do all the work. First, evaluating at the vertex shows that the two focal radii there are and , so their sum is which identifies the constant in the definition as ; equivalently . Second, evaluating at the co-vertex forces by symmetry, and that radius is the hypotenuse of a right triangle with legs and . Pythagoras then gives   So for the ellipse in , is the hypotenuse of that triangle, which is why is the largest of the three lengths and why carries a minus sign.   Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; sliding it to the co-vertex builds the right triangle giving .     Horizontal ellipse   Sketch the graph of and locate the foci.    Dividing through by puts the equation in standard form:   The larger denominator sits under , so the major axis is horizontal with and . Then so the foci are and .   The ellipse with foci at .     E(x,y) = x^2\/9 + y^2\/4  cc = sqrt(5)             F_1  F_2  \\frac{x^2}{9}+\\frac{y^2}{4}=1               Animation: in practice, put the equation in standard form and read off the larger denominator; then is the semi-major axis, measured from the center to a vertex.       A vertical ellipse (foci on the -axis)   Sketch the graph of and locate the foci.    Dividing by ,   This time the larger denominator, , sits under , so the major axis is vertical . The semi-major axis is (along the -axis) and the semi-minor axis is (along the -axis). Hence   Because the major axis is vertical, the foci lie on the -axis: and . The lesson of the twist: read off the larger denominator first, since it decides which axis carries the foci.   The vertical ellipse ; the foci sit on the major axis, and each segment from to a focus has length .     E(x,y) = x^2\/16 + y^2\/25         a=5      F_1(0,3)  F_2(0,-3)   (0,5)  (4,0)  \\frac{x^2}{16}+\\frac{y^2}{25}=1                 "
},
{
  "id": "def-ellipse",
  "level": "2",
  "url": "subsec-ellipse.html#def-ellipse",
  "type": "Definition",
  "number": "5.8",
  "title": "",
  "body": "  An ellipse is the set of points in a plane the sum of whose distances from two fixed points and (the foci ) is constant.   "
},
{
  "id": "subsec-ellipse-3",
  "level": "2",
  "url": "subsec-ellipse.html#subsec-ellipse-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semi-major axis semi-minor axis "
},
{
  "id": "fig-ellipse-def",
  "level": "2",
  "url": "subsec-ellipse.html#fig-ellipse-def",
  "type": "Figure",
  "number": "5.9",
  "title": "",
  "body": " An ellipse with foci and . Each slanted segment from to a focus has length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2         a  a      F_1(c,0)  F_2(-c,0)   (0,b)  (0,-b)  (a,0)  (-a,0)  \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1              "
},
{
  "id": "vid-ellipse-sum",
  "level": "2",
  "url": "subsec-ellipse.html#vid-ellipse-sum",
  "type": "Figure",
  "number": "5.10",
  "title": "",
  "body": " Animation: as travels around the ellipse, the sum of its distances to the two foci stays fixed at .   "
},
{
  "id": "vid-ellipse-formula-a",
  "level": "2",
  "url": "subsec-ellipse.html#vid-ellipse-formula-a",
  "type": "Figure",
  "number": "5.11",
  "title": "",
  "body": " Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; sliding it to the co-vertex builds the right triangle giving .   "
},
{
  "id": "ex-ellipse-1",
  "level": "2",
  "url": "subsec-ellipse.html#ex-ellipse-1",
  "type": "Example",
  "number": "5.12",
  "title": "Horizontal ellipse.",
  "body": " Horizontal ellipse   Sketch the graph of and locate the foci.    Dividing through by puts the equation in standard form:   The larger denominator sits under , so the major axis is horizontal with and . Then so the foci are and .   The ellipse with foci at .     E(x,y) = x^2\/9 + y^2\/4  cc = sqrt(5)             F_1  F_2  \\frac{x^2}{9}+\\frac{y^2}{4}=1               Animation: in practice, put the equation in standard form and read off the larger denominator; then is the semi-major axis, measured from the center to a vertex.     "
},
{
  "id": "ex-ellipse-2",
  "level": "2",
  "url": "subsec-ellipse.html#ex-ellipse-2",
  "type": "Example",
  "number": "5.15",
  "title": "A vertical ellipse (foci on the <span class=\"process-math\">\\(y\\)<\/span>-axis).",
  "body": " A vertical ellipse (foci on the -axis)   Sketch the graph of and locate the foci.    Dividing by ,   This time the larger denominator, , sits under , so the major axis is vertical . The semi-major axis is (along the -axis) and the semi-minor axis is (along the -axis). Hence   Because the major axis is vertical, the foci lie on the -axis: and . The lesson of the twist: read off the larger denominator first, since it decides which axis carries the foci.   The vertical ellipse ; the foci sit on the major axis, and each segment from to a focus has length .     E(x,y) = x^2\/16 + y^2\/25         a=5      F_1(0,3)  F_2(0,-3)   (0,5)  (4,0)  \\frac{x^2}{16}+\\frac{y^2}{25}=1                "
},
{
  "id": "subsec-hyperbola",
  "level": "1",
  "url": "subsec-hyperbola.html",
  "type": "Section",
  "number": "5.3",
  "title": "Hyperbola",
  "body": " Hyperbola    A hyperbola is the set of points in a plane the difference of whose distances from two fixed points and (the foci ) is constant.    For the vertices are , the foci satisfy , and the asymptotes are .   A hyperbola opening left and right, with vertices , foci , and asymptotes .     aa = 2  bb = 1.6  cc = sqrt(aa^2 + bb^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2         y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x      F_1(c,0)  F_2(-c,0)      V_1  V_2  \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1                Animation: as moves along a branch, the absolute difference of its distances to the foci stays fixed at , while the branch hugs its asymptotes.    The formulas for arise exactly as they did for the ellipse, with sums replaced by differences. Evaluating at the vertex , the two focal radii are and , so identifying the constant as , or . For the second relation, draw the central box whose half-width is and half-height is . Its corner lies at distance from the center, so the right triangle with legs and has hypotenuse , and   Notice the contrast with the ellipse: there was the hypotenuse , so ; here is a leg , so . That single difference is the source of the sign change between the two formulas.   Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; the central box then builds the right triangle giving .    The same box explains the asymptotes. Solving for gives   The whole difference between the hyperbola and the pair of lines is that square root. As grows, , so the root tends to and the curve tends to those lines. The gap closes but never shuts: since for every finite , each branch stays strictly inside its asymptotes, approaching without ever touching. That is exactly the behavior of an asymptote and it is why and , which never appear as distances to a focus, nonetheless control the shape at infinity.  Geometrically the lines are just the extended diagonals of the central box, as shows: the diagonal through the corner rises over a run of , so its slope is , and the one through has slope . So drawing the box gives the asymptotes for free, and the box plus the two vertices is enough to sketch the curve. For a vertical hyperbola the box is the same, but the transverse axis is vertical and the slopes become .   The central box has half-width and half-height . Its diagonals, extended, are exactly the asymptotes: the diagonal to the corner has run and rise , hence slope .     aa = 2  bb = 1.6  H(x,y) = x^2\/aa^2 - y^2\/bb^2                       (a,b)  a  b  y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x  \\text{central box}                   Horizontal hyperbola   Find the foci and asymptotes of the hyperbola and sketch its graph.    Dividing by gives standard form:   Since the -term is positive, the hyperbola opens left and right. Then so the foci are , the vertices are , and the asymptotes are .   The hyperbola with foci , vertices , and asymptotes .     H(x,y) = x^2\/16 - y^2\/9         y=\\tfrac34 x  y=-\\tfrac34 x      F_1(5,0)  F_2(-5,0)      V_1  V_2  \\frac{x^2}{16}-\\frac{y^2}{9}=1                Animation: in practice, put the equation in standard form and read off the denominator under the positive term; then is measured along the transverse axis, from the center to a vertex.       A vertical hyperbola (opens up and down)   Find the vertices, foci, and asymptotes of and sketch its graph.    Dividing by and being careful with signs,   Now the -term is the positive one, so the hyperbola opens up and down . In this orientation is the denominator under , giving (measured along the -axis) and . Still using ,   So the vertices are and the foci are , both on the -axis. For a vertical hyperbola the asymptotes are note the slope uses here, not . The transverse axis has simply rotated from horizontal to vertical.   The vertical hyperbola : it opens up and down, with vertices , foci , and asymptotes .     H(x,y) = y^2\/9 - x^2\/16         y=\\tfrac34 x  y=-\\tfrac34 x      F_1(0,5)  F_2(0,-5)      V_1  V_2  \\frac{y^2}{9}-\\frac{x^2}{16}=1                 "
},
{
  "id": "def-hyperbola",
  "level": "2",
  "url": "subsec-hyperbola.html#def-hyperbola",
  "type": "Definition",
  "number": "5.17",
  "title": "",
  "body": "  A hyperbola is the set of points in a plane the difference of whose distances from two fixed points and (the foci ) is constant.   "
},
{
  "id": "fig-hyperbola-def",
  "level": "2",
  "url": "subsec-hyperbola.html#fig-hyperbola-def",
  "type": "Figure",
  "number": "5.18",
  "title": "",
  "body": " A hyperbola opening left and right, with vertices , foci , and asymptotes .     aa = 2  bb = 1.6  cc = sqrt(aa^2 + bb^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2         y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x      F_1(c,0)  F_2(-c,0)      V_1  V_2  \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1              "
},
{
  "id": "vid-hyperbola-diff",
  "level": "2",
  "url": "subsec-hyperbola.html#vid-hyperbola-diff",
  "type": "Figure",
  "number": "5.19",
  "title": "",
  "body": " Animation: as moves along a branch, the absolute difference of its distances to the foci stays fixed at , while the branch hugs its asymptotes.   "
},
{
  "id": "vid-hyperbola-formula-a",
  "level": "2",
  "url": "subsec-hyperbola.html#vid-hyperbola-formula-a",
  "type": "Figure",
  "number": "5.20",
  "title": "",
  "body": " Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; the central box then builds the right triangle giving .   "
},
{
  "id": "fig-hyperbola-box",
  "level": "2",
  "url": "subsec-hyperbola.html#fig-hyperbola-box",
  "type": "Figure",
  "number": "5.21",
  "title": "",
  "body": " The central box has half-width and half-height . Its diagonals, extended, are exactly the asymptotes: the diagonal to the corner has run and rise , hence slope .     aa = 2  bb = 1.6  H(x,y) = x^2\/aa^2 - y^2\/bb^2                       (a,b)  a  b  y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x  \\text{central box}                 "
},
{
  "id": "ex-hyperbola-1",
  "level": "2",
  "url": "subsec-hyperbola.html#ex-hyperbola-1",
  "type": "Example",
  "number": "5.22",
  "title": "Horizontal hyperbola.",
  "body": " Horizontal hyperbola   Find the foci and asymptotes of the hyperbola and sketch its graph.    Dividing by gives standard form:   Since the -term is positive, the hyperbola opens left and right. Then so the foci are , the vertices are , and the asymptotes are .   The hyperbola with foci , vertices , and asymptotes .     H(x,y) = x^2\/16 - y^2\/9         y=\\tfrac34 x  y=-\\tfrac34 x      F_1(5,0)  F_2(-5,0)      V_1  V_2  \\frac{x^2}{16}-\\frac{y^2}{9}=1                Animation: in practice, put the equation in standard form and read off the denominator under the positive term; then is measured along the transverse axis, from the center to a vertex.     "
},
{
  "id": "ex-hyperbola-2",
  "level": "2",
  "url": "subsec-hyperbola.html#ex-hyperbola-2",
  "type": "Example",
  "number": "5.25",
  "title": "A vertical hyperbola (opens up and down).",
  "body": " A vertical hyperbola (opens up and down)   Find the vertices, foci, and asymptotes of and sketch its graph.    Dividing by and being careful with signs,   Now the -term is the positive one, so the hyperbola opens up and down . In this orientation is the denominator under , giving (measured along the -axis) and . Still using ,   So the vertices are and the foci are , both on the -axis. For a vertical hyperbola the asymptotes are note the slope uses here, not . The transverse axis has simply rotated from horizontal to vertical.   The vertical hyperbola : it opens up and down, with vertices , foci , and asymptotes .     H(x,y) = y^2\/9 - x^2\/16         y=\\tfrac34 x  y=-\\tfrac34 x      F_1(0,5)  F_2(0,-5)      V_1  V_2  \\frac{y^2}{9}-\\frac{x^2}{16}=1                "
},
{
  "id": "subsec-app-reflector",
  "level": "1",
  "url": "subsec-app-reflector.html",
  "type": "Section",
  "number": "5.4",
  "title": "Application: Parabolic Reflectors",
  "body": " Application: Parabolic Reflectors  Satellite dishes, radio telescopes, headlights, and solar cookers are all parabolic in cross-section, and for one reason: a parabola has a reflection property . Every ray travelling parallel to the axis of the parabola reflects off the curve and passes through the focus . Run the argument backwards and a source placed at the focus emits a perfectly parallel beam which is why a headlight is shaped this way too.  This is not a coincidence of the shape; it follows from the equidistance definition ( ). For the tangent at the point has slope , and a short computation shows that the incoming vertical ray and the segment from that point to make equal angles with the normal. The law of reflection then sends every such ray straight to the focus, so that is where the receiver goes.   A parabolic dish. Rays arriving parallel to the axis (orange) reflect off the dish (red) and all converge on the focus, where the receiver sits.     pval = 0.6  f(x) = x^2\/(4*pval)               \\text{focus (receiver)}  \\text{incoming parallel rays}               Animation: parallel rays strike the dish at different points and all reflect through the single focus.     Placing the receiver   A satellite dish has a parabolic cross-section that is feet wide and foot deep at its center. How far from the vertex should the receiver be mounted?    Put the vertex at the origin with the dish opening upward, so the cross-section is . The dish is feet wide and foot deep, so the rim passes through the point . Substituting,   The receiver belongs at the focus , that is, foot above the vertex which here happens to be exactly level with the rim.    "
},
{
  "id": "subsec-app-reflector-2",
  "level": "2",
  "url": "subsec-app-reflector.html#subsec-app-reflector-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflection property "
},
{
  "id": "fig-parabola-reflector",
  "level": "2",
  "url": "subsec-app-reflector.html#fig-parabola-reflector",
  "type": "Figure",
  "number": "5.27",
  "title": "",
  "body": " A parabolic dish. Rays arriving parallel to the axis (orange) reflect off the dish (red) and all converge on the focus, where the receiver sits.     pval = 0.6  f(x) = x^2\/(4*pval)               \\text{focus (receiver)}  \\text{incoming parallel rays}             "
},
{
  "id": "vid-parabolic-reflector",
  "level": "2",
  "url": "subsec-app-reflector.html#vid-parabolic-reflector",
  "type": "Figure",
  "number": "5.28",
  "title": "",
  "body": " Animation: parallel rays strike the dish at different points and all reflect through the single focus.   "
},
{
  "id": "ex-app-reflector",
  "level": "2",
  "url": "subsec-app-reflector.html#ex-app-reflector",
  "type": "Example",
  "number": "5.29",
  "title": "Placing the receiver.",
  "body": " Placing the receiver   A satellite dish has a parabolic cross-section that is feet wide and foot deep at its center. How far from the vertex should the receiver be mounted?    Put the vertex at the origin with the dish opening upward, so the cross-section is . The dish is feet wide and foot deep, so the rim passes through the point . Substituting,   The receiver belongs at the focus , that is, foot above the vertex which here happens to be exactly level with the rim.   "
},
{
  "id": "subsec-app-whisper",
  "level": "1",
  "url": "subsec-app-whisper.html",
  "type": "Section",
  "number": "5.5",
  "title": "Application: Whispering Galleries",
  "body": " Application: Whispering Galleries  An ellipse has a reflection property of its own: a ray leaving one focus reflects off the ellipse and passes through the other focus. In a room whose ceiling is a half-ellipse the dome of St. Paul's Cathedral, or Statuary Hall in the U.S. Capitol a whisper released at one focus is gathered up by the whole ceiling and delivered to a listener standing at the other focus, while people in between hear nothing.  The constant-sum definition ( ) explains why it works so well. Every path from one focus to the wall and on to the other focus has total length the same length, no matter where it strikes. So the reflected sound does not merely arrive at the far focus: it arrives from every direction at the same instant , in phase, and the pieces reinforce one another instead of smearing out. That is what makes a whisper audible across the room.   The interior of St. Paul's Cathedral beneath Wren's dome. Hand-coloured aquatint by Thomas Rowlandson and Augustus Pugin, from Ackermann's Microcosm of London (1809). Public domain, via The Metropolitan Museum of Art .    A hand-coloured aquatint from 1809 showing the interior of Saint Paul's Cathedral, looking up toward the great dome above the crossing, with small figures of visitors walking the marble floor below.      A whispering gallery seen from above. Five sound paths leave the speaker at one focus, bounce off the elliptical wall, and all arrive at the listener at the other focus. Each path has the same total length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2  Px(t) = aa*cos(t)  Py(t) = bb*sin(t)                 F_2  \\text{speaker}   F_1  \\text{listener}                Animation: sound leaves one focus in many directions, reflects off the wall, and reconverges at the other focus every path the same length .     Where should the listener stand?   A whispering gallery is feet long and feet wide. Where should the speaker and the listener stand, and how far does the whisper travel on its way across?    Model the room as with center at the origin. The room is feet long and feet wide, so and , giving and . Then   The two people should stand at the foci , that is, feet from the center along the long axis, or feet apart. Whatever point of the wall the sound bounces off, it travels a total of feet the same distance every way round, which is exactly why it arrives in phase.    "
},
{
  "id": "fig-stpauls-1809",
  "level": "2",
  "url": "subsec-app-whisper.html#fig-stpauls-1809",
  "type": "Figure",
  "number": "5.30",
  "title": "",
  "body": " The interior of St. Paul's Cathedral beneath Wren's dome. Hand-coloured aquatint by Thomas Rowlandson and Augustus Pugin, from Ackermann's Microcosm of London (1809). Public domain, via The Metropolitan Museum of Art .    A hand-coloured aquatint from 1809 showing the interior of Saint Paul's Cathedral, looking up toward the great dome above the crossing, with small figures of visitors walking the marble floor below.    "
},
{
  "id": "fig-ellipse-whisper",
  "level": "2",
  "url": "subsec-app-whisper.html#fig-ellipse-whisper",
  "type": "Figure",
  "number": "5.31",
  "title": "",
  "body": " A whispering gallery seen from above. Five sound paths leave the speaker at one focus, bounce off the elliptical wall, and all arrive at the listener at the other focus. Each path has the same total length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2  Px(t) = aa*cos(t)  Py(t) = bb*sin(t)                 F_2  \\text{speaker}   F_1  \\text{listener}              "
},
{
  "id": "vid-whispering-gallery",
  "level": "2",
  "url": "subsec-app-whisper.html#vid-whispering-gallery",
  "type": "Figure",
  "number": "5.32",
  "title": "",
  "body": " Animation: sound leaves one focus in many directions, reflects off the wall, and reconverges at the other focus every path the same length .   "
},
{
  "id": "ex-app-whisper",
  "level": "2",
  "url": "subsec-app-whisper.html#ex-app-whisper",
  "type": "Example",
  "number": "5.33",
  "title": "Where should the listener stand?",
  "body": " Where should the listener stand?   A whispering gallery is feet long and feet wide. Where should the speaker and the listener stand, and how far does the whisper travel on its way across?    Model the room as with center at the origin. The room is feet long and feet wide, so and , giving and . Then   The two people should stand at the foci , that is, feet from the center along the long axis, or feet apart. Whatever point of the wall the sound bounces off, it travels a total of feet the same distance every way round, which is exactly why it arrives in phase.   "
},
{
  "id": "subsec-app-loran",
  "level": "1",
  "url": "subsec-app-loran.html",
  "type": "Section",
  "number": "5.6",
  "title": "Application: Hyperbolic Navigation (LORAN)",
  "body": " Application: Hyperbolic Navigation (LORAN)  Progress in electrical engineering enabled navigation systems based on the transmission of electromagnetic waves. One example is LORAN-C marine navigation, developed in the United States during World War II. A vessel receives a synchronized signal from a pair of transmitters; the signal from the more distant transmitter arrives later, so the measured delay determines the difference between the vessel's distances to the two transmitters, where is the signal speed. The set of points with a constant difference of distances from two fixed points is precisely a hyperbola with those points as foci, so one measurement tells the vessel which hyperbola it is on the one with and the sign of the delay (which pulse arrived first) tells it which branch. A delay measured against another pair of stations places the vessel on a second curve, and since its true position must satisfy both measurements at once, the vessel sits where the two curves cross.   Hyperbolic navigation. The measured delay places the unknown position on the solid hyperbola with foci at the receivers and ; a different delay would place it on the dashed one instead.     cc = 3  aa = 1.5  bb = sqrt(cc^2 - aa^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2  aa2 = 0.7  bb2 = sqrt(cc^2 - aa2^2)  H2(x,y) = x^2\/aa2^2 - y^2\/bb2^2  sP = 0.9          A   P_2   P_1  |r_2-r_1|=2a  r_2  r_1                  Animation: the point moves, and both signal distances and change but their difference does not, tracing out the hyperbola.     Locating a hiker from three receivers   Three receivers , , and are deployed in the landscape. The figure captures the distances we know. Emma's tourist navigation device sends a signal to all three receivers. The signal arrives at receivers and at the same time, and at receiver it arrives microseconds later. Where is Emma located? Assume the signal travels km per second, and determine the position in a suitably chosen coordinate system.   The exercise data: and are km apart, and is km directly above the point km beyond .                 48\\ \\text{km}      12\\ \\text{km}       36\\ \\text{km}   P_2   P_1   P_3                 We first translate the two timing facts into geometry. The signal reaches and simultaneously, so Emma is equidistant from them: he lies on the perpendicular bisector of the segment . The signal reaches  microseconds after , so Emma is farther from than from . He therefore also lies on the branch nearer of the hyperbola with foci and whose constant distance difference is km.  Now we choose coordinates so that has the simplest possible equation. Place the origin at the midpoint of , point the positive -axis along , and choose the positive -axis so that has positive second coordinate. Since every given length is a multiple of , let one unit on each axis be km. Then    The coordinate system: origin at the midpoint of , one unit km.          O   P_2   P_1   P_3               Let denote Emma's unknown position, and let be the perpendicular bisector of . The line passes through the midpoint of the segment, and since , the direction is perpendicular to the segment. Parametrically,   For the hyperbola, the foci are and , so the center is and . The constant difference units equals , so , and then . Hence and since is closer to , it lies on the right branch: .  It remains to intersect with . Substituting the parametric equations into :   The discriminant is , so   Substituting into the parametric equations gives that is, . Substituting gives and , that is, .  The point fails the branch condition , and the physics says why: lies on the left branch, km closer to than to , so a signal sent from would reach  earlier than the opposite of what was measured. Emma's position is therefore about in kilometers from . As a check, the distances come out exactly: units and units, so units km, as required. In kilometers, Emma is km from and .   The solution: is the intersection of the bisector with the right branch of . The second intersection , on the left branch, is rejected.     H(x,y) = x^2 - y^2\/3  Ax = 19\/13  Ay = 24\/13      o  h    \\tfrac{19}{13}  \\tfrac{24}{13}   A   A_2\\ \\text{(rejected)}   S   P_2   P_1   P_3                   What if Emma were not equidistant from and ?  The exercise was arranged so that the signal reached and simultaneously, and that is what kept the algebra easy: a distance difference of zero is the degenerate case of the hyperbola, and the locus collapses to a straight line, the perpendicular bisector of . We then only had to substitute a linear parametrization into one quadratic equation.  If the two arrival times differed, the delay would instead give a nonzero difference , and Emma would lie on a genuine second hyperbola, with foci and tilted, since its focal axis is not parallel to a coordinate axis. Locating him would then mean intersecting the correct branches of two hyperbolas, as in the figure below. Conceptually nothing changes each measurement contributes one curve, and the position is their common point but algebraically we would be solving two quadratic equations together rather than a linear one and a quadratic one.    Two measurements fix the position. The first delay (receivers , ) puts on the blue branch; the second (receivers , ) puts it on the purple branch. The position is at the crossing, and the dashed segments show the three distances , , .     sP = 0.9  Px = 1.5*cosh(sP)  Py = sqrt(6.75)*sinh(sP)  k1 = sqrt((Px+3)^2 + Py^2) - sqrt((Px-3)^2 + Py^2)  k2 = sqrt((Px+1)^2 + (Py-3.8)^2) - sqrt((Px-3)^2 + Py^2)  H1(x,y) = sqrt((x+3)^2 + y^2) - sqrt((x-3)^2 + y^2)  H2(x,y) = sqrt((x+1)^2 + (y-3.8)^2) - sqrt((x-3)^2 + y^2)         r_1  r_2  r_3          r_2-r_1=2a  r_3-r_1=2a'    A   P_1   P_2   P_3                   "
},
{
  "id": "fig-hyperbola-loran",
  "level": "2",
  "url": "subsec-app-loran.html#fig-hyperbola-loran",
  "type": "Figure",
  "number": "5.34",
  "title": "",
  "body": " Hyperbolic navigation. The measured delay places the unknown position on the solid hyperbola with foci at the receivers and ; a different delay would place it on the dashed one instead.     cc = 3  aa = 1.5  bb = sqrt(cc^2 - aa^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2  aa2 = 0.7  bb2 = sqrt(cc^2 - aa2^2)  H2(x,y) = x^2\/aa2^2 - y^2\/bb2^2  sP = 0.9          A   P_2   P_1  |r_2-r_1|=2a  r_2  r_1                "
},
{
  "id": "vid-hyperbolic-navigation",
  "level": "2",
  "url": "subsec-app-loran.html#vid-hyperbolic-navigation",
  "type": "Figure",
  "number": "5.35",
  "title": "",
  "body": " Animation: the point moves, and both signal distances and change but their difference does not, tracing out the hyperbola.   "
},
{
  "id": "ex-app-loran",
  "level": "2",
  "url": "subsec-app-loran.html#ex-app-loran",
  "type": "Example",
  "number": "5.36",
  "title": "Locating a hiker from three receivers.",
  "body": " Locating a hiker from three receivers   Three receivers , , and are deployed in the landscape. The figure captures the distances we know. Emma's tourist navigation device sends a signal to all three receivers. The signal arrives at receivers and at the same time, and at receiver it arrives microseconds later. Where is Emma located? Assume the signal travels km per second, and determine the position in a suitably chosen coordinate system.   The exercise data: and are km apart, and is km directly above the point km beyond .                 48\\ \\text{km}      12\\ \\text{km}       36\\ \\text{km}   P_2   P_1   P_3                 We first translate the two timing facts into geometry. The signal reaches and simultaneously, so Emma is equidistant from them: he lies on the perpendicular bisector of the segment . The signal reaches  microseconds after , so Emma is farther from than from . He therefore also lies on the branch nearer of the hyperbola with foci and whose constant distance difference is km.  Now we choose coordinates so that has the simplest possible equation. Place the origin at the midpoint of , point the positive -axis along , and choose the positive -axis so that has positive second coordinate. Since every given length is a multiple of , let one unit on each axis be km. Then    The coordinate system: origin at the midpoint of , one unit km.          O   P_2   P_1   P_3               Let denote Emma's unknown position, and let be the perpendicular bisector of . The line passes through the midpoint of the segment, and since , the direction is perpendicular to the segment. Parametrically,   For the hyperbola, the foci are and , so the center is and . The constant difference units equals , so , and then . Hence and since is closer to , it lies on the right branch: .  It remains to intersect with . Substituting the parametric equations into :   The discriminant is , so   Substituting into the parametric equations gives that is, . Substituting gives and , that is, .  The point fails the branch condition , and the physics says why: lies on the left branch, km closer to than to , so a signal sent from would reach  earlier than the opposite of what was measured. Emma's position is therefore about in kilometers from . As a check, the distances come out exactly: units and units, so units km, as required. In kilometers, Emma is km from and .   The solution: is the intersection of the bisector with the right branch of . The second intersection , on the left branch, is rejected.     H(x,y) = x^2 - y^2\/3  Ax = 19\/13  Ay = 24\/13      o  h    \\tfrac{19}{13}  \\tfrac{24}{13}   A   A_2\\ \\text{(rejected)}   S   P_2   P_1   P_3                 "
},
{
  "id": "rem-loran-two-hyperbolas",
  "level": "2",
  "url": "subsec-app-loran.html#rem-loran-two-hyperbolas",
  "type": "Remark",
  "number": "5.40",
  "title": "What if Emma were not equidistant from <span class=\"process-math\">\\(P_1\\)<\/span> and <span class=\"process-math\">\\(P_3\\text{?}\\)<\/span>",
  "body": " What if Emma were not equidistant from and ?  The exercise was arranged so that the signal reached and simultaneously, and that is what kept the algebra easy: a distance difference of zero is the degenerate case of the hyperbola, and the locus collapses to a straight line, the perpendicular bisector of . We then only had to substitute a linear parametrization into one quadratic equation.  If the two arrival times differed, the delay would instead give a nonzero difference , and Emma would lie on a genuine second hyperbola, with foci and tilted, since its focal axis is not parallel to a coordinate axis. Locating him would then mean intersecting the correct branches of two hyperbolas, as in the figure below. Conceptually nothing changes each measurement contributes one curve, and the position is their common point but algebraically we would be solving two quadratic equations together rather than a linear one and a quadratic one.  "
},
{
  "id": "fig-hyperbola-loran-fix",
  "level": "2",
  "url": "subsec-app-loran.html#fig-hyperbola-loran-fix",
  "type": "Figure",
  "number": "5.41",
  "title": "",
  "body": " Two measurements fix the position. The first delay (receivers , ) puts on the blue branch; the second (receivers , ) puts it on the purple branch. The position is at the crossing, and the dashed segments show the three distances , , .     sP = 0.9  Px = 1.5*cosh(sP)  Py = sqrt(6.75)*sinh(sP)  k1 = sqrt((Px+3)^2 + Py^2) - sqrt((Px-3)^2 + Py^2)  k2 = sqrt((Px+1)^2 + (Py-3.8)^2) - sqrt((Px-3)^2 + Py^2)  H1(x,y) = sqrt((x+3)^2 + y^2) - sqrt((x-3)^2 + y^2)  H2(x,y) = sqrt((x+1)^2 + (y-3.8)^2) - sqrt((x-3)^2 + y^2)         r_1  r_2  r_3          r_2-r_1=2a  r_3-r_1=2a'    A   P_1   P_2   P_3                  "
},
{
  "id": "subsec-elliptical-paraboloid",
  "level": "1",
  "url": "subsec-elliptical-paraboloid.html",
  "type": "Section",
  "number": "6.1",
  "title": "Elliptical Paraboloid",
  "body": " Elliptical Paraboloid  We begin with the case in which and appear squared with coefficients of the same sign, while appears only to the first power. In equation , take , , , , and . Equation then reduces to the surface known as an elliptical paraboloid .  By fixing the value of , , or , we cut the surface with a plane and obtain traces that are conic sections. For example, setting , , and in turn gives the following traces, as shown in :    The traces of the elliptical paraboloid in the planes , , and .    The trace in the plane x = 2: a parabola opening upward.    f(t) = (t, 1 + t^2\/9)       x=2:\\ \\ z = 1 + \\tfrac{y^2}{9}            The trace in the plane y = -3: a parabola opening upward.    f(t) = (t, t^2\/4 + 1)       y=-3:\\ \\ z = \\tfrac{x^2}{4} + 1            The trace in the plane z = 1: an ellipse.    f(t) = (2*cos(t), 3*sin(t))       z=1:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the elliptical paraboloid with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .    With traces of two parabolas and one ellipse, it is natural to call this quadric surface and elliptical paraboloid.  "
},
{
  "id": "subsec-elliptical-paraboloid-2",
  "level": "2",
  "url": "subsec-elliptical-paraboloid.html#subsec-elliptical-paraboloid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptical paraboloid "
},
{
  "id": "fig-elliptical-paraboloid-traces",
  "level": "2",
  "url": "subsec-elliptical-paraboloid.html#fig-elliptical-paraboloid-traces",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " The traces of the elliptical paraboloid in the planes , , and .    The trace in the plane x = 2: a parabola opening upward.    f(t) = (t, 1 + t^2\/9)       x=2:\\ \\ z = 1 + \\tfrac{y^2}{9}            The trace in the plane y = -3: a parabola opening upward.    f(t) = (t, t^2\/4 + 1)       y=-3:\\ \\ z = \\tfrac{x^2}{4} + 1            The trace in the plane z = 1: an ellipse.    f(t) = (2*cos(t), 3*sin(t))       z=1:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1            "
},
{
  "id": "fig-elliptical-paraboloid-slices",
  "level": "2",
  "url": "subsec-elliptical-paraboloid.html#fig-elliptical-paraboloid-slices",
  "type": "Figure",
  "number": "6.2",
  "title": "",
  "body": " Slicing the elliptical paraboloid with planes , , and .   "
},
{
  "id": "fig-elliptical-paraboloid-video",
  "level": "2",
  "url": "subsec-elliptical-paraboloid.html#fig-elliptical-paraboloid-video",
  "type": "Figure",
  "number": "6.3",
  "title": "",
  "body": " Slicing with planes , , and .   "
},
{
  "id": "subsec-hyperbolic-paraboloid",
  "level": "1",
  "url": "subsec-hyperbolic-paraboloid.html",
  "type": "Section",
  "number": "6.2",
  "title": "Hyperbolic Paraboloid",
  "body": " Hyperbolic Paraboloid  Now change a single sign: keep to the first power, but let the squared terms in and carry opposite signs. In equation , take , , , , and . Equation becomes a hyperbolic paraboloid . That one sign is enough to change the surface completely.  As in the previous example ( ), fixing the value of , , or produces traces that are conic sections. Again setting , , and in turn gives the following traces, as shown in :    The traces of the hyperbolic paraboloid in the planes , , and .    The trace in the plane x = 2: a parabola opening downward.    f(t) = (t, 1 - t^2\/9)       x=2:\\ \\ z = 1 - \\tfrac{y^2}{9}            The trace in the plane y = -3: a parabola opening upward.    f(t) = (t, t^2\/4 - 1)       y=-3:\\ \\ z = \\tfrac{x^2}{4} - 1            The trace in the plane z = 1: a hyperbola opening left and right.    fa(t) = (2*cosh(t), 3*sinh(t))  fb(t) = (-2*cosh(t), 3*sinh(t))          z=1:\\ \\ \\tfrac{x^2}{4} - \\tfrac{y^2}{9} = 1              Slicing the hyperbolic paraboloid with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .    Similar to the elliptical paraboloid, with traces of two parabolas, but with one hyperbola, it is natural to call this quadric surface a hyperbolic paraboloid.  "
},
{
  "id": "subsec-hyperbolic-paraboloid-2",
  "level": "2",
  "url": "subsec-hyperbolic-paraboloid.html#subsec-hyperbolic-paraboloid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic paraboloid "
},
{
  "id": "fig-hyperbolic-paraboloid-traces",
  "level": "2",
  "url": "subsec-hyperbolic-paraboloid.html#fig-hyperbolic-paraboloid-traces",
  "type": "Figure",
  "number": "6.4",
  "title": "",
  "body": " The traces of the hyperbolic paraboloid in the planes , , and .    The trace in the plane x = 2: a parabola opening downward.    f(t) = (t, 1 - t^2\/9)       x=2:\\ \\ z = 1 - \\tfrac{y^2}{9}            The trace in the plane y = -3: a parabola opening upward.    f(t) = (t, t^2\/4 - 1)       y=-3:\\ \\ z = \\tfrac{x^2}{4} - 1            The trace in the plane z = 1: a hyperbola opening left and right.    fa(t) = (2*cosh(t), 3*sinh(t))  fb(t) = (-2*cosh(t), 3*sinh(t))          z=1:\\ \\ \\tfrac{x^2}{4} - \\tfrac{y^2}{9} = 1            "
},
{
  "id": "fig-hyperbolic-paraboloid-slices",
  "level": "2",
  "url": "subsec-hyperbolic-paraboloid.html#fig-hyperbolic-paraboloid-slices",
  "type": "Figure",
  "number": "6.5",
  "title": "",
  "body": " Slicing the hyperbolic paraboloid with planes , , and .   "
},
{
  "id": "fig-hyperbolic-paraboloid-video",
  "level": "2",
  "url": "subsec-hyperbolic-paraboloid.html#fig-hyperbolic-paraboloid-video",
  "type": "Figure",
  "number": "6.6",
  "title": "",
  "body": " Slicing with planes , , and .   "
},
{
  "id": "subsec-ellipsoid",
  "level": "1",
  "url": "subsec-ellipsoid.html",
  "type": "Section",
  "number": "6.3",
  "title": "Ellipsoid",
  "body": " Ellipsoid  Suppose next that all three variables appear squared with coefficients of the same sign, and that no linear term is present at all. In equation , take , , , , and . Equation reduces to an ellipsoid .  By allowing fixed values of surface to intersect the coordinate planes ( , , and ), we find the following traces, as shown in :    The traces of the ellipsoid in the coordinate planes , , and .    The trace in the plane x = 0: an ellipse with semi-axes 3 and 4.    f(t) = (3*cos(t), 4*sin(t))       x=0:\\ \\ \\tfrac{y^2}{9} + \\tfrac{z^2}{16} = 1            The trace in the plane y = 0: an ellipse with semi-axes 2 and 4.    f(t) = (2*cos(t), 4*sin(t))       y=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{z^2}{16} = 1            The trace in the plane z = 0: an ellipse with semi-axes 2 and 3.    f(t) = (2*cos(t), 3*sin(t))       z=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the ellipsoid with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .      "
},
{
  "id": "subsec-ellipsoid-2",
  "level": "2",
  "url": "subsec-ellipsoid.html#subsec-ellipsoid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ellipsoid "
},
{
  "id": "fig-ellipsoid-traces",
  "level": "2",
  "url": "subsec-ellipsoid.html#fig-ellipsoid-traces",
  "type": "Figure",
  "number": "6.7",
  "title": "",
  "body": " The traces of the ellipsoid in the coordinate planes , , and .    The trace in the plane x = 0: an ellipse with semi-axes 3 and 4.    f(t) = (3*cos(t), 4*sin(t))       x=0:\\ \\ \\tfrac{y^2}{9} + \\tfrac{z^2}{16} = 1            The trace in the plane y = 0: an ellipse with semi-axes 2 and 4.    f(t) = (2*cos(t), 4*sin(t))       y=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{z^2}{16} = 1            The trace in the plane z = 0: an ellipse with semi-axes 2 and 3.    f(t) = (2*cos(t), 3*sin(t))       z=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1            "
},
{
  "id": "fig-ellipsoid-slices",
  "level": "2",
  "url": "subsec-ellipsoid.html#fig-ellipsoid-slices",
  "type": "Figure",
  "number": "6.8",
  "title": "",
  "body": " Slicing the ellipsoid with planes , , and .   "
},
{
  "id": "fig-ellipsoid-video",
  "level": "2",
  "url": "subsec-ellipsoid.html#fig-ellipsoid-video",
  "type": "Figure",
  "number": "6.9",
  "title": "",
  "body": " Slicing with planes , , and .   "
},
{
  "id": "subsec-elliptic-cone",
  "level": "1",
  "url": "subsec-elliptic-cone.html",
  "type": "Section",
  "number": "6.4",
  "title": "Elliptic Cone",
  "body": " Elliptic Cone  Finally, keep all three squared terms, but let the coefficient of be negative and set the constant on the right-hand side to zero. In equation , take , , , , and . Equation becomes an elliptic cone .  Note that this looks similar to the equation of an elliptical paraboloid but has the same degree as and . Consequently, since has the same degree as and , the traces would behave linearly instead of quadratically. Structurally, from the traces, two hyperbolas and an ellipse. We can see the traces through the intersection of the planes , , and , as shown in :    The traces of the elliptic cone in the planes , , and .    The trace in the plane x = 2: a hyperbola opening up and down.    fa(t) = (3*sinh(t), cosh(t))  fb(t) = (3*sinh(t), -cosh(t))          x=2:\\ \\ z^2 - \\tfrac{y^2}{9} = 1            The trace in the plane y = -3: a hyperbola opening up and down.    fa(t) = (2*sinh(t), cosh(t))  fb(t) = (2*sinh(t), -cosh(t))          y=-3:\\ \\ z^2 - \\tfrac{x^2}{4} = 1            The trace in the plane z = 1: an ellipse.    f(t) = (2*cos(t), 3*sin(t))       z=1:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the elliptic cone with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .      "
},
{
  "id": "subsec-elliptic-cone-2",
  "level": "2",
  "url": "subsec-elliptic-cone.html#subsec-elliptic-cone-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic cone "
},
{
  "id": "fig-elliptic-cone-traces",
  "level": "2",
  "url": "subsec-elliptic-cone.html#fig-elliptic-cone-traces",
  "type": "Figure",
  "number": "6.10",
  "title": "",
  "body": " The traces of the elliptic cone in the planes , , and .    The trace in the plane x = 2: a hyperbola opening up and down.    fa(t) = (3*sinh(t), cosh(t))  fb(t) = (3*sinh(t), -cosh(t))          x=2:\\ \\ z^2 - \\tfrac{y^2}{9} = 1            The trace in the plane y = -3: a hyperbola opening up and down.    fa(t) = (2*sinh(t), cosh(t))  fb(t) = (2*sinh(t), -cosh(t))          y=-3:\\ \\ z^2 - \\tfrac{x^2}{4} = 1            The trace in the plane z = 1: an ellipse.    f(t) = (2*cos(t), 3*sin(t))       z=1:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1            "
},
{
  "id": "fig-elliptic-cone-slices",
  "level": "2",
  "url": "subsec-elliptic-cone.html#fig-elliptic-cone-slices",
  "type": "Figure",
  "number": "6.11",
  "title": "",
  "body": " Slicing the elliptic cone with planes , , and .   "
},
{
  "id": "fig-elliptic-cone-video",
  "level": "2",
  "url": "subsec-elliptic-cone.html#fig-elliptic-cone-video",
  "type": "Figure",
  "number": "6.12",
  "title": "",
  "body": " Slicing with planes , , and .   "
},
{
  "id": "subsec-hyperboloids",
  "level": "1",
  "url": "subsec-hyperboloids.html",
  "type": "Section",
  "number": "6.5",
  "title": "Hyperboloids",
  "body": " Hyperboloids  The two remaining quadric surfaces are left for you to explore. The aim of this section is to practice the slicing method of the previous sections on a new pair of surfaces and, in doing so, to see what separates a hyperboloid of one sheet from a hyperboloid of two sheets.   Slicing the Hyperboloids   Use the same slicing method as in the previous subsections to study the two surfaces both of which come from equation . For the first surface , , , , and ; for the second surface , , , , and . For the ellipsoid all three squared terms were positive; here exactly one squared term is negative for the first surface and exactly two are negative for the second. Keep this count in mind as you work through the traces. Discover why the first is called a hyperboloid of one sheet while the second is called a hyperboloid of two sheets . Pay particular attention to the traces in the horizontal planes : they are what tells the two surfaces apart.     For the surface , find the trace in the plane for an arbitrary constant , and the traces in the coordinate planes and . For which values of does the plane actually intersect the surface? Identify each trace as an ellipse, parabola, or hyperbola.    Slicing with the plane gives Since the right-hand side is positive for every value of , every horizontal plane meets the surface in an ellipse. The smallest one, in the plane , is the waist of the surface, and the ellipses grow as increases. In the coordinate planes we find hyperbolas: The traces are shown in , and lets you slice the surface yourself.   The traces of the hyperboloid of one sheet in the coordinate planes , , and .    The trace in the plane x = 0: a hyperbola opening left and right.    fa(t) = (3*cosh(t), 4*sinh(t))  fb(t) = (-3*cosh(t), 4*sinh(t))          x=0:\\ \\ \\tfrac{y^2}{9} - \\tfrac{z^2}{16} = 1            The trace in the plane y = 0: a hyperbola opening left and right.    fa(t) = (2*cosh(t), 4*sinh(t))  fb(t) = (-2*cosh(t), 4*sinh(t))          y=0:\\ \\ \\tfrac{x^2}{4} - \\tfrac{z^2}{16} = 1            The trace in the plane z = 0: an ellipse, the smallest horizontal trace.    f(t) = (2*cos(t), 3*sin(t))       z=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the hyperboloid of one sheet with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .        Repeat the analysis for the surface . For which values of does the plane intersect the surface this time? What happens for between those values?    Slicing with the plane now gives and this time the sign of the right-hand side matters. For the right-hand side is negative, so the plane misses the surface entirely; there is no trace at all . For the trace is the single point , and only for do we get ellipses, which grow as increases. In the coordinate planes we again find hyperbolas, both opening up and down: The traces are shown in , and lets you watch the plane pass through the gap without touching the surface.   The traces of the hyperboloid of two sheets in the planes , , and .    The trace in the plane x = 0: a hyperbola opening up and down.    fa(t) = (3*sinh(t), 4*cosh(t))  fb(t) = (3*sinh(t), -4*cosh(t))          x=0:\\ \\ \\tfrac{z^2}{16} - \\tfrac{y^2}{9} = 1            The trace in the plane y = 0: a hyperbola opening up and down.    fa(t) = (2*sinh(t), 4*cosh(t))  fb(t) = (2*sinh(t), -4*cosh(t))          y=0:\\ \\ \\tfrac{z^2}{16} - \\tfrac{x^2}{4} = 1            The trace in the plane z = 5: an ellipse. Planes with the absolute value of z less than 4 miss the surface entirely.    f(t) = (1.5*cos(t), 2.25*sin(t))       z=5:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = \\tfrac{9}{16}              Slicing the hyperboloid of two sheets with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .        Using only the traces in the planes , explain why the first surface is called a hyperboloid of one sheet and the second a hyperboloid of two sheets . Can you predict the number of sheets directly from the signs in the equation?    The horizontal traces tell the two surfaces apart. For the first surface the plane produces an ellipse for every value of : the ellipses stack on top of one another without interruption, so the surface is a single connected piece  one sheet . For the second surface there is no trace at all when : the surface has a gap around the origin and splits into two separate pieces, one with and one with   two sheets .  The signs in the equation predict this without any graphing. With the equation written with on the right-hand side, count the negative squared terms: one negative term gives a hyperboloid of one sheet, and two negative terms give a hyperboloid of two sheets. The axis of the hyperboloid is the axis of the variable that appears with the minority sign: for the first surface the -term is the lone negative, and for the second the -term is the lone positive, so both hyperboloids have the -axis as their axis.     "
},
{
  "id": "activity-hyperboloids",
  "level": "2",
  "url": "subsec-hyperboloids.html#activity-hyperboloids",
  "type": "Activity",
  "number": "6.5.1",
  "title": "Slicing the Hyperboloids.",
  "body": " Slicing the Hyperboloids   Use the same slicing method as in the previous subsections to study the two surfaces both of which come from equation . For the first surface , , , , and ; for the second surface , , , , and . For the ellipsoid all three squared terms were positive; here exactly one squared term is negative for the first surface and exactly two are negative for the second. Keep this count in mind as you work through the traces. Discover why the first is called a hyperboloid of one sheet while the second is called a hyperboloid of two sheets . Pay particular attention to the traces in the horizontal planes : they are what tells the two surfaces apart.     For the surface , find the trace in the plane for an arbitrary constant , and the traces in the coordinate planes and . For which values of does the plane actually intersect the surface? Identify each trace as an ellipse, parabola, or hyperbola.    Slicing with the plane gives Since the right-hand side is positive for every value of , every horizontal plane meets the surface in an ellipse. The smallest one, in the plane , is the waist of the surface, and the ellipses grow as increases. In the coordinate planes we find hyperbolas: The traces are shown in , and lets you slice the surface yourself.   The traces of the hyperboloid of one sheet in the coordinate planes , , and .    The trace in the plane x = 0: a hyperbola opening left and right.    fa(t) = (3*cosh(t), 4*sinh(t))  fb(t) = (-3*cosh(t), 4*sinh(t))          x=0:\\ \\ \\tfrac{y^2}{9} - \\tfrac{z^2}{16} = 1            The trace in the plane y = 0: a hyperbola opening left and right.    fa(t) = (2*cosh(t), 4*sinh(t))  fb(t) = (-2*cosh(t), 4*sinh(t))          y=0:\\ \\ \\tfrac{x^2}{4} - \\tfrac{z^2}{16} = 1            The trace in the plane z = 0: an ellipse, the smallest horizontal trace.    f(t) = (2*cos(t), 3*sin(t))       z=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the hyperboloid of one sheet with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .        Repeat the analysis for the surface . For which values of does the plane intersect the surface this time? What happens for between those values?    Slicing with the plane now gives and this time the sign of the right-hand side matters. For the right-hand side is negative, so the plane misses the surface entirely; there is no trace at all . For the trace is the single point , and only for do we get ellipses, which grow as increases. In the coordinate planes we again find hyperbolas, both opening up and down: The traces are shown in , and lets you watch the plane pass through the gap without touching the surface.   The traces of the hyperboloid of two sheets in the planes , , and .    The trace in the plane x = 0: a hyperbola opening up and down.    fa(t) = (3*sinh(t), 4*cosh(t))  fb(t) = (3*sinh(t), -4*cosh(t))          x=0:\\ \\ \\tfrac{z^2}{16} - \\tfrac{y^2}{9} = 1            The trace in the plane y = 0: a hyperbola opening up and down.    fa(t) = (2*sinh(t), 4*cosh(t))  fb(t) = (2*sinh(t), -4*cosh(t))          y=0:\\ \\ \\tfrac{z^2}{16} - \\tfrac{x^2}{4} = 1            The trace in the plane z = 5: an ellipse. Planes with the absolute value of z less than 4 miss the surface entirely.    f(t) = (1.5*cos(t), 2.25*sin(t))       z=5:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = \\tfrac{9}{16}              Slicing the hyperboloid of two sheets with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .        Using only the traces in the planes , explain why the first surface is called a hyperboloid of one sheet and the second a hyperboloid of two sheets . Can you predict the number of sheets directly from the signs in the equation?    The horizontal traces tell the two surfaces apart. For the first surface the plane produces an ellipse for every value of : the ellipses stack on top of one another without interruption, so the surface is a single connected piece  one sheet . For the second surface there is no trace at all when : the surface has a gap around the origin and splits into two separate pieces, one with and one with   two sheets .  The signs in the equation predict this without any graphing. With the equation written with on the right-hand side, count the negative squared terms: one negative term gives a hyperboloid of one sheet, and two negative terms give a hyperboloid of two sheets. The axis of the hyperboloid is the axis of the variable that appears with the minority sign: for the first surface the -term is the lone negative, and for the second the -term is the lone positive, so both hyperboloids have the -axis as their axis.    "
},
{
  "id": "subsec-quadric-summary",
  "level": "1",
  "url": "subsec-quadric-summary.html",
  "type": "Section",
  "number": "6.6",
  "title": "Summary of the Quadric Surfaces",
  "body": " Summary of the Quadric Surfaces  We collect the six surfaces of this section in . For each one the table gives its equation, a picture of the surface, and the equation and type of the cross-section cut by the planes , , and ; a cell also notes any value of for which that slice is just a point or a pair of lines. Each trace is worked out in the subsections above, beginning with and continued in the hyperboloid activity, . A printable copy of the whole table is available as a PDF .   The six parent quadric surfaces, with the equation and type of the slice cut by each family of coordinate planes , , and .   A table of the six quadric surfaces. Each row gives the equation, a three-dimensional picture of the surface, and, for the x-equals-c, y-equals-c, and z-equals-c planes, the equation of the cross-section, its type (parabola, ellipse, or hyperbola with its opening direction), and any value of c for which the slice is only a point or a pair of lines.     "
},
{
  "id": "fig-quadric-summary",
  "level": "2",
  "url": "subsec-quadric-summary.html#fig-quadric-summary",
  "type": "Figure",
  "number": "6.19",
  "title": "",
  "body": " The six parent quadric surfaces, with the equation and type of the slice cut by each family of coordinate planes , , and .   A table of the six quadric surfaces. Each row gives the equation, a three-dimensional picture of the surface, and, for the x-equals-c, y-equals-c, and z-equals-c planes, the equation of the cross-section, its type (parabola, ellipse, or hyperbola with its opening direction), and any value of c for which the slice is only a point or a pair of lines.    "
},
{
  "id": "subsec-quadric-applications",
  "level": "1",
  "url": "subsec-quadric-applications.html",
  "type": "Section",
  "number": "6.7",
  "title": "Quadric Surfaces in the World",
  "body": " Quadric Surfaces in the World  The surfaces of this section are more than abstract shapes. Each one appears in the physical world, and often it appears because of the very geometric properties we have been discovering by slicing.   Elliptical paraboloid. A paraboloid has a striking reflective property: every ray travelling parallel to its axis bounces off the surface and passes through a single point, the focus. This is why the dishes of radio telescopes and satellite receivers, and the reflectors behind car headlights and solar concentrators, are shaped like paraboloids they gather parallel incoming rays to one point, or, run in reverse, send rays out in a single parallel beam. The benefit is sensitivity: because parallel rays converge on the focus no matter where they strike the surface, enlarging the dish simply gathers more of a faint signal onto the same receiver, letting a radio telescope detect fainter and more distant objects. The National Radio Astronomy Observatory explains how a parabolic dish bounces incoming radio waves to a focus .   The dishes of the Very Large Array are elliptical paraboloids, focusing incoming radio waves onto a single receiver. (Photo: Wikimedia Commons, CC BY 3.0.)   A row of large white parabolic radio-telescope dishes on a desert plain.     Hyperbolic paraboloid. The saddle is doubly ruled : through every point pass two straight lines that lie entirely on the surface, just like the flat traces the two crossing lines in the plane  that appear when we slice it in . A doubly curved roof can therefore be built out of straight beams, or poured over straight formwork, which makes the hyperbolic paraboloid both strong and inexpensive to build. It is the shape of many saddle roofs and of Félix Candela's thin concrete shells and, on a smaller scale, of a Pringles potato chip. The benefit is efficiency: a thin shell of this shape carries its load by compression and tension acting within the surface rather than by bending, so it can roof a very wide span with only a few inches of material. Encyclopaedia Britannica's article on shell structures describes how such curved roofs are engineered from straight lines.   The roof of the Scotiabank Saddledome in Calgary is a hyperbolic paraboloid. (Photo: Wikimedia Commons, CC BY-SA 3.0.)   A large arena whose roof dips in the middle and rises at the sides like a saddle.     Ellipsoid. An ellipsoid has two focal points, and a wave leaving one focus reflects off the surface straight toward the other. In a whispering gallery a whisper at one focus is heard clearly across the room at the other; in medical lithotripsy a shock wave generated at one focus is focused onto a kidney stone placed at the other, breaking it apart without surgery. On the largest scale, the Earth itself is modeled as a slightly flattened ellipsoid the reference ellipsoid against which GPS coordinates are measured. The benefit of this two-focus focusing is precision without contact: a lithotripter can concentrate its energy on a stone deep inside the body while sparing the surrounding tissue. Modeling the Earth as an ellipsoid brings a different benefit a single smooth equation captures its slight flattening, giving GPS a far more accurate reference than a sphere would. NOAA's National Geodetic Survey describes the reference ellipsoids that anchor those coordinates.   The Earth is modeled as an oblate ellipsoid, the reference surface behind GPS coordinates. (Image: NASA.)   A photograph of the whole Earth from space, very nearly spherical but slightly flattened.     Elliptic cone. When an aircraft flies faster than sound, the pressure waves it creates pile up into a cone that trails behind it, the Mach cone. The sonic boom you hear is the instant this cone of compressed air sweeps past you. This cone is not a design choice but an unavoidable consequence of the motion; even so, its geometry is informative: the sine of its half-angle equals , where is the Mach number, so a narrower cone means a faster aircraft. NASA's Glenn Research Center describes how supersonic disturbances stay confined within this cone .   A fighter jet at transonic speed, wrapped in a cone-shaped condensation cloud that traces out the Mach cone. (Photo: U.S. Navy.)   A jet in flight enveloped by a cone-shaped white cloud of condensed water vapor.     Hyperboloid of one sheet. Like the saddle, this surface is ruled  recall the two straight-line traces we found in the planes in . Because straight members can be arranged to sweep out its double curvature, it can be built cheaply from straight beams or straight formwork while remaining very stiff. This is exactly why the cooling towers of power plants, and open lattice towers such as Vladimir Shukhov's, are hyperboloids of one sheet. The benefit is that stiffness and wind resistance come almost for free: because the surface is ruled, the whole tower is assembled from straight, easily fabricated members, so it reaches great height with remarkably little material. The University of Houston's Engines of Our Ingenuity tells the story of Shukhov and these ruled towers.   A power-plant cooling tower is a hyperboloid of one sheet, assembled from straight structural members. (Photo: Wikimedia Commons, CC BY 3.0.)   A tall concrete cooling tower that narrows to a waist in the middle and flares out at the top and bottom.     Hyperboloid of two sheets. Like the ellipse, a hyperbola has two foci, and a ray aimed at one focus reflects toward the other. Reflecting telescopes of the Cassegrain and Ritchey Chrétien type including the Hubble Space Telescope use mirrors ground to hyperboloidal shapes to fold a long optical path into a short tube. The same two-focus idea drives hyperbolic navigation : comparing the arrival times of two signals places a receiver on a hyperboloid, and intersecting several such surfaces is how systems from LORAN to GPS pin down a location. The benefit is sharpness in a compact instrument: the paired hyperboloidal mirrors fold a long focal length into a short tube and cancel the aberrations that would blur a simpler design, keeping Hubble's images crisp across its whole field of view. NASA explains how these curved mirrors gather starlight in its overview of the Hubble Space Telescope's optics .   The Hubble Space Telescope focuses light with hyperboloidal mirrors. (Image: NASA.)   The cylindrical Hubble Space Telescope in orbit above the Earth.    "
},
{
  "id": "subsec-quadric-applications-3",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elliptical paraboloid. "
},
{
  "id": "fig-app-paraboloid",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-paraboloid",
  "type": "Figure",
  "number": "6.20",
  "title": "",
  "body": " The dishes of the Very Large Array are elliptical paraboloids, focusing incoming radio waves onto a single receiver. (Photo: Wikimedia Commons, CC BY 3.0.)   A row of large white parabolic radio-telescope dishes on a desert plain.   "
},
{
  "id": "subsec-quadric-applications-5",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperbolic paraboloid. doubly ruled "
},
{
  "id": "fig-app-hyperbolic-paraboloid",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-hyperbolic-paraboloid",
  "type": "Figure",
  "number": "6.21",
  "title": "",
  "body": " The roof of the Scotiabank Saddledome in Calgary is a hyperbolic paraboloid. (Photo: Wikimedia Commons, CC BY-SA 3.0.)   A large arena whose roof dips in the middle and rises at the sides like a saddle.   "
},
{
  "id": "subsec-quadric-applications-7",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ellipsoid. lithotripsy "
},
{
  "id": "fig-app-ellipsoid",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-ellipsoid",
  "type": "Figure",
  "number": "6.22",
  "title": "",
  "body": " The Earth is modeled as an oblate ellipsoid, the reference surface behind GPS coordinates. (Image: NASA.)   A photograph of the whole Earth from space, very nearly spherical but slightly flattened.   "
},
{
  "id": "subsec-quadric-applications-9",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elliptic cone. sonic boom "
},
{
  "id": "fig-app-cone",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-cone",
  "type": "Figure",
  "number": "6.23",
  "title": "",
  "body": " A fighter jet at transonic speed, wrapped in a cone-shaped condensation cloud that traces out the Mach cone. (Photo: U.S. Navy.)   A jet in flight enveloped by a cone-shaped white cloud of condensed water vapor.   "
},
{
  "id": "subsec-quadric-applications-11",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperboloid of one sheet. ruled "
},
{
  "id": "fig-app-hyperboloid-one-sheet",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-hyperboloid-one-sheet",
  "type": "Figure",
  "number": "6.24",
  "title": "",
  "body": " A power-plant cooling tower is a hyperboloid of one sheet, assembled from straight structural members. (Photo: Wikimedia Commons, CC BY 3.0.)   A tall concrete cooling tower that narrows to a waist in the middle and flares out at the top and bottom.   "
},
{
  "id": "subsec-quadric-applications-13",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperboloid of two sheets. hyperbolic navigation "
},
{
  "id": "fig-app-hyperboloid-two-sheets",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-hyperboloid-two-sheets",
  "type": "Figure",
  "number": "6.25",
  "title": "",
  "body": " The Hubble Space Telescope focuses light with hyperboloidal mirrors. (Image: NASA.)   The cylindrical Hubble Space Telescope in orbit above the Earth.   "
},
{
  "id": "sec-dirderiv-definition",
  "level": "1",
  "url": "sec-dirderiv-definition.html",
  "type": "Section",
  "number": "7.1",
  "title": "The Definition of the Directional Derivative",
  "body": " The Definition of the Directional Derivative   Directional Derivative   The derivative of at in the direction of the unit vector is the number provided the limit exists. It can alternatively be denoted by .    The geometry behind this definition is best seen in a picture. Starting at the point , we move a distance in the direction of the unit vector to reach the point , and we compare the values of the surface above the two points. As , the point slides back along toward . The four figures that follow show this from complementary angles: lets you explore the construction in space, records the displacement in the -plane, animates the secant line rotating onto the tangent line, and reports the difference quotient itself as shrinks, so that the limit can be watched rather than only read.   Interactive view of the definition of the directional derivative. The point moves the distance from along , and the secant slope approaches as .     The two points and used in the definition of the directional derivative. As , the point slides along the direction back toward .            P_0(x_0,y_0)    P(x_0+su_1,\\,y_0+su_2)    s\\mathbf u    su_1\\mathbf i    su_2\\mathbf j                   Animation of the definition of the directional derivative. The vertical plane through in the direction cuts the surface in a curve, and the point moves on this plane. The secant line through and has slope , and as it rotates onto the tangent line, whose slope is the directional derivative .     The difference quotient for at , as functions of the direction angle and the step .    Before developing any shortcuts, we evaluate a directional derivative straight from . Working through the limit once makes the definition concrete, and it gives us a value to check against later: recovers the same number in a couple of lines, once the gradient is available.   Example I   Consider the function , the point , and the unit vector . Use the definition of directional derivative to compute .    We substitute and in the definition:   The computation has a useful geometric picture, illustrated in the interactive 3D figure below. Along the ray through in the direction , the values of are the single-variable function and the difference quotient in the limit above is the slope of the secant line of through and . As the secant lines approach the tangent line at , whose slope is .    The secant through and on the surface , rotating onto the tangent line at as , with slope .       The Partial Derivatives Are Directional Derivatives    measures the rate of change of in an arbitrary direction . Two directions are already familiar from and . In this activity you will check that the definition reproduces exactly those two derivatives when points along a coordinate axis. Use only ; nothing beyond the definition is needed.     Take , so that and . Substitute these into and simplify. Which single-variable limit is left, and what is its value?    Ask yourself which of the two inputs of actually changes as varies.    Substituting and leaves the second slot of fixed at :   Only the first variable moves, so this is precisely the limit that defines the partial derivative with respect to . That is, .      Repeat the computation with , and state the conclusion.    Now and , so the first slot is held at : so . The partial derivatives are the directional derivatives in the two coordinate directions, and is the common generalization of both.      Test this on the function of . With and , compute straight from the definition, then compute in the usual way and compare.    From the definition,   Differentiating instead, , so . The two agree. By symmetry as well. Note that both are smaller than the value found in : the function climbs faster along the diagonal than along either axis.      Finally, take . Show that , and say in a sentence why this is what you should expect.    Here and , so   Putting turns this into . Walking the opposite way along the same line makes change at the same rate with the opposite sign, so reversing reverses the sign of .     Every partial derivative is a directional derivative, so nothing already known about and is lost. What the definition adds is the freedom to point anywhere. Keep in mind that this depends on being a unit vector: the parameter measures actual distance travelled in the -plane only when .    "
},
{
  "id": "def-directional-derivative",
  "level": "2",
  "url": "sec-dirderiv-definition.html#def-directional-derivative",
  "type": "Definition",
  "number": "7.1",
  "title": "Directional Derivative.",
  "body": " Directional Derivative   The derivative of at in the direction of the unit vector is the number provided the limit exists. It can alternatively be denoted by .   "
},
{
  "id": "fig-int-dirderiv-setup-3d",
  "level": "2",
  "url": "sec-dirderiv-definition.html#fig-int-dirderiv-setup-3d",
  "type": "Figure",
  "number": "7.2",
  "title": "",
  "body": " Interactive view of the definition of the directional derivative. The point moves the distance from along , and the secant slope approaches as .   "
},
{
  "id": "fig-dirderiv-setup-prefigure",
  "level": "2",
  "url": "sec-dirderiv-definition.html#fig-dirderiv-setup-prefigure",
  "type": "Figure",
  "number": "7.3",
  "title": "",
  "body": " The two points and used in the definition of the directional derivative. As , the point slides along the direction back toward .            P_0(x_0,y_0)    P(x_0+su_1,\\,y_0+su_2)    s\\mathbf u    su_1\\mathbf i    su_2\\mathbf j                 "
},
{
  "id": "fig-dirderiv-setup-video",
  "level": "2",
  "url": "sec-dirderiv-definition.html#fig-dirderiv-setup-video",
  "type": "Figure",
  "number": "7.4",
  "title": "",
  "body": " Animation of the definition of the directional derivative. The vertical plane through in the direction cuts the surface in a curve, and the point moves on this plane. The secant line through and has slope , and as it rotates onto the tangent line, whose slope is the directional derivative .   "
},
{
  "id": "fig-int-dirderiv-definition",
  "level": "2",
  "url": "sec-dirderiv-definition.html#fig-int-dirderiv-definition",
  "type": "Figure",
  "number": "7.5",
  "title": "",
  "body": " The difference quotient for at , as functions of the direction angle and the step .   "
},
{
  "id": "example-dirderiv-definition",
  "level": "2",
  "url": "sec-dirderiv-definition.html#example-dirderiv-definition",
  "type": "Example",
  "number": "7.6",
  "title": "Example I.",
  "body": " Example I   Consider the function , the point , and the unit vector . Use the definition of directional derivative to compute .    We substitute and in the definition:   The computation has a useful geometric picture, illustrated in the interactive 3D figure below. Along the ray through in the direction , the values of are the single-variable function and the difference quotient in the limit above is the slope of the secant line of through and . As the secant lines approach the tangent line at , whose slope is .    The secant through and on the surface , rotating onto the tangent line at as , with slope .     "
},
{
  "id": "activity-dirderiv-partials",
  "level": "2",
  "url": "sec-dirderiv-definition.html#activity-dirderiv-partials",
  "type": "Activity",
  "number": "7.1.1",
  "title": "The Partial Derivatives Are Directional Derivatives.",
  "body": " The Partial Derivatives Are Directional Derivatives    measures the rate of change of in an arbitrary direction . Two directions are already familiar from and . In this activity you will check that the definition reproduces exactly those two derivatives when points along a coordinate axis. Use only ; nothing beyond the definition is needed.     Take , so that and . Substitute these into and simplify. Which single-variable limit is left, and what is its value?    Ask yourself which of the two inputs of actually changes as varies.    Substituting and leaves the second slot of fixed at :   Only the first variable moves, so this is precisely the limit that defines the partial derivative with respect to . That is, .      Repeat the computation with , and state the conclusion.    Now and , so the first slot is held at : so . The partial derivatives are the directional derivatives in the two coordinate directions, and is the common generalization of both.      Test this on the function of . With and , compute straight from the definition, then compute in the usual way and compare.    From the definition,   Differentiating instead, , so . The two agree. By symmetry as well. Note that both are smaller than the value found in : the function climbs faster along the diagonal than along either axis.      Finally, take . Show that , and say in a sentence why this is what you should expect.    Here and , so   Putting turns this into . Walking the opposite way along the same line makes change at the same rate with the opposite sign, so reversing reverses the sign of .     Every partial derivative is a directional derivative, so nothing already known about and is lost. What the definition adds is the freedom to point anywhere. Keep in mind that this depends on being a unit vector: the parameter measures actual distance travelled in the -plane only when .   "
},
{
  "id": "sec-gradient-vector",
  "level": "1",
  "url": "sec-gradient-vector.html",
  "type": "Section",
  "number": "7.2",
  "title": "The Gradient Vector",
  "body": " The Gradient Vector  Note that we can write the equation of the line through the point with the direction as   We can use the above relation between , , and and the chain rule, whose dependency diagram is shown in , to compute the directional derivative as follows:   The vector in the first set of parentheses is known as the gradient vector .   Gradient Vector   The gradient vector of the function at is the vector   The gradient vector and the directional derivative of at in the direction are related via the following dot product:      The chain rule dependency diagram: multiplying down each branch and adding the two products gives .       z=f(x,y)    x    y    s        \\dfrac{\\partial f}{\\partial x}    \\dfrac{\\partial f}{\\partial y}    \\dfrac{dx}{ds}    \\dfrac{dy}{ds}                  A fundamental geometric property of the gradient is that, at every point, it is perpendicular to the level curve of passing through that point, as the interactive figure below lets you verify. We state and prove this fact now.   The Gradient is Perpendicular to the Level Curves   Let be a differentiable function, and let be the level curve for a constant . At every point of where , the gradient vector is perpendicular to the level curve .    Suppose the level curve is parametrized by a differentiable vector function and let denote its velocity vector. Because every point of lies on the level curve, its coordinates satisfy   The left-hand side is constant in , so its derivative is zero. Differentiating both sides with respect to and applying the chain rule gives   We recognize the middle expression as the dot product of the gradient vector with the velocity vector:   Therefore, at each point of , the gradient is orthogonal to the velocity vector , as shown in . Since the velocity vector points in the direction of motion along the curve, it is tangent to ; hence being orthogonal to means precisely that is perpendicular to the level curve . This holds at every point where .     The gradient meets the level curve at a right angle: it is perpendicular to the velocity vector , which is tangent to .     ce(t) = (2.4*cos(t), 1.6*sin(t))  ci(t) = (1.63*cos(t), 1.09*sin(t))  co(t) = (3.12*cos(t), 2.08*sin(t))           P    \\nabla f    \\mathbf v(t)    C\\colon f=c    f=c+\\Delta c    f=c-\\Delta c                 Checking that the Gradient Meets Level Curves at Right Angles    claims that is perpendicular to the level curve through a point. This activity asks you to verify that claim by hand at one point, and then to test it at many points using the interactive figure that follows.     Let . Find the level curve of through , and give a vector tangent to that curve at .    Level curves of this are circles centred at the origin. A tangent to a circle is perpendicular to its radius.    Since , the level curve is , that is the circle of radius . The radius at points along , so a tangent vector is .      Compute and then the dot product of that gradient with your tangent vector. What does the result say?     gives , and   A zero dot product between non-zero vectors means the two are orthogonal, so meets the level curve at a right angle at , exactly as asserts.      Repeat the argument at an arbitrary point to show the right angle is not a coincidence of the point .    The level curve through is the circle , whose tangent there is . Since , so the gradient is perpendicular to the level curve at every point other than the origin, where and no direction is singled out.      Now drag the red point in to several locations, including points on the axes and points far from the origin. Confirm that the gradient arrow always meets the level curve at a right angle, and describe how the length of the arrow changes as the point moves away from the origin. Can you place the point where the gradient vanishes?   The gradient of at a movable point, shown with the level curve through that point, illustrating that is perpendicular to the level curves.      The right angle persists everywhere. The arrow lengthens as the point moves outward, since grows with the distance from the origin; correspondingly the level curves are spaced more closely there, because is climbing faster. At the origin : the level curve degenerates to a single point and there is no direction of steepest ascent.     With in hand, the limit that defined the directional derivative can be set aside: the gradient and a dot product do the same work in a couple of lines. To see the difference, we rework  the same function, point, and direction and then read the answer geometrically off the surface.   Example II   Consider the function , the point , and the unit vector . Evaluate the directional derivative and interpret your result.    We use . First we compute the gradient vector:   Then we take the dot product with : which agrees with the limit computation in . See for a geometrical interpretation of the directional derivative. Note that the unit vector is the direction vector of the line located in the -plane. The plane contains this line and is orthogonal to the -plane. The intersection of the surface and the plane is the parabola shown in the figure. Finally, the directional derivative of at the point corresponds to the slope of the tangent line to the surface at that is located in the plane .   The surface cut by the vertical plane , which contains the direction . The intersection is a parabola, and the directional derivative is the slope of its tangent line at the point . The level curve through , the circle , is drawn on the surface at height , with its dashed projection in the -plane.   A paraboloid cut by a vertical plane, with the trace parabola and its tangent line at the point one comma one comma three.   The surface , an upward-opening paraboloid, drawn as a translucent blue surface. A translucent yellow vertical plane passes through the surface above the line in the -plane, where the unit vector is drawn as a blue arrow starting at . The plane meets the surface in a parabola, drawn in solid vermillion, and a green tangent line touches this parabola at the marked point . The slope of this tangent line, measured within the vertical plane, is the directional derivative . A reddish-purple circle on the surface at height marks the level curve , and its dashed projection in the -plane is the circle through the point .        The same slice, animated: the tangent to the sliced surface at tipping from steepest ascent through level to steepest descent as the direction turns around .      "
},
{
  "id": "sec-gradient-vector-4",
  "level": "2",
  "url": "sec-gradient-vector.html#sec-gradient-vector-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient vector "
},
{
  "id": "def-gradient-vector",
  "level": "2",
  "url": "sec-gradient-vector.html#def-gradient-vector",
  "type": "Definition",
  "number": "7.8",
  "title": "Gradient Vector.",
  "body": " Gradient Vector   The gradient vector of the function at is the vector   The gradient vector and the directional derivative of at in the direction are related via the following dot product:    "
},
{
  "id": "fig-chain-rule-tree-prefigure",
  "level": "2",
  "url": "sec-gradient-vector.html#fig-chain-rule-tree-prefigure",
  "type": "Figure",
  "number": "7.9",
  "title": "",
  "body": " The chain rule dependency diagram: multiplying down each branch and adding the two products gives .       z=f(x,y)    x    y    s        \\dfrac{\\partial f}{\\partial x}    \\dfrac{\\partial f}{\\partial y}    \\dfrac{dx}{ds}    \\dfrac{dy}{ds}                 "
},
{
  "id": "thm-gradient-perp-level-curve",
  "level": "2",
  "url": "sec-gradient-vector.html#thm-gradient-perp-level-curve",
  "type": "Theorem",
  "number": "7.10",
  "title": "The Gradient is Perpendicular to the Level Curves.",
  "body": " The Gradient is Perpendicular to the Level Curves   Let be a differentiable function, and let be the level curve for a constant . At every point of where , the gradient vector is perpendicular to the level curve .    Suppose the level curve is parametrized by a differentiable vector function and let denote its velocity vector. Because every point of lies on the level curve, its coordinates satisfy   The left-hand side is constant in , so its derivative is zero. Differentiating both sides with respect to and applying the chain rule gives   We recognize the middle expression as the dot product of the gradient vector with the velocity vector:   Therefore, at each point of , the gradient is orthogonal to the velocity vector , as shown in . Since the velocity vector points in the direction of motion along the curve, it is tangent to ; hence being orthogonal to means precisely that is perpendicular to the level curve . This holds at every point where .   "
},
{
  "id": "fig-gradient-perp-prefigure",
  "level": "2",
  "url": "sec-gradient-vector.html#fig-gradient-perp-prefigure",
  "type": "Figure",
  "number": "7.11",
  "title": "",
  "body": " The gradient meets the level curve at a right angle: it is perpendicular to the velocity vector , which is tangent to .     ce(t) = (2.4*cos(t), 1.6*sin(t))  ci(t) = (1.63*cos(t), 1.09*sin(t))  co(t) = (3.12*cos(t), 2.08*sin(t))           P    \\nabla f    \\mathbf v(t)    C\\colon f=c    f=c+\\Delta c    f=c-\\Delta c               "
},
{
  "id": "activity-gradient-perp-check",
  "level": "2",
  "url": "sec-gradient-vector.html#activity-gradient-perp-check",
  "type": "Activity",
  "number": "7.2.1",
  "title": "Checking that the Gradient Meets Level Curves at Right Angles.",
  "body": " Checking that the Gradient Meets Level Curves at Right Angles    claims that is perpendicular to the level curve through a point. This activity asks you to verify that claim by hand at one point, and then to test it at many points using the interactive figure that follows.     Let . Find the level curve of through , and give a vector tangent to that curve at .    Level curves of this are circles centred at the origin. A tangent to a circle is perpendicular to its radius.    Since , the level curve is , that is the circle of radius . The radius at points along , so a tangent vector is .      Compute and then the dot product of that gradient with your tangent vector. What does the result say?     gives , and   A zero dot product between non-zero vectors means the two are orthogonal, so meets the level curve at a right angle at , exactly as asserts.      Repeat the argument at an arbitrary point to show the right angle is not a coincidence of the point .    The level curve through is the circle , whose tangent there is . Since , so the gradient is perpendicular to the level curve at every point other than the origin, where and no direction is singled out.      Now drag the red point in to several locations, including points on the axes and points far from the origin. Confirm that the gradient arrow always meets the level curve at a right angle, and describe how the length of the arrow changes as the point moves away from the origin. Can you place the point where the gradient vanishes?   The gradient of at a movable point, shown with the level curve through that point, illustrating that is perpendicular to the level curves.      The right angle persists everywhere. The arrow lengthens as the point moves outward, since grows with the distance from the origin; correspondingly the level curves are spaced more closely there, because is climbing faster. At the origin : the level curve degenerates to a single point and there is no direction of steepest ascent.    "
},
{
  "id": "example-dirderiv-gradient",
  "level": "2",
  "url": "sec-gradient-vector.html#example-dirderiv-gradient",
  "type": "Example",
  "number": "7.13",
  "title": "Example II.",
  "body": " Example II   Consider the function , the point , and the unit vector . Evaluate the directional derivative and interpret your result.    We use . First we compute the gradient vector:   Then we take the dot product with : which agrees with the limit computation in . See for a geometrical interpretation of the directional derivative. Note that the unit vector is the direction vector of the line located in the -plane. The plane contains this line and is orthogonal to the -plane. The intersection of the surface and the plane is the parabola shown in the figure. Finally, the directional derivative of at the point corresponds to the slope of the tangent line to the surface at that is located in the plane .   The surface cut by the vertical plane , which contains the direction . The intersection is a parabola, and the directional derivative is the slope of its tangent line at the point . The level curve through , the circle , is drawn on the surface at height , with its dashed projection in the -plane.   A paraboloid cut by a vertical plane, with the trace parabola and its tangent line at the point one comma one comma three.   The surface , an upward-opening paraboloid, drawn as a translucent blue surface. A translucent yellow vertical plane passes through the surface above the line in the -plane, where the unit vector is drawn as a blue arrow starting at . The plane meets the surface in a parabola, drawn in solid vermillion, and a green tangent line touches this parabola at the marked point . The slope of this tangent line, measured within the vertical plane, is the directional derivative . A reddish-purple circle on the surface at height marks the level curve , and its dashed projection in the -plane is the circle through the point .        The same slice, animated: the tangent to the sliced surface at tipping from steepest ascent through level to steepest descent as the direction turns around .     "
},
{
  "id": "sec-dirderiv-properties",
  "level": "1",
  "url": "sec-dirderiv-properties.html",
  "type": "Section",
  "number": "7.3",
  "title": "Directions of Fastest Increase, Fastest Decrease, and No Change",
  "body": " Directions of Fastest Increase, Fastest Decrease, and No Change  The directional derivative can be expressed as where is the angle between and the unit vector . The first line is , obtained from the chain rule in ; the second is the geometric form of the dot product; and the third uses .   Three Consequences of  Only the factor depends on the direction, and it runs over as turns through the circle of directions at . Its three extreme values single out three directions, drawn in :     When and are in the same direction ( ), increases most rapidly and .    When and have opposite directions ( ), decreases most rapidly and .    When and are orthogonal ( ), does not change, and .       Directions around : increases fastest along , decreases fastest along , and does not change in the two directions orthogonal to .            P_0    \\nabla f    \\mathbf u    D_{\\mathbf u}f=0    D_{\\mathbf u}f=0    D_{\\mathbf u} f = \\|\\nabla f\\|\\cos\\theta                  Verifying the Three Special Directions   The three cases listed above are all consequences of a single formula, . In this activity you will derive them yourself and then check your answers against , where can be dragged around the circle of directions.     Beginning with , explain why the dot product can be rewritten as .    For any two vectors, with the angle between them. Applying this to and , where the last step uses . Without that assumption the factor would survive, and rescaling would change without changing the direction being measured.      Treat as fixed and let run over . What are the largest and smallest values of , and at which angles do they occur? For which angles is ?    Since , the quantity ranges between and . The largest value occurs at , with pointing along ; the smallest, , occurs at , with pointing along . The directional derivative vanishes when , that is at and , the two directions orthogonal to .      Now take at , the function of . Compute and at , write as a function of , and give the three special unit vectors explicitly.    Here , so and . Therefore   The fastest increase happens along , giving , which is the value computed in . The fastest decrease happens along , giving . There is no change along , the two directions orthogonal to .      Check your work against the figure below. Drag around the circle and confirm that the meter agrees with at several angles. Then use the three buttons and compare the readings with your answers to the previous task. As you drag, at what angle does the reading change most quickly, and at what angle is it momentarily stationary?   The directional derivative as the unit vector rotates around .      The three buttons should give , , and . The reading changes fastest where is largest, namely at and , the very directions where itself is zero. It is momentarily stationary at and , where is largest and smallest. So a small change of heading matters least when you are already pointing straight uphill, and most when you are moving along a level direction.      Example III   Consider the function . Find the directions in which, at the point ,      increases most rapidly,     decreases most rapidly,    there is no change in .        A. As explained above, increases most rapidly in the direction of . We have   Note that we need to divide by its length to find the unit vector corresponding to the direction of most rapid increase:    B. For the direction of most rapid decrease, we take the opposite direction:    C. To find the directions of zero change in , we require and since is a unit vector, we have   After substituting in , we conclude   Hence, the directions of zero change in at are   Note that . All four directions are shown in : the directions of zero change are tangent to the level curve of through , while the directions of most rapid increase and decrease are perpendicular to it.   At : fastest increase along , fastest decrease along , and zero change along , tangent to the level curve .                 P_0(1,1)    \\nabla f\/\\|\\nabla f\\|    -\\nabla f\/\\|\\nabla f\\|    \\mathbf u    \\tilde{\\mathbf u}                     The same three directions, animated: sweeping between and as turns around .      The same 3D view, animated: the tangent to the sliced surface at tipping from steepest ascent through level to steepest descent as turns.      "
},
{
  "id": "remark-dirderiv-three-consequences",
  "level": "2",
  "url": "sec-dirderiv-properties.html#remark-dirderiv-three-consequences",
  "type": "Remark",
  "number": "7.16",
  "title": "Three Consequences of <span class=\"process-math\">\\(D_{\\mathbf u} f = \\|\\nabla f\\|\\cos\\theta\\)<\/span>.",
  "body": " Three Consequences of  Only the factor depends on the direction, and it runs over as turns through the circle of directions at . Its three extreme values single out three directions, drawn in :     When and are in the same direction ( ), increases most rapidly and .    When and have opposite directions ( ), decreases most rapidly and .    When and are orthogonal ( ), does not change, and .     "
},
{
  "id": "fig-dirderiv-angle-prefigure",
  "level": "2",
  "url": "sec-dirderiv-properties.html#fig-dirderiv-angle-prefigure",
  "type": "Figure",
  "number": "7.17",
  "title": "",
  "body": " Directions around : increases fastest along , decreases fastest along , and does not change in the two directions orthogonal to .            P_0    \\nabla f    \\mathbf u    D_{\\mathbf u}f=0    D_{\\mathbf u}f=0    D_{\\mathbf u} f = \\|\\nabla f\\|\\cos\\theta                "
},
{
  "id": "activity-verify-cos-theta",
  "level": "2",
  "url": "sec-dirderiv-properties.html#activity-verify-cos-theta",
  "type": "Activity",
  "number": "7.3.1",
  "title": "Verifying the Three Special Directions.",
  "body": " Verifying the Three Special Directions   The three cases listed above are all consequences of a single formula, . In this activity you will derive them yourself and then check your answers against , where can be dragged around the circle of directions.     Beginning with , explain why the dot product can be rewritten as .    For any two vectors, with the angle between them. Applying this to and , where the last step uses . Without that assumption the factor would survive, and rescaling would change without changing the direction being measured.      Treat as fixed and let run over . What are the largest and smallest values of , and at which angles do they occur? For which angles is ?    Since , the quantity ranges between and . The largest value occurs at , with pointing along ; the smallest, , occurs at , with pointing along . The directional derivative vanishes when , that is at and , the two directions orthogonal to .      Now take at , the function of . Compute and at , write as a function of , and give the three special unit vectors explicitly.    Here , so and . Therefore   The fastest increase happens along , giving , which is the value computed in . The fastest decrease happens along , giving . There is no change along , the two directions orthogonal to .      Check your work against the figure below. Drag around the circle and confirm that the meter agrees with at several angles. Then use the three buttons and compare the readings with your answers to the previous task. As you drag, at what angle does the reading change most quickly, and at what angle is it momentarily stationary?   The directional derivative as the unit vector rotates around .      The three buttons should give , , and . The reading changes fastest where is largest, namely at and , the very directions where itself is zero. It is momentarily stationary at and , where is largest and smallest. So a small change of heading matters least when you are already pointing straight uphill, and most when you are moving along a level direction.    "
},
{
  "id": "example-gradient-directions",
  "level": "2",
  "url": "sec-dirderiv-properties.html#example-gradient-directions",
  "type": "Example",
  "number": "7.19",
  "title": "Example III.",
  "body": " Example III   Consider the function . Find the directions in which, at the point ,      increases most rapidly,     decreases most rapidly,    there is no change in .        A. As explained above, increases most rapidly in the direction of . We have   Note that we need to divide by its length to find the unit vector corresponding to the direction of most rapid increase:    B. For the direction of most rapid decrease, we take the opposite direction:    C. To find the directions of zero change in , we require and since is a unit vector, we have   After substituting in , we conclude   Hence, the directions of zero change in at are   Note that . All four directions are shown in : the directions of zero change are tangent to the level curve of through , while the directions of most rapid increase and decrease are perpendicular to it.   At : fastest increase along , fastest decrease along , and zero change along , tangent to the level curve .                 P_0(1,1)    \\nabla f\/\\|\\nabla f\\|    -\\nabla f\/\\|\\nabla f\\|    \\mathbf u    \\tilde{\\mathbf u}                     The same three directions, animated: sweeping between and as turns around .      The same 3D view, animated: the tangent to the sliced surface at tipping from steepest ascent through level to steepest descent as turns.     "
},
{
  "id": "sec-gradient-summary",
  "level": "1",
  "url": "sec-gradient-summary.html",
  "type": "Section",
  "number": "7.4",
  "title": "Summary",
  "body": " Summary  We collect here the main ideas of this section.   A directional derivative viewed together in the plane and in space: the unit vector at in the -plane selects a slice of the surface , and is the slope of the resulting tangent line to that slice.        The directional derivative.  defines as the limit in ; it measures the rate of change of at in the direction of a unit vector . It is computed directly from this limit in , and shows how the plane and space pictures fit together.     The gradient vector. Using the chain rule we obtain , which gives the shortcut in . This is applied in .     Fastest increase, fastest decrease, and no change. Writing in shows that increases most rapidly in the direction of , decreases most rapidly in the direction of , and does not change in the directions orthogonal to . These directions are found in .     The gradient is perpendicular to the level curves.  proves that is perpendicular to the level curve through each point. Equivalently, the directions of no change are tangent to the level curve, while the directions of most rapid increase and decrease are perpendicular to it.     "
},
{
  "id": "video-dirderiv-2d-3d",
  "level": "2",
  "url": "sec-gradient-summary.html#video-dirderiv-2d-3d",
  "type": "Figure",
  "number": "7.23",
  "title": "",
  "body": " A directional derivative viewed together in the plane and in space: the unit vector at in the -plane selects a slice of the surface , and is the slope of the resulting tangent line to that slice.   "
},
{
  "id": "subsec-scalar-fields-potentials",
  "level": "1",
  "url": "subsec-scalar-fields-potentials.html",
  "type": "Section",
  "number": "7.5",
  "title": "Scalar Fields, Potentials, and the Direction Nature Chooses",
  "body": " Scalar Fields, Potentials, and the Direction Nature Chooses  A scalar field is a rule that assigns a single number to every point of a region: the temperature in a city, the pressure over an ocean, the elevation on a hillside, the concentration of a pollutant in a corridor. A scalar field carries no direction of its own. It is only a number at each location.  Physics, by contrast, is full of quantities that point somewhere: heat flows, forces push, wind blows. These are vector fields . The gradient is what ties them back to scalar fields at least for the conservative fields taken up in MATH 14 at SCU, where the whole vector field is recovered from a single scalar potential by differentiation. Because such fields are so common in nature, the pattern in the table below appears again and again across physics.  When a scalar field governs a physical force or flux, we call the field a potential , and the associated vector quantity is, up to a constant, the negative gradient of that potential.    Setting  Scalar field  Vector quantity  Level curves are    Heat conduction  temperature  heat flux (Fourier's law)  isotherms    Electrostatics  potential  electric field  equipotentials    Mechanics  potential energy  conservative force  contours of constant energy    Meteorology  pressure  pressure-gradient force per unit volume  isobars    The minus sign in each of these laws encodes one physical fact: nature moves downhill . Heat drains from hot to cold, charges move toward low electric potential, a ball rolls toward low gravitational potential energy, air accelerates toward low pressure. So the direction the physics actually selects is the direction of most rapid decrease , which is exactly the case of .  Three consequences carry over unchanged from , and they are worth restating in physical language.      : fastest increase, at the rate . This is the direction heat comes from .     : fastest decrease, at the rate . This is the direction the flux, the force, or the wind actually points.     : no change at all. These directions trace the level curves of the field isotherms, equipotentials, isobars, the contour lines on a topographic map. Since is orthogonal to the level curve through a point, the flux, the force, or the wind always crosses the contours at right angles .      Two Runners in a City Heat Island   On a still summer afternoon the pavement downtown is far hotter than the outlying neighborhoods. Model the surface air temperature, in degrees Fahrenheit, by where and are measured in miles east and north of downtown. The core reaches F, and the outskirts settle near F. Two runners meet at the point .     The first runner is overheating and wants cooler air as quickly as possible. Which direction should she take, and how fast does the temperature fall along it?    The second runner has settled into the temperature at and wants a route on which it never changes at all. What path should she run?       Differentiating the exponential with the chain rule, At the temperature itself is F.   Part 1. Temperature falls fastest in the direction of , which is a positive multiple of . Normalizing, the heading is north-northeast: and the rate of change along it is Notice how modest this is. The gradient hands her the best available direction, not a dramatic one: even running the optimal heading, she must cover a full mile to shed about two degrees. Any other heading does worse.   Part 2. The second runner needs , that is, orthogonal to : Following that condition continuously, rather than for a single step, means never leaving the level curve of through . Since is constant exactly when is constant, her route is an ellipse with semi-axes miles east-west and miles north-south a closed loop of roughly ten miles, every step of it at F.  In the animation below, switch between the two runners. On the loop the thermometer holds at F while the blue gradient arrow stays stubbornly perpendicular to her heading; on the escape route the same reading falls steadily, and the path cuts across every isotherm at a right angle.  Use the interactive figure to explore the problem further geometrically, switching between the two routes and watching how the readings respond as the runner moves.   Two routes from in the field . The highlighted ellipse is the level curve , on which .      "
},
{
  "id": "subsec-scalar-fields-potentials-2",
  "level": "2",
  "url": "subsec-scalar-fields-potentials.html#subsec-scalar-fields-potentials-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar field "
},
{
  "id": "subsec-scalar-fields-potentials-3",
  "level": "2",
  "url": "subsec-scalar-fields-potentials.html#subsec-scalar-fields-potentials-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector fields conservative "
},
{
  "id": "subsec-scalar-fields-potentials-4",
  "level": "2",
  "url": "subsec-scalar-fields-potentials.html#subsec-scalar-fields-potentials-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "potential "
},
{
  "id": "ex-two-runners",
  "level": "2",
  "url": "subsec-scalar-fields-potentials.html#ex-two-runners",
  "type": "Example",
  "number": "7.24",
  "title": "Two Runners in a City Heat Island.",
  "body": " Two Runners in a City Heat Island   On a still summer afternoon the pavement downtown is far hotter than the outlying neighborhoods. Model the surface air temperature, in degrees Fahrenheit, by where and are measured in miles east and north of downtown. The core reaches F, and the outskirts settle near F. Two runners meet at the point .     The first runner is overheating and wants cooler air as quickly as possible. Which direction should she take, and how fast does the temperature fall along it?    The second runner has settled into the temperature at and wants a route on which it never changes at all. What path should she run?       Differentiating the exponential with the chain rule, At the temperature itself is F.   Part 1. Temperature falls fastest in the direction of , which is a positive multiple of . Normalizing, the heading is north-northeast: and the rate of change along it is Notice how modest this is. The gradient hands her the best available direction, not a dramatic one: even running the optimal heading, she must cover a full mile to shed about two degrees. Any other heading does worse.   Part 2. The second runner needs , that is, orthogonal to : Following that condition continuously, rather than for a single step, means never leaving the level curve of through . Since is constant exactly when is constant, her route is an ellipse with semi-axes miles east-west and miles north-south a closed loop of roughly ten miles, every step of it at F.  In the animation below, switch between the two runners. On the loop the thermometer holds at F while the blue gradient arrow stays stubbornly perpendicular to her heading; on the escape route the same reading falls steadily, and the path cuts across every isotherm at a right angle.  Use the interactive figure to explore the problem further geometrically, switching between the two routes and watching how the readings respond as the runner moves.   Two routes from in the field . The highlighted ellipse is the level curve , on which .     "
},
{
  "id": "exercises-gradient-applications",
  "level": "1",
  "url": "exercises-gradient-applications.html",
  "type": "Exercises",
  "number": "7.6",
  "title": "Exercises: Scalar Fields and Potentials",
  "body": " Exercises: Scalar Fields and Potentials   Each exercise below repeats the three questions of in a different physical setting: find the direction of most rapid decrease, the rate along a prescribed direction, and the directions of no change.    Electric Potential on a Coated Plate   The electric potential on a thin coated plate, in volts, is with and in centimeters. Consider the point .     Find at and the electric field there. Along which unit vector does the potential drop most rapidly, and at what rate?    A test charge is nudged along . Compute at .    Find the two unit vectors along which the potential does not change, and name the curve they are tangent to.           , so and V\/cm. The potential drops fastest along , at the rate V\/cm.     in V\/cm. The potential rises slightly along this heading.     . These are tangent to the equipotential ellipse through , and they are orthogonal to , as they must be.      The potential on the plate. One route holds V along the equipotential ; the other follows a field line, on which at every point.       The Fall Line on a Ski Slope   A mountainside has elevation, in feet, with and in feet. A skier stands at . Her gravitational potential energy is , so the downhill force she feels is a positive multiple of .     Find the fall line , the unit vector of steepest descent, and the grade of the slope there, expressed as a percent (feet dropped per hundred feet travelled).    A traverse is a route on which she neither climbs nor descends. Find the two unit vectors that accomplish this.    She wants a gentler line of exactly grade. Using , find the angle between her heading and the fall line.           , so . Steepest descent is along , and , a grade of about .     , tangent to the contour line of constant elevation through .     , so off the fall line, on either side.      Part (a) says the grade is . Here is what that number is, on the hill itself. The vertical plane through in the direction cuts the surface in the gold curve; the red line is that curve's tangent at ; and is the angle it makes with the horizontal. Since , the grade is the tangent of that angle. Swing with the slider: is largest along the fall line, where and , and it closes to nothing along the contour, where the tangent line lies flat.     The mountainside . Compare the fall line, the level traverse, and the line. Watch the grade readout drift away from as the skier leaves , since the angle in part (c) is computed at only.       Sailing the Isobars of a Low   Near the center of a low-pressure system the sea-level pressure, in millibars, is modeled by with and in miles from the center of the low. A ship sits at .     Find the pressure at the ship and there. The pressure-gradient force per unit volume of air is a positive multiple of ; in which unit direction does it push, and what is in millibars per mile?    A second ship 40 miles from the center reports a stronger wind. Using this model, explain why supports that report.    The captain decides to hold a constant barometer reading. Give the two possible unit headings at , and describe the shape of the full route.           mb, and gives . The force points along , that is, inward toward the low, and mb\/mi.    Here grows linearly with distance from the center, so at 40 miles it is mb\/mi, nearly double the value at the first ship. (Real storms reverse this trend close to the eye; the model is only reasonable over a limited annulus.)     . Since the level curves of are the circles , holding the barometer steady means circling the storm at a fixed radius of miles.     Use the interactive figure to explore the problem further geometrically, switching between the two headings and watching how the barometer responds as the ship moves.   The pressure field around a low. One heading circles the eye at constant mb; the other runs outward along . The distance readout shows why grows with radius.      "
},
{
  "id": "ex-electrostatic-plate",
  "level": "2",
  "url": "exercises-gradient-applications.html#ex-electrostatic-plate",
  "type": "Exercise",
  "number": "7.6.1",
  "title": "Electric Potential on a Coated Plate.",
  "body": " Electric Potential on a Coated Plate   The electric potential on a thin coated plate, in volts, is with and in centimeters. Consider the point .     Find at and the electric field there. Along which unit vector does the potential drop most rapidly, and at what rate?    A test charge is nudged along . Compute at .    Find the two unit vectors along which the potential does not change, and name the curve they are tangent to.           , so and V\/cm. The potential drops fastest along , at the rate V\/cm.     in V\/cm. The potential rises slightly along this heading.     . These are tangent to the equipotential ellipse through , and they are orthogonal to , as they must be.      The potential on the plate. One route holds V along the equipotential ; the other follows a field line, on which at every point.     "
},
{
  "id": "ex-fall-line",
  "level": "2",
  "url": "exercises-gradient-applications.html#ex-fall-line",
  "type": "Exercise",
  "number": "7.6.2",
  "title": "The Fall Line on a Ski Slope.",
  "body": " The Fall Line on a Ski Slope   A mountainside has elevation, in feet, with and in feet. A skier stands at . Her gravitational potential energy is , so the downhill force she feels is a positive multiple of .     Find the fall line , the unit vector of steepest descent, and the grade of the slope there, expressed as a percent (feet dropped per hundred feet travelled).    A traverse is a route on which she neither climbs nor descends. Find the two unit vectors that accomplish this.    She wants a gentler line of exactly grade. Using , find the angle between her heading and the fall line.           , so . Steepest descent is along , and , a grade of about .     , tangent to the contour line of constant elevation through .     , so off the fall line, on either side.      Part (a) says the grade is . Here is what that number is, on the hill itself. The vertical plane through in the direction cuts the surface in the gold curve; the red line is that curve's tangent at ; and is the angle it makes with the horizontal. Since , the grade is the tangent of that angle. Swing with the slider: is largest along the fall line, where and , and it closes to nothing along the contour, where the tangent line lies flat.     The mountainside . Compare the fall line, the level traverse, and the line. Watch the grade readout drift away from as the skier leaves , since the angle in part (c) is computed at only.     "
},
{
  "id": "ex-isobars-low",
  "level": "2",
  "url": "exercises-gradient-applications.html#ex-isobars-low",
  "type": "Exercise",
  "number": "7.6.3",
  "title": "Sailing the Isobars of a Low.",
  "body": " Sailing the Isobars of a Low   Near the center of a low-pressure system the sea-level pressure, in millibars, is modeled by with and in miles from the center of the low. A ship sits at .     Find the pressure at the ship and there. The pressure-gradient force per unit volume of air is a positive multiple of ; in which unit direction does it push, and what is in millibars per mile?    A second ship 40 miles from the center reports a stronger wind. Using this model, explain why supports that report.    The captain decides to hold a constant barometer reading. Give the two possible unit headings at , and describe the shape of the full route.           mb, and gives . The force points along , that is, inward toward the low, and mb\/mi.    Here grows linearly with distance from the center, so at 40 miles it is mb\/mi, nearly double the value at the first ship. (Real storms reverse this trend close to the eye; the model is only reasonable over a limited annulus.)     . Since the level curves of are the circles , holding the barometer steady means circling the storm at a fixed radius of miles.     Use the interactive figure to explore the problem further geometrically, switching between the two headings and watching how the barometer responds as the ship moves.   The pressure field around a low. One heading circles the eye at constant mb; the other runs outward along . The distance readout shows why grows with radius.     "
},
{
  "id": "sec-local-extrema",
  "level": "1",
  "url": "sec-local-extrema.html",
  "type": "Section",
  "number": "8.1",
  "title": "Local Maximum and Local Minimum",
  "body": " Local Maximum and Local Minimum   Local Maximum and Local Minimum   Let the domain of the function contain the point . Then      is a local minimum if for all the points in an open disk centered at .     is a local maximum if for all the points in an open disk centered at .       As the first example, consider the function . We have already studied this function and we know that it represents a paraboloid. Note that we can find a disk centered at the point such that for all the points inside the disk, as shown in , and hence by definition is a local minimum of , as shown in .   The paraboloid . Over an open disk centered at , the value is smaller than every other value of the function, so is a local minimum.     An open disk in the domain of centered at . For every point inside the disk we have , so is a local minimum.         (0,0)    f(0,0)\\le f(x,y)               The next example is the function . Note that we can find a disk centered at the point such that for all the points inside the disk and hence by definition is a local maximum of , as shown in and .   The paraboloid opens downward. Over an open disk centered at , the value is larger than every other value of the function, so is a local maximum.     The trace of the surface in the plane is the parabola , which has a maximum at the origin. By symmetry, every vertical cross-section through the origin has the same shape.     g(x) = -x^2       \\text{Local maximum}    z=-x^2               Theorem I   If has a local maximum or minimum at an interior point of its domain and if the first partial derivatives exist there, then     As an example, consider the function , which has a local minimum at . You can easily check that .   Critical Point   An interior point of the domain of a function where both and are zero or where one or both of and do not exist is a critical point of . Note that not every critical point is a local extremum.     Saddle Point   A differentiable function has a saddle point at a critical point if in every open disk centered at there are domain points where and domain points where . The corresponding point on the surface is called a saddle point of the surface.    "
},
{
  "id": "def-local-extrema",
  "level": "2",
  "url": "sec-local-extrema.html#def-local-extrema",
  "type": "Definition",
  "number": "8.1",
  "title": "Local Maximum and Local Minimum.",
  "body": " Local Maximum and Local Minimum   Let the domain of the function contain the point . Then      is a local minimum if for all the points in an open disk centered at .     is a local maximum if for all the points in an open disk centered at .      "
},
{
  "id": "fig-local-min-video",
  "level": "2",
  "url": "sec-local-extrema.html#fig-local-min-video",
  "type": "Figure",
  "number": "8.2",
  "title": "",
  "body": " The paraboloid . Over an open disk centered at , the value is smaller than every other value of the function, so is a local minimum.   "
},
{
  "id": "fig-local-min-disk",
  "level": "2",
  "url": "sec-local-extrema.html#fig-local-min-disk",
  "type": "Figure",
  "number": "8.3",
  "title": "",
  "body": " An open disk in the domain of centered at . For every point inside the disk we have , so is a local minimum.         (0,0)    f(0,0)\\le f(x,y)              "
},
{
  "id": "fig-local-max-video",
  "level": "2",
  "url": "sec-local-extrema.html#fig-local-max-video",
  "type": "Figure",
  "number": "8.4",
  "title": "",
  "body": " The paraboloid opens downward. Over an open disk centered at , the value is larger than every other value of the function, so is a local maximum.   "
},
{
  "id": "fig-local-max-trace",
  "level": "2",
  "url": "sec-local-extrema.html#fig-local-max-trace",
  "type": "Figure",
  "number": "8.5",
  "title": "",
  "body": " The trace of the surface in the plane is the parabola , which has a maximum at the origin. By symmetry, every vertical cross-section through the origin has the same shape.     g(x) = -x^2       \\text{Local maximum}    z=-x^2             "
},
{
  "id": "thm-first-derivative-test",
  "level": "2",
  "url": "sec-local-extrema.html#thm-first-derivative-test",
  "type": "Theorem",
  "number": "8.6",
  "title": "Theorem I.",
  "body": " Theorem I   If has a local maximum or minimum at an interior point of its domain and if the first partial derivatives exist there, then    "
},
{
  "id": "def-critical-point",
  "level": "2",
  "url": "sec-local-extrema.html#def-critical-point",
  "type": "Definition",
  "number": "8.7",
  "title": "Critical Point.",
  "body": " Critical Point   An interior point of the domain of a function where both and are zero or where one or both of and do not exist is a critical point of . Note that not every critical point is a local extremum.   "
},
{
  "id": "def-saddle-point",
  "level": "2",
  "url": "sec-local-extrema.html#def-saddle-point",
  "type": "Definition",
  "number": "8.8",
  "title": "Saddle Point.",
  "body": " Saddle Point   A differentiable function has a saddle point at a critical point if in every open disk centered at there are domain points where and domain points where . The corresponding point on the surface is called a saddle point of the surface.   "
},
{
  "id": "sec-saddle-example",
  "level": "1",
  "url": "sec-saddle-example.html",
  "type": "Section",
  "number": "8.2",
  "title": "A Saddle Point Example",
  "body": " A Saddle Point Example   Saddle Point   Consider the function   Show that has a saddle point at .     Solution  As we previously studied, this function represents a hyperbolic paraboloid, which is shown in . Note that the first partial derivatives are   The partial derivatives exist everywhere, so the only point at which a local extremum can occur is the point . Note that along the -axis the function takes negative values, , whereas along the -axis the function takes positive values, , as shown in . Hence inside every open disk around , there are points such that and also there are points such that , which means is a saddle point. Note that in this example the two partial derivatives are zero at ; however, the function does not have a local extremum at this point.    The hyperbolic paraboloid . Along the -axis the surface falls below the origin, and along the -axis it rises above the origin, so is a saddle point.     The traces of along the two coordinate planes. In the plane the trace opens downward, while in the plane the trace opens upward, so is a saddle point.     up(t) = t^2\/3  down(t) = -t^2\/3        z=\\dfrac{y^2}{3}    z=-\\dfrac{x^2}{3}               "
},
{
  "id": "example-saddle-point",
  "level": "2",
  "url": "sec-saddle-example.html#example-saddle-point",
  "type": "Example",
  "number": "8.9",
  "title": "Saddle Point.",
  "body": " Saddle Point   Consider the function   Show that has a saddle point at .   "
},
{
  "id": "fig-saddle-video",
  "level": "2",
  "url": "sec-saddle-example.html#fig-saddle-video",
  "type": "Figure",
  "number": "8.10",
  "title": "",
  "body": " The hyperbolic paraboloid . Along the -axis the surface falls below the origin, and along the -axis it rises above the origin, so is a saddle point.   "
},
{
  "id": "fig-saddle-traces",
  "level": "2",
  "url": "sec-saddle-example.html#fig-saddle-traces",
  "type": "Figure",
  "number": "8.11",
  "title": "",
  "body": " The traces of along the two coordinate planes. In the plane the trace opens downward, while in the plane the trace opens upward, so is a saddle point.     up(t) = t^2\/3  down(t) = -t^2\/3        z=\\dfrac{y^2}{3}    z=-\\dfrac{x^2}{3}              "
},
{
  "id": "sec-second-derivative-test",
  "level": "1",
  "url": "sec-second-derivative-test.html",
  "type": "Section",
  "number": "8.3",
  "title": "The Second Derivative Test",
  "body": " The Second Derivative Test   Theorem II (The Second Derivative Test)   Suppose that and its first and second partial derivatives are continuous throughout a disk centered at and that . Then      has a local maximum at if and at .     has a local minimum at if and at .     has a saddle point at if at .     The test is inconclusive at if at . In this case, we must find some other way to determine the behavior of at .       Note that the expression is called the discriminant or the Hessian of the function and can be easily remembered when written in the following form:    Finding Local Extrema and Saddle Points   Find the local maximum and minimum values and saddle points of the function      Solution  We begin by computing the partial derivatives:   We set both partials equal to zero, which gives us:   To solve these equations, we substitute the second equation into the first one:   Therefore, the two partials are zero at the points , , and , as shown in . Next we compute the Hessian and apply the second derivative test. We have , , and , so that   We now evaluate the Hessian at each critical point:      the origin is a saddle point.     and is a local minimum.     and is a local minimum.     Check out the surface in .    The surface has a saddle point at and two local minima, at and .     The critical points of are the intersections of the curves and : a saddle point at and local minima at and .     c1(t) = (t, t^3)  c2(t) = (t^3, t)       (0,0)    (1,1)    (-1,-1)    y=x^3    x=y^3                  Shortest Distance to a Plane   Find the shortest distance from the point to the plane .     Solution  We begin by writing the distance between the point and points on the plane:   Then we use the fact that the points are on the plane, , to express the distance as a function of and only:   We make the observation that to find the shortest distance we can minimize rather than :   We calculate the partials and set them equal to zero:   We subtract the first equation from the second one:   We compute the Hessian:   Since and , the point is a local minimum. However, we know that there is a point on the plane that has the shortest distance to , which means is in fact where the absolute minimum of the distance occurs. To find the shortest distance we plug the point into the distance formula, which gives    "
},
{
  "id": "thm-second-derivative-test",
  "level": "2",
  "url": "sec-second-derivative-test.html#thm-second-derivative-test",
  "type": "Theorem",
  "number": "8.12",
  "title": "Theorem II (The Second Derivative Test).",
  "body": " Theorem II (The Second Derivative Test)   Suppose that and its first and second partial derivatives are continuous throughout a disk centered at and that . Then      has a local maximum at if and at .     has a local minimum at if and at .     has a saddle point at if at .     The test is inconclusive at if at . In this case, we must find some other way to determine the behavior of at .      "
},
{
  "id": "sec-second-derivative-test-3",
  "level": "2",
  "url": "sec-second-derivative-test.html#sec-second-derivative-test-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discriminant Hessian "
},
{
  "id": "example-quartic-extrema",
  "level": "2",
  "url": "sec-second-derivative-test.html#example-quartic-extrema",
  "type": "Example",
  "number": "8.13",
  "title": "Finding Local Extrema and Saddle Points.",
  "body": " Finding Local Extrema and Saddle Points   Find the local maximum and minimum values and saddle points of the function    "
},
{
  "id": "fig-quartic-video",
  "level": "2",
  "url": "sec-second-derivative-test.html#fig-quartic-video",
  "type": "Figure",
  "number": "8.14",
  "title": "",
  "body": " The surface has a saddle point at and two local minima, at and .   "
},
{
  "id": "fig-quartic-critical-points",
  "level": "2",
  "url": "sec-second-derivative-test.html#fig-quartic-critical-points",
  "type": "Figure",
  "number": "8.15",
  "title": "",
  "body": " The critical points of are the intersections of the curves and : a saddle point at and local minima at and .     c1(t) = (t, t^3)  c2(t) = (t^3, t)       (0,0)    (1,1)    (-1,-1)    y=x^3    x=y^3                "
},
{
  "id": "example-shortest-distance",
  "level": "2",
  "url": "sec-second-derivative-test.html#example-shortest-distance",
  "type": "Example",
  "number": "8.16",
  "title": "Shortest Distance to a Plane.",
  "body": " Shortest Distance to a Plane   Find the shortest distance from the point to the plane .   "
},
{
  "id": "sec-absolute-extrema",
  "level": "1",
  "url": "sec-absolute-extrema.html",
  "type": "Section",
  "number": "8.4",
  "title": "Absolute Maximum and Absolute Minimum",
  "body": " Absolute Maximum and Absolute Minimum  In the next example, we will see how to find absolute extrema of a function over a closed bounded region .   Absolute Extrema over a Rectangle   Find the absolute maximum and minimum values of the function on the rectangle      Solution   Step (I): We begin by finding the critical points of that are also in the set :   Therefore, the only critical point is , with .   Step (II): We find the extreme values of on the boundary of , i.e. along the four edges of the rectangle denoted by , , , and , shown in .     Along the first edge , we have and since , the minimum value is and the maximum value is .    Along the second edge , we have and since , the minimum value is and the maximum value is .    Along the third edge , we have and since , the minimum value is and the maximum value is .    Along the fourth edge , we have and since , the minimum value is and the maximum value is .      Step (III): We compare the values obtained in the previous steps. The absolute maximum value of on the rectangle is and its absolute minimum is . The candidate points and the surface are shown in and .    The closed bounded rectangle with its four edges , , , and , and the critical point in its interior.     The rectangle and its four edges. To find the absolute extrema, we evaluate at the critical points inside and compare with the extreme values of along each edge.             (1,1)    R    L_1    L_2    L_3    L_4    3    2                   The surface over the rectangle . The absolute maximum and the absolute minimum occur on the boundary of .     The candidate points for the absolute extrema of on : the interior critical point and the extreme points found along the four edges. Comparing the values of , the absolute maximum is and the absolute minimum is .         f=0    f=0    f=9    f=4    f=1    f=1                   "
},
{
  "id": "example-absolute-extrema",
  "level": "2",
  "url": "sec-absolute-extrema.html#example-absolute-extrema",
  "type": "Example",
  "number": "8.17",
  "title": "Absolute Extrema over a Rectangle.",
  "body": " Absolute Extrema over a Rectangle   Find the absolute maximum and minimum values of the function on the rectangle    "
},
{
  "id": "fig-rectangle-region-video",
  "level": "2",
  "url": "sec-absolute-extrema.html#fig-rectangle-region-video",
  "type": "Figure",
  "number": "8.18",
  "title": "",
  "body": " The closed bounded rectangle with its four edges , , , and , and the critical point in its interior.   "
},
{
  "id": "fig-rectangle-region",
  "level": "2",
  "url": "sec-absolute-extrema.html#fig-rectangle-region",
  "type": "Figure",
  "number": "8.19",
  "title": "",
  "body": " The rectangle and its four edges. To find the absolute extrema, we evaluate at the critical points inside and compare with the extreme values of along each edge.             (1,1)    R    L_1    L_2    L_3    L_4    3    2                 "
},
{
  "id": "fig-absolute-extrema-surface-video",
  "level": "2",
  "url": "sec-absolute-extrema.html#fig-absolute-extrema-surface-video",
  "type": "Figure",
  "number": "8.20",
  "title": "",
  "body": " The surface over the rectangle . The absolute maximum and the absolute minimum occur on the boundary of .   "
},
{
  "id": "fig-absolute-candidates",
  "level": "2",
  "url": "sec-absolute-extrema.html#fig-absolute-candidates",
  "type": "Figure",
  "number": "8.21",
  "title": "",
  "body": " The candidate points for the absolute extrema of on : the interior critical point and the extreme points found along the four edges. Comparing the values of , the absolute maximum is and the absolute minimum is .         f=0    f=0    f=9    f=4    f=1    f=1                  "
},
{
  "id": "sec-equilibrium-stability",
  "level": "1",
  "url": "sec-equilibrium-stability.html",
  "type": "Section",
  "number": "8.5",
  "title": "A Physical Application: Equilibrium and Stability",
  "body": " A Physical Application: Equilibrium and Stability  Consider a marble that rolls on the surface under the influence of gravity. If we measure heights from the -plane, the potential energy of the marble at the point of the surface is where is the mass of the marble and is the acceleration due to gravity. The marble is in equilibrium at a point where the force along the surface vanishes, which happens exactly where both partial derivatives of the potential energy are zero:   In other words, the equilibrium points of the marble are precisely the critical points of . The second derivative test then tells us whether the equilibrium is stable (a displaced marble rolls back) or unstable (a displaced marble rolls away).   Equilibrium and Stability of a Marble   A marble rests at the origin on each of the following three surfaces:   Show that is an equilibrium point in each case, and determine whether the equilibrium is stable or unstable.     Solution  In each case the potential energy is , so by the equilibrium points are the critical points of . For all three surfaces we have , so the origin is an equilibrium point in each case. We classify each equilibrium with the second derivative test, as shown in .   Case (i): For we have and , so and , and the origin is a local minimum of the potential energy. A marble displaced slightly in any direction rolls back toward the bottom: the equilibrium is stable .   Case (ii): For we have and , so and , and the origin is a local maximum of the potential energy. A marble displaced slightly in any direction rolls away from the top: the equilibrium is unstable .   Case (iii): For we have , , and , so , and the origin is a saddle point. Along the -axis the potential energy rises, so a marble displaced in the -direction rolls back; but along the -axis the potential energy falls, so a marble displaced in the -direction rolls away. Since some displacements grow, the equilibrium is unstable .  The general principle illustrated by this example, shown in , is that an equilibrium is stable exactly when the potential energy has a local minimum there.    A marble at an equilibrium point on each of the three surfaces. On the bowl a displaced marble rolls back (stable); on the dome it rolls away (unstable); on the saddle it rolls back along the -direction but away along the -direction (unstable).     Cross-sections of the potential energy near an equilibrium point. Along a direction where has a minimum (blue), the force is restoring and pushes the marble back: stable. Along a direction where has a maximum (red), the force pushes the marble away: unstable. For the bowl, every cross-section is the blue type; for the dome, every cross-section is the red type; a saddle has one of each.     stable(x) = 0.9*x^2  unstable(x) = -0.9*x^2            \\text{stable}    \\text{unstable}    U                   "
},
{
  "id": "sec-equilibrium-stability-2",
  "level": "2",
  "url": "sec-equilibrium-stability.html#sec-equilibrium-stability-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium "
},
{
  "id": "sec-equilibrium-stability-3",
  "level": "2",
  "url": "sec-equilibrium-stability.html#sec-equilibrium-stability-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable "
},
{
  "id": "example-marble-stability",
  "level": "2",
  "url": "sec-equilibrium-stability.html#example-marble-stability",
  "type": "Example",
  "number": "8.22",
  "title": "Equilibrium and Stability of a Marble.",
  "body": " Equilibrium and Stability of a Marble   A marble rests at the origin on each of the following three surfaces:   Show that is an equilibrium point in each case, and determine whether the equilibrium is stable or unstable.   "
},
{
  "id": "fig-stability-video",
  "level": "2",
  "url": "sec-equilibrium-stability.html#fig-stability-video",
  "type": "Figure",
  "number": "8.23",
  "title": "",
  "body": " A marble at an equilibrium point on each of the three surfaces. On the bowl a displaced marble rolls back (stable); on the dome it rolls away (unstable); on the saddle it rolls back along the -direction but away along the -direction (unstable).   "
},
{
  "id": "fig-stability-cross-sections",
  "level": "2",
  "url": "sec-equilibrium-stability.html#fig-stability-cross-sections",
  "type": "Figure",
  "number": "8.24",
  "title": "",
  "body": " Cross-sections of the potential energy near an equilibrium point. Along a direction where has a minimum (blue), the force is restoring and pushes the marble back: stable. Along a direction where has a maximum (red), the force pushes the marble away: unstable. For the bowl, every cross-section is the blue type; for the dome, every cross-section is the red type; a saddle has one of each.     stable(x) = 0.9*x^2  unstable(x) = -0.9*x^2            \\text{stable}    \\text{unstable}    U                  "
},
{
  "id": "sec-why-second-derivative-test",
  "level": "1",
  "url": "sec-why-second-derivative-test.html",
  "type": "Section",
  "number": "8.6",
  "title": "Why the Second Derivative Test Works",
  "body": " Why the Second Derivative Test Works  Where do the conditions of come from? The key idea is to take the directional derivative twice . At a critical point every direction looks flat to the first derivative, so we ask the second derivative how the surface curves as we walk away from the point in each direction. The video in animates the argument; the equations that appear in it are derived in detail below.   Slicing a surface through a critical point in a rotating unit direction . The second directional derivative is the curvature of the slice: one sign for all directions gives a local extremum, both signs give a saddle point, and completing the square shows that the discriminant decides between the two.      Slicing the surface in a direction  Suppose has continuous first and second partial derivatives near a critical point , so that . Fix a unit vector and walk away from the critical point along the line through in the direction of . The height of the surface above this line is the single-variable function which is exactly the slice of the surface cut by the vertical plane through containing . In the video this slice is the highlighted curve, drawn green where it curves upward and red where it curves downward.     The first directional derivative  By the chain rule, with and (so that and ),   This is the ordinary directional derivative of in the direction . At the critical point, for every choice of : each slice has a horizontal tangent line at . This is why the first derivative alone cannot distinguish a minimum from a maximum from a saddle, and why we must differentiate once more.     The second directional derivative  Apply to the function . Differentiating with the chain rule again, and using the equality of the mixed partials ( ), which holds because the second partials are continuous),   The number is the curvature of the slice at the critical point: if it is positive the slice is concave up in the direction , and if it is negative the slice is concave down. By the single-variable second derivative test applied to , the critical point is     a local minimum if for every direction ,    a local maximum if for every direction ,    a saddle point if is positive for some directions and negative for others, since the surface then rises along some lines through and falls along others.     Writing , equation becomes a function of the direction angle, which is the curve plotted against in the video. For it is the constant (always positive: a minimum); for it is the constant (always negative: a maximum); and for it equals , which changes sign four times as makes a full turn: a saddle point.     Completing the square: the discriminant appears  Checking the sign of one direction at a time is impossible; there are infinitely many directions. Instead, suppose , multiply by , and complete the square in :   (Expanding the square in reproduces the first line: the cross terms match, and the produced by the square is subtracted off again by the second term.) Every quantity on the right-hand side is now a perfect square except the coefficient the discriminant (the Hessian determinant of ). The sign of in every direction at once is therefore controlled by just the two numbers and , evaluated at the critical point.     Reading off the four cases      Case . The right-hand side of is a sum of two nonnegative terms, and it cannot vanish: if then and the first term is , while if the second term is positive. Hence for every direction, so has the same sign as  in every direction. (Note forces , since would give .) If , every slice is concave up and is a local minimum; if , every slice is concave down and is a local maximum.     Case . The two terms in now compete. If , taking gives , while choosing proportional to kills the perfect square and gives . So takes both signs and is a saddle point. (If and , run the same argument with the roles of and exchanged; if , then means , and visibly changes sign between the directions where and where .)     Case . Equation degenerates to a single perfect square, which vanishes along the direction proportional to . In that direction the second derivative gives no information, and the behavior of is decided by higher-order terms: the test is inconclusive .     These are precisely conditions (i) (iv) of . One technical remark: the argument above examines only straight-line slices through , which by itself is not quite enough (a function can increase along every line yet fail to have a local minimum). The full proof replaces near by its second-order Taylor expansion; continuity of the second partials guarantees that when the quadratic form keeps its sign uniformly on a small disk around , which upgrades the line-by-line conclusion to a genuine local one.   "
},
{
  "id": "fig-why-sdt-video",
  "level": "2",
  "url": "sec-why-second-derivative-test.html#fig-why-sdt-video",
  "type": "Figure",
  "number": "8.25",
  "title": "",
  "body": " Slicing a surface through a critical point in a rotating unit direction . The second directional derivative is the curvature of the slice: one sign for all directions gives a local extremum, both signs give a saddle point, and completing the square shows that the discriminant decides between the two.   "
},
{
  "id": "sec-why-second-derivative-test-4-2",
  "level": "2",
  "url": "sec-why-second-derivative-test.html#sec-why-second-derivative-test-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slice "
},
{
  "id": "sec-why-second-derivative-test-6-3",
  "level": "2",
  "url": "sec-why-second-derivative-test.html#sec-why-second-derivative-test-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curvature of the slice "
},
{
  "id": "exercises-projectile-velocity",
  "level": "1",
  "url": "exercises-projectile-velocity.html",
  "type": "Worksheet",
  "number": "9.1",
  "title": "Exercises for Parametrization of Plane Curves",
  "body": " Exercises for   If you would like to review this topic before attempting the exercises, click .  The exercises below on the velocity and direction of a projectile after a given time use the figure of a projectile at a general instant.   A particle projected from with speed at elevation . At the point reached after time , the velocity is tangent to the path and makes an angle with the horizontal; is the depth of below the directrix.      f(x) = 0.2*x*(8 - x)      \\text{directrix}      h    \\theta  v_0     v\\cos\\phi  v\\sin\\phi    \\phi  v     O  P                          A particle is projected from with speed at an elevation to the horizontal, as in . At time it is at the point , moving with speed in a direction making an angle with the horizontal. Show that and     Take the origin at with horizontal and vertical axes. The coordinates of at time are The horizontal and vertical components of the velocity are the time derivatives of these, so Squaring and adding eliminates : which gives the speed at time . Dividing the vertical component by the horizontal component gives the direction, that is, .      The directrix of the parabolic path is the horizontal line at height above . Using the previous exercise, show that the speed of the particle at is equal to the speed it would acquire by falling freely from the level of the directrix down to . That is, if denotes the depth of below the directrix (see ), then .    From the previous exercise, since is the height of . Writing this as and recognizing as the height of the directrix above , the quantity is exactly the depth of below the directrix. Hence , the square of the speed gained by falling freely through the height .    "
},
{
  "id": "fig-velocity-at-P",
  "level": "2",
  "url": "exercises-projectile-velocity.html#fig-velocity-at-P",
  "type": "Figure",
  "number": "9.1",
  "title": "",
  "body": " A particle projected from with speed at elevation . At the point reached after time , the velocity is tangent to the path and makes an angle with the horizontal; is the depth of below the directrix.      f(x) = 0.2*x*(8 - x)      \\text{directrix}      h    \\theta  v_0     v\\cos\\phi  v\\sin\\phi    \\phi  v     O  P                      "
},
{
  "id": "exercise-velocity-direction",
  "level": "2",
  "url": "exercises-projectile-velocity.html#exercise-velocity-direction",
  "type": "Worksheet Exercise",
  "number": "9.1.1",
  "title": "",
  "body": "  A particle is projected from with speed at an elevation to the horizontal, as in . At time it is at the point , moving with speed in a direction making an angle with the horizontal. Show that and     Take the origin at with horizontal and vertical axes. The coordinates of at time are The horizontal and vertical components of the velocity are the time derivatives of these, so Squaring and adding eliminates : which gives the speed at time . Dividing the vertical component by the horizontal component gives the direction, that is, .   "
},
{
  "id": "exercise-directrix-freefall",
  "level": "2",
  "url": "exercises-projectile-velocity.html#exercise-directrix-freefall",
  "type": "Worksheet Exercise",
  "number": "9.1.2",
  "title": "",
  "body": "  The directrix of the parabolic path is the horizontal line at height above . Using the previous exercise, show that the speed of the particle at is equal to the speed it would acquire by falling freely from the level of the directrix down to . That is, if denotes the depth of below the directrix (see ), then .    From the previous exercise, since is the height of . Writing this as and recognizing as the height of the directrix above , the quantity is exactly the depth of below the directrix. Hence , the square of the speed gained by falling freely through the height .   "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "9.2",
  "title": "Exercises for Taylor Series and its convergence",
  "body": " Exercises for   If you would like to review this topic before attempting the exercises, click .     True or False   If we manage to find the maximum value of for in the interval between and , then we can find the exact error in the Taylor polynomial approximation.    The statement is incorrect. While finding the maximum value of allows us to find an upper bound for the error, it does not give the exact error.     Approximating The Electric Field due to an Electric Dipole   Consider an electric dipole consisting of two charges, and , separated by a distance . The electric field at a point located at a distance from the positive charge along the axis of the dipole is given by:    An electric dipole: charges and separated by a distance , with the field point a distance from the positive charge along the axis.      xneg = -1.1  xpos = 0  xP = 3.2      -q     +q     P       d       r                 Use the Taylor series to approximate the electric field at point for . Show that the leading term in the approximation is proportional to .    To approximate the electric field at point for , we can use the Taylor series expansion for the function around .  We have:   Using the binomial series expansion, we can write:   Substituting and , we get:    Now, we can write the electric field as:   Substituting the Taylor series expansion for and , we get:   Simplifying, we have:   Thus, the leading term in the approximation is: which shows that the leading term is proportional to .   The axial field of a dipole, , compared with its leading Taylor term for . The leading term overshoots slightly at small but converges to the exact field as grows.      Eexact(r) = 1\/r^2 - 1\/(r+1)^2  Elead(r) = 2\/r^3       \\dfrac{2qd}{4\\pi\\epsilon_0 r^3} \\propto \\dfrac{d}{r^3}    E = \\dfrac{1}{4\\pi\\epsilon_0}\\!\\left( \\dfrac{q}{r^2} - \\dfrac{q}{(r+d)^2} \\right)    d \\ll r                 How small must the separation be?   A dipole is often treated as a point dipole by replacing the exact axial field with its leading-order Taylor term for , Suppose this approximation must agree with the exact field to within a relative error of . If the field point is from the positive charge, how small must the charge separation be for the point-dipole approximation to be valid?    The dominant error comes from the next term in the expansion. Using , form the relative error of the leading term and keep only the largest contribution.         From the Taylor expansion, the leading term is , and the first neglected term is . The relative error of the approximation is therefore Notice that and cancel, so the relative error depends only on the ratio . Requiring this to be at most gives With , So the point-dipole approximation is accurate to only when the charges are separated by less than about at this distance consistent with , where the two curves visibly merge as grows relative to .    "
},
{
  "id": "ex-tf-1",
  "level": "2",
  "url": "activity-01-intro-activity.html#ex-tf-1",
  "type": "Worksheet Exercise",
  "number": "9.2.1",
  "title": "True or False.",
  "body": " True or False   If we manage to find the maximum value of for in the interval between and , then we can find the exact error in the Taylor polynomial approximation.    The statement is incorrect. While finding the maximum value of allows us to find an upper bound for the error, it does not give the exact error.   "
},
{
  "id": "activity-01-intro-activity-4",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-4",
  "type": "Worksheet Exercise",
  "number": "9.2.2",
  "title": "Approximating The Electric Field due to an Electric Dipole.",
  "body": " Approximating The Electric Field due to an Electric Dipole   Consider an electric dipole consisting of two charges, and , separated by a distance . The electric field at a point located at a distance from the positive charge along the axis of the dipole is given by:    An electric dipole: charges and separated by a distance , with the field point a distance from the positive charge along the axis.      xneg = -1.1  xpos = 0  xP = 3.2      -q     +q     P       d       r                 Use the Taylor series to approximate the electric field at point for . Show that the leading term in the approximation is proportional to .    To approximate the electric field at point for , we can use the Taylor series expansion for the function around .  We have:   Using the binomial series expansion, we can write:   Substituting and , we get:    Now, we can write the electric field as:   Substituting the Taylor series expansion for and , we get:   Simplifying, we have:   Thus, the leading term in the approximation is: which shows that the leading term is proportional to .   The axial field of a dipole, , compared with its leading Taylor term for . The leading term overshoots slightly at small but converges to the exact field as grows.      Eexact(r) = 1\/r^2 - 1\/(r+1)^2  Elead(r) = 2\/r^3       \\dfrac{2qd}{4\\pi\\epsilon_0 r^3} \\propto \\dfrac{d}{r^3}    E = \\dfrac{1}{4\\pi\\epsilon_0}\\!\\left( \\dfrac{q}{r^2} - \\dfrac{q}{(r+d)^2} \\right)    d \\ll r               "
},
{
  "id": "exer-dipole-tolerance",
  "level": "2",
  "url": "activity-01-intro-activity.html#exer-dipole-tolerance",
  "type": "Worksheet Exercise",
  "number": "9.2.3",
  "title": "How small must the separation be?",
  "body": " How small must the separation be?   A dipole is often treated as a point dipole by replacing the exact axial field with its leading-order Taylor term for , Suppose this approximation must agree with the exact field to within a relative error of . If the field point is from the positive charge, how small must the charge separation be for the point-dipole approximation to be valid?    The dominant error comes from the next term in the expansion. Using , form the relative error of the leading term and keep only the largest contribution.         From the Taylor expansion, the leading term is , and the first neglected term is . The relative error of the approximation is therefore Notice that and cancel, so the relative error depends only on the ratio . Requiring this to be at most gives With , So the point-dipole approximation is accurate to only when the charges are separated by less than about at this distance consistent with , where the two curves visibly merge as grows relative to .   "
},
{
  "id": "section-conics-exercises",
  "level": "1",
  "url": "section-conics-exercises.html",
  "type": "Worksheet",
  "number": "9.3",
  "title": "Exercises for Conic Sections",
  "body": " Exercises for   If you would like to review this topic before attempting the exercises, click .    A Parabolic Antenna   A parabolic antenna has the shape of a paraboloid of revolution: it is created by rotating part of a parabola around its axis. By the reflection property, all signals arriving parallel to the axis are concentrated at the focus after reflecting off the dish, so that is where the receiver is mounted. The axial cross-section of the dish is described by two measurements: the diameter  of the dish and its depth  . Placing the vertex at the origin with the dish opening upward, the cross-section is the parabola , and the rim passes through the points .  Consider a dish antenna with diameter cm and depth cm, suitable for the amateur radio band at GHz.   Cross-section of the parabolic antenna: diameter , depth , focus , and opening angle .    A parabola opening upward with vertex at the origin. The rim points at (minus d over 2, h) and (d over 2, h) are joined by a horizontal double arrow labeled d. A vertical double arrow labeled h shows the depth from the rim down to the axis level. The focus F(0,p) lies on the y axis above the rim, and two segments run from the focus to the rim points, enclosing the opening angle two phi.     d = 120  h = 20.3  p = d^2\/(16*h)  f(x) = x^2\/(4*p)        2\\varphi    d   h   \\left(-\\tfrac{d}{2},\\,h\\right)    \\left(\\tfrac{d}{2},\\,h\\right)    F(0,p)                        Determine the optimal location for the receiver, that is, find the distance from the vertex of the dish to the focus.    The receiver must sit at the focus . The rim point lies on the parabola , so   The receiver should be mounted on the axis about cm above the vertex of the dish. Note that here, so the focus sits above the rim of this shallow dish.      Find the quadratic function (explicit form) that describes the curvature of the dish, and graph it (for example, in GeoGebra or Desmos).    Solving for with gives   The graph captures the true curvature of the dish provided both axes use the same scale.      The opening angle  of the dish is the angle at which the two edges of the rim are seen from the focus. Compute it.    The focus , the point , and the rim point form a right triangle with legs (vertical) and (horizontal), and is the angle at the focus. Hence    The right triangle used to compute the half opening angle : legs and .    The same parabola and focus as before, with a red right triangle drawn from the focus: a vertical leg of length p minus h down to the rim level, a horizontal leg of length d over 2 out to the right rim point, and the segment from the focus to the rim point as hypotenuse. The angle phi at the focus is marked.     d = 120  h = 20.3  p = d^2\/(16*h)  f(x) = x^2\/(4*p)            \\varphi   p-h  d\/2   h   \\left(-\\tfrac{d}{2},\\,h\\right)    \\left(\\tfrac{d}{2},\\,h\\right)    F(0,p)                    The opening angle of the dish is .     "
},
{
  "id": "exer-parabolic-antenna",
  "level": "2",
  "url": "section-conics-exercises.html#exer-parabolic-antenna",
  "type": "Worksheet Exercise",
  "number": "9.3.1",
  "title": "A Parabolic Antenna.",
  "body": " A Parabolic Antenna   A parabolic antenna has the shape of a paraboloid of revolution: it is created by rotating part of a parabola around its axis. By the reflection property, all signals arriving parallel to the axis are concentrated at the focus after reflecting off the dish, so that is where the receiver is mounted. The axial cross-section of the dish is described by two measurements: the diameter  of the dish and its depth  . Placing the vertex at the origin with the dish opening upward, the cross-section is the parabola , and the rim passes through the points .  Consider a dish antenna with diameter cm and depth cm, suitable for the amateur radio band at GHz.   Cross-section of the parabolic antenna: diameter , depth , focus , and opening angle .    A parabola opening upward with vertex at the origin. The rim points at (minus d over 2, h) and (d over 2, h) are joined by a horizontal double arrow labeled d. A vertical double arrow labeled h shows the depth from the rim down to the axis level. The focus F(0,p) lies on the y axis above the rim, and two segments run from the focus to the rim points, enclosing the opening angle two phi.     d = 120  h = 20.3  p = d^2\/(16*h)  f(x) = x^2\/(4*p)        2\\varphi    d   h   \\left(-\\tfrac{d}{2},\\,h\\right)    \\left(\\tfrac{d}{2},\\,h\\right)    F(0,p)                        Determine the optimal location for the receiver, that is, find the distance from the vertex of the dish to the focus.    The receiver must sit at the focus . The rim point lies on the parabola , so   The receiver should be mounted on the axis about cm above the vertex of the dish. Note that here, so the focus sits above the rim of this shallow dish.      Find the quadratic function (explicit form) that describes the curvature of the dish, and graph it (for example, in GeoGebra or Desmos).    Solving for with gives   The graph captures the true curvature of the dish provided both axes use the same scale.      The opening angle  of the dish is the angle at which the two edges of the rim are seen from the focus. Compute it.    The focus , the point , and the rim point form a right triangle with legs (vertical) and (horizontal), and is the angle at the focus. Hence    The right triangle used to compute the half opening angle : legs and .    The same parabola and focus as before, with a red right triangle drawn from the focus: a vertical leg of length p minus h down to the rim level, a horizontal leg of length d over 2 out to the right rim point, and the segment from the focus to the rim point as hypotenuse. The angle phi at the focus is marked.     d = 120  h = 20.3  p = d^2\/(16*h)  f(x) = x^2\/(4*p)            \\varphi   p-h  d\/2   h   \\left(-\\tfrac{d}{2},\\,h\\right)    \\left(\\tfrac{d}{2},\\,h\\right)    F(0,p)                    The opening angle of the dish is .    "
},
{
  "id": "exercises-quadric-surfaces",
  "level": "1",
  "url": "exercises-quadric-surfaces.html",
  "type": "Worksheet",
  "number": "9.4",
  "title": "Exercises for Quadric Surfaces",
  "body": " Exercises for   If you would like to review this topic before attempting the exercises, click .    Matching Quadric Surfaces    Six quadric surfaces labeled A through F: an ellipsoid, a cone opening along the y axis, a saddle, a cylinder parallel to the y axis, a paraboloid opening along the positive y axis, and two bowl-shaped pieces meeting at the origin.       Match the equations of the surfaces with the graphs A F shown above by entering a letter from A to F in each blank.  matches graph .  matches graph .  matches graph .  matches graph .                       We identify each surface by slicing, just as in this section. Here the special axis is the -axis, so we slice with the planes  and  For the plane gives no trace for a single point when and ellipses that grow as increases. The planes and give the parabolas and both opening in the positive direction. Ellipses on one side only together with parabolas: an elliptical paraboloid opening along the positive -axis, graph E.  For the plane gives an ellipse for every on both sides of the origin, shrinking to a single point when The plane gives the two crossing lines Ellipses collapsing to a point, together with crossing lines: an elliptic cone along the -axis, graph B.  For the variable is missing, so the plane gives the same ellipse for every value of Identical elliptical slices at every station: a cylinder parallel to the -axis, graph D.  For the plane gives the parabola opening in the positive direction, while the plane gives the parabola opening in the negative direction, and the plane gives the crossing lines Parabolas opening in opposite directions: a hyperbolic paraboloid, a saddle, graph C.  Graphs A and F match none of the equations. Slicing the ellipsoid in A gives bounded ellipses in every direction, which none of the equations produce. Slicing the two bowls in F with planes gives ellipses whose size grows like unlike the straight-sided linear growth of the cone in B.        "
},
{
  "id": "exercise-quadric-graph-match",
  "level": "2",
  "url": "exercises-quadric-surfaces.html#exercise-quadric-graph-match",
  "type": "Worksheet Exercise",
  "number": "9.4.1",
  "title": "Matching Quadric Surfaces.",
  "body": " Matching Quadric Surfaces    Six quadric surfaces labeled A through F: an ellipsoid, a cone opening along the y axis, a saddle, a cylinder parallel to the y axis, a paraboloid opening along the positive y axis, and two bowl-shaped pieces meeting at the origin.       Match the equations of the surfaces with the graphs A F shown above by entering a letter from A to F in each blank.  matches graph .  matches graph .  matches graph .  matches graph .                       We identify each surface by slicing, just as in this section. Here the special axis is the -axis, so we slice with the planes  and  For the plane gives no trace for a single point when and ellipses that grow as increases. The planes and give the parabolas and both opening in the positive direction. Ellipses on one side only together with parabolas: an elliptical paraboloid opening along the positive -axis, graph E.  For the plane gives an ellipse for every on both sides of the origin, shrinking to a single point when The plane gives the two crossing lines Ellipses collapsing to a point, together with crossing lines: an elliptic cone along the -axis, graph B.  For the variable is missing, so the plane gives the same ellipse for every value of Identical elliptical slices at every station: a cylinder parallel to the -axis, graph D.  For the plane gives the parabola opening in the positive direction, while the plane gives the parabola opening in the negative direction, and the plane gives the crossing lines Parabolas opening in opposite directions: a hyperbolic paraboloid, a saddle, graph C.  Graphs A and F match none of the equations. Slicing the ellipsoid in A gives bounded ellipses in every direction, which none of the equations produce. Slicing the two bowls in F with planes gives ellipses whose size grows like unlike the straight-sided linear growth of the cone in B.       "
},
{
  "id": "subsection-abs-extrema",
  "level": "1",
  "url": "subsection-abs-extrema.html",
  "type": "Worksheet",
  "number": "9.5",
  "title": "Exercises for Extreme Values and Saddle Points",
  "body": " Exercises for   If you would like to review this topic before attempting the exercises, click .     Find the absolute maximum and minimum values of on the region bounded by the - and -axes and the line .     The gradient is , which vanishes only at , a point in the interior of the region. There . Since this is the only critical point on all of and it is a minimum (by the second derivative test), it is a global minimum. We now examine the three boundary segments to look for possible maxima.  On the -axis with , we have , which is maximized at .  On the -axis with , we have , which is maximized at .  Finally, on the line with , we have , which is maximized at .  Altogether, there is an absolute minimum and an absolute maximum .    "
},
{
  "id": "ex-extrema-triangle",
  "level": "2",
  "url": "subsection-abs-extrema.html#ex-extrema-triangle",
  "type": "Worksheet Exercise",
  "number": "9.5.1",
  "title": "",
  "body": "  Find the absolute maximum and minimum values of on the region bounded by the - and -axes and the line .     The gradient is , which vanishes only at , a point in the interior of the region. There . Since this is the only critical point on all of and it is a minimum (by the second derivative test), it is a global minimum. We now examine the three boundary segments to look for possible maxima.  On the -axis with , we have , which is maximized at .  On the -axis with , we have , which is maximized at .  Finally, on the line with , we have , which is maximized at .  Altogether, there is an absolute minimum and an absolute maximum .   "
},
{
  "id": "worksheet-runestone-samples",
  "level": "1",
  "url": "worksheet-runestone-samples.html",
  "type": "Worksheet",
  "number": "9.6",
  "title": "Interactive Problem Set",
  "body": " Interactive Problem Set   The problems below are auto-graded. Each one is deliberately chosen so that a correct answer requires a full argument rather than pattern matching: the distractors are the answers you get from the most common shortcuts.     True or False   If every directional derivative exists at a point , then must be continuous at .    False, and the failure is dramatic. Let For a unit vector with , and when . So every directional derivative exists. Yet along the parabola , which depends on — different parabolas approach different values, so does not exist and is not continuous at the origin. Existence of directional derivatives is a statement about behavior along straight lines only; continuity requires control along every approach.      Which Identity Fails?   Exactly one of the following is not valid for all vectors in . Which one?         This one is valid. Both sides equal the determinant with rows , so the dot and the cross may be interchanged.         Correct — the cross product is not associative . Take and . Then The left side lies in the plane of and ; the right side lies in the plane of and . There is no reason for those to agree.         This one is valid — the cross product is distributive over addition. (It is only associativity that fails.)         This one is valid: it is the BAC-CAB triple product expansion. It looks the most exotic of the four, which is exactly why it is worth remembering that it is true.        Distance Between Skew Lines   Consider the two lines They are skew. Let be the direction vectors and let join a point of to a point of .  The absolute value of the scalar triple product equals .  The distance between the two lines, to three decimal places, is .      Correct.     Nearly — the triple product itself is , but the question asks for its absolute value .       Correct.     That is , the denominator . You still need to divide the triple product by it.      You appear to have divided by rather than by .       The vector is perpendicular to both lines, so the distance is the length of the projection of onto it: .    With and , Taking ,       Why a Magnetic Field Cannot Change a Particle's Speed   Arrange the steps below into a correct proof that the magnetic force does no work, and therefore that a charged particle in a magnetic field moves at constant speed.     Let a particle of mass and charge move with velocity through a magnetic field .    The force on the particle is .    By definition, a cross product is perpendicular to both of its factors, so is perpendicular to .    Hence .    The kinetic energy satisfies .    Therefore , so is constant: the field changes the particle's direction but never its speed.        Which of These Are Hyperboloids?   None of the equations below is in standard position. Complete the square where necessary, then select every equation whose surface is a hyperboloid, of one sheet or of two.       Correct. Completing the square gives : one negative square, equal to a positive constant, so a hyperboloid of one sheet.       No. This is — every square is positive, so it is an ellipsoid.       Correct. Two negative squares against a positive constant gives a hyperboloid of two sheets.       No — and this is the trap. It has the same signs as the first option, but it equals rather than a positive constant. That degenerates the hyperboloid into an elliptic cone , the surface the two families of hyperboloids approach asymptotically.       No. The word hyperbolic is a red herring: this is linear in , so it is a hyperbolic paraboloid (a saddle) with vertex at , not a hyperboloid.      Completing the square in the first and second, Reading off the signs: one negative square against is a hyperboloid of one sheet; two negative squares against is a hyperboloid of two sheets. So the first and third are hyperboloids. The second is an ellipsoid, the fourth equals and so is a cone, and the fifth is linear in and so is a hyperbolic paraboloid.      Classify the Critical Points   The function has four critical points. Drag each one into the correct category.      Local minimum     Local maximum      Saddle point     From and we get and , giving four critical points. Since , and , So at and , while at and — both saddles. Among the two with , the sign of decides: gives a local minimum, and gives a local maximum.      Find the Error   Below is a student's computation of the derivative of at the point in the direction of . Exactly one line contains the error. Click on that line.     The error is in the third line. The formula Dᵤ f = ∇f · u requires a unit vector. Since |v| = 5, the correct direction is u = ⟨3\/5, 4\/5⟩, giving  Dᵤ f(1, 2) = 4 · 3\/5 + 1 · 4\/5 = 16\/5 = 3.2,  not 16. Lines 1, 2 and 4 are each correct given the line before them — line 4 faithfully reports the (wrong) number produced by line 3.    ∇f = ⟨2xy, x²⟩  ∇f(1, 2) = ⟨4, 1⟩  Dᵥ f(1, 2) = ∇f(1, 2) · v = (4)(3) + (1)(4) = 16  So the directional derivative equals 16.      The Roles of the Two Products   In two or three sentences, explain why a magnetic field can bend a charged particle's path into a circle but can never make it move faster. Your answer should say what job the cross product does and what job the dot product does, and should make clear which one is responsible for the speed staying constant.     "
},
{
  "id": "rs-tf-directional",
  "level": "2",
  "url": "worksheet-runestone-samples.html#rs-tf-directional",
  "type": "Worksheet Exercise",
  "number": "9.6.1",
  "title": "True or False.",
  "body": " True or False   If every directional derivative exists at a point , then must be continuous at .    False, and the failure is dramatic. Let For a unit vector with , and when . So every directional derivative exists. Yet along the parabola , which depends on — different parabolas approach different values, so does not exist and is not continuous at the origin. Existence of directional derivatives is a statement about behavior along straight lines only; continuity requires control along every approach.   "
},
{
  "id": "rs-mc-vector-identity",
  "level": "2",
  "url": "worksheet-runestone-samples.html#rs-mc-vector-identity",
  "type": "Worksheet Exercise",
  "number": "9.6.2",
  "title": "Which Identity Fails?",
  "body": " Which Identity Fails?   Exactly one of the following is not valid for all vectors in . Which one?         This one is valid. Both sides equal the determinant with rows , so the dot and the cross may be interchanged.         Correct — the cross product is not associative . Take and . Then The left side lies in the plane of and ; the right side lies in the plane of and . There is no reason for those to agree.         This one is valid — the cross product is distributive over addition. (It is only associativity that fails.)         This one is valid: it is the BAC-CAB triple product expansion. It looks the most exotic of the four, which is exactly why it is worth remembering that it is true.     "
},
{
  "id": "rs-fillin-skew-lines",
  "level": "2",
  "url": "worksheet-runestone-samples.html#rs-fillin-skew-lines",
  "type": "Worksheet Exercise",
  "number": "9.6.3",
  "title": "Distance Between Skew Lines.",
  "body": " Distance Between Skew Lines   Consider the two lines They are skew. Let be the direction vectors and let join a point of to a point of .  The absolute value of the scalar triple product equals .  The distance between the two lines, to three decimal places, is .      Correct.     Nearly — the triple product itself is , but the question asks for its absolute value .       Correct.     That is , the denominator . You still need to divide the triple product by it.      You appear to have divided by rather than by .       The vector is perpendicular to both lines, so the distance is the length of the projection of onto it: .    With and , Taking ,    "
},
{
  "id": "rs-parsons-no-work",
  "level": "2",
  "url": "worksheet-runestone-samples.html#rs-parsons-no-work",
  "type": "Worksheet Exercise",
  "number": "9.6.4",
  "title": "Why a Magnetic Field Cannot Change a Particle’s Speed.",
  "body": " Why a Magnetic Field Cannot Change a Particle's Speed   Arrange the steps below into a correct proof that the magnetic force does no work, and therefore that a charged particle in a magnetic field moves at constant speed.     Let a particle of mass and charge move with velocity through a magnetic field .    The force on the particle is .    By definition, a cross product is perpendicular to both of its factors, so is perpendicular to .    Hence .    The kinetic energy satisfies .    Therefore , so is constant: the field changes the particle's direction but never its speed.    "
},
{
  "id": "rs-multiselect-quadrics",
  "level": "2",
  "url": "worksheet-runestone-samples.html#rs-multiselect-quadrics",
  "type": "Worksheet Exercise",
  "number": "9.6.5",
  "title": "Which of These Are Hyperboloids?",
  "body": " Which of These Are Hyperboloids?   None of the equations below is in standard position. Complete the square where necessary, then select every equation whose surface is a hyperboloid, of one sheet or of two.       Correct. Completing the square gives : one negative square, equal to a positive constant, so a hyperboloid of one sheet.       No. This is — every square is positive, so it is an ellipsoid.       Correct. Two negative squares against a positive constant gives a hyperboloid of two sheets.       No — and this is the trap. It has the same signs as the first option, but it equals rather than a positive constant. That degenerates the hyperboloid into an elliptic cone , the surface the two families of hyperboloids approach asymptotically.       No. The word hyperbolic is a red herring: this is linear in , so it is a hyperbolic paraboloid (a saddle) with vertex at , not a hyperboloid.      Completing the square in the first and second, Reading off the signs: one negative square against is a hyperboloid of one sheet; two negative squares against is a hyperboloid of two sheets. So the first and third are hyperboloids. The second is an ellipsoid, the fourth equals and so is a cone, and the fifth is linear in and so is a hyperbolic paraboloid.   "
},
{
  "id": "rs-cardsort-critical",
  "level": "2",
  "url": "worksheet-runestone-samples.html#rs-cardsort-critical",
  "type": "Worksheet Exercise",
  "number": "9.6.6",
  "title": "Classify the Critical Points.",
  "body": " Classify the Critical Points   The function has four critical points. Drag each one into the correct category.      Local minimum     Local maximum      Saddle point     From and we get and , giving four critical points. Since , and , So at and , while at and — both saddles. Among the two with , the sign of decides: gives a local minimum, and gives a local maximum.   "
},
{
  "id": "rs-clickable-error",
  "level": "2",
  "url": "worksheet-runestone-samples.html#rs-clickable-error",
  "type": "Worksheet Exercise",
  "number": "9.6.7",
  "title": "Find the Error.",
  "body": " Find the Error   Below is a student's computation of the derivative of at the point in the direction of . Exactly one line contains the error. Click on that line.     The error is in the third line. The formula Dᵤ f = ∇f · u requires a unit vector. Since |v| = 5, the correct direction is u = ⟨3\/5, 4\/5⟩, giving  Dᵤ f(1, 2) = 4 · 3\/5 + 1 · 4\/5 = 16\/5 = 3.2,  not 16. Lines 1, 2 and 4 are each correct given the line before them — line 4 faithfully reports the (wrong) number produced by line 3.    ∇f = ⟨2xy, x²⟩  ∇f(1, 2) = ⟨4, 1⟩  Dᵥ f(1, 2) = ∇f(1, 2) · v = (4)(3) + (1)(4) = 16  So the directional derivative equals 16.   "
},
{
  "id": "rs-shortanswer-products",
  "level": "2",
  "url": "worksheet-runestone-samples.html#rs-shortanswer-products",
  "type": "Worksheet Exercise",
  "number": "9.6.8",
  "title": "The Roles of the Two Products.",
  "body": " The Roles of the Two Products   In two or three sentences, explain why a magnetic field can bend a charged particle's path into a circle but can never make it move faster. Your answer should say what job the cross product does and what job the dot product does, and should make clear which one is responsible for the speed staying constant.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
