const joblisttemplate = `<% _.each(this.collection.dataFetched,function(list){ %>
    <div class="content_container" 
    <% if(list['expire']!=null)
    {%>
      style="position: relative;"
    <%}%> 
    >
    <% if(list['expire']!=null)
    {%>
      <div 
    style="color: red; 
    background-color: #ffe4e6;
    position: absolute;
    inset-inline-end: 20px;
    inset-block-start: -10px;
    padding: 4px;
    font-size: 14px;">
      <%= list['expire']%>
    </div>
    <%}%>
    <div class="title"><%= list['job_title']%></div>
    <div>
      <label>Date & Time</label><br />
      <div class="dt">
        <div><%= list['start_date'] %> to <%= list['end_date'] %></div>
        <div>|</div>
        <div><label><%= list['location'] %></label></div>
      </div>
    </div>
    <div><hr /></div>
    <div class="roles_container">
      <label>Job Roles:</label>
      <div>
    <% _.each(list['job_roles'],function(role) { %>
        <div class="course_names">
          <div>
            <img
              src="./asset/Instructional Designer.svg"
              class="course_logo"
            />
          </div>
          <div><%= role%></div>
        </div>
    <%}) %>
      </div>
    </div>
    <% if(list['internship']!=null)
    {%>
      <div
      style="
        background-color: #eedd6b;
        padding: 5px;
        font-size: 10px;
        max-width: fit-content;
        border-radius: 20px;
        margin-bottom: 16px;
      "
    >
      Internship Opportunity for MCA Students
    </div>
    <%}%> 
    <div class="btn_container">
      <button type="button" data-job-id ="<%= list['id']%>" class="course_btn"><a style="text-decoration:none;color:black">VIEW MORE DETAILS</a></button>
    </div>
  </div>
  <% });%>
  `;
window.joblisttemplate = joblisttemplate;
