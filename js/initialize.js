// When document is ready, initialize plugins
$( document ).ready(function() {
    initializeQtips();
    initializeSlider();
    initializeQuiz();
});

// Stylize and add text to all of the tooltips
function initializeQtips() {
  $('#tooltip1').qtip({
      content: {
          text: 'The long arms of this galaxy function as star builders as hydrogen gas is compressed.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-large'
      }
  })
  $('#tooltip2').qtip({
      content: {
          text: 'The oldest stars of the galaxy are located near the core of the spiral, while the youngest reside along the edges of the Whirlpool’s arms.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-large'
      }
  })
  $('#tooltip3').qtip({
      content: {
          text: 'The close proximity of these two galaxies results in gravitational pulls pumping gaseous material into the Whirlpool’s arms and generates more star clusters.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-small',
        tip: {
            corner: 'top right'
        }
      },
      position: {
        my: 'top right',
        at: 'bottom left',
        target: $('#tooltip3')
      }
  })
  $('#tooltip4').qtip({
      content: {
          text: 'The Trapezium, located here, shines about 100,000 brighter than the sun.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-small'
      }
  })
  $('#tooltip5').qtip({
      content: {
          text: 'The Orion Nebula is the largest star-producer closest to us, as it is home to approximately 1,000 early stars.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-large'
      }
  })
  $('#tooltip6').qtip({
      content: {
          text: 'The UV radiation from the four stars heat hydrogen and sulfur gases, creating spectacular strokes of green.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-small',
        tip: {
            corner: 'top right'
        }
      },
      position: {
        my: 'top right',
        at: 'bottom left',
        target: $('#tooltip6')
      }
  })
  $('#tooltip7').qtip({
      content: {
          text: 'The bright white spots in the image are what remains of neutron stars and substances that have fallen into black holes.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-small',
        tip: {
            corner: 'top right'
        }
      },
      position: {
        my: 'top right',
        at: 'bottom left',
        target: $('#tooltip7')
      }
  })
  $('#tooltip8').qtip({
      content: {
          text: 'These dust clouds have been heated by the formation of young stars, resulting in their reflecting an infrared light.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-large',
      }
  })
  $('#tooltip9').qtip({
      content: {
          text: 'Though similar in age, the stars in this nebula vary greatly in other attributes such as size, temperature, and color.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-small',
        tip: {
            corner: 'top right'
        }
      },
      position: {
        my: 'top right',
        at: 'bottom left',
        target: $('#tooltip9')
      }
  })
  $('#tooltip10').qtip({
      content: {
          text: 'Although they are young, these stars are massive and quickly expode in supernovas.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-small'
      }
  })
  $('#tooltip11').qtip({
      content: {
          text: 'Gas and dust envelop the nebula, creating an optimal environment for the creation of new stars.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-large'
      }
  })
  $('#tooltip12').qtip({
      content: {
          text: 'The winged visual effect in the Sharpless is created by lobes of heated gas being produced from a large star in the center.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-large'
      }
  })
  $('#tooltip13').qtip({
      content: {
          text: 'Dust and gas encircle the star at this point and constricts the nebula, giving it the appearance of an hourglass.'
      },
      style: {
        classes: 'qtip-light qtip-rounded custom-tool-tip-small'
      }
  })
};

// Load slider and styles
function initializeSlider() {
  $(function() {
      $('#ei-slider').eislideshow({
        easing		: 'easeOutExpo',
        titleeasing	: 'easeOutExpo',
        titlespeed	: 1200
      });
  });
};

// Load quiz from google spreadsheet
function initializeQuiz() {
  var quiz = jQuery('#quiz').quiz('12ycYFGAcUlrosuO5tRvqTU4fNCcPrzXpG84TlKruNAw');
};
