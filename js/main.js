function get_url(type){
  let url_parameters = new URLSearchParams(window.location.search);
  let tab = url_parameters.get('tab');
  return [window.location.href, tab];
}

// Function that gets the page url without parameters
function s_url(){
  return get_url()[0].substring(0, get_url()[0].indexOf('?'));
}

function add_url(url, num){
  if(num == 1){
    add_url(url);
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


function loadPage(page){
  $('main .root').html('loading')
  $('main .root').load('/shannon-nz/load/'+page+'.html', defaultScript(page));
}

var pages_arr = ['home', 'blog', 'projects', 'contact', 'resume'];

if(jQuery.inArray(get_url()[1], pages_arr) >= 0){
  let page = get_url()[1];
  loadPage(page);
} else{
  loadPage('home');
}

// Script that runs after the content has loaded
function defaultScript(page){
  $(document).attr('title','Shannon A | '+page.charAt(0).toUpperCase()+page.slice(1));

  var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > 150 ) {
       $('nav').css({'background':'rgba(4, 4, 17,.9)','box-shadow':'0 3px 8px rgba(0,0,0,.2)'})
    } else {
       $('nav').css({'background':'transparent','box-shadow':'none'})
    }
    localStorage.setItem('scrollpoint',$w.scrollTop())
  });

  $('body').scrollTop(1000)

  if ( $w.scrollTop() > 150 ) {
     $('nav').css({'background':'rgba(4, 4, 17,.9)','box-shadow':'0 3px 8px rgba(0,0,0,.2)'})
  } else {
     $('nav').css({'background':'transparent','box-shadow':'none'})
  }


  $('.nav-placeholder').html(`
    <div class="root">
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
  `);

  $('.open-page-btn[data-page="'+page+'"]').addClass('active');

  setTimeout(function(){
    $('.open-page-btn').on('click', function(){
      let tpage = $(this).attr('data-page');
      add_url(tpage, 1);
      loadPage(tpage);
    });

    $('.faq-question').on('click',function(){
      $('.faq-box').css({'max-height':'50px','border-color':'#444'});
      $(this).children('.faq-open-indicator').css({'transform':'rotate(0deg)'})
      $('.faq-open-indicator').html('+');
      let parent =  $(this).parent().closest('div')
      if(parent.css('max-height') == '50px'){
        parent.css({'max-height':'500px','border-color':'var(--c1)'});
        $(this).children('.faq-open-indicator').css({'transform':'rotate(360deg)'})
        $(this).children('.faq-open-indicator').html('-');
      } else{
        parent.css({'max-height':'50px','border-color':'#444'});
        $(this).children('.faq-open-indicator').css({'transform':'rotate(0deg)'})
        $(this).children('.faq-open-indicator').html('+');
      }
    })
  }, 500)
}