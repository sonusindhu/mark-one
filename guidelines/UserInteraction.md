[Overview](#overview) | [Introduction](#introduction) | [GitHub](#github) | [User Experience](#user-experience) | [Rulesets](#rulesets)

### Overview
A library of components and interaction rules consists of all the designed and styled parts of an interface and how they behave.

Libraries foster consistency and productivity for development but also for the usability of the product.

A successful usability offers users:
* Ease and competence in using the user interface during the first contact with the product.
* Familiarity with the user interface and how to use it on subsequent visits.
* Efficiency when completing tasks.
### Introduction
[Link to the current SEAS Course Planning](https://info.seas.harvard.edu/courses/#/multiYearPlan)

SEAS Course Planning has a public and a private interface.

The public interface shows:

* Four year course plan
* Scheduled courses

The private interface requires to login and it accesses two areas.

The first area allows to edit the following content:

* Courses
* Faculty
* Schedule
* 4 year plan
* Requests

The second area, Administration, manages the following content:

* Manage users
* Manage courses
* Manage faculty

### GitHub

* [Course planning kanban](https://github.com/seas-computing/course-planner/projects/1)
* [UI components](https://github.com/seas-computing/course-planner/projects/2)
* [Globals/course-planner](https://seas-computing.github.io/course-planner/)
* [seas-computing/TEST_calendar-ux-styled](https://github.com/seas-computing/TEST_calendar-ux-styled/blob/master/src/client/components/calendar/Calendar.tsx)
  * [Jonathan's React interface](https://seas-computing.github.io/TEST_calendar-ux-styled/docs/index.html)
* [course-planner_ux](https://github.com/seas-computing/course-planner_ux/tree/gh-pages)
  * [gh-pages prototype](https://seas-computing.github.io/course-planner_ux/schedule.html)

### User Experience

* [User testing](https://docs.google.com/document/d/1X6pRfW1b2X3EPa1tcNf0ns9OHqSbFPkI8EJNY_aXGQo/edit?usp=sharing)
* [Comparison study](https://rawgit.com/Harvard-University-iCommons/UX-Prototypes/master/evaluation/SEAS-coursePlanner/index.html)

### Rulesets
[Calendar](calendar) | [Drop downs](drop-downs) | [Links and buttons](links-and-buttons) | [Link and button styles](link-and-button-styles)

Rule sets address patterns and exceptions. They improve productivity of implementation and they ensure consistency, which improves usability.

#### Calendar

##### Priority sequence

1. Day of the week
1. First hour block
    1. Courses of first hour block
1. Second hour block
    1. Courses of second hour block (on any available space non occupied by the courses of the previous hour block)
1. Third hour block
    1. Courses of third hour block (on any available space non occupied by the courses of the previous hour block)
1. Etc.

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-schedule_sequence.png" alt="Priority sequence of course display" width="300">
  <figcaption>Priority sequence of course display</figcaption>
</figure>

##### "Automatic" sequence

According to the above priority sequence, courses would populate each time block in alphabetical order.

1. Courses populate each time block in alphabetical order
1. Courses placement is affected only by the previous time block(s)
1. Courses placement is not affected by the following time block

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-schedule_auto.png" alt="The course blocks are listed alphabetically and numerically" width="300">
  <figcaption>The course blocks are listed alphabetically and numerically</figcaption>
</figure>

This rule set doesn't make the best use of the space.

___

##### "Logical" sequence

These rules maximize the available space within a time block and improve the readability of courses by reducing visual inconsistency.

1. Courses populate each time block in alphabetical order
1. **Courses populate each time block in order of length**
    1. **Courses with the greater length are placed as last within each time block**
1. Courses placement is affected only form the previous time block(s)
1. Courses placement is not affected by the following time block

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-schedule_logic.png" alt="The course blocks that follow this new rule are highlighted in Sequence 2" width="300">
  <figcaption>The course blocks that follow this new rule are highlighted in "Sequence 2"</figcaption>
</figure>

___

##### Drop downs

* Dropdowns are used for the selection of 3 or more options
* For two or less selections, use checkboxes or radio buttons
* Note that interfaces like [toggle switches](https://www.bootstraptoggle.com/) are stylized radio buttons

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-dropdown.png" alt="Detail of the selection and input forms in the left panel of Schedule" width="300">
  <figcaption>Detail of the selection and input forms in the left panel of Schedule</figcaption>
</figure>

___

##### Links and buttons

When selecting a link, users expect to "jump" to content different than the current one (even though contextually the same).

Use icons with text labels or as links only when they helps to clarify ambiguities. Otherwise the context and descriptive text are sufficient.

Links are used to connect content areas:

* Relative pages of content (same directory, project)
* External pages of content
* Content within the same page (anchor links)

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-link.png" alt="Detail of the tab and links in Course Planning and Course Administration" width="600">
  <figcaption>Detail of the tab and links in Course Planning and Course Administration</figcaption>
</figure>

___

When selecting a button, users expect for some programmatic activity to take place and eventually display its results.

Buttons should not to be used to emphasize links.

Use icons as buttons or with buttons only when it helps to clarify ambiguities. Otherwise the context and button label are sufficient.

Buttons are used to "process" information or to trigger changes of the content

* Submit or cancel a selection or input text
* Reveal hidden information*
* Change the aspect of content (courses schedule)

*It's an open to discussion whether this should be an icon with the function of a link, since modals or side navs just reveal previously hidden content. But not in all cases.
Ultimately, these are "visual rules" based on "superficial" usability; the user is exposed to the same experience whether the action of one button streams data from the back-end and doing all kind of processing to finally display the result, while another just un-hides static information.

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-button.png" alt="Detail of the Settings left panel of the Course interface" width="300">
  <figcaption>Detail of the Settings left panel of the Course interface</figcaption>
</figure>

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-button_2.png" alt="Detail of the show/hide buttons in the Schedule interface" width="600">
  <figcaption>Detail of the show/hide buttons in the Schedule interface</figcaption>
</figure>

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-button_3.png" alt="Detail of the Create new user button in the admin Mange Users interface" width="600">
  <figcaption>Detail of the "Create new user" button in the admin Mange Users interface</figcaption>
</figure>

##### Link and button styles

Links and buttons with limited available space

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-button_4.png" alt="Detail of Non-class Meetings interface with borderless icon links to modals" width="600">
  <figcaption>Detail of Non-class Meetings interface with borderless iconlinks to modals</figcaption>
</figure>

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-button_5.png" alt="Detail of Non-class Meetings modal with bordered icons" width="300">
  <figcaption>Detail of Non-class Meetings modal with bordered icons</figcaption>
</figure>

<figure>
  <img src="https://seas-computing.github.io/course-planner_ux/guidelines/img/ruleset-button_6.png" alt="Detail of icons that complement the function of the link (Settings, Fall 2019, Sprinfg 2020)" width="800">
  <figcaption>Detail of icons that complement the function of the link (Settings, Fall 2019, Spring 2020)</figcaption>
</figure>
