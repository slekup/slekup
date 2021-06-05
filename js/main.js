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

function url_imp(){
  let tab = get_url()[1];
}
url_imp();

var p_startTime;

function loadPage(page){
  $('main .root').css({'transform':'translate(0,-1000px);'})
  setTimeout(function(){
    p_startTime = (new Date()).getTime();
    $('main .root').html('<h1 style="text-align:center;font-size:50px;color:var(--c1);margin-top:25%;">loading...</h1>')
    $('head').append('<link rel="stylesheet" type="text/css" href="/shannon-nz/css/'+page+'.css">')
    $('main .root').load('/shannon-nz/load/'+page+'.html', defaultScript(page));
  }, 300)
}

var pages_arr = ['home', 'blog', 'projects', 'contact', 'resume'];

if(jQuery.inArray(get_url()[1], pages_arr) >= 0){
  let page = get_url()[1];
  loadPage(page);
} else{
  loadPage('home');
}

// Script that runs after the content has loaded
//
//
//
function defaultScript(page){
  // make the page visible
  $('main .root').css({'opacity':'1'})

  // log the load time for the page via $.load()
  var endTime = (new Date()).getTime();
  var millisecondsLoading = endTime - p_startTime;
  console.log('Load Time for "'+page+'": '+millisecondsLoading+'ms')

  // change the tab title for the page
  $(document).attr('title','Shannon A | '+page.charAt(0).toUpperCase()+page.slice(1));

  // onscroll, check the scroll point and style the poge accordingly
  var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > 150 ) {
       $('nav').css({'box-shadow':'0 5px 10px rgba(0,0,0,.2)'})
    } else {
       $('nav').css({'box-shadow':'none'})
    }
    localStorage.setItem('scrollpoint',$w.scrollTop())
  });

  $('body').scrollTop(1000)

  // onload, check the scroll point and style the poge accordingly
  if ( $w.scrollTop() > 150 ) {
     $('nav').css({'box-shadow':'0 5px 10px rgba(0,0,0,.2)'})
  } else {
     $('nav').css({'box-shadow':'none'})
  }

  // decide what links are needed inside each page - contents, so sections
  var page_links;
  if(page == 'home'){
    page_links = `
      <a href="javascript:void(0)" class="drop-down-contents">Contents <b>▾</b></a>
      <a href="#sec-top">Top</a>
      <a href="#sec-pages">Pages</a>
      <a href="#sec-about">About Me</a>
      <a href="#sec-faq">FAQ</a>
      <a href="#sec-links">Links</a>
    `;
  } else if(page == 'blog'){
    page_links = `
      <a href="javascript:void(0)" class="drop-down-contents">Contents <b>▾</b></a>
      <a href="#sec-recent-blogs">Recent Blogs</a>
      <a href="#sec-popular-blogs">Popular Blogs</a>
      <a href="#sec-request-blog">Other Blogs</a>
    `;
    if(get_url()[2] != null){
      add_url(get_url()[2],2)
      let page = 'blogs/'+get_url()[2];
      loadPage(page)
    }
  } else if(page == 'projects'){

  } else if(page == 'contact'){

  } else if(page == 'resume'){

  }
  
  // Nav Bar - all pages
  $('.nav-placeholder').html(`
    <div class="root">
      <div class="top-nav">
        <div class="nav-title">
          <a href="/shannon-nz/" class="open-page-btn" data-page="home">Shannon A</a>
        </div>
        <div class="nav-links">
          <a href="javascript:void(0)" class="open-page-btn" data-page="home">Home</a>
          <a href="javascript:void(0)" class="open-page-btn" data-page="blog">Blog</a>
          <a href="javascript:void(0)" class="open-page-btn" data-page="projects">Projects</a>
          <a href="javascript:void(0)" class="open-page-btn" data-page="contact">Contact</a>
          <a href="javascript:void(0)" class="open-page-btn" data-page="resume">Résumé</a>
        </div>
      </div>
      <div class="bottom-nav">
        <div id="page-links">
          `+page_links+`
          </div>
        </div>
    </div>
  `);

  // highlight link in nav according to which page is being viewed
  $('.open-page-btn[data-page="'+page+'"]').addClass('active');


  // click functions load a few milliseconds after everything else
  setTimeout(function(){
    // all pages
    $('.open-page-btn').on('click', function(){
      let tpage = $(this).attr('data-page');
      add_url(tpage, 1);
      loadPage(tpage);
    });

    $('.drop-down-contents').on('click',function(){
      $('html,body').toggleClass('active-drop-contents')
    })

    // index page - accordian animation
    $('.faq-question').on('click',function(){
      $('.faq-box').css({'max-height':'50px','border-color':'#ccc'});
      $(this).children('.faq-open-indicator').css({'transform':'rotate(0deg)'})
      $('.faq-open-indicator').html('+');
      let parent =  $(this).parent().closest('div')
      if(parent.css('max-height') == '50px'){
        parent.css({'max-height':'500px','border-color':'var(--c1)'});
        $(this).children('.faq-open-indicator').css({'transform':'rotate(360deg)'})
        $(this).children('.faq-open-indicator').html('-');
      } else{
        parent.css({'max-height':'50px','border-color':'#ccc'});
        $(this).children('.faq-open-indicator').css({'transform':'rotate(0deg)'})
        $(this).children('.faq-open-indicator').html('+');
      }
    })

    // main blog page
    $('.blog-box').on('click',function(){
      add_url($(this).attr('data-page'),2)
      let page = 'blogs/'+$(this).attr('data-page');
      loadPage(page)
    });

    // blog post page
    $('.back-to-blogs').on('click',function(){
      add_url('blog',1)
      let page = 'blog';
      loadPage('blog')
    });


    // project Page
    $(".copy-btn-p").on('click',function () {

      $(".copy-value-p-"+$(this).attr('data-num')).select();
      document.execCommand('copy');
      $(this).html('Copied!')
      $(this).css('background','lightgreen')
    });


  }, 100)
}