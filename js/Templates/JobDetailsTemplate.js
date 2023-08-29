const jobdetailstemplate1 = ` 
<div id="side_btn">
<div class="title"><%= this.model.detail['job_title']%></div>
<div class="course_btn">Apply</div>
</div>
<div style="padding-inline: 16px; padding-top: 16px">
<div>
<label>Date & Time</label><br />
<div class="dt">
  <div><%= this.model.detail['start_date']%> to <%= this.model.detail['end_date']%></div>
  <div>|</div>
  <div><label><%= this.model.detail['location']%></label></div>
</div>
</div>
<div><hr /></div>
<div class="roles_container">
<label>Job Roles:</label>
<div class="courses">
<% _.each(this.model.detail['job_roles'],function(role){ %> 
  <div class="course_names">
    <div>
      <img
        src="./asset/Instructional Designer.svg"
        class="course_logo"
      />
    </div>
    <div><%= role['role_name']%></div>
  </div>
  <% }) %>
</div>
</div>
</div>
<div class="title_container">
<div class="title">Pre-requisites & Application Process</div>
<div class="title_arrow">
<img class="green" src="./asset/expand_less_black_24dp.svg" />
</div>
</div>
<div
style="
padding-inline: 16px;
padding-top: 8px;
padding-bottom: 16px;
font-size: 14px;
"
>
<div style="padding-block: 10px">
<label>General Instructions :</label>
</div>
<div>
- We have a two–year indemnity for permanent candidates. We will
provide training to the selected candidates. <br />- Candidates who
have appeared for any test held by Zeus Learning in the past 12
months will not be allowed to appear for this recruitment test.
</div>
<hr />
<div style="padding-block: 10px">
<label>Instructions for the Exam :</label>
</div>
<div>
- Candidates are requested to log in half an hour prior to the exam
start time as they would need to capture their image using a web
camera. By taking this test, you are permitting the examination
system to capture your video for invigilation purposes.<br />
- Candidates would not be able to appear for the exam if the web
camera attached to their system is not functional.<br />
- The web camera of your system must be enabled and must remain
switched on throughout the examination. In the event of non-receipt
of a webcam, your examination will be considered null and void.<br />
- Candidate’s audio and video will be recorded during the
examination and will also be monitored by a live proctor. The
proctor may terminate your exam in case he/she observes any
malpractice during the exam.<br />
- Candidates are advised to use their own Laptop/PC with a stable
internet connection (min 1 Mbps) during the exam.<br />
- Candidates cannot use an iOS system/device for this exam.
</div>
<hr />
<div style="padding-block: 10px">
<label>Minimum System Requirements :</label>
</div>
<div>
- Personal Laptop or Desktop computer in working condition with good
quality camera (you can use Windows 7 and above).<br />
- The latest version of Google Chrome Browser only.<br />
- Please note that Internet speed should be minimum 1 Mbps.<br />
- Do not use a MacBook or iPad for the proctored exam.
</div>
<hr />
<div style="padding-block: 10px"><label>Process :</label></div>
<div>
- Every round is an elimination round. Candidates need to clear all
rounds to get selected.<br /><br />
Round I : 4th August, 2018<br />
Aptitude Test : 25 Questions<br /><br />
Round II (Interview) : 4th August, 2018.
</div>
</div>



`;
window.jobdetailstemplate1 = jobdetailstemplate1;

const jobdetailstemplate2 = `
<% _.each(this.model.detail['job_roles'],function(role){ %> 
    <div class="content_container" id="part2"style="margin-top: 24px; padding: 0">
        <div class="title_container">
          <div class="title"><%= role['role_name']%></div>
          <div class="title_arrow">
            <img class="green" src="./asset/expand_less_black_24dp.svg" />
          </div>
        </div>
        <div style="padding-inline: 16px; padding-bottom: 16px">
          <div style="padding-block: 10px">
            <label>Gross compensation package :</label>
          </div>
          <div>Rs. <%= role['gross_package']%> lpa</div>
          <hr />
          <div style="padding-block: 10px">
            <label>Role Description :</label>
          </div>
          <div>
            - Generate highly interactive and innovative instructional
            strategies for e-learning solutions<br />
            - Develop course structure and learning specifications addressing
            the requirements of the target audience<br />
            - Construct appropriate testing strategies to ensure learners'
            understanding and performance<br />
            - Address usability issues - Keep abreast of new trends in
            e-learning<br />
            - Ensure that the instructional strategies are as per global
            standards<br />
            - Prepare instructional design checklists and guidelines<br />
            - Check for quality assurance
          </div>
          <hr />
          <div style="padding-block: 10px">
            <label>Requirements :</label>
          </div>
          <div>
            - Experience in creating instructional plans and course maps.<br />
            - Experience in the use of media like graphics, illustrations,
            photographs, audio, video, animations, and simulations in
            instruction<br />
            - Awareness of different instructional design models and familiarity
            with instructional and learning theories<br />
            - Awareness of latest trends in e-learning and instructional
            design<br />
            - Strong client consulting/interfacing skills.<br />
            - Ability to guide clients to focus on specific objectives and
            teaching points<br />
            - Strong meeting facilitation, presentation and interpersonal
            skills<br />
            - A thorough understanding of the web as an instructional medium<br />
            - Post graduate degree in Education, Instructional Design, Mass
            Communication or Journalism
          </div>
        </div>
      </div>

      <% }) %>
    `;
window.jobdetailstemplate2 = jobdetailstemplate2;
