$( document ).ready(function() {
    console.log( "ready!" );
});


// function initializeQtips() {
  $('#tooltip1').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'The long arms of this galaxy function as star builders as hydrogen gas is compressed.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip2').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'The oldest stars of the galaxy are located near the core of the spiral, while the youngest reside along the edges of the Whirlpool’s arms.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip3').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'The close proximity of these two galaxies results in gravitational pulls pumping gaseous material into the Whirlpool’s arms and generates more star clusters.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip4').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'The Trapezium, located here, shines about 100,000 brighter than the sun.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip5').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'The Orion Nebula is the largest star-producer closest to us, as it is home to approximately 1,000 early stars.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip6').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'The UV radiation from the four stars heat hydrogen and sulfur gases, creating spectacular strokes of green.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip7').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'The bright white spots in the image are what remains of neutron stars and substances that have fallen into black holes.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip8').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'These dust clouds have been heated by the formation of young stars, resulting in their reflecting an infrared light.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip9').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'Though similar in age, the stars in this nebula vary greatly in other attributes such as size, temperature, and color.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip10').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'Although they are young, stars are massive and quickly expode in supernovas.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip11').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'Gas and dust envelop the nebula, creating an optimal environment for the creation of new stars.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip12').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'The winged visual effect in the Sharpless is created by lobes of heated gas being produced from a large star in the center.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
  $('#tooltip13').qtip({ // Grab some elements to apply the tooltip to
      content: {
          text: 'Dust and gas encircle the star at this point and constricts the nebula, giving it the appearance of an hourglass.'
      },
      style: {
        classes: 'qtip-light qtip-rounded q-tip-font-size'
      }
  })
// };

// function initializeSlider {
  $(function() {
      $('#ei-slider').eislideshow({
        easing		: 'easeOutExpo',
        titleeasing	: 'easeOutExpo',
        titlespeed	: 1200
      });
  });
// };

// function initializeQuiz() {
  var quiz = jQuery('#quiz').quiz('12ycYFGAcUlrosuO5tRvqTU4fNCcPrzXpG84TlKruNAw');
// };
