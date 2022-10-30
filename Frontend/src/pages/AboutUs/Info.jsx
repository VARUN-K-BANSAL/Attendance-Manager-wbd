import React from 'react'
import classes from './Info.module.css'
const Info = () => {
  return (
    <div className={classes.infor}>
    <h2 className= {classes.h2}>problems with current system and why do we need to choose this application?</h2>
    <div className = {classes.paragraph}>
    <p  className={classes.p}>we choose to make this application, because we ensure to have a fair and smooth
        way of taking attendance instead wasting plenty of valuble time and also for catching the regular defaulters
        who are not attending the classes, so that the remaining time a teacher can use for his teaching purpose
    </p></div>
    <div className={classes.ordering}>
        <ul className={classes.ul}>
            <li>Taking attendance manually in an offline mode is a cumbersome
            process.</li>
        <li> Effectiveness is always a question.</li>
        <li> Effective teaching time reduces significantly.</li>
        <li>Teachers are unequipped to understand their class comprehensively.</li>
        <li> Lack of transparency in the student's side.</li>
        </ul></div>
        <br/>
        <div className= {classes.paragraph}> <p >The new system would allow students to access his/her attendance
        records and will provide a heck lots of tools for the teachers to simplify the
        entire process.</p> </div>


        <h2 className={classes.h2}>who can access this application?</h2>
        <p className= {classes.paragraph}>The system will be available to any potential class member (either student
            or teachers) using the Internet. Project developers may also use the
            system from any location and will be able to access restricted areas of the
        site through a password protection scheme</p><br/>
        <h2 className={classes.h2}>primary responsibilities of this newsytem?</h2>
        
        
        <ul className={classes.ul}>
          <li>Make the attendance taking process completely automated by using
                uniquely generated QR code assigned to each and every student.</li>
          <li>  Provide teachers with a handful of tools so that the teachers can just
                focus on delivering quality content to their students.</li>
            <li>Allow students to access their previous track records when it comes
                to attendance.</li>
            <li> Help teachers to know who are the class bunkers and class defaulters.</li>
           </ul>
           
           <h2 className={classes.h2}>how is this application useful for the teachers?</h2>
        
        <div className= {classes.paragraph}>
        <p >This application is needed in order to save the 10-12 mins in a class of 1 hr,
            which can be used in doubt clarification, taking surprise quizzes etc. The
            new system will achieve this by making the entire process extremely
            automated hence quick.</p></div><br/>

            
        <h2 className= {classes.h2}>what are the core functional objectives of this application?</h2>
        
        <h4 className={classes.h4}>high priority of this application?</h4>
       <div className= {classes.ordering}>
        <ol>
            <li>Make the attendance taking process completely automated by using
                uniquely generated QR code assigned to each and every student</li>
            <li> Provide teachers with a handful of tools so that the teachers can just
                focus on delivering quality content to their students</li>
            <li> allow students to access their previous track records when it comes
                to attendance</li>
        </ol>
        </div><br/>

        <h4 className={classes.h4}>low/medium priority of this application?</h4>
        
        <div className= {classes.ordering}>
        <ol >
            <li>
                The application should Help teachers to know who are the class
                bunkers and class defaulters
            </li>
            <li>
                The application will be extremely interactive and user friendly
            </li>
        </ol>
    </div><br/>

    <h2 className={classes.h2}>what are the non-functional objectives of this application?</h2><br/>


        <h4 className={classes.h4} >Reliablity :</h4>
       <div className= {classes.ordering}>
        <ol>
            <li >The system will be operational almost 100% of the time.</li>
            <li >The down time after any system failure will not exceed 6 hours</li>
        </ol></div>
        <h4 className={classes.h4}>Usability :</h4>
       <div className= {classes.ordering}>
        <ol>
            <li >The user interface will be extremely beginner friendly, even new users
                can learn to use our web app in a couple of hours.</li>
            <li >Anyone who is comfortable with google services like google classroom
                can easily use our web app.</li>
        </ol></div>
        <h4 className={classes.h4}>Performance :</h4>
    <div className= {classes.ordering}>
        <ol>
            <li>Since we will be using high performance servers , so the data fetching
                and uploading would not take much time.</li>
            <li>Multiple servers will be used to host the web app , so that if one of the
                server goes down then the other comes up , and all the servers will be
                load balanced</li>
        </ol></div>

        <h4 className={classes.h4}>Security :</h4>
        <div className= {classes.ordering}>
        
        <ol>
            <li >Every user will have to authenticate himself / herself before using the
                service</li>
            <li >All user data will be encrypted.</li>
            <li >We would have proper backup of all our data at multiple servers, so
                that if the data gets corrupted we won't lose anything.</li>
        </ol></div>
        <h4 className={classes.h4}>Supportability :</h4>
        <div className= {classes.ordering}>
        <ol>
            <li >The system would be able to accommodate new students and
                classrooms without any major reengineering</li>
            <li >The web app will be viewable from most of the browsers.</li>
        </ol></div>

        <h4 className={classes.h4}>Online user Documentation and Help:</h4>
        
        <div className= {classes.ordering}><ol>
            <li>The website will provide web page that will help to navigate and use the
                web app efficiently.</li>
            <li>The help page will be accessible from all other pages</li>
        </ol></div>
        <h4 className={classes.h4}>Purchased Components :</h4>
       <div className= {classes.ordering}><ol>
            <li >High performance servers will be needed for hosting.</li>
            <li >A proper cloud hosting and cloud storage service will be needed</li>
            <li >We could use some paid API's for good performance and user
                experience.</li>
        </ol></div><br/>

        <h2 className= { classes.h2}>Interfaces :</h2>
        
        <h4>The system must interface with:</h4>
        <div className= {classes.ordering}>
        <ol>
            <li >A database management system (preferably MongoDB)</li>
            <li >The acquired web site search engine.</li>
            <li >Certain API's</li>
        </ol></div><br/>

        <h2 className={classes.h2} >what is the context model of this application?</h2>
        <h4 className= {classes.h4}>what is the goal of this applicaton?</h4>
        <div className= {classes.ordering}>
     <ul>
     <li>   The goal of the system is to save time by 15-20% in a class by making the
            attendance taking process automated</li>
        
        
            
            <li>Providing teachers with a number of tools to take and manage
                attendance</li>
            <li>providing students their previous attendance track records</li>
        </ul>
</div>

        <h4 className={classes.h4}>who are the system externals involved in this application?</h4>
        

<div className= {classes.ordering}>
        
        <ul>
            <li>Teacher is the one who can create classes for students, take attendance,
                view attendance stats.</li>
            <li>
                Student is the one who will receive a unique QR code just after register
                and that QR will help them to mark their attendance also students can
                view their previous attendance records if needed.
            </li>
        
            <li>
                Developers are the ones who have designed the web app from the
                scratch and are the ones who should be contacted if the server goes down
                or in case of any technical glitch.
            </li>
        </ul>
        </div><br/>
        <h2 className={classes.h2}> the use case model :</h2>
        <h3  className= { classes.h3}>Use case Descriptions:-</h3>
        <h3 className={classes.h3}>notes :</h3>
        <div className= {classes.ordering-1}><ul>
            <li >For all use cases that require user input , if the user terminates the
                process , then the data of that user will be lost.</li>
            <li >In this web app we will be handling two types of users i.e students
                and teachers , and some of the functionalities will differ depending on the
                type of user.</li>
            <li >Every student will have his own unique QR code in his profile
                (which he will get automatically after he registers himself in the portal or
                web app)</li>
        </ul></div>

        <h3 className={classes.h3}>User login :-</h3>

        <h4 className={classes.h4}>summary :</h4>

        <p>In order to access personalized information and web app functionalities a
            user must login so that the system can determine his access level. </p>
        <h4 className={classes.h4}>Basic flow :</h4>
         <div className= {classes.ordering-2}>
        
        <ul>

            <li >The use case starts when a user indicates that he wants to login.</li>
            <li>The system requests the username and password.</li>
            <li >The user enters his username and password.</li>
            <li >The system verifies the username and password against all registered
                users.</li>
            <li >The system starts a login session and displays a dashboard based on
                the user type (student or teacher).</li>
        </ul></div>
        <h4 className={classes.h4}>Alternate flows :</h4>
 <div className= {classes.ordering-2}>
        <ul>
            <li >If username or password is invalid, the use case goes back to step</li>
            <li >In case the user forgets his password, then he can use the “Forget
                Password?” option to get his password, and start again from step 2.</li>
        </ul>
        </div>
        <h4 className={classes.h4}>Pre condition :</h4>
        <div className= {classes.ordering-2}>
        <ul>
            <li>The user is registered.</li>
        </ul></div>

        <h4 className={classes.h4}>Post condition :</h4>
       <div className= {classes.ordering-2}> <ul>
            <li>The user can now access the functionalities, data and personal
                information associated with the web app</li>
        </ul></div>

        <h4 className={classes.h4}>Business rules :</h4>
        <div className= {classes.ordering-2}>
        <ul>
            <li>All the management stuff in the classroom could be done by the
                teacher only.</li>
        </ul></div>


        <h3 className={classes.h3}>Register user :-</h3>

        <h4  className={classes.h4}>Summary:</h4>

        <p >In order to access the web app functionalities a new user must register
            himself with his respective user type, username and password. </p>
        <h4 className={classes.h4}>Basic flow:</h4>

        <div className= {classes.ordering-2}>
        <ul>
            <li >The use case starts when a user indicates that he wants to register.</li>
            <li >The system requests a username and password.</li>
            <li >The user enters a username and password.</li>
            <li >The system checks that the username does not duplicate any existing
                registered usernames.</li>
            <li >The system requests name , roll number and other important details.</li>
            <li>The user enters the required information.</li>
            <li>The system starts a login session and displays the dashboard.</li>
        </ul></div>

        <h4 className={classes.h4}>Alternate flows:</h4>
        <div className= {classes.ordering-2}>
        <ul>
            <li >If the username duplicates an existing username the system
                displays an message and the use case goes back to step 2.</li>
            <li>If the user does not enter a required field, a message is displayed
                and the use case repeats step 4.</li>
        </ul></div>
        <h4 className={classes.h4}>Pre condition:</h4>
        <div className= {classes.ordering-2}>
        <ul>
            <li >NONE.</li>
        </ul></div>

        <h4 className={classes.h4}>Post condition:</h4>
        <div className= {classes.ordering-2}>
        <ul >
            <li>The new user is now registered in the portal and he can use the
                functions and services provided by our web app.</li>
            <li>
                If a student registers , then he will get his unique QR code in his
                profile.
            </li>

        </ul></div>

        <h4 className={classes.h4}>Business rules:</h4>

        <h6 className={classes.h6}>user types are:-</h6>
        <div className= {classes.ordering-2}>
        <ul>
            <li>This user will be the teacher of a classroom and
                have access to almost all functionalities on the web app , like creating
                classrooms, adding students to a class, taking and managing attendance
                and other important activities.</li>
        
        
        
            <li>This user will have the role of a typical student in a
                class and can access his/her attendance records in a class and can post
                both public and private comments in a class or to a teacher.</li>
        </ul></div>

        <h3 className={classes.h3}>Creating classroom:-</h3>

        <h4 className={classes.h4}>Summary :</h4>

        <p>This use case will create a classroom in the portal</p>
        <h4 className={classes.h4}>Basic flow:</h4>
       <div className= {classes.ordering-2}>
        <ol>

            <li >The teacher will have an option to create “new classroom” in
                his/her dashboard.</li>
            <li >After clicking on “new classroom” , the system will ask for a class
                name , class section , other faculty members (optional) , and list of
                students in the class.</li>
            <li >The teacher will enter the required details.</li>
            <li >The teacher will add / attach an excel sheet, containing the list of
                students to be added in the class (each student record must have a name,
                roll no. and email id)
            </li>
            <li >Then the teacher has to click on “create class” button to create the
                class.</li>
        </ol></div>
        <h4 className={classes.h4}>Alternate flows:</h4>
       <div className= {classes.ordering-2}>
        <ul>
            <li >If the user cancels the process before completion (like closing or
                reloading the tab) , then all the progress (in that class) will be lost.</li>
            <li >The user can manually select the “cancel” option to terminate the
                class creation process.</li>
        </ul></div>
        <h4 className={classes.h4}>Pre condition:</h4>
        
        <div className= {classes.ordering-2}><ul>
            <li>The user has to be a Teacher</li>
        </ul></div>

        <h4 className={classes.h4}>Post condition:</h4>
        <div className= {classes.ordering-2}>
        <ul>
            <li>A new classroom will be created and the new class will be listed in
                the dashboard of the students who were added in the classroom.</li>
        </ul></div>

        <h4 className={classes.h4}>Business rules:</h4>
<div className= {classes.ordering-2}>
        <ul>
            <li>All the management stuff in the classroom could be done by the
                teacher only.</li>
        </ul></div>





        <h3 className={classes.h3}>Taking student attendance:-</h3>

        <h4 className={classes.h4}>Summary:</h4>

        <p >This use case takes attendance of students in the classroom</p>
        <h4 className={classes.h4}>Basic flow:</h4>
         <div className= {classes.ordering-2}>
        <ol>

            <li >The teacher will go to the classroom of which he/she wants to take</li>
            <li >The teacher will click on “start attendance” button in the
                classroom.</li>
            <li >The attendance window will open and ask for permission to access
                camera (teacher have to allow it to use the camera to take attendance for
                the first time)</li>
            <li >Students will bring their QR code in front of the camera (to mark
                their attendance) and leave</li>
            <li >After all the students have marked their attendance, the teacher
                can stop taking attendance.</li>
            <li>Finally, the attendance of all students will be made available to the
                teacher in a excel sheet (file) that can be downloaded as a pdf or excel
                sheet from our web application.</li>
        </ol></div>
        <h4 className={classes.h4}>Alternate flows:</h4>
        <div className= {classes.ordering-2}>

        <ul>
            <li >If the app or portal crashes or gets terminated before stopping
                attendance then all the attendance made in that session will be lost.</li>
            <li >The user can manually select the “cancel” option to terminate the
                class attendance process.</li>

        </ul></div>
        <h4 className={classes.h4}>Pre condition:</h4>
        <div className= {classes.ordering-2}>
        <ul>
            <li>The user has to login as a teacher (of that classroom)</li>
        </ul></div>

        <h4 className={classes.h4}>Post condition:</h4>
        <div className= {classes.ordering-2}>
        <ul>
            <li>Student attendance will be recorded and provided to the teacher
                in a excel sheet (file)</li>

        </ul></div>

        <h4 className={classes.h4}>Business rules:</h4>
        <div className= {classes.ordering-2}>

        <ul>
            <li>Only the teacher can take attendance in a classroom.</li>
        </ul></div>



        <h3 className={ classes.h3}>Marking Attendance (by student):-</h3>

        <h4 className={classes.h4}>Summary:</h4>

        <p >This use case takes attendance of student</p>
        <h4 className={classes.h4}>Basic flow:</h4>
      <div className= {classes.ordering-2}>
        <ol>

            <li >The teacher will “start attendance” in the web app in his/her
                system and allow camera access.</li>
            <li >Every student has to scan his/her unique QR code in the teachers
                camera to mark his/her attendance</li>

        </ol></div>
        <h4 className={classes.h4}>Alternate flows:</h4>
<div className= {classes.ordering-2}>
        <ul>
            <li>If the system could not recognise the QR code, then the teacher
                must refresh the attendance section and scan the QR again.</li>
        </ul></div>
        <h4 className={classes.h4}>Pre condition:</h4>
        <div className= {classes.ordering-2}>
        <ul>
            <li>The user scanning the QR code must be a student.</li>
        </ul></div>

        <h4  className={classes.h4}>Post condition:</h4>
        <div className= {classes.orering-2}>
        <ul>
            <li>The student's attendance will be marked and the attendance will
                be added to the student's dashboard</li>

        </ul></div>

        <h4 className={classes.h4}>Business rules:</h4>
<div className= {classes.ordering-2}>
        <ul>
            <li>The teacher must ensure that a student scans only one QR code ,
                to check students from making false attendance of other students.</li>
        </ul></div>


       </div>
  );
}

export default Info;
