$(document).ready(function() {
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  var toggleSwitcher = function(event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  };

  $('#switcher').bind('click', toggleSwitcher);
  $('#switcher').trigger('click');

  $('#switcher button').click(function() {
    $('#switcher').unbind('click', toggleSwitcher);

    if (this.id == 'switcher-default') {
      $('#switcher').bind('click', toggleSwitcher);
    }

  });
});

$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher').click(function(event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];

      $('body').removeClass().addClass(bodyClass);

      $('#switcher button').removeClass('selected');
      $(event.target).addClass('selected');
    }
  });
});
