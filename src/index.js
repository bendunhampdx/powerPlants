import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as Plant from './js/plant.js';
import * as State from './js/state.js';
import * as Giraffe from './js/giraffe.js';

$(document).ready(function() {
  $('#feed').click(function() {
    const newState = State.stateControl(Plant.blueFood);
    $('#fert-value').text(`Fertilizer: ${newState.fert}`);
  });

  $('#hydrate').click(function() {
    const newState = State.stateControl(Plant.superWater);
    $('#water-value').text(`Hydration: ${newState.water}`);
  });

  $('#light').click(function() {
    const newState = State.stateControl(Plant.growLight);
    $('#light-value').text(`Happy Brightness: ${newState.light}`);
  });

  $('#cleanliness').click(function() {
    const newState = State.stateControl(Giraffe.giraffeWasher);
    $('#cleanliness-value').text(`How Clean is the Giraffe? ${newState.cleanliness}`);
    $('#giraffeFriend').show();
  });

  $('#show-state').click(function() {
    const currentState = State.stateControl();
    $('#fert-value').text(`Fertilizer: ${currentState.fert}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Happy Brightness: ${currentState.light}`);
  });
});