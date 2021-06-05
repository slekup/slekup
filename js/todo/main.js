function get_url(type){
  let url_parameters = new URLSearchParams(window.location.search);
  let tab = url_parameters.get('tab');
  let sub = url_parameters.get('sub');
  return [window.location.href, tab, sub];
}

// Function that gets the page url without parameters
function s_url(){
  return get_url()[0].substring(0, get_url()[0].indexOf('?'));
}

function add_url(url, num){
  if(num == 1){
    add_url(url);
  } else if(num == 2){

    var new_url=window.location.href+'&sub='+url;
    window.history.pushState("data","Title",new_url);
    localStorage.setItem('url',window.location.href);

  } else {
    var new_url=s_url()+'?tab='+url;
    window.history.pushState("data","Title",new_url);
    localStorage.setItem('url',window.location.href);

  }
}


var p_startTime;

function loadPage(page){
  p_startTime = (new Date()).getTime();
  //$('head').append('<link rel="stylesheet" type="text/css" href="/shannon-nz/css/'+page+'.css">')


  var users_tasks_l_1 = ['Title of this task', 'Title of this task', 'Title of this task', 'Title of this task']
  users_tasks_l_1.forEach(htmlifyTasks);

  $('.tasks-container').append(`
    <div class="add-task-container">
      <input type="text" placeholder="+ &nbsp; Add a task">
      <button type="button">+ &nbsp; Add Task</button>
    </div>
    <br><br><br><br>
  `);

  function htmlifyTasks(item, index){
    $('.tasks-container').prepend(`
    <div class="task-box">
      <div class="check-task"></div>
      <h1 class="task-title">`+item+`</h1>
    </div>
    `)
  }

}

var pages_arr = ['home'];

if(jQuery.inArray(get_url()[1], pages_arr) >= 0){
  let page = get_url()[1];
  loadPage(page);
} else{
  loadPage('home');
}















function defaultScript(page){

  // log the load time for the page via $.load()
  var endTime = (new Date()).getTime();
  var millisecondsLoading = endTime - p_startTime;
  console.log('Load Time for "'+page+'": '+millisecondsLoading+'ms')

  // change the tab title for the page
  $(document).attr('title','To Do List | '+page.charAt(0).toUpperCase()+page.slice(1));


  // highlight link in nav according to which page is being viewed
  $('.open-page-btn[data-page="'+page+'"]').addClass('active');


  // click functions load a few milliseconds after everything else
  setTimeout(function(){
  
  }, 100)
}