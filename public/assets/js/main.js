// PHOTOSTACK JS
jQuery(document).ready(function($) {

  // PhotoStack Initi
  if( $('#photostack-1').length) {
    new Photostack(document.getElementById('photostack-1'), {
      callback: function(item) {
        //console.log(item)
      }
    });
  }
});

// SPIN WHEEL
//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function(){
	
	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		
		//add 1 every click
		clicks ++;
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		var totalDegree = newDegree+extraDegree;
		
		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				console.log(aoY);			
			
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			
		});
	});
	
	
	
});//DOCUMENT READY//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function(){
	
	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		
		//add 1 every click
		clicks ++;
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		var totalDegree = newDegree+extraDegree;
		
		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				console.log(aoY);			
			
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			
		});
	});
	
	
	
});//DOCUMENT READY

// TIME MACHINE 
function Random(array) {
  const element = Math.floor(Math.random() * array.length);
  return array[element];
}

class MlmWords {
  constructor() {
    this.words = [
    "2",
    "Advertising",
    "America",
    "Another",
    "Ariix",
    "Auto",
    "Automatic",
    "Avant",
    "Beach",
    "Better",
    "Big",
    "Biz",
    "BizSystem",
    "Blueprint",
    "Boom",
    "Brilliant",
    "Builder",
    "Builders",
    "Building",
    "Business",
    "CEO",
    "Cellars",
    "Central",
    "Central",
    "Clarify",
    "Cleanse",
    "Dialer",
    "Direct",
    "EV",
    "Eagle",
    "Easy",
    "Empower",
    "Enhance",
    "Enhancing",
    "Epic",
    "Essential",
    "Even",
    "Exchange",
    "Faster",
    "Fearless",
    "Figures",
    "Force",
    "Four",
    "Freedom",
    "Fun",
    "GIG",
    "Global",
    "Go",
    "Green",
    "Group",
    "Harvest",
    "Health",
    "Income",
    "Incredible",
    "Innovative",
    "Into",
    "Invoice",
    "Java",
    "Lead",
    "Leads",
    "Level",
    "Life",
    "Lightyear",
    "Live",
    "Lives",
    "M5",
    "MCA",
    "MDM",
    "MLM",
    "Making",
    "Manager",
    "Marketing",
    "Meetings",
    "Mela",
    "Mentoring",
    "Mission",
    "Moms",
    "My",
    "National",
    "Network",
    "Networker",
    "Networkers",
    "Office",
    "On",
    "One",
    "Online",
    "Organized",
    "Panel",
    "Pilot",
    "Plan",
    "Point",
    "Portal",
    "Power",
    "PowerX",
    "Powerful",
    "Pro",
    "Profit",
    "Prospect",
    "Prospector",
    "Prospects",
    "Prosperity",
    "Pure",
    "Q",
    "Quick",
    "Responsive",
    "Revolution",
    "Sales",
    "Sea",
    "Secrets",
    "Six",
    "Store",
    "Success",
    "System",
    "TV",
    "Team",
    "Time",
    "Tools",
    "Travel",
    "Tribe",
    "Trump",
    "Trump",
    "Trump",
    "Trump",
    "Trump",
    "Trump",
    "Trump",
    "USA",
    "Ultimate",
    "Pros",
    "Stream",
    "Verified",
    "Virtual",
    "Walk",
    "Warriors",
    "Wealth",
    "Wellness",
    "Wireless",
    "Worldwide",
    "ZONE",
    "dialer",
    "freedom",
    "iGo",
    "iWealth",
    "power"];


    this.length = this.words.length;
  }

  get() {
    return Random(this.words).toUpperCase();
  }}


class SlotMachine extends React.Component {
  constructor(props) {
    super(props);

    this.spin = this.spin.bind(this);
    this.resetWheel = this.resetWheel.bind(this);

    this.state = {
      reels: ["SPIN", "THE", "WHEEL"],
      systemName: "",
      counter: 0 };


    this.counter = 0;

    this.mlmWords = new MlmWords();
  }

  resetWheel() {
    this.setState({
      reels: ["SPIN", "THE", "WHEEL"] });

  }

