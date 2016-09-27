var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    PLAY_POSITION: null,
    RESTART_GAME: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};