  spin() {
    if (this.state.counter >= 50) {
      var counter = 0;
      var reels = this.state.reels;
      var systemName = this.state.reels.join(" ");
      var change = false;

      setTimeout(this.resetWheel.bind(this), 3000);
    } else {
      var reels = [
      this.mlmWords.get(),
      this.mlmWords.get(),
      this.mlmWords.get()];

      var systemName = "";
      var counter = this.state.counter + 1;
      var change = true;
    }

    this.setState({
      reels,
      systemName,
      counter });


    if (change) {
      setTimeout(this.spin.bind(this), 100);
    }
  }

  render() {
    var systemName = this.state.systemName ?
    React.createElement("h2", { className: "animated flash shake swing" },
    this.state.systemName) :

    null;
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "slot-machine" },
      React.createElement("h1", null, "System Name Picker"),
      React.createElement("div", { id: "real-container" },
      React.createElement(Reel, { word: this.state.reels[0] }),
      React.createElement(Reel, { word: this.state.reels[1] }),
      React.createElement(Reel, { word: this.state.reels[2] })),

      React.createElement("div", { id: "bottom-panel" },
      systemName),

      React.createElement(Handle, { onClick: this.spin })),

      React.createElement("div", { id: "base" })));


  }}


class Trump extends React.Component {
  constructor(props) {
    super(props);

    var urls = [
    'http://i.imgur.com/ChAAG55.png',
    'http://i.imgur.com/QjdXvA4.png',
    'http://i.imgur.com/EOw729B.png'];


    var imgs = urls.map(url => {
      var img = new Image();
      img.src = url;

      return img;
    });

    this.state = { imgs };

  }

  render() {
    return (
      React.createElement("img", { className: "trump", src: Random(this.state.imgs).src }));

  }}


class Reel extends React.Component {
  constructor(props) {
    super(props);

    this.isTrump = this.isTrump.bind(this);
  }

  isTrump() {
    return this.props.word.toLowerCase() === 'trump';
  }


  render() {
    var word = this.isTrump() ? React.createElement(Trump, null) : this.props.word;

    return (
      React.createElement("div", { className: "reel" },
      React.createElement("hr", null),
      React.createElement("span", { className: "name animated flash" },
      word)));



  }}



class Handle extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      clicked: '' };

  }

  handleClick() {
    this.setState({
      clicked: 'clicked' });


    this.props.onClick();

    var self = this;

    setTimeout(() => self.setState({ clicked: 'released' }), 1000);
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "handle-ball", className: this.state.clicked, onClick: this.handleClick }),
      React.createElement("div", { id: "handle", className: this.state.clicked }),
      React.createElement("div", { id: "handle-attachment" })));


  }}


ReactDOM.render(React.createElement(SlotMachine, null), document.getElementById("root"));

// ========================================

// RESULT SHEET JS
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
      { id: 1, name: 'Wasif'},
      { id: 2, name: 'Ali' },
      { id: 3, name: 'Saad' },
      { id: 4, name: 'Asad'}] 
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return React.createElement("th", { key: index }, key.toUpperCase());
    });
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name} = student; //destructuring
      return (
        React.createElement("tr", { key: id },
        React.createElement("td", null, id),
        React.createElement("td", null, name)));
    });
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { id: "title" }, "RESULTS"),
      React.createElement("table", { id: "students" },
      React.createElement("tbody", null,
      React.createElement("tr", null, this.renderTableHeader()),
      this.renderTableData()))));
  }}


ReactDOM.render(React.createElement(Table, null), document.getElementById('result'));

// END OF RESULT

// MAIN

!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-bars fa-times');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fas fa-bars"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#hero').css({
      height: $(window).height()
    });
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-menu, .btn-book').addClass('animate__animated animate__fadeInUp');
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

})(jQuery);

jQuery(document).ready(function($) {

  // PhotoStack Initi
  if( $('#photostack-1').length) {
    new Photostack(document.getElementById('photostack-1'), {
      callback: function(item) {
        //console.log(item)
      }
    });
  }
});


